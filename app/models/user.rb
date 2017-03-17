class User < ApplicationRecord

  attr_reader :password

  validates_presence_of :username, :password_digest, :session_token, :email
  validates_uniqueness_of :username, :email, :session_token
  validates :password, length: {minimum: 6}, allow_nil: true

  has_attached_file :avatar, default_url: "https://s3.amazonaws.com/baroquen-dev/default_avatar.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

  before_validation :ensure_session_token

  def password= password
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def self.find_by_credentials username, password
    user = User.find_by(username: username)
    return nil unless user
    user.password_is?(password) ? user : nil
  end

  def password_is? password
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = new_session_token
    ensure_session_token_uniqueness
    self.save
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= new_session_token
    ensure_session_token_uniqueness
  end

  def new_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def ensure_session_token_uniqueness
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
  end

end

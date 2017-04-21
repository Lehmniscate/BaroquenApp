class Follow < ApplicationRecord
  belongs_to :followed, polymorphic: true

  belongs_to :user
end

class Follow < ApplicationRecord
  belongs_to :followed, polymorphic: true
end

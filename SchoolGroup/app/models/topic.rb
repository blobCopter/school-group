class Topic < ActiveRecord::Base
  has_many :groups
  has_many :comments
  belongs_to :user
  has_one :list
 attr_accessible :description, :nbPeoplePerGroup, :topicName, :topicOwner, :user_id, :group_id, :list_id
end

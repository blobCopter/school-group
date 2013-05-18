class Group < ActiveRecord::Base
  has_and_belongs_to_many :users, :join_table => 'users_groups'
  belongs_to :topic
  attr_accessible :topic_id, :user_id, :name
end

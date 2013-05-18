class List < ActiveRecord::Base
  belongs_to :topic
  has_many :users
  attr_accessible :topic_id
end

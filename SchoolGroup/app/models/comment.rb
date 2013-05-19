class Comment < ActiveRecord::Base
  belongs_to :topic
  attr_accessible :commentOwner, :description, :topic_id
end

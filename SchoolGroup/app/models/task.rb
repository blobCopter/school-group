class Task < ActiveRecord::Base
  belongs_to :user
  belongs_to :group
  attr_accessible :name, :status, :user_id, :group_id
end

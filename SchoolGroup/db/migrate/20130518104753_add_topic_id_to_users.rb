class AddTopicIdToUsers < ActiveRecord::Migration
  def change
    add_column :users, :topic_id, :integer
  end
end

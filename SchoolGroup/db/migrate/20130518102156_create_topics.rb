class CreateTopics < ActiveRecord::Migration
  def change
    create_table :topics do |t|
      t.string :topicOwner
      t.string :topicName
      t.integer :nbPeoplePerGroup, :default => 5
      t.text :description
      t.integer :list_id
      t.integer :group_id

      t.timestamps
    end
  end
end

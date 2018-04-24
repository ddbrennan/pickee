class CreateUserFoodItems < ActiveRecord::Migration[5.1]
  def change
    create_table :user_food_items do |t|
      t.integer :rating
      t.belongs_to :user, foreign_key: true
      t.belongs_to :food_item, foreign_key: true

      t.timestamps
    end
  end
end

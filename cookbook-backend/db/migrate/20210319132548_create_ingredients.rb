class CreateIngredients < ActiveRecord::Migration[5.1]
  def change
    create_table :ingredients do |t|
      t.string :name
      t.string :qty
      t.integer :calories
      t.integer :protein
      t.integer :fat
      t.integer :carb

      t.timestamps
    end
  end
end

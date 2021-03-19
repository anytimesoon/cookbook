class Recipe < ApplicationRecord
	has_and_belongs_to_many :ingredients

	validates_presence_of :name, :instructions
	validates_uniqueness_of :name
end

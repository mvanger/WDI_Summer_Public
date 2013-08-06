# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# STEP 6: Create basic seed data for a 5 tasks here
Task.delete_all

t1 = Task.create(name: "Laundry")
t2 = Task.create(name: "Homework")
t3 = Task.create(name: "Grocery Shopping")

puts "All done"
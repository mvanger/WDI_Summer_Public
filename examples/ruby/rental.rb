require 'pry'

class Person
  attr_accessor :name, :age, :gender, :apartment
  def initialize(name, age, gender)
    @name = name
    @age = age
    @gender = gender
  end

  def to_s
    return "#{@name} is a #{@age} year old #{@gender}"
  end
end

class Building
  attr_accessor :address, :style,
                :has_doorman, :is_walkup,
                :num_floors, :laundry,
                :roof_access, :apartments

  def initialize(address, style, has_doorman, is_walkup, num_floors, laundry, roof_access)
    @address = address
    @style = style
    @has_doorman = has_doorman
    @is_walkup = is_walkup
    @num_floors = num_floors
    @laundry = laundry
    @roof_access = roof_access
    @apartments = {}
  end

  def to_s
    "#{address} has #{@apartments.count} apartments, on #{@num_floors} floors."
  end
end

class Apartment
  attr_accessor :name, :rent, :sqft, :num_bedrooms, :num_bathrooms, :renters
  def initialize(name, rent, sqft, num_bedrooms, num_bathrooms)
    @name = name
    @rent = rent
    @sqft = sqft
    @num_bedrooms = num_bedrooms
    @num_bathrooms = num_bathrooms
    @renters = []
  end

  def is_occupied?
    @renters.any?
  end

  def to_s
    "#{@name} has #{@sqft} sqft and #{@renters.count} renters at #{@rent}/month."
  end
end

mckibben_lofts = Building.new("38 McKibben St", "loft", false, false, 7, true, true)
mckibben_lofts.apartments[:unit_a] = Apartment.new("A", 3200, 200, 1, 2)
mckibben_lofts.apartments[:unit_b] = Apartment.new("B", 2800, 300, 1, 1)
mckibben_lofts.apartments[:unit_c] = Apartment.new("C", 3000, 325, 1, 1)
mckibben_lofts.apartments[:unit_d] = Apartment.new("D", 3500, 500, 2, 1)
mckibben_lofts.apartments[:unit_a].renters << Person.new("David", 30, "male")
mckibben_lofts.apartments[:unit_a].renters << Person.new("Samantha", 20, "female")
mckibben_lofts.apartments[:unit_c].renters << Person.new("Richard", 24, "male")
mckibben_lofts.apartments[:unit_d].renters << Person.new("Lucy", 28, "female")


bedford_apt = Building.new("37A Bedford St", "loft", false, true, 6, false, false)
bedford_apt.apartments[:apt_1] = Apartment.new("Apt 1", 2600, 300, 1, 1)
bedford_apt.apartments[:apt_2] = Apartment.new("Apt 2", 3000, 350, 1, 1)
bedford_apt.apartments[:apt_1].renters << Person.new("Tawa", 23, "male")
bedford_apt.apartments[:apt_2].renters << Person.new("Tony", 60, "male")

puts mckibben_lofts
puts mckibben_lofts.apartments[:unit_a]
puts mckibben_lofts.apartments[:unit_b]
puts mckibben_lofts.apartments[:unit_c]
puts mckibben_lofts.apartments[:unit_d]
# mckibben_lofts.apartments[:unit_a].renters.each {|renter| puts renter}
# mckibben_lofts.apartments[:unit_c].renters.each {|renter| puts renter}
# mckibben_lofts.apartments[:unit_d].renters.each {|renter| puts renter}

puts bedford_apt
puts bedford_apt.apartments[:apt_1]
puts bedford_apt.apartments[:apt_2]
# bedford_apt.apartments[:apt_1].renters.each {|renter| puts "#{renter}, who lives in."}
# bedford_apt.apartments[:apt_2].renters.each {|renter| puts renter}

# Make another building (2 total buildings)
# Add at least 2 apartments to each building (4 total apartments)
# Add at least one tenent in each apartment (4+ total tenents)
# Output a summary of each building
# Add two attributes in total
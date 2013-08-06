class School
  attr_accessor :name, :students

  def initialize(name)
<<<<<<< HEAD
    @students = {}
    @name = name
=======
    @name = name
    @students = {}
>>>>>>> c73c1a9bf3b4fc25cc81725478d021fc3619f337
  end

  def enroll_student(name, gpa)
    @students[name] = gpa
  end

  def grade(name, gpa)
    @students[name] = gpa
  end

  def average_gpa
    @students.values.reduce(:+).to_f / @students.count
  end

  def withdraw_student(name)
    @students.delete(name)
  end

end

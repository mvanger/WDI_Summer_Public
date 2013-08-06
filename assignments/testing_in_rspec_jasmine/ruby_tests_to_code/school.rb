class School
  attr_accessor :name, :students

  def initialize(name)
    @students = {}
    @name = name
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

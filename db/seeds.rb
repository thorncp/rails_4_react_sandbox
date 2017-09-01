User.delete_all

20.times do
  first_name =  Faker::Name.first_name
  last_name = Faker::Name.last_name
  User.create(
    first_name: first_name,
    last_name: last_name,
    email: Faker::Internet.email("#{first_name} #{last_name}"),
    date_of_birth: Faker::Date.birthday(18, 65)
  )
end

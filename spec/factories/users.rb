FactoryGirl.define do
  factory :user do
    first_name "MyString"
    last_name "MyString"
    date_of_birth Faker::Date.birthday(18, 65)
    email "MyString"
  end
end

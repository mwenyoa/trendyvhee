
# User.destroy_all

# 10.times do |index|
#     User.create!(
#         name: Faker::Name.unique.name, 
#         email: Faker::Internet.email(domain: 'customdomain.com'), 
#         phone_number: Faker::PhoneNumber.cell_phone_with_country_code,
#         gender: 'male',
#         bio: Faker::Lorem.sentence(word_count: rand(2..10)).chomp('.'),
#         role: 'Artists',
#         password: "12345678",
#         country: Faker::Address.country
#     )
# end
 
a = User.first
if a 
  a.role = "admin"
end


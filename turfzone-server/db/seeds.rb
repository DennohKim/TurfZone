puts "seeding data..."

User.create(username:"John", email:"john@gmail.com", phone_number:"0745412322", password:"927jkki", password_confirmation:"927jkki")
User.create(username:"Derrick", email:"der@gmail.com", phone_number:"0756987622", password:"5787jik", password_confirmation:"5787jik")
User.create(username:"Ivy", email:"ivy@gmail.com", phone_number:"0788968902", password:"ji9089", password_confirmation:"ji9089")
User.create(username:"Masau", email:"masau@gmail.com", phone_number:"0753463792", password:"b453278h", password_confirmation:"b453278h")
User.create(username:"VIctor", email:"bigvick@gmail.com", phone_number:"0777085941", password:"aser4536", password_confirmation:"aser4536")


Turf.create(image_url: "https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
name: 'Turf mugoya football',
location: 'South C',
rates:4500,
description: 'Changing Rooms. Flood lights in place.',
manager_name:"Charles Mugaka",
manager_email:"mugaka@gmail.com",
manager_number:"0756412347")
Turf.create(image_url: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
name: 'Kijiji field(Turf)',
location: 'South B',
rates: 3500,
description: 'Water available. Changing Rooms.',
manager_name:"Ruth Wambui",
manager_email:"boboruth@gmail.com",
manager_number:"076754321")
Turf.create(image_url: "https://images.unsplash.com/photo-1536122985607-4fe00b283652?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1234&q=80",
name: 'The Void Turf',
location: 'Embakasi',
rates: 4000,
description: 'Water available. Changing Rooms. Flood lights in place.',
manager_name:"Jimmy Bowen",
manager_email:"Jamiebowe@gmail.com",
manager_number:"07786412347")
Turf.create(image_url: "https://images.unsplash.com/photo-1524015368236-bbf6f72545b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
name: 'Ngong Road Arena',
location: 'Ngong Road',
rates: 4500,
description: 'Water available. Changing Rooms. Mulitple turfs.',
manager_name:"Jeremiah Kiunu",
manager_email:"Kjeremy@gmail.com",
manager_number:"0776857697")
Turf.create(image_url: "https://images.unsplash.com/photo-1550881111-7cfde14b8073?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
name: 'Camp Toyoyo',
location: 'Parklands',
rates: 4000,
description: 'Water available. Changing Rooms. Multiple turfs.',
manager_name:"Mary Sisia",
manager_email:"Sisiamary@gmail.com",
manager_number:"0711028399")
Turf.create(image_url: "https://images.unsplash.com/photo-1518604666860-9ed391f76460?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
name: 'Arena 5 Astroturf - Jamhuri Primary',
location: 'Jamhuri',
rates: 3500,
description: 'Water available. Changing Rooms. Flood lights in place.',
manager_name:"Gideon Kinyanjui",
manager_email:"giddykinyash@gmail.com",
manager_number:"0760002341")

Booking.create(start_time:"10/12/2022 11:00",end_time:"10/12/2022 13:00",user_id:1,turf_id:5)
Booking.create(start_time:"11/02/2022 13:00",end_time:"11/02/2022 15:15",user_id:3,turf_id:2)
Booking.create(start_time:"11/12/2022 09:00",end_time:"11/12/2022 12:30",user_id:4,turf_id:6)
Booking.create(start_time:"10/23/2022 14:20",end_time:"10/23/2022 17:00",user_id:5,turf_id:1)
Booking.create(start_time:"11/09/2022 10:00",end_time:"11/10/2022 15:00",user_id:4,turf_id:4)
Booking.create(start_time:"11/21/2022 11:15",end_time:"11/21/2022 14:15",user_id:3,turf_id:1)
Booking.create(start_time:"12/20/2022 11:50",end_time:"12/20/2022 16:50",user_id:1,turf_id:3)
Booking.create(start_time:"12/01/2022 12:00",end_time:"12/02/2022 18:00",user_id:2,turf_id:5)
Booking.create(start_time:"11/16/2022 16:00",end_time:"11/16/2022 18:30",user_id:4,turf_id:2)
Booking.create(start_time:"10/12/2022 17:00",end_time:"10/12/2022 19:00",user_id:5,turf_id:3)
Booking.create(start_time:"11/13/2022 09:00",end_time:"11/13/2022 15:50",user_id:2 ,turf_id:4)

AdminUser.create!(email: 'admin@turfzone.com', password: 'password', password_confirmation: 'password') if Rails.env.development?
puts "seeding completed"

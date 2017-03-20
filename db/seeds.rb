# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

demoUser = User.new({username: "Guest", email: "example@baroquen.com"})
demoUser.password = "password"
demoUser.save!

Artist.delete_all
Album.delete_all
Song.delete_all

awspath = "https://s3.amazonaws.com/baroquen-dev/"

bach = Artist.new(name: "Johann Sebastian Bach", description: "A German composer and musician of the Baroque period")
image = URI.parse("#{awspath}Bach.jpg").open
bach.image = image
bach.save!



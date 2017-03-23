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

otherfreeworks = Album.new(title: "Organ Works: other free works", artist_id: bach.id)
image = URI.parse("#{awspath}Albums/Organ+Works%3A+Other+Free+Works/Bach_Organ_Works_Other_Free_Works.jpg").open
otherfreeworks.image = image
otherfreeworks.save!


songs = [
  "01_-_Anh_42_Fugue_in_F_Major",
  "02_-_BWV_131a_Fugue_in_G_Minor",
  "03_-_BWV_563_Fantasia_con_imitatione_in_B_Minor",
  "04_-_BWV_568_Prelude_in_G_Major",
  "05_-_BWV_569_Prelude_in_A_Minor",
  "06_-_BWV_570_Fantasia_in_C",
  "07_-_BWV_571_Fantasia_in_G",
  "08_-_BWV_572_Fantasia_in_G_Major",
  "09_-_BWV_573_Fantasia_in_C",
  "10_-_BWV_574_Fugue_in_C_Minor",
  "11_-_BWV_575_Fugue_in_C_Minor",
  "12_-_BWV_577_Fugue_in_G_Major",
  "13_-_BWV_578_Fugue_in_G_Minor",
  "14_-_BWV_579_Fugue_in_B_Minor",
  "15_-_BWV_582_Passacaglia_and_Fugue_in_C_Minor",
  "16_-_BWV_583_Trio_in_d",
  "17_-_BWV_585_Trio_in_c",
  "18_-_BWV_586_Trio_in_G",
  "19_-_BWV_587_Aria_in_F",
  "20_-_BWV_588_Canzona_in_d",
  "21_-_BWV_589_Allabreve_in_D",
  "22_-_BWV_590_Pastorale_in_F_Major_-_1_Prelude",
  "23_-_BWV_590_Pastorale_in_F_Major_-_2_Allemande_manualiter",
  "24_-_BWV_590_Pastorale_in_F_Major_-_3_Aria_manualiter",
  "25_-_BWV_590_Pastorale_in_F_Major_-_4_Gigue_manualiter",
  "26_-_BWV_591_Little_Harmonic_Labyrinth",
  "27_-_BWV_598_Pedal-Exercitium",
  "28_-_BWV_1121_Fantasia_in_C_Minor"
]

songs.each do |song_path|
  song = URI.parse("#{awspath}Albums/Organ+Works%3A+Other+Free+Works/James_Kibbie_-_#{song_path}.mp3").open
  Song.create!(title: song_path.split("_").drop(2).join(" "),
      album_id: otherfreeworks.id,
      track_number: song_path.split("_").first.to_i,
      clip: song)
end

felipesarrobach = Album.new(title: "Felipe Sarro: Bach", artist_id: bach.id)
image = URI.parse("#{awspath}Albums/Felipe+Sarro%3A+Bach/Felipe_Sarro_Bach.jpg").open
felipesarrobach.image = image
felipesarrobach.save!

songs = [
  "01_-_Bach_French_Suite_4_BWV_815_1_Allemande",
  "02_-_Bach_French_Suite_4_BWV_815_2_Courante",
  "03_-_Bach_French_Suite_4_BWV_815_3_Sarabande",
  "04_-_Bach_French_Suite_4_BWV_815_4_Gavotte",
  "05_-_Bach_French_Suite_4_BWV_815_5_Menuet",
  "06_-_Bach_French_Suite_4_BWV_815_6_Air",
  "07_-_Bach_French_Suite_4_BWV_815_Gigue",
  "08_-_Bach_Sinfonia_11_BWV_797",
  "09_-_Bach_Prelude_8_BWV_853",
  "10_-_Bach_Cantata_BWV_29_Sinfonia_Siloti_transcription",
  "11_-_Bach_Violin_Sonata_2_BWV_1003_Andante_Siloti_transcription",
  "12_-_Bach_Partita_2_BWV_1004_Chaconne_Siloti_transcription",
  "13_-_Bach_Prelude_BWV_555_Siloti_transcription",
  "14_-_Bach_Flute_Sonata_2_BWV_1031_Siciliano_Siloti_transcription",
  "15_-_Bach_Cello_Suite_1_BWV_1007_Prelude_Siloti_transcription",
  "16_-_Bach_Fantasia_BWV_906_Siloti_transcription",
  "17_-_Bach_Orchestral_Suite_3_BWV_1068_Air_Siloti_transcription",
  "18_-_Bach_Prelude_BWV_855a_Siloti_transcription"
]

songs.each do |song_path|
  song = URI.parse("#{awspath}Albums/Felipe+Sarro%3A+Bach/Felipe_Sarro_-_#{song_path}.mp3").open
  Song.create!(title: song_path.split("_").drop(2).join(" "),
      album_id: felipesarrobach.id,
      track_number: song_path.split("_").first.to_i,
      clip: song)
end



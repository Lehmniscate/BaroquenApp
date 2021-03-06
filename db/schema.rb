# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170326195247) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "albums", force: :cascade do |t|
    t.string   "title",              null: false
    t.integer  "artist_id",          null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.index ["artist_id", "title"], name: "index_albums_on_artist_id_and_title", unique: true, using: :btree
    t.index ["artist_id"], name: "index_albums_on_artist_id", using: :btree
  end

  create_table "artists", force: :cascade do |t|
    t.string   "name",               null: false
    t.text     "description"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.index ["name"], name: "index_artists_on_name", unique: true, using: :btree
  end

  create_table "follows", force: :cascade do |t|
    t.integer  "user_id",       null: false
    t.string   "followed_type"
    t.integer  "followed_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["followed_type", "followed_id"], name: "index_follows_on_followed_type_and_followed_id", using: :btree
    t.index ["user_id"], name: "index_follows_on_user_id", using: :btree
  end

  create_table "playlist_adds", force: :cascade do |t|
    t.integer  "song_id",       null: false
    t.integer  "song_position", null: false
    t.integer  "playlist_id",   null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["playlist_id"], name: "index_playlist_adds_on_playlist_id", using: :btree
    t.index ["song_id"], name: "index_playlist_adds_on_song_id", using: :btree
  end

  create_table "playlists", force: :cascade do |t|
    t.string   "title",              null: false
    t.integer  "user_id",            null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.index ["title", "user_id"], name: "index_playlists_on_title_and_user_id", unique: true, using: :btree
    t.index ["title"], name: "index_playlists_on_title", using: :btree
    t.index ["user_id"], name: "index_playlists_on_user_id", using: :btree
  end

  create_table "songs", force: :cascade do |t|
    t.string   "title",             null: false
    t.integer  "album_id",          null: false
    t.integer  "track_number",      null: false
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.string   "clip_file_name"
    t.string   "clip_content_type"
    t.integer  "clip_file_size"
    t.datetime "clip_updated_at"
    t.index ["album_id", "track_number"], name: "index_songs_on_album_id_and_track_number", unique: true, using: :btree
    t.index ["album_id"], name: "index_songs_on_album_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",            null: false
    t.string   "email",               null: false
    t.string   "password_digest",     null: false
    t.string   "session_token",       null: false
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end

# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## artists
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null, indexed, unique
picture_url     | string    | not null
description     | text      |

## albums
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
title           | string    | not null, indexed, unique [artist_id]
artist_id       | integer   | not null, foreign key (references artists), indexed

## songs
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
title           | string    | not null, indexed
album_id        | integer   | not null, foreign key (references albums), indexed
track_number    | integer   | not null

## playlists
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
title           | string    | not null, indexed, unique [user_id]
user_id         | integer   | not null, foreign key (references users), indexed

## playlist_adds
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
song_id         | integer   | not null, foreign key (references songs), indexed
song_position   | integer   | not null
playlist_id     | integer   | not null, foreign key (references playlists), indexed

## follows
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references users), indexed, unique [follow_id]
followed_id       | integer   | not null, foreign key (references playlists), indexed
followed_type     | string    | not null

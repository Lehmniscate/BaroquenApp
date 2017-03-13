# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`
- `GET /api/users`
- `GET /api/users/:id`
- `POST /api/users/:id/follow`
- `DELETE /api/users/:id/follow`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Songs

- `GET /api/songs`
  - Songs index/search
  - Accepts `song_name` param
- `GET /api/songs/:id`
- `POST /api/songs/:id/follow`
- `DELETE /api/songs/:id/follow`

### Albums

- `GET /api/albums`
  - Albums index/search
  - Accepts `album_name` param
- `GET /api/albums/:id`
- `GET /api/albums/:id/songs`
- `POST /api/albums/:id/follow`
- `DELETE /api/albums/:id/follow`

### Artists

- `GET /api/artists`
  - Artists index/search
  - Accepts `artist_name` param
- `GET /api/artists/:id`
- `GET /api/artists/:id/albums`
- `POST /api/artists/:id/follow`
- `DELETE /api/artists/:id/follow`

### Playlists

- `GET /api/playlists`
  - Playlists index/search
  - Accepts `playlist_name` param
  - Accepts `song_id` param
- `GET /api/playlists/:id`
- `GET /api/playlists/:id/songs`
- `POST /api/playlists`
- `DELETE /api/playlists/:id`
- `POST /api/playlists/:id/follow`
- `DELETE /api/playlists/:id/follow`

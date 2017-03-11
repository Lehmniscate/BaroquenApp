# Baroquen App

[Heroku link][heroku]

[Trello link][trello]

[heroku]: http://www.herokuapp.com
[trello]: https://trello.com/b/ALgfuX0Q/freshernote

## Minimum Viable Product

Baroquen is a web application inspired by Spotify built using Ruby on Rails and React/Redux. This app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [ ] New account creation, login, and guest/demo login
- [ ] [Production README](docs/production_readme.md)
- [ ] Hosting on Heroku
- [ ] Song and Playlist CRUD
- [ ] Playlist Sharing
- [ ] Continuous playing while navigating site
- [ ] Following and friending

## Design Docs

* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Back-end setup and Front-end User Setup (1 day)
**Objective:** Functioning Rails project with front-end authentication

### Phase 2: Artist, Album, Songs: Models, API, and components (2 days)
**Objective:** Songs and their albums and artist information can be created, read, updated, and destroyed through the API

### Phase 3: Playlist Model, API, and components (1 day)
**Objective:** Playlists can be created, read, updated, and destroyed through the API

### Phase 4: Playlist Sharing (2 day)
**Objective:** Playlist can be shared with other users

### Phase 5: Continuous playing of music (2 days)
**Objective:** Songs can be played and will continue playing through navigation of the website

### Phase 6: Following and friending (1 day)
**Objective:** Users can follow other users' playlists and friend other users

### Bonus Features (TBD)
- [ ] Radio
- [ ] Explore page

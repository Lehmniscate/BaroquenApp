class Api::AlbumsController < ApplicationController
  def index
    artist = Artist.find(params[:artist_id])
    @albums = artist.albums
  end

  def show
    @album = Album.find(params[:id])
  end
end

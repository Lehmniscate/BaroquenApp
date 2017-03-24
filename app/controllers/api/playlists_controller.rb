class Api::PlaylistsController < ApplicationController
  def show
    @playlist = Playlist.find_by_id(params[:id])
  end

  def index
    @playlists = Playlist.all
  end

  def create
    @playlist = Playlist.new(playlist_params)
    @playlist.user = current_user

    if @playlist.save
      render @playlist
    else
      render json: @playlist.errors.full_messages, status: 402
    end
  end

  def update
    @playlist = Playlist.find_by_id(params[:id])
    p playlist_params
    
    songs = params[:playlist][:songs].map {|song| Song.find_by_id(song) }
    if @playlist.nil? || @playlist.user != current_user
      render json: {}, status: 401 
    elsif songs.length != @playlist.songs.length
      if @playlist.add_song(songs.last)
        render Playlist.find_by_id(@playlist.id)
      else
        render json: @playlist.errors.full_messages, status: 422
      end
    else
      if @playlist.update playlist_params
        render @playlist
      else
        render json: @playlist.errors.full_messages, status: 402
      end
    end
  end

  def destroy
    @playlist = Playlist.find_by_id(params[:id])
    if @playlist.nil? || @playlist.user != current_user
      render json: {}, status: 401 
    elsif  @playlist
      @playlist.destroy
      render @playlist
    else
      render json: ["Playlist does not exist"], status: 404
    end
  end

  private

  def playlist_params
    params.require(:playlist).permit(:title, :image_url, {:songs => []})
  end

end

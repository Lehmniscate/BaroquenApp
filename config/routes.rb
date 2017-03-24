Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:index, :show, :create, :destroy, :update]
    resources :artists, only: [:index, :show] do
      resources :albums, only: [:index]
    end
    resources :albums, only: [:show] do
      resources :songs, only: [:index]
    end
    resources :songs, only: [:show]
    resources :playlists, only: [:show, :index, :create, :destroy, :update]
  end

end

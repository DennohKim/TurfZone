Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  resources :users, only: [:index, :show]
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  resources :turves, only: [:index]
  resources :bookings, only: [:index, :create]
end

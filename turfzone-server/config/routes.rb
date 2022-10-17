Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  resources :users, only: [:index, :show]
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  delete "/bookings/:id", to: "bookings#destroy"
  
  resources :turves, only: [:index, :show, :create, :update, :delete]
  resources :bookings, only: [:index, :create, :show, :update, :delete]
end

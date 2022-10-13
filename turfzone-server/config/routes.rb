Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  resources :users, only: [:index, :show]
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  resources :turves, only: [:index, :show, :create, :update, :delete]
  resources :bookings, only: [:index, :create, :show, :create, :update, :delete]
  resources :sessions, only: [:create, :destroy]
  get :logged_in, to: "sessions#logged_in"
  delete :logout, to: "sessions#logout"
end

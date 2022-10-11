Rails.application.routes.draw do
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  resources :users, only: [:index]
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  resources :turves, only: [:index]
  resources :bookings, only: [:create]
end

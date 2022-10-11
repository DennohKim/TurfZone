Rails.application.routes.draw do
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  resources :users, only: [:index]
end

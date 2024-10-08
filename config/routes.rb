Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post '/signup', to: "users#create"
  get '/me', to: "users#show"
  post '/login', to: "sessions#create"
  delete "/logout", to: "sessions#destroy"  
  delete "/logout", to: "sessions#destroy"
  post '/contact', to: 'api/v1/contacts#create'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end

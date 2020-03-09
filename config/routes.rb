Rails.application.routes.draw do
  resources :application, only: [:index]
  root "application#index"
  #root "#index"
 
 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

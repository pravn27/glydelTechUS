Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'
  get 'vehicles' => "vehicle#index"
  get 'vehicles/new' => "vehicle#add"
  get 'vehicles/details' => "vehicle#detail"
end

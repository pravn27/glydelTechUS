Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'
<<<<<<< HEAD
  get 'process' => "home#index"
=======
  get 'vehicles' => "vehicle#index"
  get 'vehicles/new' => "vehicle#add"
  get 'vehicles/details' => "vehicle#detail"
>>>>>>> 70c192e6bf0c31e7abb7e44a6d620d607c324b77
end

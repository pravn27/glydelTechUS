Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'
  get 'dashboard' =>'home#dashboard'
  get 'customers' => 'home#customers'
  get 'vehicles' => "vehicle#index"
  get 'vehicles/new' => "vehicle#add"
  get 'vehicles/details' => "vehicle#detail"
  get 'issues' => "vehicle#issues"
  get 'schedule/calendar' => "schedules#calendar"
  post 'company/create'=>"company#create"
  post 'vehicle/create'=>"vehicle#create"
  resources :schedule
  get 'schedules/calendar' => "schedules#calendar"
  resources :schedules

end

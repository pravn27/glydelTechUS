Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'
  get 'dashboard' =>'home#dashboard'
  # get 'cus' => 'home#customers'
  get 'vehicles' => "vehicle#index"
  get 'vehicles/new' => "vehicle#add"
  get 'vehicles/details' => "vehicle#detail"

  post 'company/create'=>"company#create"
  get 'companies'=>"company#index"
  get 'companies/new'=>"company#new"
  post 'vehicle/create'=>"vehicle#create"
 
  get 'schedules/calendar' => "schedules#calendar"
  get 'schedules/vehicles' => "schedules#list"
  get 'schedules/all' => "schedules#all"
  get 'schedules/show' => "schedules#show"
  patch 'schedules/complete' => "schedules#complete"
  get 'schedules/issues' => "schedules#issues"
  resources :schedules
  
  get 'issues/list' => "issues#list"
  post 'issues/schedule' => "issues#schedule"
  get 'issues/vehicle' => "issues#vehicle"
  resources :issues

end

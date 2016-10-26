Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'
  get 'dashboard' =>'home#dashboard'
  # get 'cus' => 'home#customers'
  get 'vehicles' => "vehicle#index"
  get 'vehicles/new' => "vehicle#add"
  get 'vehicles/details' => "vehicle#detail"
  # get 'issues' => "vehicle#issues"
  post 'vehicle/create'=>"vehicle#create"
  get 'vehicles/all'=>"vehicle#all"
  get 'vehicle/edit/:id'=>'vehicle#edit'
  put 'vehicles/:id'=>"vehicle#update"
  delete 'vehicles/:id'=>"vehicle#destroy"

  post'company/create'=>"company#create"
  get 'companies'=>"company#index"
  get 'companies/new'=>"company#new"
  get 'companies/all'=>"company#all"
  get 'company/edit/:id'=>'company#edit'
  put 'companies/:id'=>"company#update"
  delete 'companies/:id'=>"company#destroy"
  
  get 'schedules/calendar' => "schedules#calendar"
  get 'schedules/events' => "schedules#events"
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

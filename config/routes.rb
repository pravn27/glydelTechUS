Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'
  get 'dashboard' =>'home#dashboard'
  # get 'cus' => 'home#customers'
  get 'vehicles' => "vehicle#index"
  get 'vehicles/new' => "vehicle#add"
  get 'vehicles/details' => "vehicle#detail"
  get 'issues' => "vehicle#issues"
  post'company/create'=>"company#create"
  get 'companies'=>"company#index"
  get 'companies/new'=>"company#new"
  get 'companies/all'=>"company#all"
  get 'company/edit/:id'=>'company#edit'
  put 'companies/:id'=>"company#update"
  delete 'companies/:id'=>"company#destroy" 
  post 'vehicle/create'=>"vehicle#create"
  get 'schedules/calendar' => "schedules#calendar"
  get 'schedules/vehicles' => "schedules#list"
  get 'schedules/all' => "schedules#all"
  get 'schedules/show' => "schedules#show"
  resources :schedules

end

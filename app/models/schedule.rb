class Schedule < ActiveRecord::Base
  include Mongoid::Document
  include Mongoid::Timestamps


  field :vehicle_name,       	type: String
  field :type_of_service,       type: String
  field :scheduling_details,    type: String
  field :schedule_from,       	type: DateTime
  field :schedule_to,       	type: DateTime

end 
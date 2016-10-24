class Schedule < ActiveRecord::Base
  include Mongoid::Document
  include Mongoid::Timestamps

  belongs_to :company
  belongs_to :vehicle

  field :vehicle_name,       	type: String
  field :type_of_service,       type: String
  field :scheduling_details,    type: String
  field :scheduled_date,       	type: DateTime

end 
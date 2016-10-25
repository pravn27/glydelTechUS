class Schedule
  include Mongoid::Document
  include Mongoid::Timestamps

  belongs_to :vehicle

  field :vehicle_name,       	type: String
  field :vehicle_type,       	type: String
  field :scheduling_details,    type: String
  field :scheduled_date,       	type: DateTime
  field :is_active,       		type: Boolean, default: true
  field :status,       			type: String, default: "pending"

end 
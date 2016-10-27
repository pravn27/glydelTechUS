class Schedule
  include Mongoid::Document
  include Mongoid::Timestamps

  belongs_to :vehicle

  field :vehicle_name,       	type: String
  field :vehicle_type,       	type: String
  field :scheduling_details,    type: String
  field :scheduled_date,       	type: String
  field :is_active,       		type: Boolean, default: true
  field :status,       			type: String, default: "pending"

  def as_json(option={})
		super.merge({
			issues: self.vehicle.issues.count,
			})
	end
end 
class Schedule
  include Mongoid::Document
  include Mongoid::Timestamps

  belongs_to :vehicle

  field :vehicle_number,       	type: String
  field :vehicle_type,       	type: String
  field :scheduling_details,    type: String
  field :scheduled_date,       	type: String
  field :is_active,       		type: Boolean, default: true
  field :status,       			type: String, default: "pending"

  def as_json(option={})
		super.merge({
			issues: Issue.where(:vehicle_number => self.vehicle.vehicle_number).count
			})
	end
end 
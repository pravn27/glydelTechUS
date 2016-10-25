class Issue
	include Mongoid::Document
	include Mongoid::Timestamps

	belongs_to :vehicle

	field :issue_description,       	type: String
	field :issue_code,       			type: String
	field :issue_date,    				type: String
	field :is_active,       			type: Boolean, default: true
	field :status,       				type: String, default: "pending"
	def as_json(option={})
		super.merge({
			vehicle_name: self.vehicle.make,
			})
	end
end 
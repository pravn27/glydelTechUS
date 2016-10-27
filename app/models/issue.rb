class Issue
	include Mongoid::Document
	include Mongoid::Timestamps

	field :issue_description,       	type: String
	field :issue_code,       			type: String
	field :issue_date,    				type: String
	field :vehicle_number,    			type: String
	field :issue_level,    				type: String
	field :service_action,    			type: String
	field :is_active,       			type: Boolean, default: true
	field :status,       				type: String, default: "pending"
	# def as_json(option={})
	# 	super.merge({
	# 		vehicle_name: self.vehicle.make,
	# 		})
	# end
end 
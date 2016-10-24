class VehicleController < ApplicationController

	def create 
		@vehicle=current_user.companies.vehicles.create(company_data)
	end

	def edit
		
	end

	def destroy

	end

	def update

	end

	private
	def vehicle_data
		params.permit(:vehicle_type,:vehicle_number,:vin_number,:make,:model,:year,:fuel_capacity,:fuel_type)
	end
end

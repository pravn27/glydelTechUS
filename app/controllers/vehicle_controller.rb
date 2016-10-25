class VehicleController < ApplicationController

	def create 
		@vehicle=current_user.companies.vehicles.create(company_data)
	end

	def edit
		
	end

	def destroy

	end

	def update
		@vehicle=current_user.companies.vehicles.where('_id'=>params[:id])
		if @vehicle
			@vehicle=@vehicle.update(vehicle_data)
			if @vehicle
				flash[:notice] = "vehicle updated successfully"
			else
				flash[:error] = "Not able to save! Please Try again"
				redirect_to (:back) and return
			end
		end
	end

	private
	def vehicle_data
		params.permit(:vehicle_type,:vehicle_number,:vin_number,:make,:model,:year,:fuel_capacity,:fuel_type,:id)
	end
end

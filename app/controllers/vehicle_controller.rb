class VehicleController < ApplicationController

	def create 
		
		@vehicle=current_user.companies.vehicles.create(company_data)
	end

	def all
		@company=current_user.companies.vehicles.all
	end

	def edit
		@vehicle=current_user.companies.vehicles.where('_id'=>params[:id])
	end

	def destroy
		@vehicle=current_user.companies.vehicles.where('_id'=>params[:id])

		if @vehicle && @vehicle.delete
			flash[:notice]="vehicle successfully deleted"
		else
			flash[:notice]="unable to delete try again"
		end
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

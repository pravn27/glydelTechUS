class VehicleController < ApplicationController

	def create 
		@company=current_user.companies.find_by(:id=>params[:id])
		if @company.present?
			@vehicle=@company.vehicles.create(vehicle_data)
		end 
		render :json=>{data:@vehicle}
	end

	def all
		@vehicles= []
		current_user.companies.each do |c|
			@vehicles << c.vehicles
		end

		render :json=>{data:@vehicles}
	end

	def edit
		@vehicle=current_user.companies.vehicles.where(_id: params[:id])
	end

	def destroy
		@company=current_user.companies.find_by(:id=>params[:id])
		@vehicle=@company.vehicles.find_by(:id=>params[:vehicle_id])
		if @vehicle.present? && @vehicle.delete
			flash[:notice]="vehicle successfully deleted"
		else
			flash[:notice]="unable to delete try again"
		end
	end

	def update
		
		@company=current_user.companies.find_by(_id: params[:id])
		@vehicle=@company.vehicles.find_by(_id: params[:vehicle_id])

		if @vehicle.present?
			@vehicle.update_attributes(vehicle_data)
			unless @vehicle.errors.any?
				flash[:notice] = "vehicle updated successfully"
			else
				flash[:error] = "Not able to save! Please Try again"
			end
		end
		respond_to do |f|
			f.html{ redirect_to (:back) and return }
			f.json{ render :json=>@vehicle, :status=>200}
		end
	end

	private
	def vehicle_data
		params.permit(:vehicle_type,:vehicle_number,:vin_number,:make,:model,:year,:fuel_capacity,:fuel_type,:odometer_reading)
	end

end

class VehicleController < ApplicationController

	def create 
		@vehicle=current_user.companies.vehicles.create(company_data)
		render :json=>{data:@vehicle}
	end

	def all
		@vehicles=current_user.companies.vehicles.all
		render :json=>{data:@vehicles}
	end

	def edit
		@vehicle=current_user.companies.vehicles.where(_id: params[:id])
	end

	def destroy
		@vehicle=current_user.companies.vehicles.where(_id: params[:id])
		if @vehicle && @vehicle.delete
			flash[:notice]="vehicle successfully deleted"
		else
			flash[:notice]="unable to delete try again"
		end
	end

	def update
		@vehicle=current_user.companies.vehicles.where(_id: params[:id])
		if @vehicle.present?
			@vehicle.update_attributes(vehicle_data)
			unless @company.errors.any?
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
		params.permit(:vehicle_type,:vehicle_number,:vin_number,:make,:model,:year,:fuel_capacity,:fuel_type,:id)
	end
end

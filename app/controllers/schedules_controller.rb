class SchedulesController < ApplicationController

	def index
		
	end

	def list
		@vehicles = Vehicle.all
		render :json=> { data: @vehicles}
	end

	def all
		@schedules = Schedule.all
		render :json=> { data: @schedules}
	end

	def create
		vehicle = Vehicle.find(params[:id])
		if vehicle.present?
			schedule = vehicle.schedules.create(schedule_params)
			render :json=> { message:"Schedule success", path: schedules_path}
		else
			flash[:error] = "Unable to save. Please try again"
			redirect_to schedules_path and return
		end
	end

	def calendar
		
	end
	
	private

	def schedule_params
		params.permit(:vehicle_name, :vehicle_type, :scheduling_details, :scheduled_date)
	end

end

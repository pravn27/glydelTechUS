class SchedulesController < ApplicationController

	def index
		
	end

	def create
		binding.pry
		vehicle = Vehicle.find(:id)
		if vehicle.present?
			schedule = Schedule.create(schedule_params)
			flash[:notice] = "Schedule created successfully"
			redirect_to schedules_path and return
		else
			flash[:error] = "Unable to save. Please try again"
			redirect_to schedules_path and return
		end
	end

	def calendar
		
	end
	
	private

	def schedule_params
		params.require(:schedule).permit(:vehicle_name, :type_of_service, :scheduling_details, :scheduled_date, :company_id)
	end

end

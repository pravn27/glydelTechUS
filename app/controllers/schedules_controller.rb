class SchedulesController < ApplicationController

	def index
		
	end

	def create
		
	end

	def calendar
		
	end
	
	private

	params.require(:schedule).permit(:vehicle_name, :type_of_service, :scheduling_details, :scheduled_date, :company_id)

end

class IssuesController < ApplicationController

	def index
		
	end

	def list
		@issues = Issue.where(:is_active => "true")
		render :json=> { data: @issues}
	end

	def vehicle
		@vehicle = Vehicle.find(params[:id])
		render :json=> { data: @vehicle}
	end

	def schedule
		vehicle = Vehicle.find(params[:id])
		if vehicle.present?
			schedule = vehicle.schedules.create(schedule_params)
			render :json=> { message:"Schedule created Succesfully", path: issues_path}
		else
			ender :json=> { message:"Unable to save. Please try againy", path: issues_path}
		end
	end

	def destroy
		schedule = Schedule.find(params[:id])
		if schedule.present?
			schedule = schedule.update(:is_active => false)
			render :json=> { message:"Schedule removed Succesfully", path: schedules_path}
		else
			render :json=> { message:"Unable to delete. Please try again", path: schedules_path}
		end
	end

	private

	def schedule_params
		params.permit(:vehicle_name, :vehicle_type, :scheduling_details, :scheduled_date)
	end

end

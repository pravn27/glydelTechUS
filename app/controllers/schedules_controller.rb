class SchedulesController < ApplicationController

	def index
		
	end

	def list
		@vehicles = Vehicle.all
		render :json=> { data: @vehicles}
	end

	def all
		@schedules = Schedule.where(:is_active => "true", :status => "pending")
		render :json=> { data: @schedules}
	end

	def edit
		@schedule = Schedule.find(params[:id])
		render :json=> { data: @schedule}
	end

	def create
		vehicle = Vehicle.find(params[:id])
		if vehicle.present?
			schedule = vehicle.schedules.create(schedule_params)
			render :json=> { message:"Schedule created Succesfully", path: schedules_path}
		else
			ender :json=> { message:"Unable to save. Please try againy", path: schedules_path}
		end
	end

	def update
		schedule = Schedule.find(params[:id])
		if schedule.present?
			schedule = schedule.update(schedule_params)
			render :json=> { message:"Schedule updated Succesfully", path: schedules_path}
		else
			ender :json=> { message:"Unable to update. Please try again", path: schedules_path}
		end
	end

	def destroy
		schedule = Schedule.find(params[:id])
		if schedule.present?
			schedule = schedule.update(:is_active => false)
			render :json=> { message:"Schedule removed Succesfully", path: schedules_path}
		else
			ender :json=> { message:"Unable to delete. Please try again", path: schedules_path}
		end
	end

	def calendar
		
	end
	
	private

	def schedule_params
		params.permit(:vehicle_name, :vehicle_type, :scheduling_details, :scheduled_date)
	end

end

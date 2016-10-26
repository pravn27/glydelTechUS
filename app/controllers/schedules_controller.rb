class SchedulesController < ApplicationController

	def index
		
	end

	def list
		@vehicles = Vehicle.all
		render :json=> { data: @vehicles}
	end

	def all
		if params[:date].present?
			@schedules = Schedule.where(:scheduled_date => params[:date], :is_active => "true", :status => "pending")
		else
			@schedules = Schedule.where(:is_active => "true", :status => "pending")
		end
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
			render :json=> { message:"Unable to save. Please try againy", path: schedules_path}
		end
	end

	def update
		schedule = Schedule.find(params[:id])
		if schedule.present?
			schedule = schedule.update(schedule_params)
			render :json=> { message:"Schedule updated Succesfully", path: schedules_path}
		else
			render :json=> { message:"Unable to update. Please try again", path: schedules_path}
		end
	end

	def issues
		schedule = Schedule.find(params[:id])
		if schedule.present?
			vehicle = schedule.vehicle
			render :json=> { message:"Issues", path: issues_path, data: vehicle}
		else
			render :json=> { message:"Unable to fetch. Please try again", path: schedules_path}
		end
	end

	def complete
		schedule = Schedule.find(params[:id])
		if schedule.present?
			schedule = schedule.update(:status => "completed")
			render :json=> { message:"Schedule updated Succesfully", path: schedules_path}
		else
			render :json=> { message:"Unable to update. Please try again", path: schedules_path}
		end
	end

	def events
		@schedules = Schedule.where(:is_active => "true", :status => "pending")
		@events = @schedules.map{|s|s.scheduled_date.to_s}
		render :json=> { data: @events}
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

	def calendar
		
	end
	
	private

	def schedule_params
		params.permit(:vehicle_name, :vehicle_type, :scheduling_details, :scheduled_date)
	end

end

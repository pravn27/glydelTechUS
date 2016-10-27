class IssuesController < ApplicationController

	def index
		
	end

	def list
		if params[:id].present?
			vehicle = Vehicle.find(params[:id])
			@issues = Issue.where(:vehicle_number => vehicle.vehicle_number)
		else
			@issues = Issue.where(:is_active => "true")
		end
		render :json=> { data: @issues}
	end

	def vehicle
		@vehicle = Vehicle.find_by(:vehicle_number => params[:id])
		render :json=> { data: @vehicle}
	end

	def schedule
		vehicle = Vehicle.find_by(:vehicle_number => params[:vehicle_number])
		if vehicle.present?
			schedule = vehicle.schedules.create(schedule_params)
			schedule.update(:vehicle_name => vehicle.model)
			issues = Issue.where(:vehicle_number => params[:vehicle_number])
			issues.each do |issue|
				issue.update(:status => "scheduled")
			end
			render :json=> { message:"Schedule created Succesfully", path: issues_path}
		else
			ender :json=> { message:"Unable to save. Please try againy", path: issues_path}
		end
	end

	def destroy
		issue = Issue.find(params[:id])
		if issue.present?
			issue = issue.update(:is_active => false)
			render :json=> { message:"Schedule removed Succesfully", path: issues_path}
		else
			render :json=> { message:"Unable to delete. Please try again", path: issues_path}
		end
	end

	private

	def schedule_params
		params.permit(:vehicle_name, :vehicle_type, :scheduling_details, :scheduled_date, :id)
	end

end

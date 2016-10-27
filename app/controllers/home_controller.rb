class HomeController < ApplicationController

	def dashboard
		@customers = current_user.companies.all
		@vehicles= []
		current_user.companies.each do |c|
			@vehicles << c.vehicles
		end
		@schedules = Schedule.all
		@issues = Issue.all
	end

  def settings
  end
end

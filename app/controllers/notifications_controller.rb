class NotificationsController < ApplicationController
	
	def create
		current_user.notifications.create(notification_params)
		render :json=> { message: "Notification saved successfully", path: notifications_path}
	end

	def list
		@notifications = current_user.notifications
		render :json=> { data: @notifications}
	end

	private 
	def notification_params
		params.permit(:selected_names,:message_type,:body_content, :notification_type)
	end
end

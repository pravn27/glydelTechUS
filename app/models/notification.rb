class Notification
  include Mongoid::Document
  include Mongoid::Timestamps

  belongs_to :user

  field :selected_names,       	type: String
  field :notification_type,     type: String
  field :message_type,       	type: String
  field :body_content,          type: String
  field :status,       			type: String, default: "send"

end 
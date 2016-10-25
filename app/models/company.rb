class Company
  include Mongoid::Document
  belongs_to :user
  has_many :vehicles
  
  field :name, type: String
  field :contact_number,type: String
  field :address,type: String
end

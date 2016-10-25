class Vehicle
  include Mongoid::Document
  belongs_to :company
  field :vehicle_type, type: String
  field :vehicle_number,type: String
  field :vin_number,type: String
  field :make,type: String
  field :model,type: String
  field :year,type: Integer
  field :fuel_capacity,type: Integer
  field :fuel_type,type: String
end


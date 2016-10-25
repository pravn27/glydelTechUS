class CompanyController < ApplicationController
	
	def create 
		@company=current_user.companies.create(company_data)
	end

	def edit
		@company=current_user.companies.where({_id: params[:id]})
	end

	def destroy

	end

	def update
		@company=current_user.companies.where('_id'=> params[:id])
		if @company
			@company=@company.update(company_data)
			if @company
				flash[:notice] = "company updated successfully"
			else
				flash[:error] = "Not able to save! Please Try again"
				redirect_to (:back) and return
			end
		end
	end


	private 
	def company_data
		params.permit(:name,:contact_number,:address,:id)
	end

end

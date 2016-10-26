class CompanyController < ApplicationController

	
	def create 
		@company=current_user.companies.create(company_data)
	end

	def all
		@companies=current_user.companies
		if params[:search]
			@companies = @companies.where(:name=>/#{params[:search]}/i)
		end
		render :json=>{data:@companies}
	end

	def edit
		@company=current_user.companies.where({_id: params[:id]})
		render :json=>{data:@company}
	end

	def destroy
		@company=current_user.companies.where(_id: params[:id])
		if @company && @company.delete
			flash[:notice]="company successfully deleted"
		else
			flash[:error]="unable to delete ...please try again"
		end
	end

	def update
		@company=current_user.companies.find_by(:id=> params[:id])
		if @company.present?
			@company.update_attributes(company_data)
			unless @company.errors.any?
				flash[:notice] = "company updated successfully"
			else
				flash[:error] = "Not able to save! Please Try again"
			end
		end
		respond_to do |f|
			f.html{ redirect_to (:back) and return }
			f.json{ render :json=>@company, :status=>200}
		end
	end


	private 
	def company_data
		params.permit(:name,:contact_number,:address,:id)
	end

end

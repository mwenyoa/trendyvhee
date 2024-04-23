class ConfirmationsController < Devise::ConfirmationsController
  def show
    self.resource = resource_class.confirm_by_token(params[:confirmation_token])
    yield resource if block_given?
    if resource.errors.empty?
      set_flash_message!(:notice, :confirmed)
      redirect_to "#{ENV['host']}/#/account-confirmation", allow_other_host: true
    else
      redirect_to "#{ENV['host']}/#/account-confirmation-errors", allow_other_host: true
    end
  end
end

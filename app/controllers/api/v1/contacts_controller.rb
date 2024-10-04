module Api
    module V1
      class ContactsController < ApplicationController  
        def create
          contact_params = params.require(:contact).permit(:first_name, :last_name, :email, :message)
          ContactMailer.contact_email(contact_params).deliver_now
          render json: { success: true, message: 'Email sent successfully' }, status: :ok
        rescue StandardError => e
          render json: { success: false, message: 'Error sending email', error: e.message }, status: :unprocessable_entity
        end
      end
    end
  end
  
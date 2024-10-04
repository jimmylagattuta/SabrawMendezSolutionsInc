module Api
    module V1
      class ContactsController < ApplicationController  
        def create
            contact_params = params.require(:contact).permit(:first_name, :last_name, :email, :message)
            logger.info("Attempting to send email with params: #{contact_params.inspect}")
            ContactMailer.contact_email(contact_params).deliver_now
            logger.info("Email sent successfully")
            render json: { success: true, message: 'Email sent successfully' }, status: :ok
          rescue StandardError => e
            logger.error("Error sending email: #{e.message}")
            render json: { success: false, message: 'Error sending email', error: e.message }, status: :unprocessable_entity
          end          
      end
    end
  end
  
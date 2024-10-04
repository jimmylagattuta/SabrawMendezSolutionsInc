class ContactMailer < ApplicationMailer
    default from: 'kenneth@purehealthdx.com'
  
    def contact_email(contact_params)
      puts "*" * 100
      puts "contact_params"
      puts contact_params.inspect
      puts "*" * 100
      @first_name = contact_params[:first_name]
      @last_name = contact_params[:last_name]
      @message = contact_params[:message]
      @user_email = contact_params[:email]
  
      mail(
        to: 'receiving-email@example.com', # Replace with your receiving email
        subject: 'New Contact Form Submission'
      )
    end
  end
  
class ContactMailer < ApplicationMailer
    default from: 'jimmy.lagattuta@gmail.com'
  
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
        to: 'jimmy.lagattuta@gmail.com', # Replace with your receiving email
        cc: 'kenneth@purehealthdx.com',
        subject: 'SMS Inc: New Submission for Contact Us Form'
      )
    end
  end
  
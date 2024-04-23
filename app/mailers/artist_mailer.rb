class ArtistMailer < ApplicationMailer
    default :from => "support@tunespot.biz"

    def new_artist_created(artist)
      @artist = artist
      mail(to: 'sam@tunespot.biz', subject: 'New artist requests to join Tunespot')
    end
end
  
module ApplicationHelper
    def default_meta_tags
        {
          site: 'trendyvhee.com',
          title: 'Trendy Vhee',
          reverse: true,
          separator: '|',
          description: 'TrendyVhee is a music platform that allows users to play, add, and download music.',
          keywords: 'Online music streaming, Music player, Listen to music online, Play music online, Streaming music service, Music playlists, Popular music, New music releases, rock, hip-hop, jazz, classical, afrobeats, rhumba, kwaito, Beyonce, Taylor Swift, Drake, Ed Sheeran, Free music streaming',
          canonical: request.original_url,
          noindex: !Rails.env.production?,
          icon: [
            { href: image_url('favicon.ico') },
            { href: image_url('apple-touch-icon.png'), rel: 'apple-touch-icon', sizes: '180x180', type: 'image/jpg' },
          ],
          og: {
            site_name: 'trendyvhee.com',
            title: 'TrendyVhee',
            description: 'TrendyVhee is a music platform that allows users to play, add, and download music.', 
            type: 'website',
            url: request.original_url,
            image: image_url('black-logo.png')
          }
        }
    end
end

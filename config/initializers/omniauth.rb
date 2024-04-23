Rails.application.config.middleware.use OmniAuth::Builder do
    provider :facebook, Rails.application.credentials.facebook[:APP_ID], Rails.application.credentials.facebook[:APP_SECRET]
end
OmniAuth.config.allowed_request_methods = [:post, :get]
OmniAuth.config.silence_get_warning = true
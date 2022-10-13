# Rails.application.config.session_store :cookie_store, key: "_authentication_app", domain: "your-production-app-here.com"

if Rails.env == "production"
    Rails.application.config.session_store :cookie_store, key: "_authentication_app", domain: "your-production-app-here.com"
  else
    Rails.application.config.session_store :cookie_store, key: "_authentication_app"
  end
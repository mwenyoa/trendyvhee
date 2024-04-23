source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.0.2"

# Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
gem "rails", "~> 7.0.4"

# The original asset pipeline for Rails [https://github.com/rails/sprockets-rails]
gem "sprockets-rails"

# Use postgresql as the database for Active Record
gem "pg", "~> 1.1"

# Use the Puma web server [https://github.com/puma/puma]
gem "puma", "~> 5.0"

# Hotwire's SPA-like page accelerator [https://turbo.hotwired.dev]
gem "turbo-rails"

# Hotwire's modest JavaScript framework [https://stimulus.hotwired.dev]
gem "stimulus-rails"

# Build JSON APIs with ease [https://github.com/rails/jbuilder]
gem "jbuilder"

# Use Redis adapter to run Action Cable in production
gem "redis", "~> 4.0"

# Use Kredis to get higher-level data types in Redis [https://github.com/rails/kredis]
# gem "kredis"

# Use Active Model has_secure_password [https://guides.rubyonrails.org/active_model_basics.html#securepassword]
gem "bcrypt", "~> 3.1.7"

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]

# Reduces boot times through caching; required in config/boot.rb
gem "bootsnap", require: false

# Use Sass to process CSS
# gem "sassc-rails"
gem "active_model_serializers"

# Use Active Storage variants [https://guides.rubyonrails.org/active_storage_overview.html#transforming-images]
gem "image_processing", "~> 1.2"

group :development, :test do
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem "debug", platforms: %i[ mri mingw x64_mingw ]
  gem 'factory_bot_rails'
  gem 'rspec-rails', '~> 6.0.0'
  gem 'rails-controller-testing'
  gem 'faker'
end

group :development do
  # Use console on exceptions pages [https://github.com/rails/web-console]
  gem "web-console"

  gem 'capistrano', '~> 3.10', require: false
  gem 'capistrano-rails', '~> 1.5', require: false
  gem 'capistrano-rbenv', '~> 2.1'
  gem 'capistrano-bundler', '~> 2.0'
  gem 'capistrano3-puma', github: "seuros/capistrano-puma"

  # Add speed badges [https://github.com/MiniProfiler/rack-mini-profiler]
  # gem "rack-mini-profiler"

  # Speed up commands on slow machines / big apps [https://github.com/rails/spring]
  # gem "spring"
end

group :test do
  # Use system testing [https://guides.rubyonrails.org/testing.html#system-testing]
  gem "capybara"
  gem "selenium-webdriver"
  gem "webdrivers"
end

# Application specific gems
gem "vite_rails"
gem "vite_ruby"
gem 'rack-cors'
gem 'devise', '~> 4.9.1'
gem 'omniauth'
gem 'omniauth-facebook'
gem "omniauth-rails_csrf_protection"
gem 'devise-jwt'
gem "letter_opener", group: :development
gem 'dotenv-rails'
gem 'pg_search'
gem 'aws-sdk', '~> 3'
gem "mini_magick"
gem 'will_paginate', '~> 3.3'
gem 'meta-tags'
gem 'postmark-rails'
gem 'railties'
# gem 'mailjet', :git => 'https://github.com/mailjet/mailjet-gem.git'


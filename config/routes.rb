Rails.application.routes.draw do
  devise_for :users,
             controllers: {
               sessions: 'users/sessions',
               registrations: 'users/registrations',
               passwords: 'passwords',
               confirmations: 'confirmations'
               #  omniauth_callbacks: 'omniauth_callbacks'
             }
  devise_scope :user do
    post 'social_auth/callback', to: 'omniauth_callbacks#facebook'
  end

  namespace :api do
    namespace :v1 do
      #  Shipping routes
      resources :shippings, only: %i[index show create update destroy]
      # payment routes
      resources :payments, only: %i[index show create update destroy] 
      # order items routes
      resources :order_items, only: %i[index show create update destroy] 
      # orders routes
      resources :orders, only: %i[index show create update destroy] 
      # reviews routes
      resources :reviews, only: %i[index show create update destroy] 
      # categories routes
      resources :categories, only: %i[index show create update destroy] do
        get :photo, on: :member
        resources :products, only: [:show] do
          get :photos, on: :member
        end
      end
      # products routes
      resources :products, only: %i[index create update destroy] do
        get :images, on: :member
        # promotions routes
        resources :promotions, only: %i[index show create update destroy] 
      end
      resources :users, only: %i[index show create update destroy] do
        get :photo, on: :member
      end

      get 'current-user', to: 'users#get_user'
    end
  end
  root 'home#index'
end

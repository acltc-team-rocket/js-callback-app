Rails.application.routes.draw do
  get '/', to: 'pages#index'
  get '/foodtrucks', to: 'pages#foodtrucks'
end

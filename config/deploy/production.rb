set :branch, 'master'
set :stage, :production
# Setting RAILS_ENV environment variable on server
set :rails_env, :production
 
set :normalize_asset_timestamps, %{public/images public/javascripts public/stylesheets}
 
role :app, %w{root@67.205.154.207}

set :ssh_options, {
   forward_agent: true,
   user: "root"
}
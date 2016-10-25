set :application, 'glydel-us'                       # application name
set :repo_url, 'git@github.com:pSenthil202/glydel-us.git'   # your repo url
set :deploy_to, '/var/www/glydel-us'
set :scm, :git
set :branch, 'master'
set :keep_releases, 2
set :format, :pretty
set :log_level, :debug
set :pty, true
set :linked_dirs, %w{bin log tmp/pids tmp/cache tmp/sockets vendor/bundle public/system}
set :stages, %w(production development) 
set :default_stage, "development"
set :ssh_options, {:forward_agent => true}
set :user , "root"

# Force rake through bundle exec
SSHKit.config.command_map[:rake] = "bundle exec rake"
 
# Force rails through bundle exec
SSHKit.config.command_map[:rails] = "bundle exec rails"
 
# set :migration_role, 'app' # Defaults to 'db'
# set :assets_roles, [:app] # Defaults to [:web]
 
# Shared directories over different deployments
set :linked_dirs, %w(pids log)

namespace :deploy do
	desc 'Restart application'
	task :restart do
		on roles(:app), in: :sequence, wait: 5 do
			execute "chown -R www-data:www-data /var/www/glydel-us"
			execute "sudo service nginx restart"
		end
	end
 after :finishing, 'deploy:restart'
 after :finishing, 'deploy:cleanup'
end
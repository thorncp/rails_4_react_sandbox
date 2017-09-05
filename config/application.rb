require File.expand_path('../boot', __FILE__)

require "rails"
# Pick the frameworks you want:
require "active_model/railtie"
require "active_job/railtie"
require "active_record/railtie"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_view/railtie"
require "sprockets/railtie"
# require "rails/test_unit/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Rails4ReactSandbox
  class Application < Rails::Application
    config.i18n.enforce_available_locales = true
    config.time_zone = 'Pacific Time (US & Canada)'
    config.active_record.default_timezone = :local
    config.generators do |generate|
      generate.helper false
      generate.javascript_engine false
      generate.test_framework :rspec
      generate.factory_girl
    end
    config.active_record.raise_in_transactional_callbacks = true
  end
end

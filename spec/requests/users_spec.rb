require 'rails_helper'

RSpec.describe "Users", type: :request do
  describe "GET /users" do
    it "works! (now write some real specs)" do
      get users_path
      expect(response).to have_http_status(200)
    end
  end

  describe "GET /users.json" do
    it 'returns an object including an array of Users' do
      user = create(:user, active: true, date_of_birth: Date.new(1995,1,1))
      byebug

      get '/users.json'
      result = JSON.parse(response.body).dig(0)

      expected_response = {
        "id" => user.id,
        "first_name" => user.first_name,
        "last_name" => user.last_name,
        "email" => user.email,
        "date_of_birth" => user.date_of_birth.strftime('1995-01-1'),
        "active" => true
      }

      expect(result).to include(expected_response)
    end
  end
end

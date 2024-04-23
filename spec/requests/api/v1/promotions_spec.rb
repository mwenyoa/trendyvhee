require 'rails_helper'

RSpec.describe "Api::V1::Promotions", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/api/v1/promotions/index"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /show" do
    it "returns http success" do
      get "/api/v1/promotions/show"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /create" do
    it "returns http success" do
      get "/api/v1/promotions/create"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /update" do
    it "returns http success" do
      get "/api/v1/promotions/update"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /destroy" do
    it "returns http success" do
      get "/api/v1/promotions/destroy"
      expect(response).to have_http_status(:success)
    end
  end

end

require 'test_helper'

class IngredientsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get ingredients_index_url
    assert_response :success
  end

  test "should get show" do
    get ingredients_show_url
    assert_response :success
  end

  test "should get new" do
    get ingredients_new_url
    assert_response :success
  end

  test "should get create" do
    get ingredients_create_url
    assert_response :success
  end

  test "should get update" do
    get ingredients_update_url
    assert_response :success
  end

end

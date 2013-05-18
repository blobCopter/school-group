class UsersController < ApplicationController
  def topic
    @user = User.find(params[:id])
    @topic = @user.topics.first
    @groups = @topic.groups
    @list = @topic.list
    respond_to do |format|
      format.html
    end
  end
end

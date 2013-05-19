class UsersController < ApplicationController
  def group
    @group = Group.find(params[:id])
    @users = @group.users
    @tasks = @group.tasks
    respond_to do |format|
      format.html
    end
  end

  def topic
    @user = User.find(params[:id])
 	@users = User.all
    @topic = @user.topics.first
    @groups = @topic.groups
    @list = @topic.list
    respond_to do |format|
      format.html
    end
  end
  
  def toggle_status
    task = Task.find(params[:task_id])
    task.status = params[:status].to_s
    task.save
    respond_to do |format|
      format.json {render :json => '{"success":"true"}'}
    end
  end
end

class UsersController < ApplicationController
  def group
    @group = Group.find(params[:id])
    @topic = Topic.find(@group.topic_id)
    @users = @group.users
    @tasks = @group.tasks
    tasks = Task.where("group_id='#{@group.id}'")
    	total =  tasks.count
    	validated_tasks =  tasks.where("status='1'").count
		if (total > 0)
    		@completion = ((validated_tasks.to_f / total.to_f) * 100.0)
    	else
    		@completions = 0
    	end
    respond_to do |format|
      format.html
    end
  end

  def topic
  	@completions = []
    @user = User.find(params[:id])
 	@users = User.all
    @topic = @user.topics.first
    @groups = @topic.groups
    @groups.each do |group|
    	tasks = Task.where("group_id='#{group.id}'")
    	total =  tasks.count
    	validated_tasks =  tasks.where("status='1'").count
		if (total > 0)
    		@completions << ((validated_tasks.to_f / total.to_f) * 100.0)
    	else
    		@completions << 0
    	end
    	puts "----------------------------------"
    	puts total
    	puts validated_tasks
    	puts((validated_tasks.to_f / total.to_f) * 100.0)
    	puts "----------------------------------"
    end	
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

class HomeController < ApplicationController
  def index
    
  end

  def topic
    respond_to do |format|
      format.html
    end
  end
end

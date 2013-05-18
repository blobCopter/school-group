class User < ActiveRecord::Base
  has_and_belongs_to_many :groups, :join_table => 'users_groups'
  has_many :topics, :dependent => :destroy
  belongs_to :list
  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutableg and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me, :list_id, :group_id
  # attr_accessible :title, :body
end

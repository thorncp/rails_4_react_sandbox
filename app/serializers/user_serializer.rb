class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :date_of_birth, :active
  def date_of_birth
    object.date_of_birth.strftime('%Y-%m-%-d')
  end
end

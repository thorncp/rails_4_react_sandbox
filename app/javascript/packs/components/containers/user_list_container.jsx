import { connect } from 'react-redux'
import UserList from '../user_list'

const getUsers = (users) => {
  return users;
}

const mapStateToProps = state => {
  return {
    users: getUsers(state.users)
  }
}


const UserListContainer = connect(
  mapStateToProps,
)(UserList);

export default UserListContainer

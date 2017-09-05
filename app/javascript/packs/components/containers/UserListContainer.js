import { connect } from 'react-redux'
import UserList from '../UserList'

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
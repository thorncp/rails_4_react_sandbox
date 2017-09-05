import React from 'react'
import PropTypes from 'prop-types'
import User from './user'
const UserList = ({ users }) => (
  <table className="table table-striped">
    <thead>
      <tr>
        <th>First name</th>
        <th>Last name</th>
        <th>Date of birth</th>
        <th>Email</th>
        <th>Active Status</th>
      </tr>
    </thead>
  
    <tbody>
    {users.map(user => (
      <User key={user.id} {...user} />
    ))}
    </tbody>
  </table>
)

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      active: PropTypes.bool.isRequired,
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      date_of_birth: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onUserClick: PropTypes.func.isRequired
}

export default UserList

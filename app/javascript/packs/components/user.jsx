import React from 'react'
import PropTypes from 'prop-types'

const User = ({ first_name, last_name, date_of_birth, email, active }) => (
  <tr>
    <td>{first_name}</td>
    <td>{last_name}</td>
    <td>{date_of_birth}</td>
    <td>{email}</td>
    <td>{active}</td>
  </tr>
);

User.propTypes = {
  active: PropTypes.bool.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  date_of_birth: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default User

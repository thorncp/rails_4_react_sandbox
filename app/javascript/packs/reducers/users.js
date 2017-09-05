const initialState = [
    {
      "id": 1,
      "first_name": "david",
      "last_name": "moore",
      "email": "davidmoore@example.com",
      "date_of_birth": "1995-01-01",
      "active": true
    },
    {
      "id": 2,
      "first_name": "chris",
      "last_name": "thorn",
      "email": "thorn@example.com",
      "date_of_birth": "1988-01-01",
      "active": false
    }
  ]

function users(state = initialState, action) {
  switch (action.type) {
    case "SHOW_USERS":
      return action.users;
    default:
      return state
  }
}

export default users;
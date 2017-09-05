import * as actions from '../../actions/user_actions'

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const users = [
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
    const expectedAction = {
      type: 'SHOW_USERS',
      users
    };
    
    expect(actions.showUsers(users)).toEqual(expectedAction)
  })
})

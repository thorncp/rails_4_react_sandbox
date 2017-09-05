import reducer from '../../reducers/users'

describe('users reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  });
  
  it('should handle SHOW_USERS', () => {
    
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
    ];
    const state = [];
    const action = {type: "SHOW_USERS", users: users};
    
    const result = reducer(state, action);
    
    expect(result).toEqual(users)
  })
});


import reducer from '../../reducers/index'

describe('root reducer', () => {
  it('should return the initial state', () => {
    const initialState = {};
    const action = { type: '@@INIT' };
    
    const result = reducer(initialState, action);
    
    expect(result).toEqual( {
      users: [] }
      )
  });
  
});


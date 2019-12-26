const initialState = {
 mode: 0
};

export function mode (state = initialState, action) {
  switch (action.type) {
    case 'SET_MODE':
        return { mode: action.payload }
    default:
        return state
    } 
} 


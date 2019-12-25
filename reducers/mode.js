const initialState = {
 mode: "none"
};

export function mode (state = initialState, action) {
  switch (action.type) {
    case 'SET_MODE':
        return { mode: action.payload }
    default:
        return state
    } 
} 


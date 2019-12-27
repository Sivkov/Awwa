
const initialState = { images:
   [    'https://i.pinimg.com/736x/ca/68/f3/ca68f32339e7f98938372fb49d112b15.jpg',
        "https://i.pinimg.com/736x/99/55/1c/99551c8e92be62a59c872ff03ca3c21b.jpg",
        "https://i.pinimg.com/736x/ba/6d/31/ba6d313f8ac1fcf38dcab842ad48f791.jpg"
       ] 
};


export function images (state = initialState, action) {
    switch (action.type) {
     
      case 'SET_SLIDER':
          const adds=action.payload
          return {    ...state,
          images: [...new Set (state.images.concat(adds))]  }
      default:
        return state
    }
}

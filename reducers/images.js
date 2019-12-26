
const initialState = { images:
   [    'https://i.pinimg.com/736x/ca/68/f3/ca68f32339e7f98938372fb49d112b15.jpg',
        'https://i.pinimg.com/originals/f3/3a/a5/f33aa58e90a73c7641f1914eaf867e8f.jpg',
        "https://i.pinimg.com/736x/99/55/1c/99551c8e92be62a59c872ff03ca3c21b.jpg",
        "https://i.pinimg.com/736x/d1/3a/54/d13a54d4bf3e7003cde01f23132fc1f2.jpg",
        "https://i.pinimg.com/736x/ba/6d/31/ba6d313f8ac1fcf38dcab842ad48f791.jpg"
       ] 
};


export function images (state = initialState, action) {
    switch (action.type) {
     
      case 'SET_SLIDER':
          const adds=action.payload
          return {  ...state,
            images: state.images.concat(adds) }
      default:
        return state
    }
}

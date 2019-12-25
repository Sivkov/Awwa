
const initialState = { images:
   [ 
        'https://i.pinimg.com/236x/ea/be/f0/eabef0c98a55ec437d9a3abb88740363.jpg',
        'http://www.fonstola.ru/pic/201904/320x480/fonstola.ru-325380.jpg',
        'https://thumb-p4.xhcdn.com/a/zhRGiofc2zM0kSObSZkiAA/000/198/199/134_1000.jpg'] 
};


export function images (state = initialState, action) {
    switch (action.type) {
      case 'SET_SLIDER':
        return { ...state,   images:action.payload }
      default:
        return state
    }
  }
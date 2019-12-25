export function setSlider (images) {
    console.log ("добавляем картинки с сайта")
    return {
        type:'SET_SLIDER',
        payload: images
    }
}

export function setMode (mode) {
    console.log ("выбираем режим Awwa")
    return {
        type:'SET_MODE',
        payload: mode
    }
}
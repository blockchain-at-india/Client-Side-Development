$(document).ready(() => {
  $('.toggle-button').click(() => {
    $('.navlinks').toggleClass('show')
  })

  new Siema({
    selector: '.cards',
    duration: 200,
    easing: 'ease-out',
    perPage: {
      0: 1,
      1190: 3
    },
    startIndex: 0,
    draggable: true,
    multipleDrag: true,
    threshold: 20,
    loop: true,
    rtl: false,
    onInit: () => {},
    onChange: () => {}
  })

  new Siema({
    selector: '.profile-cards',
    duration: 200,
    easing: 'ease-out',
    perPage: {
      1: 1,
      1190: 3
    },
    startIndex: 0,
    draggable: true,
    multipleDrag: true,
    threshold: 20,
    loop: true,
    rtl: false,
    onInit: () => {},
    onChange: () => {}
  })
})

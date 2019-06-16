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

  var test = new Siema({
    selector: '.test',
    duration: 200,
    easing: 'ease-out',
    perPage: 1,
    startIndex: 0,
    draggable: true,
    multipleDrag: true,
    threshold: 20,
    loop: true,
    rtl: false,
    onInit: () => {},
    onChange: () => {}
  })

  $('.left-arrow').click(() => {
    test.prev()
  })

  $('.right-arrow').click(() => {
    test.next()
  })
})

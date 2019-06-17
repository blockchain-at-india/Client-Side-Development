document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.toggle-button')
  const navLinks = document.querySelector('.navlinks')
  toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('show')
  })

  const cards = new Siema({
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

  const profileCards = new Siema({
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

  const test = new Siema({
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
})

//   $('.left-arrow').click(() => {
//     test.prev()
//   })

//   $('.right-arrow').click(() => {
//     test.next()
//   })
// })

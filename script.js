let cards, profileCards, test

document.addEventListener('DOMContentLoaded', () => {
  const leftArrow = document.querySelectorAll('.left-arrow')
  const rightArrow = document.querySelectorAll('.right-arrow')
  const toggleButton = document.querySelector('.toggle-button')
  const navLinks = document.querySelector('.navlinks')
  toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('show')
  })


  cards = new Siema({
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

  test = new Siema({
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
  profileCards = new Siema({
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

  function testLeft() {
    test.prev()
  }
  function testRight() {
    test.next()
  }

  function profileLeft() {
    profileCards.prev()
  }
  function profileRight() {
    profileCards.next()
  }

  leftArrow[0].addEventListener('click', testLeft, false)
  rightArrow[0].addEventListener('click', testRight, false)

  leftArrow[1].addEventListener('click', profileLeft, false)
  rightArrow[1].addEventListener('click', profileRight, false)
})




//   $('.left-arrow').click(() => {
//     test.prev()
//   })

//   $('.right-arrow').click(() => {
//     test.next()
//   })
// })

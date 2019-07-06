let topChapters, ourTeam, blogs

document.addEventListener('DOMContentLoaded', () => {
  // [0] == Top chapters, [1] == Our Team
  const leftArrows = document.querySelectorAll('.arrow-left')
  const rightArrows = document.querySelectorAll('.arrow-right')
  console.log(leftArrows, rightArrows)
  // Responosive Navbar
  const toggleButton = document.querySelector('.toggle-button')
  const navLinks = document.querySelector('.navlinks')
  toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('show')
  })

  // Top chapters
  topChapters = new Siema({
    selector: '.cards',
    duration: 400,
    easing: 'ease-out',
    perPage: {
      0: 1,
      948: 3,
      1500: 5
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

  // Our Team
  ourTeam = new Siema({
    selector: '.all-team',
    duration: 400,
    easing: 'ease-out',
    perPage: {
      0: 1,
      948: 3,
      1500: 5
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

  // blogs = new Siema({
  //   selector: '.blog-cards',
  //   duration: 400,
  //   easing: 'ease-out',
  //   perPage: {
  //     1: 1,
  //     1190: 3
  //   },
  //   startIndex: 0,
  //   draggable: true,
  //   multipleDrag: true,
  //   threshold: 20,
  //   loop: true,
  //   rtl: false,
  //   onInit: () => {},
  //   onChange: () => {}
  // })

  function left(section) {
    section.prev()
  }

  function right(section) {
    section.next()
  }

  // leftArrows[0].addEventListener('click', () => left(topChapters), false)
  // leftArrows[1].addEventListener('click', () => left(blogs), false)
  // leftArrows[2].addEventListener('click', () => left(ourTeam), false)

  leftArrows[0].addEventListener('click', () => left(topChapters), false)
  leftArrows[1].addEventListener('click', () => left(ourTeam), false)

  // rightArrows[0].addEventListener('click', () => right(topChapters), false)
  // rightArrows[1].addEventListener('click', () => right(blogs), false)
  // rightArrows[2].addEventListener('click', () => right(ourTeam), false)

  rightArrows[0].addEventListener('click', () => right(topChapters), false)
  rightArrows[1].addEventListener('click', () => right(ourTeam), false)
})

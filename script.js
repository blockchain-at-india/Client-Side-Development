let topChapters, testimonials, ourTeam, blogs

document.addEventListener('DOMContentLoaded', () => {
  const leftArrow = document.querySelectorAll('.left-arrow')
  const rightArrow = document.querySelectorAll('.right-arrow')
  const toggleButton = document.querySelector('.toggle-button')
  const navLinks = document.querySelector('.navlinks')
  let teamMembers = document.querySelectorAll('div[data-member-bio]')
  toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('show')
  })

  topChapters = new Siema({
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

  ourTeam = new Siema({
    selector: '.all-team',
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

  testimonials = new Siema({
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
  blogs = new Siema({
    selector: '.blog-cards',
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
    testimonials.prev()
  }
  function testRight() {
    testimonials.next()
  }

  function profileLeft() {
    ourTeam.prev()
  }
  function profileRight() {
    ourTeam.next()
  }

  function blogsLeft() {
    blogs.prev()
  }
  function blogsRight() {
    blogs.next()
  }

  leftArrow[0].addEventListener('click', testLeft, false)
  rightArrow[0].addEventListener('click', testRight, false)

  leftArrow[1].addEventListener('click', profileLeft, false)
  rightArrow[1].addEventListener('click', profileRight, false)

  leftArrow[2].addEventListener('click', blogsLeft, false)
  rightArrow[2].addEventListener('click', blogsRight, false)

  teamMembers = [...teamMembers]
  console.log(teamMembers)

  document.addEventListener('DOMContentLoaded', () => {})

  teamMembers.map((member) => {
    member.addEventListener('click', () => {
      let title = member.getAttribute('data-name').replace('-', ' ')
      title = title.charAt(0).toUpperCase() + title.slice(1)

      new Swal({
        title: title,
        html: `<h3 style="font-family: 'Roboto'"> ${member.getAttribute('data-member-bio')}</h3>`,
        confirmButtonColor: '#FDCA3E',
        customClass: {
          fadeInUp: 'animated fadeInUp'
        },

        animation: false
      })
    })
  })
})

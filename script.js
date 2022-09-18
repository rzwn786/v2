const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navLink = document.getElementsByClassName('nav-link')[0]


toggleButton.addEventListener('click', () => {
  navLink.classList.toggle('active');
})


const observer= new IntersectionObserver(entries =>{
  entries.forEach(entry =>{
    if(entry.isIntersecting){
      document.querySelector('.about-me-container').classList.add("fadeInLeft");
      document.querySelector('.skill-container').classList.add("fadeInRight");
    }
  })
})
observer.observe(document.querySelector('.wrapper'));













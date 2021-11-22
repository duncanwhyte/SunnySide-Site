// SELECTORS
const mobileNav = document.querySelector("#mobile-nav")
const backDrop = document.querySelector(".backdrop")
const mobileButton = document.querySelector(".mobile-button")
const creatives = document.querySelector(".creatives-title")
const arrowContainer = document.querySelector(".arrow-down__container")

// EVENT LISTENERS
mobileButton.addEventListener("click", openNavBar)
backDrop.addEventListener("click" , closeNav)
// FUNCTIONS
function openNavBar() {
    mobileNav.classList.add("open")
    backDrop.classList.add("open")
    arrowContainer.classList.add("closed")
    creatives.classList.add("closed")

}
function closeNav() {
    if(backDrop) {
      mobileNav.classList.remove("open")
      backDrop.classList.remove("open")
      arrowContainer.classList.remove("closed")
      creatives.classList.remove("closed")
      
    
    }
}
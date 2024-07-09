import { useState } from "react";


function App() {
  const [isSelected, setIsSelected] = useState(false)
  const [activeBurgerName, setActiveBurgerName] = useState('navbar-burger')
  const [activeMenuName, setActiveMenuName] = useState('navbar-menu')
  const handleHamburgerButton = () => {
    setIsSelected(!isSelected);
    if (isSelected) {
      setActiveBurgerName('navbar-burger is-active')
      setActiveMenuName('navbar-menu is-active')
    }else {
      setActiveBurgerName('navbar-burger')
      setActiveMenuName('navbar-menu ')
    }
  }
  return (
    <>
     <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <svg width="640" height="160" viewBox="0 0 640 160" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z" fill="#00D1B2"/>
</svg>

    </a>

    <a role="button" class={activeBurgerName} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={handleHamburgerButton}>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class={activeMenuName}>
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Gallery
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            Services
          </a>
          {/* <a class="navbar-item">
            Contact
          </a> */}
          <hr class="navbar-divider"></hr>
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Contact Us</strong>
          </a>
          {/* <a class="button is-light">
            Log in
          </a> */}
        </div>
      </div>
    </div>
  </div>
</nav>

      <section class="hero is-link is-fullheight-with-navbar">
        <div class="hero-body">
          <p class="title">Fullheight hero with navbar</p>
        </div>
      </section>
      <section class="hero is-link is-fullheight-with-navbar">
        <div class="hero-body">
          <p class="title">Fullheight hero with navbar</p>
        </div>
      </section>
    </>
  );
}

export default App;

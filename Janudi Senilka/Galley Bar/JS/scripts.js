/*!
* Start Bootstrap - Creative v7.0.5 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});




// Gallery bar
(function () {
  slidesPlugin();

  function slidesPlugin(indexOfActiveSlide = 0) {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const numberOfLastSlide = slides.length - 1;

    setActiveSlide(indexOfActiveSlide, slides);

    slides.forEach((slide) => {
      slide.addEventListener("click", () => {
        console.log("Mouse click:", slide);

        indexOfActiveSlide = getOrderOfSlide(slide);

        setActiveSlide(indexOfActiveSlide, slides);
      });
    });

    slider.addEventListener("wheel", (event) => {
      event.preventDefault();

      const mouseWheel = Math.sign(event.deltaY);

      const wheelDirection = mouseWheel > 0 ? "up" : "down";
      const slideDirection = mouseWheel > 0 ? "right" : "left";

      console.log(`Mouse wheel: scroll ${wheelDirection}`);

      changeSlide(slideDirection, numberOfLastSlide, slides);
    });

    function changeSlide(direction, numberOfLastSlide, slides) {
      switch (direction) {
        case "right":
          indexOfActiveSlide++;
          if (indexOfActiveSlide > numberOfLastSlide) {
            indexOfActiveSlide = 0;
          }
          break;
        case "left":
          indexOfActiveSlide--;
          if (indexOfActiveSlide < 0) {
            indexOfActiveSlide = numberOfLastSlide;
          }
          break;
      }

      setActiveSlide(indexOfActiveSlide, slides);
    }

    function setActiveSlide(indexOfNewActivSlide, slides) {
      clearActiveClasses(slides);

      slides.forEach((slide) => {
        if (getOrderOfSlide(slide) === indexOfNewActivSlide) {
          slide.classList.add("slide_active");
        } else {
          const caption = slide.querySelector(".slide__caption");
          caption.classList.add("slide__caption_visuall-hidden");
        }
      });

      console.log("Active slide index:", indexOfNewActivSlide);
      console.log("===================================");
    }

    function getOrderOfSlide(slide) {
      return parseInt(slide.dataset.index, 10);
    }

    function clearActiveClasses(slides) {
      slides.forEach((slide) => {
        slide.classList.remove("slide_active");

        const caption = slide.querySelector(".slide__caption");
        caption.classList.remove("slide__caption_visuall-hidden");
      });
    }
  }
})();

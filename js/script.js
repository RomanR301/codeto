document.addEventListener("DOMContentLoaded", function() {
    let burger = document.querySelector(".burger");
    let header = document.querySelector(".header");
    burger.addEventListener("click", function () {
        header.classList.toggle("js-nav-open");
    }); 
    window.addEventListener('scroll', function() { 
        scrollpos = window.scrollY;
        if (scrollpos >= 50) { 
            header.classList.add("scroll")
        } else {
            header.classList.remove("scroll")
        }
    })

    let langToggle = document.querySelector('.lang-select-wrapper') !== null;
    if (langToggle) {
        (document).querySelector('.lang-select-wrapper').addEventListener('click', function() {
            this.querySelector('.lang-select').classList.toggle('open');
            for (const option of document.querySelectorAll(".lang-option")) {
                option.addEventListener('click', function() {

                    if (!this.classList.contains('selected')) {
                        this.parentNode.querySelector('.lang-option.selected').classList.remove('selected');
                        this.classList.add('selected');
                        this.closest('.lang-select').querySelector('.lang-select__trigger span').textContent = this.textContent;
                    }
                })
            }
            window.addEventListener('click', function(e) {
                const select1 = document.querySelector('.lang-select')
                if (!select1.contains(e.target)) {
                    select1.classList.remove('open');
                }
            });
        })
    }

    const links = document.querySelectorAll(".scroll-to");

    for (const link of links) {
      link.addEventListener("click", clickHandler);
    }
    
    function clickHandler(e) {
      e.preventDefault();
      const href = this.getAttribute("href");
      const offsetTop = document.querySelector(href).offsetTop - 100;
      header.classList.remove("js-nav-open");
      scroll({
        top: offsetTop,
        behavior: "smooth"
      });
    }
});





(function(){
    var slider = document.getElementsByClassName("slider")[0],
        insideSlides = document.getElementsByClassName("inside_slide"),
        nav = document.getElementsByClassName("celda"),
        activeSlider = 0,
        porcentages = [0, 15, 30, 45, 60, 75, ,90, 105, 120, 135];

    const nextBtn = document.querySelector('a.next');
    const prevBtn = document.querySelector('a.previous');

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', function(ev){
            ev.preventDefault();
            activeSlider++;
            nextSlide(activeSlider)
            
        });

        prevBtn.addEventListener('click', function(ev){
            ev.preventDefault();
            activeSlider--;
            nextSlide(activeSlider);
        });
    }

    function nextSlide(number) {
        nextBtn.style.display = "block";
        prevBtn.style.display = "block";

        if (number == 0) {
            prevBtn.style.display = "none";
            insideSlides[number].classList.add("slide-in");
        } else if ( number == insideSlides.length) {
            nextBtn.style.display = "none";
        }

        for (var inside_slide of insideSlides) {
            inside_slide.className = "inside_slide ";
        }

        for (var celda of nav) {
            // dot.className = "celda";
        }

        insideSlides[number].classList.add("active");
        nav[number].classList.add('active-celda');
        slider.style.backgroundPosition = porcentages[number] + "%";
        
    }
})();
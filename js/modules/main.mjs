document.addEventListener('DOMContentLoaded', () => {
    const promo = document.querySelector('.promo');
    const header = document.querySelector('.header');
    const scrollItems = document.querySelectorAll('.scrollItems');

    const scrollAnim = () => {
        let windowCenter = (window.innerHeight / 2) + window.scrollY;
        scrollItems.forEach (el => {
            let scrollOffset = el.offsetTop + el.offsetHeight / 4;
            if (windowCenter >= scrollOffset) {
                el.classList.add('anim-class');
            }
        });
    };

    const headerFixed = () => {
        let scrollTop = window.scrollY;
        let promoCenter = promo.offsetHeight / 2;

        if(scrollTop >= promoCenter){
                header.classList.add('fixed');
        }
        else {
                header.classList.remove('fixed')
        
        }
    };
    window.addEventListener('scroll', function () {
        headerFixed();
        scrollAnim();
        
    });
    scrollAnim();
})






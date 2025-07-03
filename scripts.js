// Banner animado con jQuery
    $(document).ready(function () {
        let index = 0;
        const images = $('.banner img');
        setInterval(() => {
        images.eq(index).fadeOut(1000);
        index = (index + 1) % images.length;
        images.eq(index).fadeIn(1000);
        }, 4000);
    });
    
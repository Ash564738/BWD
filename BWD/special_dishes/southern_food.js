$(document).ready(function() {
    const imageSets = [
        [
            'https://lp-cms-production.imgix.net/2019-06/84631981.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4',
            'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/20/16/ho-chi-minh-city.jpg',
            'https://www.tripsavvy.com/thmb/fagy3MUvePhi1pySJoKHRfIXHLI=/4500x2948/filters:no_upscale():max_bytes(150000):strip_icc()/landmark-81-ho-chi-minh-city-d9d94fbf04094c938501eb66d7a47ced.jpg',
            'https://th.bing.com/th/id/R.9267651f8e1dfd6ce4667bfc5a26ab42?rik=kJjngDQZ9rPLMw&riu=http%3a%2f%2ffoto.wuestenigel.com%2fwp-content%2fuploads%2fapi%2fsunset-view-of-ho-chi-minh-city-with-sun-reflection-in-the-water.jpeg&ehk=nWic1YGZUH%2ffcCP9BHOdxyyhyyc4IXKiBpZxhD7eG0w%3d&risl=&pid=ImgRaw&r=0',
            'https://www.vietnam-visaonline.org/wp-content/uploads/2022/09/Ho-Chi-Minh-City.jpeg',
            'https://a.cdn-hotels.com/gdcs/production60/d457/8cda93a6-0c14-44df-90ca-05a51a499de6.jpg',
            'https://www.tripsavvy.com/thmb/qwy_otpnP2gb6Rl6_Y1DlTG_Q5g=/3768x2085/filters:fill(auto,1)/saigon-ho-chi-minh-city-vietnam-5c489f50c9e77c000112d22b.jpg',
        ],
        [
            'https://th.bing.com/th/id/R.bd33662ec428eec0ab0d22ce37798b8e?rik=LUlrxLrW4jybmg&pid=ImgRaw&r=0',
            'https://www.checkfelix.com/rimg/dimg/77/42/12074bc2-city-41958-1723b657164.jpg?width=1366&height=768&xhint=2139&yhint=1867&crop=true',
            'https://tourcantho.vn/wp-content/uploads/khu-du-lich-can-tho.jpg',
            'https://leaveyourdailyhell.com/wp-content/uploads/2019/08/Can-Tho.jpg',
            'https://canthorivertour.com/upload/admin/menu/my-tho-tours-from-can-tho.jpg',
            'https://th.bing.com/th/id/R.9bf239e1a8ecaf65ae1a55959221d2df?rik=ytkPATn6LJZ8yw&riu=http%3a%2f%2fcanthorivertour.com%2fupload%2fadmin%2fmenu%2fcan-tho-info.jpg&ehk=z8fjjoucu5dER1xroQukRyCWFgEQwDUl4fbGQJMRqRA%3d&risl=&pid=ImgRaw&r=0',
            'https://th.bing.com/th/id/R.2850d4a7762ae3eb40d24d3dbb8fca19?rik=vN0O%2fv0vhlxOsQ&riu=http%3a%2f%2fmotorbiketoursinvietnam.com%2fwp-content%2fuploads%2f2014%2f12%2fCan-Tho-City.jpg&ehk=5fxTsGyXl%2b%2fT42HFaPK0kGkDxmazeQN92XPEIGPIY48%3d&risl=&pid=ImgRaw&r=0',
        ]
    ];
    let currentSlideIndex = 0;
    let currentImageIndex = 0;
    function updateBackgroundImage() {
        $('.img-slide').css('backgroundImage', `url(${imageSets[currentSlideIndex][currentImageIndex]})`);
    }
    updateBackgroundImage();
    function changeSlide(slideIndex) {
        currentSlideIndex = slideIndex;
        currentImageIndex = 0;
        updateBackgroundImage();
    }
    setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % imageSets[currentSlideIndex].length;
        updateBackgroundImage();
    }, 2500);
    $('#prevButton').click(function() {
        const prevSlideIndex = (currentSlideIndex - 1 + imageSets.length) % imageSets.length;
        changeSlide(prevSlideIndex);
    });
    $('#nextButton').click(function() {
        const nextSlideIndex = (currentSlideIndex + 1) % imageSets.length;
        changeSlide(nextSlideIndex);
    });
});
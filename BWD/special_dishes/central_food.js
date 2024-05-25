$(document).ready(function() {
    const imageSets = [
        [
            'https://h3qvn.com/hinh-phong-canh-dep-viet-nam/imager_18_27936_700.jpg',
            'https://aavietnamtravel.com/wp-content/uploads/2019/06/unnamed-2-2.png',
            'https://bvhttdl.mediacdn.vn/291773308735864832/2024/5/9/0905quangnam1-1715225632832-17152256346321948579966.jpg',
            'https://img.thuthuatphanmem.vn/uploads/2018/10/26/canh-dep-viet-nam_055420227.jpg',
            'https://static.vinwonders.com/2022/11/du-lich-bien-quang-nam-2.jpg',
            'https://ik.imagekit.io/tvlk/blog/2022/02/dia-diem-du-lich-quang-nam-cover.jpeg',
            'https://cdn.vietnammoi.vn/171464242508312576/2021/7/29/dji0748phuong-thao-1627556660768-16275566612761986553608.jpg',
        ],
        [
            'https://upload.wikimedia.org/wikipedia/commons/f/f5/Ly_Son_Islands_%2814817868968%29.jpg',
            'https://vietnamtour.com/images/photos/asia/vietnam-quangngai-6.jpg?t=1593410820',
            'https://th.bing.com/th/id/R.1d7611f7f3bf7840c0e942b94ee6e94d?rik=gFwIBZYbdF%2fx9A&riu=http%3a%2f%2fbaodanang.vn%2fenglish%2fdataimages%2f202002%2foriginal%2fimages1548274_4.jpg&ehk=FOGxH3R4REHSMYxsv4ETx9BVaWZ0Y4s3Gnc0oi3ZHgs%3d&risl=&pid=ImgRaw&r=0',
            'https://i.ex-cdn.com/vovgiaothong.vn/files/f1/Sites/1/media/huy.le/images/Ba%25CC%2583i-bie%25CC%2582%25CC%2589n-My%25CC%2583-Khe%25CC%2582-%25C4%2590a%25CC%2580-Na%25CC%2586%25CC%2583ng3(1).jpg',
            'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/08/canh-dep-dao-ly-son-21.jpg',
            'https://www.chudu24.com/wp-content/uploads/2017/01/du-lich-quang-ngai-1-3.jpg',
            'https://cdn.vietnammoi.vn/171464242508312576/2021/1/4/nui-thien-an-10-1609761423868143761131.jpg',
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
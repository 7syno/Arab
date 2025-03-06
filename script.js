const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg',
    'images/image5.jpg',
    'images/image6.jpg',
    'images/image7.jpg',
    'images/image8.jpg',
    'images/image9.jpg',
    'images/image10.jpg',
    'images/image11.jpg',
    'images/image12.jpg',
    'images/image13.jpg',
    'images/image14.jpg',
    'images/image15.jpg',
];

let currentIndex = 0;

function showRandomImage() {
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    document.getElementById('randomImage').src = images[currentIndex];
    currentIndex++;
}

// بدء تشغيل الموسيقى عند تحميل الصفحة
window.onload = function() {
    const music = document.getElementById('backgroundMusic');
    music.play();
    
    // عرض الصورة الأولى
    showRandomImage();

    // تغيير الصورة كل 3 ثوانٍ (يمكنك تعديل الوقت)
    setInterval(showRandomImage, 3000);
};

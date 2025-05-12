// بيانات الآيات حسب المشاعر
const verses = {
    "القلق": [
        { text: "أَلَا إِنَّ أَوْلِيَاءَ اللَّهِ لَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ", reference: "يونس: 62", audio: "audio/yunus_62.mp3" },
        // آيات أخرى...
    ],
    "الحزن": [
        { text: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا", reference: "الشرح: 5", audio: "audio/sharh_5.mp3" },
    ],
    "السعادة": [
        { text: "وَمَنْ يَتَّقِ اللَّهَ يَجْعَلْ لَهُ مَخْرَجًا", reference: "الطلاق: 2", audio: "audio/talaq_2.mp3" },
    ],
    "الوحدة": [
        { text: "وَهُوَ مَعَكُمْ أَيْنَ مَا كُنْتُمْ", reference: "الحديد: 4", audio: "audio/hadid_4.mp3" },
    ],
    "الخوف": [
        { text: "إِنَّ اللَّهَ مَعَنَا", reference: "التوبة: 40", audio: "audio/tawbah_40.mp3" },
    ],
    "التعب النفسي": [
        { text: "وَلَا تَيْأَسُوا مِنْ رَوْحِ اللَّهِ", reference: "يوسف: 87", audio: "audio/yusuf_87.mp3" },
    ],
    "الذنب": [
        { text: "إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا", reference: "الزمر: 53", audio: "audio/zumar_53.mp3" },
    ],
    "الضعف": [
        { text: "وَكَانَ اللَّهُ قَوِيًّا عَزِيزًا", reference: "الأحزاب: 25", audio: "audio/ahzab_25.mp3" },
    ],
    "الضياع": [
        { text: "وَوَجَدَكَ ضَالًّا فَهَدَى", reference: "الضحى: 7", audio: "audio/duha_7.mp3" },
    ],
    "الندم": [
        { text: "وَتُوبُوا إِلَى اللَّهِ جَمِيعًا", reference: "النور: 31", audio: "audio/nur_31.mp3" },
    ],
    "الشك": [
        { text: "إِنَّ الدِّينَ عِنْدَ اللَّهِ الْإِسْلَامُ", reference: "آل عمران: 19", audio: "audio/al_imran_19.mp3" },
    ],
    "الهم": [
        { text: "وَمَنْ أَعْرَضَ عَنْ ذِكْرِي فَإِنَّ لَهُ مَعِيشَةً ضَنْكًا", reference: "طه: 124", audio: "audio/taha_124.mp3" },
    ],
    "الفراغ": [
        { text: "فَإِذَا فَرَغْتَ فَانْصَبْ", reference: "الشرح: 7", audio: "audio/sharh_7.mp3" },
    ],
    "الرضا": [
        { text: "رَضِيَ اللَّهُ عَنْهُمْ وَرَضُوا عَنْهُ", reference: "المائدة: 119", audio: "audio/maidah_119.mp3" },
    ],
    "الطمأنينة": [
        { text: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ", reference: "الرعد: 28", audio: "audio/rad_28.mp3" },
    ],
    "الإيمان": [
        { text: "إِنَّمَا الْمُؤْمِنُونَ الَّذِينَ آمَنُوا بِاللَّهِ وَرَسُولِهِ", reference: "الحجرات: 15", audio: "audio/hujurat_15.mp3" },
    ],
    "الأمل": [
        { text: "وَلَا تَقْنَطُوا مِنْ رَحْمَةِ اللَّهِ", reference: "الزمر: 53", audio: "audio/zumar_53.mp3" },
    ],
    "الحب في الله": [
        { text: "إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ سَيَجْعَلُ لَهُمُ الرَّحْمَنُ وُدًّا", reference: "مريم: 96", audio: "audio/maryam_96.mp3" },
    ]
};

// آيات الطمأنينة العشوائية (مؤقتة، يمكنك استبدالها)
const reassuranceVerses = [
    { text: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ", reference: "الرعد: 28", audio: "audio/rad_28.mp3" },
    { text: "هُوَ الَّذِي أَنْزَلَ السَّكِينَةَ فِي قُلُوبِ الْمُؤْمِنِينَ", reference: "الفتح: 4", audio: "audio/fath_4.mp3" },
    // أضف المزيد لاحقًا
];

// بيانات المقرئين مع صور placeholder
const reciters = [
    { name: "عبد الباسط عبد الصمد", image: "https://picsum.photos/60/60?random=1" },
    { name: "محمد صديق المنشاوي", image: "https://picsum.photos/60/60?random=2" },
    { name: "مشاري راشد العفاسي", image: "https://picsum.photos/60/60?random=3" },
    { name: "ماهر المعيقلي", image: "https://picsum.photos/60/60?random=4" },
];

// تحميل المقرئين
function loadReciters() {
    const reciterGrid = document.getElementById('reciter-grid');
    reciters.forEach(reciter => {
        const reciterDiv = document.createElement('div');
        reciterDiv.classList.add('reciter-option');
        reciterDiv.innerHTML = `
            <img src="${reciter.image}" alt="${reciter.name}">
            <span>${reciter.name}</span>
        `;
        reciterDiv.addEventListener('click', () => selectReciter(reciter.name));
        reciterGrid.appendChild(reciterDiv);
    });
}

// اختيار المقرئ
let selectedReciter = reciters[0].name;
function selectReciter(name) {
    selectedReciter = name;
    document.querySelectorAll('.reciter-option').forEach(option => {
        option.style.backgroundColor = option.querySelector('span').textContent === name ? '#d0d0d0' : '';
    });
}

// عرض الآية
function displayVerse(verse) {
    const verseSection = document.getElementById('verse-section');
    const verseText = document.getElementById('verse-text');
    const verseReference = document.getElementById('verse-reference');
    const verseAudio = document.getElementById('verse-audio');

    verseText.textContent = verse.text;
    verseReference.textContent = verse.reference;
    verseAudio.src = verse.audio; // يحتاج تعديل حسب المقرئ
    verseSection.style.display = 'block';

    // إضافة زر المشاركة
    const shareBtn = document.querySelector('.share-btn');
    shareBtn.onclick = () => {
        const shareText = `${verse.text} (${verse.reference})`;
        if (navigator.share) {
            navigator.share({
                title: 'رسالة من الله',
                text: shareText,
                url: window.location.href
            }).catch(err => console.error('Error sharing:', err));
        } else {
            alert('المشاركة غير مدعومة، انسخ النص: ' + shareText);
        }
    };
}

// اختيار آية عشوائية
function getRandomVerse(versesArray) {
    return versesArray[Math.floor(Math.random() * versesArray.length)];
}

// أزرار المشاعر
document.querySelectorAll('.emotion-btn').forEach(button => {
    button.addEventListener('click', () => {
        const emotion = button.dataset.emotion;
        const verse = getRandomVerse(verses[emotion]);
        displayVerse(verse);
    });
});

// زر الآية العشوائية
document.querySelector('.random-verse-btn').addEventListener('click', () => {
    const verse = getRandomVerse(reassuranceVerses);
    displayVerse(verse);
});

// تبديل الوضع
document.querySelector('.toggle-mode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// تحميل المقرئين عند بدء الصفحة
window.onload = loadReciters;

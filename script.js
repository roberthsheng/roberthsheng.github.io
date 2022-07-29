var hellos = [
    'Hallo',
    'Mirë',
    'ታዲያስ',
    'مرحبا',
    'Салам',
    'নমস্কার',
    'Zdravo',
    'Здравей',
    'Здрасти',
    'Bok',
    'ahoj',
    'Hej',
    'Hallo',
    'Hello',
    'Saluton',
    'Tere',
    'سلام',
    'Bula',
    'Terve',
    'Bonjour',
    'Salut',
    'Hallo',
    'Γεια',
    'Aloha',
    'שלום',
    'नमस्ते',
    'Sziasztok',
    'Szia',
    'Halo',
    'Dia',
    'Dia',
    'Salve',
    'Ciao',
    'こんにちは',
    'ನಮಸ್ಕಾರ',
    'ជំរាបសួរ',
    '안녕하세요',
    '안녕',
    'ສະບາຍດີ',
    'Salvete',
    'Salve',
    'Sveiki',
    'Hallau',
    'Sveiki',
    'Добар',
    'Selamat',
    'Selamat',
    'Ħelow',
    '你好',
    'Kia',
    'Hei',
    'ନମସ୍କାର',
    'Cześć',
    'Oi',
    'alo',
    'Здравствуйте',
    'Haló',
    'Здраво',
    '侬好',
    'ahoj',
    'Hola',
    'Grüss',
    'Hujambo',
    'Hej',
    'Hoi',
    'Grüezi',
    'Grüezi',
    'வனக்கம்',
    'నమస్కారం',
    'สวัสดีค่ะ',
    'สวัสดีครับ',
    'Merhaba',
    'Xin',
    'Womenjeka',
    'שלום',
]

function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

var shuffled_hellos = shuffle(hellos);
var i = 0;

document.addEventListener("DOMContentLoaded", function(){
    if(window.innerWidth <= 1000) {
        document.getElementById('name').innerText = "\n" + document.getElementById('name').innerText;
    }
    var helloSpan = document.getElementById('hello');
    function babel() {
        helloSpan.style.opacity = 0;
        setTimeout(function(){ helloSpan.innerText = shuffled_hellos[i];i++; if(i==shuffled_hellos.length)i=0; }, 1000);
        setTimeout(function(){ helloSpan.style.opacity = 1; }, 1000);
     }
    
     setInterval(babel, 5000);
});


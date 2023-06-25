// Smooth scrolling
$(document).ready(function () {
    $(".nav-link").on('click', function (event) {
        event.preventDefault();
        var hash = this.hash || $(this).attr('href');
        var offsetTop = $(hash).offset().top;
        var navbarHeight = $('#navbar').height();
        var extraScroll = 10;

        var scrollTo;
        if (hash === this.hash) {
            scrollTo = offsetTop + extraScroll;
        }else{
            scrollTo = offsetTop - navbarHeight;
        }

        $('html, body').animate({
            scrollTop: scrollTo
        }, 500, function () {
            window.location.hash = hash;
        });
    });
});

/*https://github.com/javascriptacademy-stash/digital-rain/blob/master/index.js*/
const canvas = document.getElementById('matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

const alphabet = katakana + latin + nums;

const fontSize = 12;
const columns = canvas.width/fontSize;

const rainDrops = [];

for( let x = 0; x < columns; x++ ) {
    rainDrops[x] = Math.floor(Math.random()*canvas.height/fontSize);// modified this part to start at random points
    // on my site.
}

const draw = () => {
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#0F0';
    context.font = fontSize + 'px monospace';

    for(let i = 0; i < rainDrops.length; i++)
    {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        context.fillText(text, i*fontSize, rainDrops[i]*fontSize);

        if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
};
setInterval(draw, 30);

// GSAP Timeline
var tl = gsap.timeline({repeat: -1}); // Repeat indefinitely

// Apply animation to each carousel item
$(".carousel__item").each(function(index, element){
    tl.to(element, { duration: 1, scale: 1, opacity: 1, y: 0 }) // Animate in
        .to(element, { duration: 1, scale: 0.5, opacity: 0, y: "-150px" }, "+=1"); // Animate out
});

tl.play();

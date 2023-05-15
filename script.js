const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    multiplier: .5,
});

scroll.on('scroll', () => {
    const progress = scroll.scroll.instance.scroll.y / scroll.scroll.limit.y;

    const elementToScale = document.querySelector(' .my-element');
    const scaleValue = 1 + (progress * 0.5);
    elementToScale.style.transform = `scale(${scaleValue})`;
});


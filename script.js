let game = document.getElementById('game')

for (i = 25; i > 0; i--) {
    let slide = document.createElement('div')
    slide.setAttribute('class', 'slides animate')
    slide.setAttribute('id', 'slide' + (i))
    game.append(slide)
}
var slidewidth = 400;

function stopslide(slide) {
    let cslide = document.getElementById('slide' + (slide))
    let aslide = document.getElementById('slide' + (slide + 1))
    let bslide;
    if (slide == 1) {
        bslide = cslide;
    } else {
        bslide = document.getElementById('slide' + (slide - 1))
    }
    let belowleft = parseInt(window.getComputedStyle(bslide).getPropertyValue('left'))
    let left = parseInt(window.getComputedStyle(cslide).getPropertyValue('left'))
    let width = parseInt(window.getComputedStyle(cslide).getPropertyValue('width'))
    let dif = (left - belowleft)
    let abs = Math.abs(dif)
    cslide.style.width = (width - abs) + 'px'
    if (dif < 0) {
        cslide.style.left = left + abs + 'px'
    } else {
        cslide.style.left = left + 'px'
    }
    cslide.classList.remove('animate')
    if (abs > width) {
        alert('game over : your score is ' + (slide - 1))
        location.reload()
    }
    slidewidth += abs;
    document.documentElement.style.setProperty('--width', slidewidth + 'px')

    console.log('slidewidth is ' + slidewidth, 'width is ' + width, 'abs is ' + abs)
    aslide.style.width = cslide.style.width
    aslide.style.visibility = 'visible'
    let onclick = 'stopslide(' + (slide + 1) + ')'
    document.getElementById('btn').setAttribute('onclick', onclick)
}
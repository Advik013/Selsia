let tapLOGO = document.getElementById('logotap'),
    sidebar = document.getElementById('sidebar'),
    tab = document.getElementsByClassName('tab'),
    imgl = document.getElementById('imgl'),
    corusel_img = document.getElementById('corusel-img'),
    crousel_container = document.getElementById('crousel-container'),
    isOpen = false, index = 0,
    corusel_img_scr = ['./image/banner-1.jpg', './image/banner-2.jpg']
    ;



const handelCreateElement = (tag, classes, text, id, src) => {
    let element = document.createElement(tag);
    (classes != undefined) && (element.className = classes);
    (text != undefined && src === undefined) && (element.innerText = text);
    (id != undefined) && (element.id = id);
    (src != undefined) && (element.src = src, element.alt = text);
    return element
}



function handleSlide() {

    if (isOpen) {
        sidebar.classList.add('transition-rev')
        sidebar.classList.add('side-screen')
        sidebar.classList.remove('transition')
        for (const obj of tab) {
            obj.classList.add('disable')

        }
        isOpen = false

    }
    else {
        sidebar.classList.add('transition')
        sidebar.classList.remove('side-screen')
        sidebar.classList.remove('transition-rev')
        for (const obj of tab) {
            obj.classList.remove('disable')}

        isOpen = true
    }
}

function handleCrousel() {
    setInterval(() => {
        corusel_img.classList.add('translate')
        setTimeout(() => {
            corusel_img.classList.remove('translate')


        }, 4000);

        setTimeout(() => {
            if (index >= corusel_img_scr.length) {
                index = 0;
            }
            corusel_img.src = corusel_img_scr[index]
            index++;
        }, 1000);


    }, 10000)

}


handleCrousel()
tapLOGO.addEventListener('click', handleSlide)
tapLOGO.addEventListener('mouseover', handleSlide)









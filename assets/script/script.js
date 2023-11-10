const sliderArea = document.querySelector('.banner .sliders');
const sliderPointers = document.querySelectorAll('.banner [data-pointer]');
const openMenuButton = document.querySelector('[data-button]');
const menuNav = document.querySelector('nav');
console.log('openMenuButton', openMenuButton);

const idSliders = {
    '1': '0vw',
    '2': '-100vw',
    '3': '-200vw',
};

let initialPointer = 1;
sliderPointers[0].classList.add('pointer-active');

function changePointer(idPointer) {
    sliderArea.style.marginLeft = `${idSliders[idPointer]}`;

    sliderPointers.forEach((pointer) => {
        const pointerList = pointer.attributes['data-pointer'].value;
        if (pointerList === idPointer) {
            pointer.classList.add('pointer-active');
        } else {
            pointer.classList.remove('pointer-active');
        }
    });
}

function handleOpenerPress() {
    const coditionButtonDrawer = menuNav.style.display === 'block';
    menuNav.style.display = coditionButtonDrawer ? 'none' : 'block';
}

function changeSlideByTime() {
    if (initialPointer >= 3) {
        initialPointer = 1;
    } else {
        initialPointer++;
    }
    changePointer(String(initialPointer));
}

let interval = setInterval(changeSlideByTime, 4000);

function handlePointerClick(pointerInfo) {
    const pointerClicked = pointerInfo.target.attributes['data-pointer'].value;
    initialPointer = Number(pointerClicked);
    changePointer(pointerClicked);
}

for (pointer of sliderPointers) {
    pointer.addEventListener('click', handlePointerClick)
}

openMenuButton.addEventListener('click', handleOpenerPress);

const addAnimationBtn = document.querySelector('button')
const divElem = document.querySelector('div')
const pElem = document.querySelector('p')

function setAnimation (){
    divElem.style.animation = 'move 4s 3'
}

addAnimationBtn.addEventListener('click', setAnimation)


function animationStartHandler(){
 console.log('animationStart')
}

function animationRepeatHandler(){
console.log('animationRepeat')
}

function animationEndHandler (){
console.log('animation End')
}

divElem.addEventListener('animationstart', animationStartHandler)
divElem.addEventListener('animationrepeat', animationRepeatHandler)
divElem.addEventListener('animation end', animationEndHandler)
















/* function setAnimation () {
    // console.log(divElem);

    divElem.style.animation = 'move 4s 3'
}

function animationStartHandler (event) {
    console.log('Animation Start');
    pElem.innerHTML = 'Animation Start'
    divElem.style.backgroundColor = 'pink'
}

function animationRepeatHandler () {
    console.log('Animation Repeat');
    pElem.innerHTML = 'Animation Repeat'
    divElem.style.backgroundColor = 'green'
}

function animationEndHandler () {
    console.log('Animation End');
    pElem.innerHTML = 'Animation End'
    divElem.style.backgroundColor = 'lightgray'
}

addAnimationBtn.addEventListener('click', setAnimation)

divElem.addEventListener('animationstart', animationStartHandler)
divElem.addEventListener('animationiteration', animationRepeatHandler)
divElem.addEventListener('animationend', animationEndHandler) */
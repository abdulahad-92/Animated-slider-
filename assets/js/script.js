// let menu = document.querySelector('#menu')
// let navUl = document.querySelector('.toggler')
// menu.addEventListener('click',()=>{
//     navUl.classList.toggle('toggler')
// })
let images = document.querySelectorAll('.box')
let text = document.querySelector('#h1')
let left = document.querySelector('.left-arrow')
let right = document.querySelector('.right-arrow')
let num = 1
let arr = ['Are you ready','Then focus', 'Be quite', 'Master the tech', 'And rule over the world']
images[0].children[0].style = 'opacity : 1 ; transform : scale(1.2);transform: translateY(-5px);'
text.innerText = arr[num -1]
left.addEventListener('click', (e)=>{
    num = num > 1 ? num - 1 : 5
    clearTimeout(() => {
        text.innerText = ''
        text.innerText = arr[num - 1]
        text.style = `transition: 2s; opacity : 1;`
        if (num == 4) {
            text.style = `text-shadow: 0px 0px 5px white;`
        } else {
            text.style = `text-shadow: 0px 0px 0px white;`
        }
    }, 2000);
    document.querySelector('main').style = `  
    background: url(assets/images/bg${num.toString()}.jpg);
    background-position: center;
    background-size: cover;` 
    text.classList.add('vanish')
    text.style = `transition: 2s; opacity : 0;`
    setTimeout(() => {
    text.innerText = ''
    text.innerText = arr[num - 1]
    text.style = `transition: 2s; opacity : 1;`
    if (num == 4) {
        text.style = `text-shadow: 0px 0px 5px white;`
    } else {
        text.style = `text-shadow: 0px 0px 0px white;`
    }
    }, 2000);
    for (let elem = 0; elem < images.length; elem++) {
        if(images[elem].id == num){
            images[elem].children[0].style = 'opacity : 1 ; transform : scale(1.2);transform: translateY(-5px);'
    }else{
        images[elem].children[0].style = 'opacity : 0.5; transform : scale(1); transform: translateY(5px);'
    }        
}
})
right.addEventListener('click', (e)=>{
    num = num <= 4 ? num + 1 : 1
    clearTimeout(() => {
        text.innerText = ''
        text.innerText = arr[num - 1]
        text.style = `transition: 2s; opacity : 1;`
        if (num == 4) {
            text.style = `text-shadow: 0px 0px 5px white;`
        } else {
            text.style = `text-shadow: 0px 0px 0px white;`
        }
    }, 2000);
    document.querySelector('main').style = `  
    background: url(assets/images/bg${num.toString()}.jpg);
    background-position: center;
    background-size: cover;`
    text.style = `transition: 2s; opacity : 0;`
    setTimeout(() => {
    text.innerText = ''
    text.innerText = arr[num - 1]
    text.style = `transition: 2s; opacity : 1;`
    if (num == 5) {
        text.style = `text-shadow: 0px 0px 5px white;`
    } else {
        text.style = `text-shadow: 0px 0px 0px white;`
    }
    }, 2000);
    for (let elem = 0; elem < images.length; elem++) {
        if(images[elem].id == num){
            images[elem].children[0].style = 'opacity : 1; transform : scale(1.2); transform: translateY(-5px);'
    }else{
        images[elem].children[0].style = 'opacity : 0.5; transform : scale(1); transform: translateY(5px);'
    }        
}
})
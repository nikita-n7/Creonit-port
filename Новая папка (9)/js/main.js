
$('.slider__content').slick({
    nextArrow: '<div class="slider__btn slider__btn--left"></div>',
    prevArrow: '<div class="slider__btn slider__btn--right"></div>',
});

$('.news__content-main-slider').slick({
    nextArrow: '<div class="slider__btn slider__btn--left-news"></div>',
    prevArrow: '<div class="slider__btn slider__btn--right-news"></div>',
});


// function logPersenal (one , two , thre){
//     console.log(one);
//     console.log(two);
//     console.log(thre);
//     console.log(`Person : ${this.name} ,${this.age} , ${this.job} `)
// }

// let person1 = {
//     name: 'lena',
//     age: 23 ,
//     job: 'bla bla'
// }

// let person2 = {
//     name: 'ivan',
//     age: 27 ,
//     job: 'bla bla bla'
// }

// function binde (obj , callback) {
//     return function (...args) {
//         console.log(args)
//         callback.apply(obj,args)
//     }
// }

// binde(person1,logPersenal)(1 ,2 ,3, 4);


let btn = document.querySelector('.btn__consultation');

btn.onclick = () => {
    console.log(this)
}


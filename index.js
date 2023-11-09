let plus = document.querySelector('.plus');
let mines = document.querySelector('.mines');
let umn = document.querySelector('.umn');
let del = document.querySelector('.del');
let res = document.querySelector('.res');

plus.addEventListener('click',function(){
    let num1 = +document.querySelector('.num1').value;
    let num2 = +document.querySelector('.num2').value;
    console.log(num1,num2);
    res.innerText = num1 + num2;
})

mines.addEventListener('click',function(){
    let num1 = +document.querySelector('.num1').value;
    let num2 = +document.querySelector('.num2').value;
    console.log(num1,num2);
    res.innerText = num1 - num2;
})

umn.addEventListener('click',function(){
    let num1 = +document.querySelector('.num1').value;
    let num2 = +document.querySelector('.num2').value;
    console.log(num1,num2);
    res.innerText = num1 * num2;
})

del.addEventListener('click',function(){
    let num1 = +document.querySelector('.num1').value;
    let num2 = +document.querySelector('.num2').value;
    console.log(num1,num2);
    if (num2 ==  0){
        res.innerText = 'на 0 делить нельзя!'
    } else {
    res.innerText = num1 / num2;
    }
})
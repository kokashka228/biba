// let num1 = prompt()
// let num2 = prompt()


// console.log(parseInt(num1) + parseInt(num2))





// let num1 = prompt()
// let num2 = prompt()
// let num3 = prompt()

// console.log(parseInt(num1) * parseInt(num2) * parseInt(num3))



// let num1 = prompt()
// let num2 = prompt()
// let znak = prompt()

// if(znak == '-'){
//     console.log(parseInt(num1) -  parseInt(num2))
// }
// else if(znak == '+'){
//     console.log(parseInt(num1) +  parseInt(num2))
// }
// else if(znak == '/'){
//     console.log(parseInt(num1) /  parseInt(num2))
// }
// else if(znak == '*'){
//     console.log(parseInt(num1) *  parseInt(num2))
// }



// let num1 = prompt();
// let num2 = prompt();
// let result = parseInt(num1) + parseInt(num2);

// let qwer = document.getElementById("p")
// console.log(qwer)

// qwer.innerText = ` num1 + num2 = ${result}` 




// let num1 = prompt();
// let num2 = prompt();
// let num3 = prompt();
// let result = parseInt(num1) * parseInt(num2) * parseInt(num3);

// let qwer = document.getElementById("p")
// console.log(qwer)

// qwer.innerText = ` ${num1} * ${num2} * ${num3} = ${result}` 





// let num1 = prompt()
// let num2 = prompt()
// let znak = prompt()
// let qwer = document.getElementById("p")
// console.log(qwer)

// if(znak == '-'){
//     qwer.innerText = `${num1} - ${num2} = ${num1 - num2} `
// }
// else if(znak == '+'){
//     qwer.innerText = `${num1} + ${num2} = ${num1 + num2} `
// }
// else if(znak == '/'){
//     qwer.innerText = `${num1} / ${num2} = ${num1 / num2} `
// }
// else if(znak == '*'){
//     qwer.innerText = `${num1} * ${num2} = ${num1 * num2} `
// }





alert("Відкрий консоль")
console.log('Привіт, у тебе буде вибір між трьома дверима, твоя задача вибрати "Права", "Ліва" чи "Середня" дверка');
let lives = 6;

for (let i = 0; i <= 10; i++) {
 let selectedBoard = prompt('    Виберіть дверку "Права", "Ліва" чи "Середня" ').toLowerCase()
 
 let right = 2;
let left = 1 ;
let center = 0;

let vybir = Math.round(Math.random() * 2)

if (selectedBoard === "права"  ) {
    if( vybir === 2) {
        console.log('Правильно!!!');
    } else{
     lives = lives - 1
     console.log('Ви втратили життя');
    }
}

if (selectedBoard === "ліва" ) {
    if( vybir === 1) {
        console.log('Правильно!!!');
    } else{
     lives = lives - 1
     console.log('Ви втратили життя');
    }
}

if (selectedBoard === "середня" ) {
    if( vybir === 0) {
        console.log('Правильно!!!');
    } else{
     lives = lives - 1
     console.log('Ви втратили життя');
    }




}
console.log("Кількість життів:" + lives);

if (lives < 0) {
    break;
}

}

if (lives > 0) {
    console.log("Ураа!!! Перемога");
} else {
    console.log("Хаахаха... кхм кхм. Поразка" );
}
















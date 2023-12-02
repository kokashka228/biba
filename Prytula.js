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





// alert("Відкрий консоль")
// console.log('Привіт, у тебе буде вибір між трьома дверима, твоя задача вибрати "Права", "Ліва" чи "Середня" дверка');
// let lives = 6;

// for (let i = 0; i <= 10; i++) {
//  let selectedBoard = prompt('    Виберіть дверку "Права", "Ліва" чи "Середня" ').toLowerCase()
 
//  let right = 2;
// let left = 1 ;
// let center = 0;

// let vybir = Math.round(Math.random() * 2)

// if (selectedBoard === "права"  ) {
//     if( vybir === 2) {
//         console.log('Правильно!!!');
//     } else{
//      lives = lives - 1
//      console.log('Ви втратили життя');
//     }
// }

// if (selectedBoard === "ліва" ) {
//     if( vybir === 1) {
//         console.log('Правильно!!!');
//     } else{
//      lives = lives - 1
//      console.log('Ви втратили життя');
//     }
// }

// if (selectedBoard === "середня" ) {
//     if( vybir === 0) {
//         console.log('Правильно!!!');
//     } else{
//      lives = lives - 1
//      console.log('Ви втратили життя');
//     }




// }
// console.log("Кількість життів:" + lives);

// if (lives < 0) {
//     break;
// }

// }

// if (lives > 0) {
//     console.log("Ураа!!! Перемога");
// } else {
//     console.log("Хаахаха... кхм кхм. Поразка" );
// }

// function helloUser(a) {
//     console.log("Привіт, користувач " + a + "!");
//   }
  
//   helloUser(1);
//   helloUser(2);
//   helloUser(3);


//   function calculate(a, b, message) {
//     let sum = a + b;
//     console.log(message + sum);
//   }
  
//   calculate(3, 5, "Сума 1: ");
//   calculate(7, 2, "Сума 2: ");





// function check(num) {

//   const result = num % 2;
//     let result_text
//     if (result == 0) {
//         result_text = "Парне";
//     } else {
//         result_text = "Непарне";

//     }
// return result_text;
// }

// function print(num, result_text) {
//     console.log(`${num} є ${result_text}`);
// }

// let test_num

// test_num = 10;
// result_text = check(test_num);
// print(test_num, result_text);

// test_num = 5;
// result_text = check(test_num);
// print(test_num, result_text);

// test_num = 1456;
// result_text = check(test_num);
// print(test_num, result_text);





// function convertCurrency(amount, rate){

//     let calcult = rate * amount;
//     console.log("ваших " + amount + " долларів буде дорівнювати " + calcult + " гривень");
// }
// convertCurrency(50, 37)




// function dualNumbers(number) {
//     for (let index = 0; index <= number; index = index + 2) {
//         console.log(index);
        
//     }
// }



// dualNumbers(10)



// 1.2
// const trueLogin = "Vasya";
// const truePassword = "12345678";
// let enteredLogin = prompt("Введіть логін:");
// let enteredPassword = prompt("Введіть пароль:");

// while (enteredLogin !== trueLogin || enteredPassword !== truePassword){
  
        
//          enteredLogin = prompt("Введіть логін:");
//          enteredPassword = prompt("Введіть пароль:");
// }



// 1.3

// let userInput = prompt("Введіть число:");
// let number = parseInt(userInput);
// let sum = 0;


// let i = 1;
// while (i <= number) {
//     sum = sum + i;  
//     i++;       
// }


// console.log("Сума чисел від 1 до " + number + " дорівнює " + sum);















// 1.4
// let num = prompt("Введіть кількість циклів")
// let cycles = parseInt(num)
// let message = prompt("Введіть повідомлення для циклу")
// for (let index = 0; index < cycles; index++) {
//    console.log(message);
    
// }











// 1.5
// for (let num = 2; num <= 20; num++) {
//     let letka = true



//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             letka = false; 
//         }
//     }

//     if (letka) {
//         console.log(num);
//     }
// }
 


    // 1.1
// let mass = [10, 20, 30, 40, 50];
// console.log(mass[2]);




//1.2
// let fruits = ['яблуко', 'банан', 'помаранч', 'груша', 'ківі']
// fruits[3] = 'Ананас'
// console.log(fruits);







//3.1
// function getArrayLength(arr) {
//     return arr.length;
// }


// let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arrayLength = getArrayLength(numbersArray);

// console.log(`Довжина масиву: ${arrayLength}`);



//3.2


// function countStringsOver5Chars(arr) {
//     let count = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length > 5) {
//             count++;
//         }
//     }

//     return count;
// }


// let strings = ["Привіт", "JavaScript", "функції", "масиви", "код"];
// let result = countStringsOver5Chars(strings);

// console.log(`Кількість рядків з довжиною більше 5 символів: ${result}`);





for (;;) {
    console.log('1')
}

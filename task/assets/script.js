// 1.Verilmis arrayin icerisinde deyeri 45 olan elementin indexini tapan function.

// function indexelement(...params) {
//     for (let i = 0; i < params.length; i++) {

//         if (params[i] === 45) {
//             element = i
//         }

//     }
// }
// indexelement(23,32,45,3,43,44)
// console.log(element);




// let num = 0 
// function indexOf45(...params) {
//     for (let i = 0; i < params.length; i++) {
//         if (params[i] == 45) {
//             num=i
//         }
//     }
//     return num

// }


// 2. Verilmiş elementin bir ölçülü massivdə neçə dəfə təkrarlandığını tapan function tərtib edin.

// function repeat(arr,number) {
//     let num = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === number) {
//             num++;
//         }
//     }
//     return num;
// }

// const numberrepeat = repeat([4,5,6,2,3,4,4,4,5],4)
// console.log(`Number repeats ${numberrepeat}`);

// 3. arrayin  elementləri arasında minimum və maksimum elementi nəzərə almadan yerdə
// qalan elementlərin cəmini tapan function.


// let min = 2;
// let max = 1;
// let sumsum = 0;

// function sum(...params) {
//     for (let i = 0; i < params.length; i++) {
//         if (min > params[i]) {
//             min = params[i]
//         }
//         else if (max < params[i]) {
//             max = params[i]
//         }
//         sumsum += params[i];
//         sumsumsum = sumsum - (min + max)
//     }
//     return sumsumsum;
// }


// console.log(sum(1,2,3,4,5,6,7,8,9,10));


// 4.Verilmis n ededinin son reqemini onun evveline getirerek yeni bir eded duzelden function.
//     (misalcun daxil edilen eded 475 olarsa, geriye 547 qaytarsin) 

// ??????????????????????
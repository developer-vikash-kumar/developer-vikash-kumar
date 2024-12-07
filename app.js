let a = 5;
let b = a++;
let c = a + b;
console.log(c)







// function getData(dataId, getNextData) {
//     setTimeout ( () => {
//         console.log( "data", dataId);
//         if (getNextData){
//             getNextData();
//         }
//     },2000);
// }
// getData( 1, () =>{
//     getData(2, () =>{
//         getData(3,() =>{
//             getData(4)
//         });
//     });
// });
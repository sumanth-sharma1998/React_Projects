var retValue= function(){
    return 10;
}
console.log(retValue());

// const getArrowVAlue = () => {
//     return 20;
// }

// const getArrowVAlue = (m) => 20*m;

// const getArrowVAlue = m => 20*m;

const getArrowVAlue = (m,a) => 20*m + a;

console.log(getArrowVAlue(2,5));

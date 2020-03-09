function joy(){
    let count=0;
    return function(){
        count++;
        return count;

    }
}
const joy3=joy();
console.log(joy3());
console.log(joy3());
console.log(joy3());
console.log(joy3());

const joy4=joy();
console.log(joy4());
console.log(joy4());
console.log(joy3());
console.log(joy4());
console.log(joy4());
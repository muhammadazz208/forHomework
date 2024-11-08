function discount(sale) {
    return function(cost) {
        return cost-(cost/100*sale)
    }
}
const result=discount(25)
console.log(result(12300000));
console.log("you wassup buddy");
console.log("nothing is more imptrtsnt");

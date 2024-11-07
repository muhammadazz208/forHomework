//14.
const first=new Promise((res,rej)=>{
    setTimeout(() => {
        res("first promise is ran after 1 seconds")
    }, 1000);
})
const second=new Promise((res,rej)=>{
    setTimeout(() => {
        res("second promise is ran after 2 seconds")
    }, 2000);
})
const third=new Promise((res,rej)=>{
    setTimeout(() => {
        res("third promise is ran after 3 seconds")
    }, 3000);
})
Promise.race([first,second,third]).then((data)=>{
    console.log(data);
})
//13.
const first2=new Promise((res)=>{
    res("something is happened in first promise sector")
})
const second2=new Promise((res)=>{
    res("something is happened in second promise sector")
})
const third2=new Promise((res)=>{
    res("something is happened in third promise sector")
})
Promise.all([first,second,third]).then((info)=>{
    setTimeout(() => {
        console.log(info);
    }, 1000);
})
//12.
function factorial(number) {
    if (number===0) {
        return 1
    } else {
        return number*factorial(number-1)
    }
}
console.log(factorial(5));
//11.
function getDegree(first,second) {
    if (second===0) {
        return 1
    } else {
        return first**second
    }
}
console.log(getDegree(5,2));
//9.
function checkParol(parol) {
    const theParol=12
    function check() {
        if (theParol===parol) {
            return true
        } else {
            return false
        }
    }
    return check
}
console.log(checkParol(12));
//8.
function plusNum(num) {
    let valid=0
    return function plus(params) {
        return valid=valid+num
    }    
}
const a=plusNum(12)
console.log(a());
console.log(a());
console.log(a());
//7
function plusNum(num) {
    const backet=[]
    return function plus() {
        backet.push(num)
        return backet
    }    
}
const res=plusNum()
console.log(res("olma"));
console.log(res("melon"));
console.log(res("tarvuz"));
//10 
function reverseNumber(numbr,reversed=0) {
    if (numbr===0) {
        return reversed
    } else {
//        return reverseNumber(Math.floor(numbr/10),reversed * 10 + num % 10)
    }    
}
const nm=1234
console.log(reverseNumber(nm));

//6
function discount(percent,sum) {
    console.log(`discount to this product is ${percent}`);
    return function measure(params) {
        return (sum/100)*percent
    }
}
const productDiscount = discount(10, 200);
console.log(productDiscount());

//5
class shakl {
    constructor() {
    }
    perimetr(){
        throw new Error("idk")
    }
    yuza(){
        throw new Error("idk")
    }
}
class tortburchak extends shakl{
    constructor(width, height){
        super()
        this.width=width
        this.height=height
    }
    perimetr(){
        return 2*(this.width+this.height)
    }
    yuza(){
        return this.width*this.height
    }
}
class aylana extends shakl{
    constructor(radius){
        super()
        this.radius=radius
    }
    perimetr(){
        return 2*3.14*this.radius
    }
    yuza(){
        return 3.14*this.radius*this.radius
    }
}
//4.2
function functionsFnc(functions) {
    return function(x) {
        if (functions.length===0) {
            return x
        } 
        return functions.reduceRight((acc,fn)=>fn(acc),x)
    }
}
const toTry=functionsFnc([x => x + 1, x => x * x, x => 2 * x])
console.log(toTry(4));
//4,1
function as41(arr,fnc,init) {
    let val=init
    for (let i = 0; i < arr.length; i++) {
        val=fnc(val,arr[i])
    }
    return val
}
const ar=[1,2,3,4,5,6,7]
const fun=(a,b)=>a+b
as41(ar,fun,0)

//3
function wait(millis) {
    return new Promise((res)=>{setTimeout(() => {
        res()
    }, millis*1000);})
}
(async()=>{
    console.log("wait some seconds");
    await wait(3)
    console.log("waitin is over");
})()
//2
function increase(n) {
    let count=n
    return function(params) {
        return count++
    } 
}

//1
function returnLast(arrr) {
    if (arrr.length===0) {
        return -1
    } 
    return arrr[arrr.length-1]
}
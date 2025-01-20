let a = 1;

a = 2;

console.log('a >>>' , a);

let b:string = 'str';
let c:boolean = true;
let d: undefined;
let e:null=null;

console.log(b,c,d,e)

let aa = 1;
let bb = 'hi';
let cc = undefined;
let dd = null;
let ee;
console.log(typeof aa);
console.log(typeof bb);
console.log(typeof cc);
console.log(typeof dd);
console.log(typeof ee);

let numArr: number[] = [1,2,3,4,5];

let arr1:(number | boolean | string)[] = [1, true , 'string']


let aaa:object = {
    a : 1,
    b : 2
}
let bbb:object = {
    a : 1,
    b : 2
}
let ccc:object = {
    a : 1,
    b : 2
}
let arrtest:(object)[]=[aaa,bbb,ccc]

console.log(arrtest);
function numArrlen(arr:number[]):number {
    return arr.length;
}

console.log(numArrlen([1,2,3]));

function strArrlen(arr:string[]):number {
    return arr.length;
}

console.log(strArrlen(['1','2','3']));


function arrlen<T>(arr:T[]):number {
    return arr.length;
}

console.log(arrlen<string>(['1','2','3','4','5']));

console.log(arrlen<string | number>([1,2,3,'4','5']));

function printSome<T>(x:T,y:T){
    console.log(x,y)    
}
printSome<string>('hi','hellow');
printSome<number>(100,200);
printSome<boolean[]>([true , false],[false,false]);

function printSome2<T,U>(x:T , y:U):void {
    console.log(x,y);
}

printSome2<string, number>('test',1)

interface Phone<T>{
    company : string;
    createApp : Date;
    option :T
}

type iphoneOptioin ={
    color : string,
    storage : number,
}

const iphone20 : Phone<iphoneOptioin> ={
    company : 'Apple',
    createApp : new Date('1552-01-01'),
    option : {
        color :'black' ,
        storage : 512
    }

}

console.log(iphone20);


type galaxyOption = {
    color : string;
    isBuz : boolean;
}

const galaxy25: Phone<galaxyOption>={
    company : 'samsung',
    createApp : new Date('2025-01-01'),
    option :{
        color : 'blue',
        isBuz:true
    }
}
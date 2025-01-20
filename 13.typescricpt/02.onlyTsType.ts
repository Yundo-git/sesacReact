let drink :[string,number];

drink = ['color' , 1];

let drink2 :[string,string] = ['coca','pepci'];

drink2[0] = 'zeroCola';
drink2[1] = 'zeroPepci';

console.log('drink2 >>>' , drink2);

drink2.push('good');

console.log('newdrink2 >>>', drink2);


let drink3:readonly[string,number] = ['cider',1000];

console.log('drink3' , drink3);

let drink4 :[string,number] = ['cider',2500]as const;

// drink4.push('hello')
console.log('drink as const  >>>',drink4);


let restTuple : [string , ...number[]] = ['test' , 10,20,30,40,50]

console.log('restTuple', restTuple);

enum Auth {
    admin = 0,
    user = 1,
    guset = 2
}

enum Auth2{
    admin,
    user,
    guest
}
console.log(Auth);
console.log('auth2 >>', Auth2);


enum Menu{
    pizza = 4000,
    pasta = 5000,
    chicken
}

console.log('menu >>' , Menu[5000]);


console.log('짱신기하네',Menu);

enum Cafe{
    americano = '아메리카노',
    latte ='라때는 말야~'
}
console.log('===========');

console.log(Cafe.latte)

enum cake{
    choco,
    vanilla,
    mango,
    kiwi = 'kk'
}
console.log(cake[0]);

enum Food{
    pizza = 4000,
    pasta = 5000,
    burger = 2000
}

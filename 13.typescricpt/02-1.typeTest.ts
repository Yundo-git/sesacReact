

// type olimpic = [object, boolean]
interface olipic {
    name : string;
    type : string;
}

interface olimpic2 extends olipic {
     readonly isvisible : boolean
}

let olimpic_newgame: olimpic2={
    name: "쇼트트랙",
    type: "혼성계주",
    isvisible :true
}

console.log(olimpic_newgame.isvisible)

// olimpic_newgame.isvisible = true


// olimpic_newgame[2]=false;

// :readonly[object,boolean] = [
//     {
//         name : "쇼트트랙",
//         type : "혼성계주"
//     },
//     true,
// ];
// olimpic_newgame[1]=false;


// 아래 나와 있는 heroGame_A 와 heroGame_B 를 만족할 수 있는 interface Game 만들어보기

interface Game {
    title : string,
    price: number,
    desc? : string,
    category : string,
    platform : string
}
let heroGame_A: Game = {
    title: 'DC 언체인드',
    price: 50000,
    desc: 'DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!',
    category: '액션',
    platform: '모바일',
  }
  
  let heroGame_B: Game = {
    title: 'MARVEL 퓨처파이트',
    price: 65000,
    category: '롤플레잉',
    platform: '모바일',
  }


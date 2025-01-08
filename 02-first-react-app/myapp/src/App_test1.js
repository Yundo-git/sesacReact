import './App.css';


// function Apptest(){
//     const nametest = '동물이름';
//     const animal = '강아지';

//     return (
//        <div>
//         <h2>제 반려 동물의 이름은 {nametest}입니다.</h2>
//         <h2>{nametest}는 {animal}입니다.</h2>
//         </div>
//     );
// }

function Apptest2(){
    const title = 'Hello world'

    return(
        <div className='list'>
            <h1 className='title'>{title}</h1>
           <div>
            <span>아이디 :</span>
            <input type='text'></input>
            </div>
            <div>
                <span>
                    비밀번호 :
                </span>
                <input type='password'></input>
            </div>
        </div>
        
    )
}
export default Apptest2;

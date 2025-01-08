// 함수형 컴포넌트
// - 간단한 함수 형태로 컴포넌트 정의.
// - 간단한 문법, React Hooks 등 더 유용한 기능을 제공하기 때문에
//   함수형 컴포넌트를 사용하는 것이 권장됨.

// 1) 함수 선언문 방식
// function FunctionComponent() {
//     return <h1>여기는 Function Component</h1>;
// }

// export default FunctionComponent;

// 2) 화살표 함수 방식
const FunctionComponent = ({ name, age }) => {
    // #1. 변수 선언
    const student = '춘향';
    // console.log('props >>> ', props);
    // #2-2. 구조 분해 할당 (최신 방식)
    // const { name, age } = props;
    // +) 매개변수에 직접 넣어서 구조분해할당 해도 됨!

    // #3. defaultProps

    return (
        <>
            <h1>여기는 Function Component</h1>
            <h2>Hello, {student}</h2>
            {/* #2. Props 사용 */}
            {/* - 함수의 매개변수로 props를 받아 사용. */}
            {/* - props.xxx 형태로 출력 */}

            <p>
                {/* #2-1. 전체 Props로 넘겨줄 때 (구조분해할당 x) */}
                {/* 새로운 리더의 이름은 <b>{props.name}</b>
                <br />
                나이는 <b>{props.age}</b> */}
                {/* #2-2. 개별적으로 가져올 때 (구조분해할당 o) */}
                새로운 리더의 이름은 <b>{name}</b>
                <br />
                나이는 <b>{age}</b>
            </p>
        </>
    );
};

// #3. defaultProps 설정
// - 클래스 외부에서 설정
// FunctionComponent.defaultProps = {
//     name: 'Sally',
//     age: 24,
// };
export default FunctionComponent;
// import PropTypes from 'prop-types';
import React, { Component } from 'react';


class TestComponent extends Component{
    render(){
        const {test} = this.props

        return(
            <>
            <h1>
                {test}
            </h1>
            <button onClick={()=>{console.log('콘솔출력 성공')}}>버튼</button>
            </>
        )
    }


}
TestComponent.defaultProps = {
    test : '이건 기본 텍스트'
}

export default TestComponent
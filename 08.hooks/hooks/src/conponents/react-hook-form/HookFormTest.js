import React from 'react'
import { useForm } from 'react-hook-form';


export default function HookFormTest() {
    const {
        handleSubmit,
        register ,
        formState: { errors },
     } = useForm();

     const onSubmit = (sub)=>{

        console.log(sub)
     }

    const onError = (err) =>{
        console.log(err)
    }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit , onError)}>
        <h1>react hook form 실습</h1>
        <input type="text" placeholder='username' 
        {...register('username',{
            required : '이름은 필수항목이에요',

        })}
        
        />
        <br />
        <input type="text" placeholder='age'
        {...register('age',{
            required : '0 이상 입력하세요',
            minLength :{    
                value : 1,
                message : '0보다 큰 숫자만 입력가능합니다.'
            }
        })

        }/>

        <button type='sumbit'>제출</button>
        </form>
    </div>
  )
}

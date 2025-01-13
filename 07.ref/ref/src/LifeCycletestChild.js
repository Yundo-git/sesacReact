import React, { useEffect, useState } from 'react'
import './PostList.css'

export default function LifeCycletestChild({fakePosts}) {

    // console.log('child >>>',fakePosts.json)
    const [fakePosts1 , setfakePost] = useState([]);

    useEffect(() => {
        setTimeout(()=> setfakePost(
           fakePosts
        ),2000)
    }, [fakePosts]);

  return (
  <>
    <h1 className='postList'>Post List(api)</h1>
    <div className='postmainbox'>{
        fakePosts1.length >0 ? fakePosts1.map((value)=>{
        return( 
        <div className='postbox'>
            <div className='idtitle'>
        <span className='postid'>No. {value.id}</span>
        <span className='posttitle'>{value.title}</span>
        </div>
        <h3 className='postbody'>{value.body}</h3>
        </div>

        )
    })
    : <h1>Loading</h1>
}</div>

    </>
  )
}

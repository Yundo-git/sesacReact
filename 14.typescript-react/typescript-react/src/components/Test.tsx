import React, { useEffect, useState } from 'react'
import { PostItems } from '../types/types';




export default function test() {

    const [posts, setPosts] = useState<PostItems[]>([]);

    useEffect(() => {
        const getPosts = async () => {
          const res = await fetch('https://jsonplaceholder.typicode.com/posts');
          const jsonData = await res.json();
    
          setPosts(jsonData.slice(0, 10));
        };

    )

  return (
    <div>test</div>
  )
}

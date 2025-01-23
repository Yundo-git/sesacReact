import React from 'react';
import First from './components/First.tsx';
import Parents from './components/Parents.tsx';
import TodoList from './components/TodoList.tsx';
import GnTodoList from './components/GnTodoList.tsx';
import PostList from './components/test.js'

function App() {
  return (
    <div>
      <First title='오늘 배울건'><p>ts with react</p></First>
      <Parents></Parents>

      <hr />
      <TodoList></TodoList>

      <hr />
      <GnTodoList></GnTodoList>
      <hr />

      <PostList></PostList>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { getKey } from '../lib/util';
/* 
  【inputコンポーネント】
 ・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
 ・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function Input({ addTodo }) {
  const [text, setText] = useState("")
  const onChange = (e) => {
    setText(e.target.value)
  }

  const onAdd = (e) => {
    if (e.key === 'Enter') {
      addTodo({
        text: text,
        key: getKey(),
        done: false
      })
    }
  }

  return (
    <div className="panel-block">
      <input onChange={onChange} onKeyDown={onAdd} className='input' type="text"></input>
    </div>
  );
}

export default Input;

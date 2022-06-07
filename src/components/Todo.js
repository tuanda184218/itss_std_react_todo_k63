import React, { useState, useEffect } from 'react';

/* 
  【Todoのデータ構成】
 ・key：Todoを特定するID（String）
 ・text：Todoの内容（String）
 ・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';

/* カスタムフック */
import useStorage from '../hooks/storage';

/* ライブラリ */
import { getKey } from "../lib/util";

function Todo() {
  const [items, putItems, clearItems] = useStorage();
  console.log(items)

  const [itemsfilter, setItemsfilter] = useState(items)

  const [check, setCheck] = useState("すべて")

  const handleDone = (key) => {
    const newItems = items.map(item => {
      if (item.key === key) {
        item.done = !item.done
      }
      return item
    })

    putItems(newItems);
  }

  const addTodo = (item) => {
    putItems([...items, item])
  }

  const filter = (check) => {
    if (check === "すべて") {
      return items
    } else if (check === "未完了") {
      return items.filter(item => item.done === false)
    } else if (check === "完了済み") {
      return items.filter(item => item.done === true)
    }
  }


  return (
    <div className="panel">
      <div className="panel-heading">
        ITSS ToDoアプリ
      </div>
      <Input addTodo={addTodo} />
      <Filter filter={setCheck} />
      {filter(check).map(item => (
        <TodoItem item={item} handleDone={handleDone} />
      ))}
      <div className="panel-block">
        {filter(check).length} items
      </div>
      <div className="panel-block">
        <button className="button is-light is-fullwidth" onClick={clearItems}>
          全てのToDoを削除
        </button>
      </div>
    </div>
  );
}

export default Todo;
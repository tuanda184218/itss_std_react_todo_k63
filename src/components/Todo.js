import React, { useState } from 'react';

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
  const [items, putItems] = React.useState([
    /* テストコード 開始 */
    { key: getKey(), text: '日本語の宿題', done: false },
    { key: getKey(), text: 'reactを勉強する', done: false },
    { key: getKey(), text: '明日の準備をする', done: false },
    /* テストコード 終了 */
  ]);

  const [itemsfilter, setItemsfilter] = useState(items)

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
      setItemsfilter(items)
    } else if (check === "未完了") {
      setItemsfilter(items.filter(item => item.done === false))
    } else if (check === "完了済み") {
      setItemsfilter(items.filter(item => item.done === true))
    }
  }


  return (
    <div className="panel">
      <div className="panel-heading">
        ITSS ToDoアプリ
      </div>
      <Input addTodo={addTodo} />
      <Filter filter={filter} />
      {itemsfilter.map(item => (
        <TodoItem item={item} handleDone={handleDone} />
      ))}
      <div className="panel-block">
        {itemsfilter.length} items
      </div>
    </div>
  );
}

export default Todo;
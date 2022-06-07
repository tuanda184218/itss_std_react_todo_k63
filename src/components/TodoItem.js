/* 
  【TodoItemコンポーネント】
 ・Todoアイテムを表示する
 ・チェックボックスにチェックが入っているか管理する
 ・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem({ item, handleDone }) {
  return (
    <label className="panel-block ">
      <input onClick={() => handleDone(item.key)} type="checkbox" defaultChecked={item.done} />
      <span className={item.done ? "has-text-grey-light" : ""}>{item.text}</span>
    </label>
  );
}

export default TodoItem;
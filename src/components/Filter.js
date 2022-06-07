import { useState } from "react";
/* 
  【Filterコンポーネント】
 ・該当するTodoをステータス毎にで分けてリスト表示する
 ・タブで表示する
 ・サポートするステータスは「すべて」「未完了」「完了済み」
*/
const status = [
  {
    name: "すべて",
    active: true,
  },
  {
    name: "未完了",
    active: false,
  },
  {
    name: "完了済み",
    active: false,
  }

];


function Filter({ filter }) {
  const [filterstatus, setFilterstatus] = useState(status)

  const onToggleStatus = (val) => {
    setFilterstatus(filterstatus.map(element => {
      if (element.name === val.name) {
        element.active = true
      } else {
        element.active = false
      }
      return element;
    }))
  }

  return (
    <div className="panel-tabs">
      {filterstatus.map(element =>
        <a className={element.active ? "is-active" : ""} onClick={() => { onToggleStatus(element); filter(element.name) }}>{element.name}</a>
      )}
    </div>
  );
}

export default Filter
import { useEffect, useState } from "react";
import { MyModal } from "./modal";

export function FilterComponent(props) {
  const [showMore, SetShowMore] = useState(false);
  const newList = props.list.filter((e, index) => index < 5);
  function handleShowMore(val) {
    SetShowMore(val);
  }
  function handleOpen() {
    SetShowMore(true);
  }
  return (
    <>
      <div className="p-4 bg-white w-auto rounded-md">
        <h4 className="py-3 text-lg font-medium uppercase">{props.title}</h4>
        {newList.map((e) => (
          <ClickableObject
            objKey={e.key}
            count={e.doc_count}
            title={props.title}
            handleFilter={props.handleFilter}
          />
        ))}
        {props.list?.length >= 5 ? (
          <button onClick={handleOpen}>show more ..</button>
        ) : null}

        {showMore ? (
          <MyModal handleShowMore={handleShowMore} {...props} />
        ) : null}
      </div>
    </>
  );
}

function ClickableObject(props) {
  function handleOnClick() {
    props.handleFilter({ filterType: props.title, filterValue: props.objKey });
  }
  return (
    <div style={{ cursor: "pointer" }} onClick={handleOnClick}>
      {props.objKey}

      <span className="px-1 text-gray-500">{props.count}</span>
    </div>
  );
}

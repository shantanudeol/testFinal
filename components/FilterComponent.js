import { useEffect, useState } from "react";

export function FilterComponent(props) {
  return (
    <>
      <div className="p-4 bg-white w-auto">
        <h4 className="p-1 text-lg font-medium ">{props.title}</h4>
        {props.list.map((e) => (
          <ClickableObject
            objKey={e.key}
            count={e.count}
            title={props.title}
            handleFilter={props.handleFilter}
          />
        ))}
      </div>
    </>
  );
}

function ClickableObject(props) {
  console.log('clickable ',props);
  function handleOnClick() {
    props.handleFilter({ filterType: props.title, filterValue: props.objKey });
  }
  return (
    <div style={{ cursor: "pointer" }} onClick={handleOnClick}>
      {props.objKey}
      <span>{props.count}</span>
    </div>
  );
}

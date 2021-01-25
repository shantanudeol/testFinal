import { useEffect, useState } from "react";

export function FilterComponent(props) {

  return (
    <>
      <div className="p-4 bg-white w-auto">
        <h4 className="p-1 text-lg font-medium ">{props.title}</h4>
        {props.list.map((e) => (
          <div style={{cursor:'pointer'}} onClick>
            {e.key}
            <span>{e.count}</span>
          </div>
        ))}
        
      </div>
    </>
  );
}

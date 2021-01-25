import { useState } from "react";
import { SubList } from "./SubList";

export function MainListContent({ item }) {
  const [showSubList, SetSubList] = useState(false);
  function toggleShowSubList() {
    SetSubList((p) => !p);
  }
  return (
    <div className="grid">
      <div
        key={item.name}
        className="px-2 py-2 hover:bg-blue-200"
        style={{ cursor: "pointer" }}
        onClick={toggleShowSubList}
      >
        {`${item.items?.length} jobs for ${item.name}`}
      </div>

      {showSubList ? <SubList items={item.items} /> : null}
    </div>
  );
}

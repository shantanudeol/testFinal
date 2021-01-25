import { SubListDetail } from "./SubListDetail";
import { useState } from "react";
export function SubListContent({ item }) {
  const [detail, SetDetail] = useState(false);
  function toggleDetail() {
    SetDetail((p) => !p);
  }
  return (
    //   <div
    //     key={item.name}
    //     className="px-2 py-2 hover:bg-blue-200"
    //     style={{ cursor: "pointer" }}
    //   >
    //     {`${item.total_jobs_in_hospital} jobs for ${item.name}`}
    //   </div>
    <>
      <div className="py-2 px-5 hover:bg-blue-100" onClick={toggleDetail}>
        <h4 className="font-medium">{item.job_title}</h4>
        <p>
          {item.job_type} | $ {item.salary_range[0]} - {item.salary_range[1]}an
          hour | {item.city}
        </p>
      </div>
      {detail ? <SubListDetail item={item} /> : null}
    </>
  );
}

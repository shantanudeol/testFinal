import { MainListContent } from "./MainListContent";

const data = [
  {
    total_jobs_in_hospital: " 8",
    name: "Mammoth Hospital",
  },
  {
    total_jobs_in_hospital: " 8",
    name: "Mammoth Hospital",
  },
];
export function MainList({ jobs }) {
  return (
    <>
      <div className="grid grid-rows-20">
        {jobs.map((e) => (
          <MainListContent item={e} />
        ))}
      </div>
    </>
  );
}

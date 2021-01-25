import { FilterComponent } from "../components/FilterComponent";
import useSwr from "swr";
import { useEffect, useState } from "react";

const filter = [
  {
    title: "job type",
    list: [
      {
        key: "Per-Diem",
        doc_count: 1991,
      },
      {
        key: "Traveler",
        doc_count: 1976,
      },
      {
        key: "Part-time",
        doc_count: 1938,
      },
      {
        key: "Full-time",
        doc_count: 1848,
      },
    ],
  },

  {
    title: "job type",
    list: [
      {
        key: "Per-Diem",
        doc_count: 1991,
      },
      {
        key: "Traveler",
        doc_count: 1976,
      },
      {
        key: "Part-time",
        doc_count: 1938,
      },
      {
        key: "Full-time",
        doc_count: 1848,
      },
    ],
  },
];
const fetcher = (url) => fetch(url).then((res) => res.json());

export function LeftFilters({handleFilter}) {
  const { data, error } = useSwr(`/api/filters`, fetcher);
  console.log("filters", data);

  function createList(data) {
    const arr = [];

    for (const [key, value] of Object.entries(data)) {
      arr.push(
        <div className="grid mx-4" key={key}>
          <FilterComponent title={key} list={value} handleFilter={handleFilter} />
        </div>
      );
    }
    return arr;
  }
  const [filterDivs ,setFilterDivs] = useState([])
 

  useEffect(() => {
      
    if (data) {
        setFilterDivs(createList(data))
    }
  }, [data]);

  return (
    <>
      {filterDivs}
      {/* {filter.map((e) => (
        <>
          <div className="grid mx-4">
            <FilterComponent title={e.title} list={e.list} />
          </div>
        </>
      ))} */}
    </>
  );
}

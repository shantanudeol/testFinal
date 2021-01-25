import { NavBar } from "../components/NavBar";
import { Content } from "../sections/Content";
import { LeftFilters } from "../sections/LeftFilters";
import { useEffect, useState } from "react";
import useSwr from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());

const Index = () => {
  const [finalQuery, setFinalQuery] = useState("");

  const { data, error } = useSwr(`/api/jobs${finalQuery}`, fetcher);
  console.log("jobs----->", data);
  const [query, setQuery] = useState({
    limit: 10,
    sort: "title",
    sortType: "asc",
    search: "",
  });
  //   console.log("data", data[0]);

  const SortJobs = () => {
    const limit = "?limit=2&sort=title&sortType=desc";
    setQuery(limit);
  };

  function QueryBuilder() {
    let q = "?";
    if (query.limit) {
      //  q += `&limit=${query.limit}`;
    }
    if (query.sort) {
      q += `&sort=${query.sort}`;
    }
    if (query.sortType) {
      q += `&sortType=${query.sortType}`;
    }
    if (query.search) {
      q += `&search=${query.search}`;
    }
    setFinalQuery(q);
  }

  useEffect(() => {
    QueryBuilder();
  }, [query]);

  function handleSort(sort, sortType) {
    setQuery((prevstate) => ({
      ...prevstate,
      sort: sort,
      sortType: sortType,
    }));
  }

  function handleSearch(search) {
    setQuery((prevstate) => ({
      ...prevstate,
      search: search,
    }));
  }

  return (
    <>
      <div className="grid space-y-3 ">
        <NavBar />
        <div className="grid grid-cols-4 gap-4 ">
          <div className="grid space-y-4 ">
            <LeftFilters />
          </div>
          <div className="col-span-3">
            {data ? <Content jobs={data.jobs} /> : null}
          </div>
        </div>
      </div>
    </>
  );
};
export default Index;

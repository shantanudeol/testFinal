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
    filterType: "",
    filterValue: "",
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
    if (query.filterType) {
      q += `&filterType=${query.filterType}&filterValue=${query.filterValue}`;
    }
    setFinalQuery(q);
  }

  useEffect(() => {
    QueryBuilder();
  }, [query]);

  function handleSort({ sort, sortType }) {
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

  function handleFilter(obj) {
    setQuery((prevstate) => ({
      ...prevstate,
      filterType: obj.filterType,
      filterValue: obj.filterValue,
    }));
  }
  return (
    <>
      <div className="grid space-y-3 ">
        <NavBar />
        <div className="grid grid-cols-4 gap-4 ">
          <div className="grid space-y-4 ">
            <LeftFilters handleFilter={handleFilter} />
          </div>
          <div className="col-span-3">
            {data ? <Content jobs={data.jobs} handleSort={handleSort} /> : null}
          </div>
        </div>
      </div>
    </>
  );
};
export default Index;

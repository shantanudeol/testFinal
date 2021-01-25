const jobCount = 7763;
const sortOptions = ["location", "dept", "role", "education"];
export function ContentHeaderBar({ total, handleSort, sortType, sort }) {
  return (
    <>
      <div className="flex justify-between mb-10">
        <p>{total} jobs postings</p>
        <div className="justify-end hidden sm:flex">
          Sort By:
          {sortOptions.map((e) => (
            <ClickableObject data={e} handleSort={handleSort} sort={sort} sortType = {sortType} />
          ))}
        </div>
      </div>
    </>
  );
}

function ClickableObject(props) {
  function handleOnClick() {
    props.handleSort({
      sortType: props.data,
      sort: props.sort == "asc" ? "desc" : "asc",
    });
  }console.log('pros --->',props);
  return (
    <>
      {/* <i>
        <svg
          class="h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </i> */}
      <button key={props.data} className="px-2 mx-2 flex" onClick={handleOnClick}>
        {props.data}
        <span>
        {props.sort == "asc" && props.sortType == props.data ? (
          <svg
            class="h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        ) : null}
        {props.sort == "desc" && props.sortType == props.data ? (
          <svg
            class="h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        ) : null}
        </span>
      </button>
     
    </>
  );
}

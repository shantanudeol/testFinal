const jobCount = 7763;
const sortOptions = ["location", "dept", "role", "education"];
export function ContentHeaderBar({ handleSort }) {
  return (
    <>
      <div className="flex ">
        <p>{jobCount} job postings</p>
        <div className="flex justify-end">
          <p>Sort By:</p>
          {sortOptions.map((e) => (
            <ClickableObject data={e} handleSort={handleSort} />
          ))}
        </div>
      </div>
    </>
  );
}

function ClickableObject(props) {
  function handleOnClick() {
    props.handleSort({ sortType: props.data, sort: "asc" });
  }
  return (
    <button key={props.data} className="px-2 mx-2" onClick={handleOnClick}>
      {props.data}
    </button>
  );
}

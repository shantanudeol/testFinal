import jobs from '../../data/jobs'

function fetchJobType(dataObject, jobType = "Full-time") {
  const jobsData = [...dataObject];
  for (let i = 0; i < jobsData.length; i++) {
    const items = jobsData[i].items;
    const mapItems = items.filter(item => {
      if (item.job_type === jobType) {
        return item;
      }
    })
    jobsData[i].items = mapItems;
  }
  return jobsData;
}

function Search(dataObject, searchValue) {
  const searchResults = [];
  for (let i = 0; i < dataObject.length; i++) {
    const regSearch = new RegExp(searchValue, "i");
    if (dataObject[i].name.match(regSearch) || dataObject[i].job_title.match(regSearch)) {
      searchResults.push(dataObject[i]);
    } else {
      const filterResult = dataObject[i].items.filter((singleItem) => {
        if (singleItem.job_title.match(regSearch) || singleItem.job_type.match(regSearch)) {
          return singleItem
        }
      })

      if (filterResult.length > 0) {
        searchResults.push(dataObject[i]);
      }
    }
  }
  return searchResults;
}

export default async (req, res) => {
  res.statusCode = 200
  // @todo: implement filters and search
  // @todo: implement automated tests

  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order
  await new Promise((resolve) => setTimeout(resolve, 1000 * Math.random()))

  const { query } = req;
  let data = jobs;

  if (query.job_type) { data = fetchJobType(data, query.job_type) }

  if (query.search) { data = Search(data, query.search); }

  res.json({ jobs: data })
}

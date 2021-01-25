const jobCount =7763;
const sortOptions = ['dept','role','education'];
export function ContentHeaderBar(){
    return(
        <>
        <div className='flex '>
            <p>{jobCount} job postings</p>
            <div className="flex justify-end">
                <p>Sort By:</p>
                {sortOptions.map(e=>(<button key='e' className='px-2 mx-2'>{e}</button>))}
            </div>
        </div>

        </>
    )
}
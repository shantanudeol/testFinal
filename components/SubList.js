import { SubListContent } from "./SubListContent";

export function SubList({items}){
    console.log('sublist items', items);

return(
<>
{items.map(item=>(
    <>
      <hr />
    <SubListContent item={item} />
    </>
))}
</>
)
}
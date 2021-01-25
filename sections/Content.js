import { ContentHeaderBar } from "../components/ContentHeaderBar";
import { MainList } from "../components/MainList";

export function Content(props){
    return(
        <>
        <div className="grid ">
            <ContentHeaderBar handleSort={props.handleSort}/>
            <MainList {...props} />
        </div>
        </>
    )
}
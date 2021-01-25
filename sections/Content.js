import { ContentHeaderBar } from "../components/ContentHeaderBar";
import { MainList } from "../components/MainList";

export function Content(props){
    return(
        <>
        <div className="grid ">
            <ContentHeaderBar />
            <MainList {...props} />
        </div>
        </>
    )
}
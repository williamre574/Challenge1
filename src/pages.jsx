import react from "react";
import './style/pages.css';


export default function Pages(props) {

    
   

    const getPage = () => {
        const result  = [];
        for (let i=0; i < props.total; i++) {
            let Page = i + 1;
            result.push( <a onClick={() => props.onChange(Page)} 
            className={props.page === Page ? "active" : ''} >{Page}</a> );
        }
     
        return result;
    }

    return(
        <>
        <div className="topbar-filter">
            <label>Pages for page</label>
            
            <div className="pagination2">
                <span>page {props.page} of {props.total}: </span>
               {getPage()}
               
            </div>
        </div>
        </>
    );
}

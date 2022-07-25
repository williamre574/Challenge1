import react, {useState, useEffect} from "react";
import Cards from "./Cards.jsx";

export const useApiCard = () => {
    const [cards, setCards] = useState([])
    const fetchData = async () => {
        const url='https://jsonplaceholder.typicode.com/albums/1/photos';
        const response = await fetch(url);
        const data = await response.json();
        setCards(data);
    }
    useEffect(() => {
        fetchData();
    }
    ,[])
    return {
        cards,
    }
   
}

function card() {
    const CargarPages = () => {
        let pages = pages.slice((cards-1) * 6, cards * 6);
    }
    
    const {cards}=useApiCard()

    
    return (
        
        <div className='container'> {
            
            cards.map(APi => {               
                return (
                    <div className='row' key={APi.id}>
                        <div className='col-md-4'>
                            <Cards
                                title={APi.title}
                                img={APi.url}
                            />
                        </div>
                    </div>
                )
            })
        }
        </div>
    );

}
export default card;

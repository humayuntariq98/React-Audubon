import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BirdDetails(props){

    const {id} = useParams() 

    const [bird, setBird] = useState(null)

    async function handleFetch(){
        try {
            console.log("checking id", bird)
            const url =`https://ga-audubon-api.herokuapp.com/api/birds/${id}`
            const res = await fetch(url);
            const birdData = await res.json();
            console.log("dd",birdData)
            setBird(birdData);

        } catch (error) {
            console.log(error)
        }
        
    }

    useEffect(()=>{
        handleFetch()
    },[])

    if (!bird) {
        return <p>Loading bird information ...</p>
      }
        return (
            <div className="details-container">
              <img
                src={bird.image}
                alt={bird.name}
              />
              <div className="details">
                <h2>{bird.name}</h2>
                <h3>({bird.genus})</h3>
                <h4>{bird.conservationStatus}</h4>
                <a
                  href={`https://www.audubon.org/field-guide/bird/${bird.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </div>
            </div>
          )
};

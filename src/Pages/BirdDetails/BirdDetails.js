import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BirdDetails(props){

    const {id} = useParams() 

    const [bird, setBird] = useState(null)

    async function handleFetch(){
        try {
            console.log("checking id", id)
            const url =`https://ga-audubon-api.herokuapp.com/api/birds/${id}`
            const res = await fetch(url);
            const birdData = await res.json();
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
                src="https://media.audubon.org/nas_birdapi/4492_Sibl_9780307957900_art_r1.jpg?itok=8HuhVVIy"
                alt="Acadian Flycatcher"
              />
              <div className="details">
                <h2>Acadian Flycatcher</h2>
                <h3>(Empidonax virescens)</h3>
                <h4>Conservation Status</h4>
                <p>
                  Would be vulnerable to loss of habitat, but no significant decline noted
                  so far. In some regions, Brown-headed Cowbirds often lay eggs in nests
                  of this species.
                </p>
                <a
                  href="https://www.audubon.org/field-guide/bird/acadian-flycatcher"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </div>
            </div>
          )
};

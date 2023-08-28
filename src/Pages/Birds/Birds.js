import { useState, useEffect } from "react";

function Birds (){
    const [birds, setBirds] = useState([]);

    async function fetchBirds (){
        try {
            const url = "https://ga-audubon-api.herokuapp.com/api/birds";
            const res = await fetch(url);
            const birdsData = await res.json();
            setBirds(birdsData)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchBirds();
    },[])
    return (
        <section className="container">
          {birds.map((b) => {
            return (
              <div className="card">
                <div className="card-image">
                  <img
                    src={b.image}
                    alt={b.genus}
                  />
                </div>
                <div className="card-title">
                  <h3>{b.name}</h3>
                </div>
              </div>
            )
          })}
        </section>
      );
 }

export default Birds;
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

    function loaded(){
        console.log("inside loaded", birds)
        return (
            <section className="container">
              {birds.map((b) => {
                return (
                    <Link to={`/details/${ b._id }`} key={ b._id }>
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
                  </Link>
                )
              })}
            </section>
          );
    }

    function loading(){
        return <h1>Loading...</h1>
    }
    
    return  <section>{birds.length ? loaded() : loading()}</section>
    
 }

export default Birds;
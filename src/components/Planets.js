import data from "../data/planets"
import PlanetCard from "./PlanetCard"

export default function Planets(){

  console.log("data", data)

  //only get plannets with rings
  const onlyPlanetsWithRings = data.filter(planet => planet.hasRings)
  console.log("rings", onlyPlanetsWithRings)

  return(
    <div>
      <h1>Planets List</h1>
      {/* {!data 
        ? "Loading" 
        : data.map(planet => <p>{planet.name}</p>)} */}
      <div  style={{display: "flex", flexDirection: "row", justifyContent: "space-around", flexWrap: "wrap"}}>
      {!data 
        ? "Loading" 
        : data.map(planet => (
          <PlanetCard 
            name={planet.name}
            hasRings={planet.hasRings}
            diameter={planet.diameter}
            imgUrl={planet.imgUrl}
            moons={planet.moons}/>
          ))}
      </div>
    </div>
  )
}
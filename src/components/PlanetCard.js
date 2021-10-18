export default function PlanetCard(props){

  return(
    <div>
      <h2>{props.name}</h2>
      <img style={{height: "200px"}} src={props.imgUrl}/>
      <p><b>Diameter:</b> {props.diameter}km</p>
      <p><b>Does it have rings?</b> {props.hasRings ? "Yes" : "No"}</p>
      <b>  Natural Satellites: </b>
      <ul>
        {props.moons.map(moon => <li>{moon}</li>)}
      </ul>
    </div>
  )
}
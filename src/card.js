import "./card.css";
import pin from "./images/pin.png";

export default function card(props) {
  return (
    <>
      <div className="card">
        <img className="img" src={props.img} />

        <div className="main">
          <img className="pin" src={pin} />
          <span className="country"> {props.country} &nbsp;</span>
          <a href={props.link} className="google">
            View in Google Maps
          </a>
          <h1>{props.place}</h1>
          <h4>
            {props.from} - {props.to}
          </h4>
          <p>{props.description}</p>
        </div>
      </div>
    </>
  );
}

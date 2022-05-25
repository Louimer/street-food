import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../img/Logo.png"
import RestaurantCard from "../components/RestaurantCard";
import CuratedRestaurants from "../components/CuratedRestaurants";

export default function HomePage() {
   const navigate = useNavigate();
   const [places, setPlaces] = useState([]);

   useEffect(() => {
      //Function der fetcher vores json filer og sætter dem op i et array vi så kan mappe
      async function getData() {
         const response = await fetch("./data/da_places.json");
         const data = await response.json();
         setPlaces(data);
      }
      getData();
   }, []);
   console.log(places);

   //Function til knappen
   function handleClick(){
      navigate("/udforsk")
   }
   
      
 


   return (
      <div className="homepage">
         <div className="homepagebanner">
         <h1>Velkommen til</h1>
         <img src={Logo} alt="Aarhus Street Food" />
            <p>
               Lyst til at prøve noget nyt? Prøv vores nye <span onClick={handleClick}>discover</span> funktion og find din nye yndlingsret
            </p>
            <button onClick={handleClick}>Prøv den her</button>
         </div>
         <div>
            <h2>Ugens udvalgte boder</h2>
            <CuratedRestaurants/>
         </div>
         <div className="filters">
         <p>Filtre</p>
         </div>
         <div className="desktopflex">
            {places.map(place => (
              <RestaurantCard key={place.id} place={place}/>
              
            ))}
            </div>
         </div>
    
   );
}

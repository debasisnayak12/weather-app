import React, { useState } from "react";

const App = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [hemisphere, setHemisphere] = useState(0);

  const [month, setMonth] = useState(()=>{
    return new Date().getMonth() + 1
  });

    function getLocation(){
        let la,lt;
         if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    la = position.coords.latitude;
                    lt = position.coords.longitude;
                    setLatitude(la);
                    setLongitude(lt);
                    
                    if(la > 0){
                        setHemisphere("Northen Hemisphere");
                    }else if(la < 0){
                        setHemisphere("Southern Hemisphere");
                    }else{
                        setHemisphere("Equator");
                    }

                })
         }
    }

    return (
      <div>
        <h1>Hello World</h1>
        <button onClick={getLocation}>Get Location</button>
        <h1>Latitude: {latitude}</h1>
        <h1>Longitude: {longitude}</h1>
        <h1>Hemisphere: {hemisphere}</h1>

        {/* WINTER CONDITION  */}

        {
        hemisphere &&
          ((hemisphere === "Northen Hemisphere" &&
            (month >= 11 || month <= 3)) ||
            (hemisphere === "Southern Hemisphere" &&
              (month >= 5 || month <= 9))) && (
            <div>
              <h1>Winter Season</h1>
              <img width="300px"
                src="https://images.unsplash.com/photo-1550297118-39e7410a95f2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ludGVyJTIwc2Vhc29ufGVufDB8fDB8fHww"
                alt="winter"
              />
            </div>
          )
          }

         
      </div>
    );
}

export default App;
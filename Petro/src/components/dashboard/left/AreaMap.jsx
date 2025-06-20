// import zIndex from '@mui/material/styles/zIndex';
import { useState, useEffect } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
const GOOGLE_MAP_API_KEY = import.meta.env.GOOGLE_MAP_API_KEY;

const containerStyle = {
  width: '100%',
  height: '100%',

};
const center = { lat: 26.9002, lng: 75.8266 };


const localities = [
  { name: "Arjun Lal Sethi Nagar", position: { lat: 26.8968, lng: 75.8310 } },
  { name: "Janta Colony", position: { lat: 26.8960, lng: 75.8245 } },
  { name: "Jawahar Nagar", position: { lat: 26.8995, lng: 75.8355 } },
  { name: "Jhalana Doongri", position: { lat: 26.8855, lng: 75.8270 } },
  { name: "Krishna Mandir", position: { lat: 26.9023, lng: 75.8285 } },
  { name: "Moti Doongari Road", position: { lat: 26.9072, lng: 75.8235 } },
  { name: "Raja Park Colony", position: { lat: 26.8990, lng: 75.8210 } },
  { name: "Rajasthan University", position: { lat: 26.8694, lng: 75.8153 } },
  { name: "S.M.S. Hospital", position: { lat: 26.9103, lng: 75.8136 } },
  { name: "Tilak Nagar", position: { lat: 26.8940, lng: 75.8385 } },
];

const adarshNagarPoliceJurisdiction = {
  neighborhoods: [
    "Adarsh Nagar",
    "Azadpur",
    "Sarai Pipal Thala",
    "Mool Chand Colony",
    "Azadpur Mandi",
    "Adarsh Nagar Extension",
    "Transport Centre, Azadpur"
  ],
  roads: [
    "Mahatma Gandhi Road",
    "Nanda Road",
    "Hanuman Road",
    "Rama Road",
    "Swaran Singh Road",
    "Moti Lal Road",
    "Tagore Road",
    "Shankaracharya Road",
    "Netaji Road",
    "Nehru Road",
    "Bhagat Singh Road",
    "Hakikat Rai Road",
    "Arya Samaj Road",
    "Tandon Road",
    "Bungalow Road",
    "Rajan Babu Road",
    "Lord Krishna Road",
    "Guru Nanak Road",
    "Ranjit Singh Road",
    "Sushila Road",
    "Ashoka Road"
  ],
  landmarks: [
    "Azadpur Mandi",
    "Azadpur Metro Station"
  ]
};



// const polygonPath = [
//   { lat: 26.9120, lng: 75.8140 },
//   { lat: 26.9120, lng: 75.8380 },
//   { lat: 26.8860, lng: 75.8380 },
//   { lat: 26.8860, lng: 75.8140 },
// ];





function Map() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAP_API_KEY,
  });
  const [updatedLocalities, setUpdatedLocalities] = useState({});

  useEffect(() => {
    // filter localities based on handleGeocode
    const filteredLocalities = localities.filter(async (loc) => {
      const isInJurisdiction = await handleGeocode(loc);
      return isInJurisdiction;
    });
    setUpdatedLocalities(filteredLocalities);

  }, []);

  const fetchAddress = async (lat, lng) => {
    const url = `{https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}}`;
    try {
      const res = await fetch(url, {
        headers: {
          "User-Agent": "LocationFinderApp (your_email@example.com)" // Replace with your email
        }
      });
      const data = await res.json();
      alert(data.display_name);  // Return the data to the caller
      // console.log(data);
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };


  const handleMouseOver = (lat, lng) => {
    fetchAddress(lat, lng);
  };

  const handleMouseOut = () => {

  };


  const handleGeocode = async (loc) => {
    const url = `{https://nominatim.openstreetmap.org/reverse?format=json&lat=${loc.position.lat}&lon=${loc.position.lng}}`;
    try {
      const res = await fetch(url, {
        headers: {
          "User-Agent": "LocationFinderApp (your_email@example.com)"  // Replace with your email
        }
      });
      const data = await res.json();
      for (let area of adarshNagarPoliceJurisdiction.neighborhoods) {
        if (data.display_name && data.display_name.includes(area)) {
          return true;
        }
      }

      return false;
    } catch (err) {
      console.log(err);
    }
  }



  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div >
      <div className="w-[700px] h-[650px] overflow-hidden relative "> 
        {/* Radar Scanner Layer */}
        <div className="absolute inset-0 ">
          <div className="radar-scanner" />
          <div className="radar-line vertical" />
          <div className="radar-line horizontal" />
        </div>

        {/* Google Map Layer */}
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={13}
          options={{
            zoomControl: true,
            mapTypeControl: true,
            streetViewControl: true,
            fullscreenControl: true
          }}
        >
          <Marker position={center} />
          <ul>
            {updatedLocalities.map((loc, index) => (
              <Marker
                key={index}
                position={loc.position}
                onMouseOver={() => handleMouseOver(loc.position.lat, loc.position.lng)}
                onMouseOut={handleMouseOut}
                className="radar-target animate-pulse"
                icon={{
                  path: window.google.maps.SymbolPath.CIRCLE,
                  scale: 6,
                  fillColor: '#FF4F91',
                  fillOpacity: 0.9,
                  strokeWeight: 1,
                  strokeColor: '#fff',
                }}
              />
            ))}
          </ul>
          {/* Boundary Polygon */}
          {/* <Polygon
            paths={polygonPath}
            options={{
              fillColor: "#3b82f6",
              fillOpacity: 0.2,
              strokeColor: "#1e3a8a",
              strokeOpacity: 0.8,
              strokeWeight: 2,
            }}
          /> */}
        </GoogleMap>
      </div>

    </div>
  );
}

export default Map;
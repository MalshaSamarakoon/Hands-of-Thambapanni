import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const GoogleMapComponent = ({ google, lat, long }) => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <Map
        google={google}
        containerStyle={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
        style={{
          width: "100%",
          height: "100vh",
        }}
        zoom={13}
        center={{ lat: lat, lng: long }}
        initialCenter={{ lat: lat, lng: long }}
        disableDefaultUI={true}
      >
        <Marker position={{ lat: lat, lng: long }} />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyB8Y4lf4r5d2bStXxAgh-cZg-eolDsqkEw",
})(GoogleMapComponent);

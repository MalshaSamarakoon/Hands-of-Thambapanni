import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
  <span style={{ color: "red" }}>
    <strong>{text}</strong>
  </span>
);

const GoogleMapComponent = ({ lat, long }) => {
  if (lat == null || long == null) return <p>Location not available</p>;
  return (
    <div style={{ height: "60vh", width: "60vh", margin:"100px"}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB8Y4lf4r5d2bStXxAgh-cZg-eolDsqkEw" }}
        defaultCenter={{ lat: lat, lng: long }}
        defaultZoom={11}
      >
        <AnyReactComponent lat={lat} lng={long} text="Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMapComponent;

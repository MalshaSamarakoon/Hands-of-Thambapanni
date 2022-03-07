import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
  <span style={{ color: "red" }}>
    <strong>{text}</strong>
  </span>
);

const GoogleMapComponent = ({ lat, long }) => {
  if (lat == null || long == null) return <p>Location not available</p>;
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCMQWZUlDuZFJsvFp2HTCo3hWk3tVPXhlQ" }}
        defaultCenter={{ lat: lat, lng: long }}
        defaultZoom={11}
      >
        <AnyReactComponent lat={lat} lng={long} text="Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMapComponent;

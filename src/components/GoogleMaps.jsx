import React from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps"

const GoogleMapComponent = (props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 52.22977, lng: 21.01178 }}
  >
  </GoogleMap>


export default withScriptjs(withGoogleMap(GoogleMapComponent));
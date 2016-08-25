import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'

export default class Map extends Component {
  debugger
  render() {
    return(
      <section style={{display: "flex"}}>
        <GoogleMapLoader
          containerElement={
            <div
              // {...this.props}
              style={{
                height: '500px',
                width: '500px'
              }}
            />
          }
          googleMapElement={
            <GoogleMap
              ref={(map) => console.log(map)}
              defaultZoom={15}
              defaultCenter={{ lat: this.props.coords.coords.lat, lng: this.props.coords.coords.lng }}
              // onClick={this.handleMapClick}
            >
            <Marker />
          </GoogleMap>
          }
        />
      </section>
    )
  }
}

// function initMap() {
//   const { lat, long } = this.props.initialPosition // Grab lat and long from this.props.initialPosition
//   this.geocoder = new google.maps.Geocoder();
//   this.map = new google.maps.Map(this.refs.map, {
//     center: {
//       lat, // Same as lat: lat, long: long
//       long
//     },
//     zoom: 16
//   });
//     function getAddress(latLng) {
//     	geocoder.geocode( {'latLng': latLng},
//     	function(results, status) {
//     		if (status == google.maps.GeocoderStatus.OK) {
//     			if (results.length > 0) {
//     				var fulladdress = results[0].formatted_address;
//     			} else {
//     			alert("Unable to process the request " + status);
//     			}
//     		}
//     	}
//     )
//   };
// }

// Map.propTypes = {
//   initialPosition: React.PropTypes.object.isRequired
// };

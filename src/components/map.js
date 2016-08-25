import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'

export default class Map extends Component {

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
  // render() {
  //   return(
  //   )
  // }
}

// Map.propTypes = {
//   initialPosition: React.PropTypes.object.isRequired
// };

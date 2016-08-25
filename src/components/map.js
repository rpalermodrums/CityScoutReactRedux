import React, { Component } from 'react';

export default class Map extends Component {
  componentDidMount() { // Fired after component is added to the DOM
    this.props.initMap();
  }
  function initMap() {
    const { lat, long } = this.props.initialPosition // Grab lat and long from this.props.initialPosition
    this.geocoder = new google.maps.Geocoder();
    this.map = new google.maps.Map(this.refs.map, {
      center: {
        lat, // Same as lat: lat, long: long
        long
      },
      zoom: 16
    });
      function getAddress(latLng) {
      	geocoder.geocode( {'latLng': latLng},
      	function(results, status) {
      		if (status == google.maps.GeocoderStatus.OK) {
      			if (results.length > 0) {
      				var fulladdress = results[0].formatted_address;
      			} else {
      			alert("Unable to process the request " + status);
      			}
      		}
      	}
      )
    };
  }
  render() {
    return(
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCw6aDG4XanzNqS_3FX_I8mCwPoKe817HE&callback=initMap"
      async defer></script>
      <div ref="map">
      </div>
    )
  }
}

Map.propTypes = {
  initialPosition: React.PropTypes.object.isRequired
};

import React, { Component } from 'react';

class GoogleMap extends Component {
  // this component is called after it's been rendered to the screen
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }

  render() {
    // this.refs.map
    return <div className="google-maps" ref="map" />
  }
}

export default GoogleMap;

import React, { Component } from 'react'
import { Map, Marker } from "pigeon-maps"
import {connect} from 'react-redux'

class ISSLocation extends Component {
  render() {
    const {latitude,longitude} = this.props
    return (
      <div>
        <Map 
        height={300} 
        defaultCenter={[0, 0]} 
        defaultZoom={1}
        width={600}
        >
      <Marker width={50} anchor={[latitude, longitude]} />
    </Map>
        
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    latitude: state.ISSreducer.latitude,
    longitude: state.ISSreducer.longitude
  }
}
export default connect(mapStateToProps)(ISSLocation);
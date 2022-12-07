import React, { Component } from 'react'
import {connect} from 'react-redux'

 class Header extends Component {
  render() {
    const {lat,long,isFetching,ErrorMessage} = this.props;
    return (
      <div>
        <h1>ISS Location {isFetching && <p>⏳</p>}</h1>
        <p><strong>Longitude: </strong>{long}</p>
        <p><strong>Latitude: </strong>{lat}</p>
        {
          ErrorMessage && <p>ERROR!!</p>
        }
      </div>
    )
  }
}
const mapStateToProps = (state) => {
return {
  lat:state.ISSreducer.latitude,
  long:state.ISSreducer.longitude,
  isFetching:state.ISSreducer.isFetching,
  ErrorMessage:state.ISSreducer.ErrorMessage,
}
}
export default connect(mapStateToProps)(Header)

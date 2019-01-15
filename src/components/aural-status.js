import React from 'react';
// Added connect for the props state
import {connect} from 'react-redux';

export function AuralStatus(props) {
  return (
    <p
      id="status-readout"
      className="visuallyhidden"
      aria-live="assertive"
      aria-atomic="true"
    >
      {props.auralStatus}
    </p>
  );
}

// So basically we are setting the state directly in here.
const mapStateToProps = state => ({
  auralStatus: state.auralStatus
});

// Then exporting the props
export default connect(mapStateToProps)(AuralStatus);
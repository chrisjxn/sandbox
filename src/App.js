import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';
import { filterCars } from './redux/reducer';

class App extends Component {

  componentDidMount() {
    const colors = `?color=${this.props.selectedColors.join(",")}`
    console.log(colors);
    const driveTypes= `&driveType=${this.props.selectedDriveTypes.join(",")}`
    console.log(driveTypes);
    this.props.filterCars(colors+driveTypes)
  }

  render() {

    console.log(this.props)
    return (
      <MuiThemeProvider>
        <div>
          <div>Hello</div>

        </div>
      </MuiThemeProvider>
    )
  }
}

function mapStatetoProps(state) {
  return state
}

export default connect(mapStatetoProps, { filterCars })(App);
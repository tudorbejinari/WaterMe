import React from 'react';

const today = new Date().toDateString();

class DateUpdate extends React.Component {
  state = {
    update: ''
  };

  handleUpdate = () => {
    this.setState({ update: this.state.update + today, hasTriggered: true });
  };

  render() {
    return (
      <div>
        <p className='list-group'> Watered: {this.state.update}</p>
        {!this.state.hasTriggered ? (
          <button
            className='btn btn-info'
            onClick={this.handleUpdate.bind(this)}
          >
            WaterNow
          </button>
        ) : null}
      </div>
    );
  }
}

export default DateUpdate;

// const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
// const firstDate = Date.now();
// const secondDate = new Date(2019, 12, 19);

// const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
// alert(diffDays);

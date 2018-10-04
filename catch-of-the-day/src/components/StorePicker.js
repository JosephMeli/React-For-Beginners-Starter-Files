import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = e => {
    e.preventDefault();
    this.props.history.push(`store/${this.myInput.value.value}`);
  };
  render() {
    return (
      <React.Fragment>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please Enter a Store Name</h2>
          <input
            ref={this.myInput}
            type="text"
            placeholder="Store Name"
            defaultValue={getFunName()}
          />
          <button type="submit">Visit Store</button>
        </form>
      </React.Fragment>
    );
  }
}

export default StorePicker;

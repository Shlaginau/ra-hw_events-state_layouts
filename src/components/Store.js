import React, { Component } from 'react';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';
import products from './products';

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isListView: false
    };
  }

  handleSwitch = () => {
    this.setState((prevState) => ({
      isListView: !prevState.isListView
    }));
  };

  render() {
    const { isListView } = this.state;
    const icon = isListView ? 'view_module' : 'view_list';

    return (
      <div>
        <IconSwitch icon={icon} onSwitch={this.handleSwitch} />
        {isListView ? <ListView items={products} /> : <CardsView cards={products} />}
      </div>
    );
  }
}

export default Store;

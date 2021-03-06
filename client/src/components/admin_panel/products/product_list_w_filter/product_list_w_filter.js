import React from 'react';
import Filter from './filter';
import List from './list/list';

class ProductListWFilter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Filter
          categories={this.props.categories}
          category={this.props.category}
          handleFilter={this.props.handleFilter}
          filter={this.props.filter}
        />
        <List
          {...this.props}
          filteredProducts={this.props.filteredProducts}
          remove={this.props.remove}
          chooseToChange={this.props.chooseToChange}
        />
      </div>
    );
  }
}

export default ProductListWFilter;
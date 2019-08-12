import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Search, Grid, Label } from 'semantic-ui-react'
import _ from 'lodash'

import './search.css';

const resultRenderer = ({ name }) => <Label content={name} />

class SearchComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  handleSearch = (e, { value }) => {
    this.props.handleSearchChange(value);
  }

  render() {
    const { isLoading, value, results } = this.props

    return (
      <Grid>
        <Grid.Column width={6}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearch, 500, {
              leading: true,
            })}
            results={results}
            value={value}
            resultRenderer={resultRenderer}
            {...this.props}
          />
        </Grid.Column>
      </Grid>
    )
  }
}

SearchComponent.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  results: PropTypes.array.isRequired,
  handleSearchChange: PropTypes.func.isRequired
};

SearchComponent.defaultProps = {
  isLoading: false,
  value: '',
  results: [],
  handleSearchChange: () => {}
}

export default SearchComponent;
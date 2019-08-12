import { connect } from 'react-redux';
import React from 'react';
import AquarellesList from '../aquarelles/aquarellesList/aquarellesList';
import { getAllAquarelles } from '../../actions/aquarelleActions';
import SearchComponent from '../common/search/search';

import './home.css';

import {
  Container,
  Grid,
  Header,
  List,
  Segment,
} from 'semantic-ui-react';

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      filteredAquarelles: [],
      isLoadingSearch: false,
      value: '',
      results: []
    }
  }

  componentWillMount = () => {
    this.props.getAllAquarelles();
  }

  componentDidMount() {
    const { aquarelles } = this.props;
    this.setState({ filteredAquarelles: aquarelles });
  }

  handleSearchChange = (searchValue) => {
    searchValue = searchValue.toLowerCase();

    if (this.props.aquarelles.length) {
      this.setState({ isLoading: true, value: searchValue })

      setTimeout(() => {
        const results = this.props.aquarelles.filter(aquarelle => {
          const name = aquarelle.name.toLowerCase();
          return name.includes(searchValue)
        });

        this.setState({
          isLoading: false,
          filteredAquarelles: results,
        })
      }, 300)

    }
  }

  render() {
    const { isLoadingSearch, value, results, filteredAquarelles } = this.state

    let aquarellesToShow = this.state.value? filteredAquarelles: this.props.aquarelles;

    return (
      <div>
        <Segment
          style={{ minHeight: 700, padding: '1em 0em' }}
        >
          <Container style={{paddingTop:'20px'}}>
            <SearchComponent 
              isLoading={isLoadingSearch} 
              value={value}
              results={results}
              handleSearchChange={this.handleSearchChange}
            />
            <Header as='h2'>Francisco Tomé</Header>&nbsp;<span>127 results</span>
            <AquarellesList
              aquarelles={aquarellesToShow}
              loading={this.props.loading}
            />
          </Container>
        </Segment>
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='About' />
                  <List link inverted>
                    <List.Item as='a'>Sitemap</List.Item>
                    <List.Item as='a'>Contact Us</List.Item>
                    <List.Item as='a'>Religious Ceremonies</List.Item>
                    <List.Item as='a'>Gazebo Plans</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Services' />
                  <List link inverted>
                    <List.Item as='a'>Banana Pre-Order</List.Item>
                    <List.Item as='a'>DNA FAQ</List.Item>
                    <List.Item as='a'>How To Access</List.Item>
                    <List.Item as='a'>Favorite X-Men</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as='h4' inverted>
                    Footer Header
                  </Header>
                  <p>
                    Extra space for a call to action inside the footer that could help re-engage users.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  aquarelles: state.aquarelleStore.aquarelles,
  loading: state.aquarelleStore.loading,
})

const mapDispatchToProps = dispatch => ({
  getAllAquarelles: () => getAllAquarelles(dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);

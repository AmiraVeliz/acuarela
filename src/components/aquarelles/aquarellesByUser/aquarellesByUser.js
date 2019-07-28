import { connect } from 'react-redux';
import React from 'react';
import { Container, Segment } from 'semantic-ui-react';

import AquarellesList from '../aquarellesList/aquarellesList';
import { getAquarellesByCurrentUser, getAllAquarelles } from '../../../actions/aquarelleActions';
import { getAquarellesByUser } from '../../../selectors/aquarelleSelectors';

class AquarellesByUser extends React.Component {

  componentWillMount = () => { }

  render() {
    return (
      <Segment style={{ minHeight: 500, padding: '50px' }}>
        <Container style={{paddingTop:'20px'}}>
          <AquarellesList
            aquarelles={this.props.aquarelles}
            loading={this.props.loading}
          />
        </Container>
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  aquarelles: getAquarellesByUser(state.aquarelleStore, state.userStore.user.data._id),
  loading: state.aquarelleStore.loading
})

const mapDispatchToProps = dispatch => ({
  getAquarellesByCurrentUser: () => getAquarellesByCurrentUser(dispatch),
  getAllAquarelles: () => getAllAquarelles(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(AquarellesByUser);

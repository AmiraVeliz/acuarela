import { connect } from 'react-redux';
import { Grid, Image, Rating, Header, Button, Segment } from 'semantic-ui-react';
import React from 'react';
import { withRouter } from 'react-router-dom';

import { getAquarelleDetails } from '../../../actions/aquarelleActions';

// import './acuarela.css';

class AquarelleDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getAquarelleDetails(this.props.match.params.id);
  }

  handleGoBack = () => {
    this.props.history.push('/');
  }

  handleEdit = () => {
    console.log('edit aquarelle');
  }

  handleDelete = () => {
    console.log('delete aquarella');
  }

  render() {
    const { name, createdDate, technique, material, country, rating, images, authorId } = this.props.aquarelle;

    return (
      <Segment style={{ minHeight: 500, padding: '50px' }}>
        <Grid columns={2}>
          <Grid.Row>
            <Button onClick={this.handleGoBack}>Back</Button>
          </Grid.Row>
          <Grid.Column>
            {/* TODO just for now we are going to show first picture */}
            <Image src={images? images[0].url: ''} size='medium' />
          </Grid.Column>
          <Grid.Column>
            <Header size='medium'>{name}</Header>
            {/* <Rating icon='star' defaultRating={rating? rating: 0} maxRating={4} /> */}
            <br /> {createdDate}
            <br /> {technique}
            <br /> {material}
            <br /> {country}
          </Grid.Column>
          { 
            this.props.user.data._id === authorId? 
            (<Grid.Row>
              <Button onClick={this.handleEdit}>Edit</Button>
              <Button onClick={this.handleDelete}>Delete</Button>
            </Grid.Row>) : ''
          }
        </Grid>
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  aquarelle: state.aquarelleStore.aquarelle,
  loading: state.aquarelleStore.loading,
  user: state.userStore.user
})

const mapDispatchToProps = dispatch => ({
  getAquarelleDetails: (aquarelleId) => getAquarelleDetails(dispatch, aquarelleId)
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AquarelleDetails));

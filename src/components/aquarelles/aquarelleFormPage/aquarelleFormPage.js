import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

import AquarelleForm from '../aquarelleForm/aquarelleForm';
import { saveAquarelle } from '../../../actions/aquarelleActions';

//import './AcuarelaFormPage.css';

//TODO also to update aquarelle
class AquarelleFormPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = (aquarelle) => {
    this.props.saveAquarelle(aquarelle);
    this.props.history.push('/');

    /*if(!contact._id) {
      return this.props.saveContact(contact)
        .then(response => this.setState({ redirect:true }))
        .catch(err => {
           throw new SubmissionError(this.props.errors)
         })
    } else {
      return this.props.updateContact(contact)
        .then(response => this.setState({ redirect:true }))
        .catch(err => {
           throw new SubmissionError(this.props.errors)
         })
    }*/
  }

  render() {
    return (
      <Segment style={{ minHeight: 500, padding: '50px' }}>
        <AquarelleForm
          // acuarela={this.props.acuarela}
          loading={this.props.loading}
          onSubmit={this.handleSubmit}
        />
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  // acuarela: state.acuarelaStore.acuarela,
  loading: state.aquarelleStore.loading
})

const mapDispatchToProps = dispatch => ({
  saveAquarelle: (aquarelle) => saveAquarelle(dispatch, aquarelle)
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AquarelleFormPage));

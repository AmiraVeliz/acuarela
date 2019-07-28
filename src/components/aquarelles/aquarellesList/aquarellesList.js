import React from 'react';
import { Grid, Message, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Aquarelle from '../aquarelle/aquarelle';

export default function AquarellesList({
  aquarelles,
  loading
}){

  const loadingMessage = (
    <Message icon info>
      <Icon name='circle notched' loading />
      <Message.Content>
          <Message.Header>Just one second</Message.Header>
          We are fetching all aquarelles...
      </Message.Content>
    </Message>
  );

  const emptyMessage = (
    <Message icon info>
      <Icon name='warning circle' />
      <Message.Content>
          <Message.Header>No aquarelles found</Message.Header>
          <p>Add some new aquarelles to get started...</p>
          <Link to={'/aquarelle-form'} className="ui button primary">Add New Aquarelle</Link>
      </Message.Content>
    </Message>
  );

  // const timeoutMessage = (
  //   <Message icon negative>
  //     <Icon name='wait' />
  //     <Message.Content>
  //         <Message.Header>{error.message}</Message.Header>
  //     </Message.Content>
  //   </Message>
  // );

  const aquarellesList = (
    <Grid doubling columns={6}>
      {
        aquarelles.map((aquarelle, index) => {
          return <Aquarelle
            key={index}
            id={aquarelle._id}
            name={aquarelle.name}
            author={aquarelle.author}
            rating={aquarelle.rating}
            pathImage={(aquarelle.images && aquarelle.images.length)? aquarelle.images[0].url : 'https://react.semantic-ui.com/images/wireframe/image.png'}
          />;
        })
      }
    </Grid>
  );

  return (
    <div>
      { loading && loadingMessage }
      { aquarelles.length === 0 && !loading && emptyMessage }
      { aquarelles.length > 0 && aquarellesList }
    </div>
  );
}

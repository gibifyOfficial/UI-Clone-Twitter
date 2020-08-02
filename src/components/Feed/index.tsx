import React from 'react';

import Tweet from '../Tweet';
import { Container, Tab, Twetts } from './style';

const Feed: React.FC = () => {
  return (
    <Container>
      <Tab>Tweets</Tab>

      <Twetts>
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet /> 
      </Twetts> 
    </Container>
  )
}

export default Feed;
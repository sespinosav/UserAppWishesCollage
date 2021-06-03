import React from 'react';
import { Loader, Section, Container } from 'react-bulma-components';

const Loading = () => {
  return(
    <Section>
      <Container>
        <div className="columns is-centered">
          <Loader style={{
            width: 150,
            height: 150
          }} />
        </div>
      </Container>
    </Section>
  );
};

export default Loading;



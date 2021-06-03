import React from 'react';
import { Container, Section, Button } from 'react-bulma-components';

const RegisterButton  = ({ button, onClick }) => {
  return(
    <Section>
      <Container>
        <div className="is-pulled-right is-full">
          <Button onClick={ onClick } color="primary">{ button }</Button>
        </div>
      </Container>
    </Section>
  );
};

export default RegisterButton;


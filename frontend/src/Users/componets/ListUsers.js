import React from 'react';
import { Card, Columns, Content, Heading } from 'react-bulma-components';

const ListUsers = ({ users }) => {
  return(
    <section className="section">
    <Columns>
    { 
    users.map(({ name, commune, wish, _id, imgUrl }) => (
        <Columns.Column size={3} key={_id}>
          <Card>
            <Card.Image size="16by9" src={imgUrl} />
          <Card.Content>
            <Content>
              <Heading>
                {name}
              </Heading>
              <Heading subtitle size={6}>{wish}</Heading>
              <Heading subtitle size={6}>{commune}</Heading>
            </Content>
          </Card.Content>
          </Card>
        </Columns.Column>
      ))
      }
    </Columns>
    </section>  
    ); 
};

export default ListUsers;

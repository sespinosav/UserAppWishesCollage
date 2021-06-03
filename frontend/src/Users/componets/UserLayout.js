import React,{ useState, useEffect } from 'react';
import {Helmet} from "react-helmet";
import { Modal, Container } from 'react-bulma-components';
import Header from './Header';
import RegisterButton from './RegisterButton';
import ListUsers from './ListUsers';
import Form from './Form';
import { saveUser, getUsers } from './services';
import Loading from './Loading';

const UserLayout = ({ en = false }) => {
  let title = "App Deseos Universitarios";
  let button = "Registrarse";
  let notFound = "Ningun usuario registrado";
  let form = "Formulario";
  let nameForm = "Nombre";
  let communeForm = "Comuna";
  let wishForm = "Carrera que desea estudiar";
  let imgUrlForm = "Imagen de perfil";
  let saveForm = "Guardar";

  let lng = "es";
  if(en) { 
    title = "Users wishes college app";
    button = "Sign in";  
    notFound = "Not found users";
    form = "Form";

    nameForm = "Name";
    communeForm = "Commune";
    wishForm = "Desired college career";
    imgUrlForm = "Profile picture";
    lng = "en";
    saveForm = "Save";
  }
  
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState({});

  async function loadUsers(){
      const response = await getUsers();

      if(response.status === 200) {
        setUsers(response.data.users);
      }

      setIsLoading(false);
  }


  useEffect(() => {
     loadUsers();
  }, []);

  const handleSubmit = async(data) => {
    await saveUser(data);
    loadUsers();
    setIsModalOpen(false);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
   
  return(
    <Container>
      <Helmet htmlAttributes={{ lang : lng }}/>
      <Header title={ title }/>
      <RegisterButton button={ button } onClick={ () => setIsModalOpen(true) } />
      {
        isLoading && <Loading />
      }
      {
        !isLoading && !users.length && <h2 className="title has-text-centered">{ notFound }</h2>
      }
      {
        !isLoading && users.length && <ListUsers users={users} />
      }
      {
      }
      <Modal show={ isModalOpen } onClose={() => setIsModalOpen(false)}>
        <Modal.Card>
          <Modal.Card.Header>
            <Modal.Card.Title>
              { form }
            </Modal.Card.Title>
          </Modal.Card.Header>
          <Modal.Card.Body>
            <Form handleSubmit={ handleSubmit } nameForm={nameForm} communeForm={communeForm} wishForm={wishForm} imgUrlForm={imgUrlForm} saveForm={saveForm}/> 
          </Modal.Card.Body>
        </Modal.Card>
      </Modal> 
    </Container>
 );
};

export default UserLayout;

import React,{ useState, useRef } from 'react';
import { Form as BulmaForm, Button } from 'react-bulma-components';

const { Field, Control, Label, Input } = BulmaForm;

const Form = ({ handleSubmit, nameForm, communeForm, wishForm, imgUrlForm, saveForm  }) => {
  const [formValues, setFormValues ] = useState({
    name: "",
    commune: "",
    wish: "",
  });

  const inputFileRef = useRef();
  
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value })
  };
  
  const _handleSubmit = (e) => {
    e.preventDefault();
    handleSubmit({...formValues, imgUrl : inputFileRef.current.files[0] });
  };

  return(
  <form onSubmit={_handleSubmit}>
    <Field>
      <Label>{nameForm}</Label>
      <Control>
        <Input 
          placeholder="" 
          name="name"
          value={formValues.name}
          onChange={handleChange}      
        />          
      </Control>
    </Field>
    <Field>
      <Label>{wishForm}</Label>
      <Control>
        <Input 
          placeholder="" 
          name="wish"
          value={formValues.wish}
          onChange={handleChange}      
        />          
      </Control>
    </Field>
     <Field>
      <Label>{communeForm}</Label>
      <Control>
        <Input 
          placeholder="" 
          name="commune"
          type="number"
          value={formValues.commune}
          onChange={handleChange}      
        />          
      </Control>
    </Field>
     <Field>
      <Label>{imgUrlForm}</Label>
      <Control>
        <input 
          type="file"
          ref={inputFileRef}
        />          
      </Control>
    </Field>
    <Button type="submit" color="primary">{saveForm}</Button> 
  </form>
  );
};

export default Form;

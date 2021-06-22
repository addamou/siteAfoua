import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, TextField } from '@material-ui/core';
import styled from 'styled-components'
import axios from 'axios'

const Forme = styled.div `
  margin-bottom : 10px;
  background : #fff
`  
  const Formulaires = () => {
    
    
    const data = {
        name : '',
        mobile : '',
        motif: '',
        message: ''
      } 
    
      const [contact, setContact] = useState(data);
    
      const { name, mobile, motif, message } = contact;
      
    
      const handleChange= event => {
        setContact({
          ...contact,
            [event.target.id]: event.target.value,
        });
    };
    
    const submit = async (e) => {
      e.preventDefault();

      try {  
        await axios.post("http://localhost:5000/api/contact/", contact );
        toast.success("Message envoyé avec succés", { position: toast.POSITION.TOP_RIGHT });
        
    } catch (err) {
        toast.error("Message non envoyé, réessayez encore !", { position: toast.POSITION.TOP_RIGHT });
    }

     setContact(data)
    };
    return (
        <form onSubmit={submit} className ="form" autoComplete="off">
          <ToastContainer />
            <h2>Formulaire</h2>
            <Forme>
                <TextField
                  id="name"
                  label="Nom et prenom"
                  value={name}
                  onChange={handleChange}
                  variant="outlined" 
                  required
                  fullWidth
                />
            </Forme>
            <Forme>
               <TextField
                 id="mobile"
                 label="Numéro de Téléphone"
                 value={mobile}
                 onChange={handleChange}
                 variant="outlined"
                 required
                 fullWidth
               />
            </Forme>
            <Forme>
                <TextField
                  id="motif"
                  label="Motifs"
                  value={motif}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                />
            </Forme>
            
            <Forme>
                <TextField
                  id="message"
                  label="Rédiger votre message..."
                  value={message}
                  onChange={handleChange}
                  rows={4}
                  variant="outlined"
                  fullWidth
                />
            </Forme>
            <Forme>
            <Button variant="outlined" color="primary" type= "submit" fullWidth >ENVOYER</Button>
            </Forme>
        </form>
    )
}

export default Formulaires

import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core';

  
  const Formulaires = () => {
    
    
    const data = {
        identite : '',
        mobile : '',
        motif: '',
        message: ''
      } 
    
      const [contact, setContact] = useState(data);
    
      const { identite, mobile, motif, message } = contact;
    
      const handleChange= event => {
        setContact({
          ...contact,
            [event.target.id]: event.target.value,
        });
    };
    
    const submit = e => {
      e.preventDefault();
      
      console.log(contact)
    };
    return (
        <form onSubmit={submit} className ="form">
            <h2>Formulaire</h2>
            <div className="divInput">
                <TextField
                  id="identite"
                  label="Identités"
                  value={identite}
                  onChange={handleChange}
                  variant="outlined"
                  required
                />
            </div>
            <div className="divInput">
               <TextField
                 id="mobile"
                 label="Numéro de Téléphone"
                 value={mobile}
                 onChange={handleChange}
                 variant="outlined"
                 required
               />
            </div>
            <div className="divInput">
                <TextField
                  id="motif"
                  label="Motifs"
                  value={motif}
                  onChange={handleChange}
                  variant="outlined"
                />
            </div>
            
            <div className="divInput">
                <TextField
                  id="message"
                  label="Rédiger votre message..."
                  value={message}
                  onChange={handleChange}
                  rows={4}
                  variant="outlined"
                />
            </div>
            <div className="divInput">
            <Button variant="outlined" color="primary" type= "submit">ENVOYER</Button>
            </div>
        </form>
    )
}

export default Formulaires

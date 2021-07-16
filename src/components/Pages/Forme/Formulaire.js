import React, { useState } from 'react'
import axios from "axios";
import { url } from "../../api"
import { toast } from 'react-toastify';
import "./style.css"

const Formulaire = () => {
    const data = {
        email: "",
        name: '',
        mobile: '',
        motif: '',
        message: ''
    }

    const [contact, setContact] = useState(data);

    const { email, name, mobile, motif, message } = contact;


    const handleChange = e => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value });
    };

    const submit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(`${url}/api/contact`, contact);
            toast.success("Votre message est envoyé avec succés", { position: toast.POSITION.TOP_RIGHT });
            setContact(data)
        } catch (err) {
            toast.error("Message non envoyé, réessayez encore !", { position: toast.POSITION.TOP_RIGHT });
            setContact(data)
        }
    };

    return (
        <form className="Forme" onSubmit={submit}>
            <div className="divF">
                <input placeholder="Nom" required type="text" onChange={handleChange} className="Ipt" value={name} name="name" />
            </div>
            <div className="divF">
                <input placeholder="Téléphone" required type="number" onChange={handleChange} className="Ipt" value={mobile} name="mobile" />
            </div>
            <div className="divF">
                <input placeholder="Email" required type="text" onChange={handleChange} className="Ipt" value={email} name="email" />
            </div>
            <div className="divF">
                <input placeholder="Sujet" required type="text" onChange={handleChange} className="Ipt" value={motif} name="motif" />
            </div>
            <div className="divF">
                <textarea placeholder="Ecrit..." className="Ipt" onChange={handleChange} name="message" value={message} />
            </div>

            <button type="submit" className="btn">Envoyer</button>

        </form>
    )
}

export default Formulaire

import {ChangeEvent, FormEvent, useState} from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Envoyer les données du formulaire à votre serveur ici
        console.log(formData);

        fetch('http://localhost:3000/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // Réinitialiser le formulaire après soumission
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            })
            .catch(error => {
                console.error(error);
            });

    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nom:
                <input type="text" name="name" value={formData.name} onChange={handleChange}/>
            </label>
            <br/>
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange}/>
            </label>
            <br/>
            <label>
                Message:
                <textarea name="message" value={formData.message} onChange={handleChange}/>
            </label>
            <br/>
            <button type="submit">Envoyer</button>
        </form>
    );
}
import { useState, useId } from 'react';
import axios from 'axios';
import form from '../styles/Form.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

function Form(props) {
    const [username, setUsername] = useState(''); 
    const id = useId();
       
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.get(`https://api.github.com/users/${username}`);
        console.info(response);
        
        /* const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        console.log(data); */
        
        props.onSubmit(response.data);

        setUsername('');
    }

    const onChangeHandler = (e) => {
        setUsername(e.target.value);
    }

    return (
        <div className={form.grid}>
            <form className={form.form} onSubmit={handleSubmit}>
                <fieldset className={form.group}>
                    <legend className={form.legend}>GitHub username</legend>
                    <label className={form.label} htmlFor={`username-${id}`}><FontAwesomeIcon icon={faGithub}/></label>
                    <input type="text" className={form.input} id={`username-${id}`} value={username} placeholder="@username" title='Enter your GitHub username' onInvalid={e => e.target.setCustomValidity('Please, enter here your GitHub username')} onChange={onChangeHandler} autoFocus required/>
                </fieldset>

                <button className={form.btn}>Add new card</button>
            </form>
        </div>
    )
};

export default Form;

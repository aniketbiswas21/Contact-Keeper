import React,{Fragment, useContext} from 'react';
import contactContext from '../../context/contact/contactContext';
import ContactState from '../../context/contact/ContactState';
import ContactItem from './ContactItem';


const Contacts = () => {
    const ContactContext = useContext(contactContext);
    const {contacts}= ContactContext;
    return (
        <Fragment>
           {contacts.map(contact=> {return(
               <ContactItem contact={contact} key={contact.id}/>
           )})}
        </Fragment>
    )
}

export default Contacts

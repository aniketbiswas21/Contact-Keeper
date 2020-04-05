import React,{Fragment, useContext} from 'react';
import contactContext from '../../context/contact/contactContext';
import ContactState from '../../context/contact/ContactState';
import ContactItem from './ContactItem';


const Contacts = () => {
    const ContactContext = useContext(contactContext);
    const {contacts,filtered}= ContactContext;
    if(contacts.length===0){
        return(
            <h4>Please add a Contact</h4>
        )
    }
    return (
        <Fragment>
        {(filtered!==null? filtered.map(contact=>(<ContactItem contact={contact} key={contact.id}/>)):(contacts.map(contact=> {return(
               <ContactItem contact={contact} key={contact.id}/>)}
           
           )))}
        </Fragment>
    )
}

export default Contacts

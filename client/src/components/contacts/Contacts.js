import React,{Fragment, useContext} from 'react';
import contactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';
import {CSSTransition, TransitionGroup } from 'react-transition-group';


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
        <TransitionGroup>
        {(filtered!==null? filtered.map(contact=>(<CSSTransition key={contact.id} timeout={500} classNames='item'><ContactItem contact={contact} /></CSSTransition>)):(contacts.map(contact=> {return(
            <CSSTransition key={contact.id} timeout={500} classNames='item'><ContactItem contact={contact} /></CSSTransition>)}
           
           )))}
           </TransitionGroup>
        </Fragment>
    )
}

export default Contacts

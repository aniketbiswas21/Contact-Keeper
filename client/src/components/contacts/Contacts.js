import React,{Fragment, useContext, useEffect} from 'react';
import contactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';
import {CSSTransition, TransitionGroup } from 'react-transition-group';
import Spinner from '../layout/Spinner';


const Contacts = () => {
    const ContactContext = useContext(contactContext);
    const {contacts,filtered,getContacts, loading}= ContactContext;
    useEffect(()=>{
        getContacts();
        //eslint-disable-next-line
    },[]);
    if(contacts!==null&& contacts.length===0 && !loading){
        return(
            <h4>Please add a Contact</h4>
        )
    }
    return (
        <Fragment>
        {contacts !== null && !loading? ( <TransitionGroup>
        {(filtered!==null? filtered.map(contact=>(<CSSTransition key={contact._id} timeout={500} classNames='item'><ContactItem contact={contact} /></CSSTransition>)):(contacts.map(contact=> {return(
            <CSSTransition key={contact._id} timeout={500} classNames='item'><ContactItem contact={contact} /></CSSTransition>)}
           
           )))}
           </TransitionGroup>):<Spinner/> } 
       
        </Fragment>
    )
}

export default Contacts

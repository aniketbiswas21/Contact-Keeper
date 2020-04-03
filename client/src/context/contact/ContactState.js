import React, {useReducer} from 'react';
import {v4 as uuid} from 'uuid';
import contactContext from './contactContext';
import contactReducer from './contactReducer';
import {ADD_CONTACT,DELETE_CONTACT,SET_CURRENT,CLEAR_CONTACTS,CLEAR_CURRENT,UPDATE_CONTACT,FILTER_CONTACTS,CLEAR_FILTER} from '../types';


const ContactState = (props) =>{
    const initialState={
        contacts: [
            {
                type:"personal",
                name:"Eobard Thawne",
                email:"killallen@gmail.com",
                phone:"12314553232",
                id:1
            },
            {
                type:"professional",
                name:"Barry Allen",
                email:"ballen@gmail.com",
                phone:"1234553232",
                id:2
            }
        ]
    };
    const [state, dispatch]= useReducer(contactReducer,initialState);

    //Add Contact
    const addContact =(contact) =>{
        contact.id=uuid();
        dispatch({type: ADD_CONTACT, payload: contact})
    }


    //Delete Contact
    const deleteContact = (id) =>{
        dispatch({type: DELETE_CONTACT, payload: id})
    }


    //Set Current Contact

    //Clear Current Contact

    //Update Contact

    //Filter Contacts

    //Clear Filter


    return(
        <contactContext.Provider 
        value={{
            contacts:state.contacts,
            addContact,
            deleteContact
         }}>
            {props.children}
        </contactContext.Provider>
    );


};
export default ContactState;
import React, { useContext, useEffect } from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';
import authContext from '../../context/auth/AuthContext';

const Home = () => {
    const AuthContext = useContext(authContext);
    useEffect(()=>{
        AuthContext.loadUser();
        //eslint-disable-next-line
    },[]);
    return (
        <div className='grid-2'>
           <div>
               {/* Contact form */}
               <ContactForm />
           </div>
           <div>
                <ContactFilter />
               <Contacts />
           </div>
        </div>
    )
}

export default Home

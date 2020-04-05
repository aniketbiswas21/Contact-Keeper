import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import contactContext from '../../context/contact/contactContext';


const ContactItem = ({contact}) => {
    const ContactContext = useContext(contactContext);
    const {name,id,email,phone,type}= contact;
    const onClick = () =>{
        ContactContext.deleteContact(id);
        ContactContext.clearCurrent();
    }
    return (
        <div className='card bg-light'>
            <h3 className='text-primary text-left'>
                {name}{' '}<span style={{float: 'right'}}className={'badge ' + (type=== 'professional'?'badge-success': 'badge-primary')}>{type.charAt(0).toUpperCase()+ type.slice(1)}</span> 
            </h3>
        <ul className='list'>
            {email &&( <li>
                <i className='fas fa-envelope-open' /> {email}
            </li>)} 
            {phone &&( <li>
                <i className='fas fa-phone' /> {phone}
            </li>)} 

        </ul>
        <p>
            <button className='btn btn-dark btn-sm' onClick={()=>ContactContext.setCurrent(contact)}>Edit</button>
            <button className='btn btn-danger btn-sm' onClick={onClick}>Delete</button>
        </p>
        </div>
    )
}
ContactItem.propTypes={
    contact:PropTypes.object.isRequired,
}

export default ContactItem

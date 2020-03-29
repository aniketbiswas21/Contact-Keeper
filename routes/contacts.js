const express =require('express');
const router= express.Router();

//@route    GET api/contacts
//@desc     get all users contacts
//@access   Private
router.get('/', (req, res)=> {res.send('Get all contacts')});

//@route    POST api/contacts
//@desc     Add new contacts
//@access   Private
router.post('/', (req, res)=> {res.send('Add contact')});

//@route    PUT api/contacts/:id
//@desc     update a contact
//@access   Private
router.put('/:id', (req, res)=> {res.send('Update contact')});

//@route    DELETE api/contacts/:id
//@desc     delete a contact
//@access   Private
router.delete('/:id', (req, res)=> {res.send('Delete contact')});

module.exports = router; 
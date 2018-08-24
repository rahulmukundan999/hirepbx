const express = require('express');
const router = express.Router();
const Contact = require('./models/contacts');
const Extension = require('./models/extension');

//retrive contacts
router.get('/contacts',(req,res,next)=>{
Contact.find(function(err,contacts){
    res.json(contacts);
}) 
});

//Retrive extensions 
router.get('/extensions',(req,res,next)=>{
    Extension.find(function(err,extensions){
        res.json(extensions);
    }) 
    });
    


//add contacts
router.post('/contact',(req,res,next)=>{
    var newContact = new Contact({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        company: req.body.company,
        mob: req.body.mob,
        mob2: req.body.mob2,
        home: req.body.home,
        home2: req.body.home2,
        business: req.body.business,
        business2: req.body.business2,
        email: req.body.email,
        other: req.body.other,
        bfax: req.body.bfax,
        hfax: req.body.hfax,
        ofax: req.body.ofax
    })
    

    newContact.save((err,contact)=>{
        if(err)
        {
            res.json({msg:'Failed to add contact'});
        }
        else{
            res.json({msg:'added succcessfully'});;
        }
    })
});

//add extension
router.post('/extension',(req,res,next)=>{
    var newExtension = new Extension({
        extensionno: req.body.extensionno,
        displayname: req.body.displayname,
        outboundcid: req.body.outboundcid,
        password: req.body.password,
        email: req.body.email
    })
    

    newExtension.save((err,extension)=>{
        if(err)
        {
            res.json({msg:'Failed to add extension'});
        }
        else{
            res.json({msg:'added succcessfully'});;
        }
    })
});



//delete extension
router.delete('/extension/:id',(req,res,next)=>{
    Extension.remove({_id: req.params.id}, function(err, result){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(result);
        }
    });
      
});
    



//delete contact
router.delete('/contact/:id',(req,res,next)=>{
Contact.remove({_id: req.params.id}, function(err, result){
    if(err)
    {
        res.json(err);
    }
    else
    {
        res.json(result);
    }
});
  
});

router.put('/contact/:id',function(req,res){
console.log('update a vdeo');
Contact.findByIdAndUpdate(req.params._id,
{
    $set: { firstname:req.params.firstname, 
        lastname: req.params.lastname, 
        company: req.body.company,
        mob: req.body.mob,
        mob2: req.body.mob2,
        home: req.body.home,
        home2: req.body.home2,
        business: req.body.business,
        business2: req.body.business2,
        email: req.body.email,
        other: req.body.other,
        bfax: req.body.bfax,
        hfax: req.body.hfax,
        ofax: req.body.ofax}

},
{
    new:true
},
function(err,updatedcontact){
    if(err)
    {
        res.send('error');
    }
    else{
        res.json(updatedcontact);
    }
}
);

})


module.exports = router;
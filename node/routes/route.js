const express = require('express');
const router = express.Router();
const Contact = require('./models/contacts');
const Extension = require('./models/extension');
const Extension1 = require('./models/extension');
var builder = require('xmlbuilder');
var fs = require('fs');
var ext;
//retrive contacts
router.get('/contacts',(req,res,next)=>{
Contact.find(function(err,contacts){
    res.json(contacts);
}) 
});

//Retrive extensions 
router.get('/extensions',(req,res,next)=>{
    var xml = builder.create('include');
    
    Extension.find(function(err,extensions){

      
        for(var i=0; i<extensions.length; i++){
            
            var a='src/'+extensions[i].extensionno+'.xml';
            
       var b=i;
            fs.exists(a,function (exists) {
                
               if(exists)
                {
                    
                   
               }
               else
               {
                xml.ele('user',{'id':extensions[b].extensionno})
                .ele('params') .ele('param',{'name':'password','value':extensions[b].extensionno}).up().ele('param',{'name':'vm-password','value':extensions[b].extensionno}).up()
                .up()
                .ele('variables')
                .ele('variable',{'name':'toll_allow','value':'domestic,international,local'}).up()
                .ele('variable',{'name':'accountcode','value':extensions[b].extensionno}).up()
                .ele('variable',{'name':'user_context','value':'default'}).up()
                .ele('variable',{'name':'effective_caller_id_name','value':'Extension '+extensions[b].extensionno}).up()
                .ele('variable',{'name':'effective_caller_id_number','value':extensions[b].extensionno}).up()
                .ele('variable',{'name':'outbound_caller_id_name','value':'$${'+extensions[b].displayname+'}'}).up()
                .ele('variable',{'name':'outbound_caller_id_number','value':'$${'+extensions[b].outboundcid+'}'}).up()
                .ele('variable',{'name':'callgroup','value':'techsupport'}).up()
                .end({ pretty: true});
             
             
                fs.writeFile(a,xml,function(err){




                });
                
                  
               }
           });

      
       
    }
      
        res.json(extensions);
    });
    
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
            
           res.json({msg:'added'});

        }
    })
});



//delete extension
router.delete('/extension/:id/:extensionno',(req,res,next)=>{
    ext=req.params.id;
    name=req.params.extensionno;
    fs.unlink(name+'.xml', function (err) {
        
      });
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

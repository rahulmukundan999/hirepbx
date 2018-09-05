const express = require('express');
const router = express.Router();
const Contact = require('./models/contacts');
const Extension = require('./models/extension');
const Trunk = require('./models/trunk');
const Extension1 = require('./models/extension');
const Inbound = require('./models/inbound');
const Outbound = require('./models/outbound');
const Ring = require('./models/ring');
var builder = require('xmlbuilder');
var fs = require('fs');








//retrive contacts
router.get('/contacts',(req,res,next)=>{
Contact.find(function(err,contacts){
    res.json(contacts);
}) 
});

//retrive rings
router.get('/rings',(req,res,next)=>{
    Ring.find(function(err,rings){

        var xml= builder.create('include');
        var domain=xml.ele('domain',{'name':'$${domain}'})
        .ele('params') 
        .ele('param',{'name':'dial-string','value':'{^^:sip_invite_domain=${dialed_domain}:presence_id=${dialed_user}@${dialed_domain}}${sofia_contact(*/${dialed_user}@${dialed_domain})}'}).up()
        .up()
        .ele('variables')
        .ele('variable',{'name':'default_gateway','value':'$${defult_provider}'}).up()
        .up();
        var group = domain.ele('groups');
        for(var i=0; i<rings.length; i++)
        {
        group.ele('group',{'name':rings[i].name})
        .ele('users')
        .ele('X-PRE-PROCESS',{'cmd':'include','data':'default/*.xml'}).up()
        .ele('action',{'application':'set','data':'call_timeout='+rings[i].timeout}).up()
        .ele('user',{'id':rings[i].extension,'type':'pointer'}).up()
        .up()
        .up();
        }
        xml.end({ pretty: true});
             
             
        fs.writeFile('hello.xml',xml,function(err){




        });
       res.json(rings);
       
       
        





    }) 
    });
    



//retrive outbound
router.get('/outbounds',(req,res,next)=>{
    Outbound.find(function(err,outbounds){


        var xml= builder.create('include');
        var domain=xml.ele('context',{'name':'sipout'}) ;
        for(var i=0; i<outbounds.length; i++)
        {
            var j=i;
          var domain2= domain.ele('extension',{'name':outbounds[j].name});
        var domain1=domain2.ele('condition',{'field':'${outbound_itsp}','expression':'^voxbeam$','break':'on-false'});
       var group=domain1.ele('action',{'application':'set','data':'effective_caller_id_number=${'+outbounds[j].callerid+'}'}).up();
        if(outbounds[j].dial=='' && outbounds[j].dialpattern=='')
        {
            console.log("hello");
        group.ele('action',{'application':'bridge','data':'sofia/gateway/'+outbounds[j].trunk+'/$1'}).up();
        }else
        if(outbounds[j].dial=='')
        {
        group.ele('action',{'application':'bridge','data':'sofia/gateway/'+outbounds[j].trunk+'/'+outbounds[j].dialpattern}).up();
        }else
        if(outbounds[j].dialpattern=='')
        {
        group.ele('action',{'application':'bridge','data':'sofia/gateway/'+outbounds[j].trunk+'/'+outbounds[j].dial+'$1'}).up();
        }
        else
        {
            group.ele('action',{'application':'bridge','data':'sofia/gateway/'+outbounds[j].trunk+'/'+outbounds[j].dial+outbounds[i].dialpattern}).up();

        }
        group.up()
        .up();
        }        
         xml.end({pretty:true});

               
        fs.writeFile('outbound.xml',xml,function(err){




        });



        res.json(outbounds);
    }) 
    });
    
    







//Retrive extensions 
router.get('/extensions',(req,res,next)=>{
    var xml = builder.create('include');
    
    Extension.find(function(err,extensions){

      
        for(var i=0; i<extensions.length; i++){
            
            var a='/usr/local/freeswitch/conf/directory/default/'+extensions[i].extensionno+'.xml';
            
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
    



//retrive trunk
router.get('/trunks',(req,res,next)=>{

    


    Trunk.find(function(err,trunks){
        
        var xml1 = builder.create('include');

        for(var i=0; i<trunks.length; i++)
        {
            if(trunks[i].register==true)
            {
         xml1.ele('gateway',{'name':trunks[i].trunkname})
        .ele('param',{'name':'proxy','value':trunks[i].trunkip}).up()
        .ele('param',{'name':'register','value':trunks[i].register}).up()
        .ele('param',{'name':'username','value':trunks[i].username1}).up()
        .ele('param',{'name':'password','value':trunks[i].password}).up()
        .up();
            }
    else
    {
        xml1.ele('gateway',{'name':trunks[i].trunkname})
        .ele('param',{'name':'proxy','value':trunks[i].trunkip}).up()
        .ele('param',{'name':'register','value':trunks[i].register}).up()
        .ele('param',{'name':'caller-id-in-from','value':true}).up()
        .up();

    }
}
        xml1.end({ pretty: true});
        fs.writeFile("/usr/local/freeswitch/conf/sip_profiles/internal.xml",xml1,function(err){

         });
        


        res.json(trunks);
    });

    });
    





    //retrive inbound
router.get('/inbounds',(req,res,next)=>{
    Inbound.find(function(err,inbounds){
        res.json(inbounds);
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



//add outbound
router.post('/outbound',(req,res,next)=>{
    var newOutbound = new Outbound({
        name: req.body.name,
        dial: req.body.dial,
        dialpattern: req.body.dialpattern,
        callerid: req.body.callerid,
        trunk: req.body.trunk
    })
    

    newOutbound.save((err,outbound)=>{
        if(err)
        {
            res.json({msg:'Failed to add outbound'});
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






//add ring
router.post('/ring',(req,res,next)=>{
    var newRing = new Ring({
        name: req.body.name,
        extension: req.body.extension,
        timeout: req.body.timeout
    })
    

    newRing.save((err,ring)=>{
        if(err)
        {
            res.json({msg:'Failed to add ring'});
        }
        else{
            
           res.json({msg:'added'});

        }
    })
});





//add trunk
router.post('/trunk',(req,res,next)=>{
    var newTrunk = new Trunk({
        trunkname: req.body.trunkname,
        username1: req.body.username1,
        password: req.body.password,
        trunkip: req.body.trunkip,
        register: req.body.register
    })
    

    newTrunk.save((err,trunk)=>{
        if(err)
        {
            res.json({msg:'Failed to add extension'});
        }
        else{
            
           res.json({msg:'added'});

        }
    })
});




//add inbounds
router.post('/inbound',(req,res,next)=>{
    var newInbound = new Inbound({
        name: req.body.name,
        didnumber: req.body.didnumber,
        playback: req.body.playback,
        ringgroup: req.body.ringgroup,
        forext: req.body.forext,
        formob: req.body.formob
    })
    

    newInbound.save((err,inbound)=>{
        if(err)
        {
            res.json({msg:'Failed to add Inbound'});
        }
        else{
            res.json({msg:'added succcessfully'});;
            
        }
    })
});







//delete extension
router.delete('/extension/:id/:extensionno',(req,res,next)=>{
    ext=req.params.id;
    name=req.params.extensionno;
    fs.unlink('/usr/local/freeswitch/conf/directory/default/'+name+'.xml', function (err) {
        
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



//delete contact
router.delete('/ring/:id',(req,res,next)=>{
    Ring.remove({_id: req.params.id}, function(err, result){
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
    



//delete outbound
router.delete('/outbound/:id',(req,res,next)=>{
    Outbound.remove({_id: req.params.id}, function(err, result){
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
    
    
    





//delete trunk
router.delete('/trunk/:id',(req,res,next)=>{
    Trunk.remove({_id: req.params.id}, function(err, result){
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
    


//delete inbound
    router.delete('/inbound/:id',(req,res,next)=>{
        Inbound.remove({_id: req.params.id}, function(err, result){
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

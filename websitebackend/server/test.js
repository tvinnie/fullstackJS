var models = require('./server.js').models;

// models.Profile.create({name:'Nik'}, (err,profile)=>{
//     console.log('data?',err,profile)
// })

// models.Profile.upsert({id:"66a1ecdfc8e143de0efb6abf",name:'Nik'}, (err,profile)=>{
//     console.log('data?',err,profile)
// }) finds an existing model using an ID

// models.Profile.findOrCreate({name:'Nik'}, (err,profile)=>{
//     if(err){
//         console.log('data?',err,profile)
//     } else if(profile){
//         // profile.updateAttributes({
//         //     email:'nik@nik.com'
//         // },(updateError,updated)=>{
//         //     console.log("Saved?",updateError,updated)
//         // })
//         profile.email = "nik2@nik.com";
//         profile.save((ue,updated)=>{
//             console.log('Saved?',ue,updated);
//         })
//     }
// })

// Custom data to save and test find
// var toSave = [
//     {name:'Vin3',email:'vin3@vin.com'},
//     {name:'Nik3',email:'nik3@nik.com'},
//     {name:'Nik4',email:'nik4@nik.com'},
//     {name:'Nik5',email:'nik5@nik.com'},
// ];

// creating data
// toSave.map(obj=>{
//     models.Profile.create(obj, (err,created)=>{
//         console.log("Created?",created);
//     })
// })

// finding data
var filter = {
    where: {
        email: {like: 'vin'}
    },
    order:'id ASC', //date/id ASC/DESC
    limit:10,
}

// models.Profile.findOne({where: {name: 'Nik3'}}, (err, found) =>{
//     console.log("Found?",err, found);
// })

models.Profile.find(filter, (err, found) =>{
    console.log("Found?",err, found);
}) //order by most recent
const mongoose = require("mongoose")
const Auth = require("../model/model")
const bcrypt = require('bcrypt')


module.exports = {

   register: (req, res) => {

        console.log("Reg hit", req) 
    
        Auth.findOne({username : req.body.username})
            .then(found => {
                console.log("found", found)
                if(!found){
                    console.log("Unique Username")
                    const hash = bcrypt.hashSync(req.body.password, 10)
                    console.log("HASH", hash)
    
                    const newUser = new Auth(
                        {
                            username: req.body.username,
                            password: hash
                        }
                    )
    
                    Auth.create(newUser)
                        .then(created => {
                            console.log("created", created)
                        })
    
    
                } else {
                    console.log("Username TAKEN")
                }
            })
            .catch(err => console.log(err))
      
       
    },

    login: (req, res) => {
        console.log("login", req.body)
    
        Auth.findOne({username : req.body.username})
            .then(found => {
                console.log("found", found)
    
                if(bcrypt.compareSync(req.body.password, found.password)){
                    console.log("Good Login")
                    res.json({msg: "good login", found})
                } else {
                    console.log("Bad Login")
                    res.json({msg: "Bad LOGIN"})
                }
    
            })
    }




}
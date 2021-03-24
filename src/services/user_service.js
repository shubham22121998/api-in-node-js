const conn = require('../config/connection');



module.exports={
    create:(data,callBack)=>{
        conn.query(
            `insert into registration(firstname,lastname,gender,email,password,number)
            values(?,?,?,?,?,?)`,
            [
                data.firstname,
                data.lastname,
                data.gender,
                data.email,
                data.password,
                data.number

            ],
            (err,results,fields)=>{
                if (err) {
                    return callBack(err);
                }
                return callBack(null,results);
            }
        );
    },
    getUsers : callback =>{
        conn.query(
            `select id,firstname,lastname,gender,email,number from registration`,
            [],
           (error,results,fields ) => {
               if (error){
                   return callback(error);
               }
               return callback(null,results);
           } 
        );
    },
    getUsersByuserId : (id,callback) =>{
        conn.query(
            `select id,firstname,lastname,gender,email,number from registration where id=?`,
            [id],
           (error,results,fields )=>{
               if (error){
                   return callback(error);
               }
               return callback(null,results[0]);
           } 
        );
    },
    updateUsers : (data,callback) =>{
        conn.query(
            `update registration set firstname=?,lastname=?,gender=?,email=?,password=?,number=? where id=?`,
            [ 
                data.firstname,
                data.lastname,
                data.gender,
                data.email,
                data.password,
                data.number,
                data.id
            ],
        
           (error,results,fields )=>{
               if (error){
                   return callback(error);
               }
               return callback(null,results);
           } 
        
        );
    },
    deleteUser : (data,callback) =>{
        conn.query(
            `delete from registration where id=?`,
            [data.id],
           (error,results,fields )=>{
               if (error){
                   return callback(error);
               }
               return callback(null,results[0]);
           } 
        );
    },
    getUserByEmail:(email,callback)=>{
        conn.query(
            `select * from registration where email=?`,
            [email],
            (error,results,fields) =>{
                if(error){
                    callback(error);
                }
                return callback(null,results[0])
            }
        );
    }
    
}
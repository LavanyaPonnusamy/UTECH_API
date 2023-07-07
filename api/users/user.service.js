const pool = require("../../config/database");


module.exports = {
    create:(data, callBack) =>{
        pool.query(
            `insert into registration(FirstName, LastName, Gender, email, password, number)
            values(?,?,?,?,?,?)`,
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number 
            ],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);

            }
        );
    },
    getUsers:callBack =>{
        pool.query(
            `select id,FirstName, LastName, Gender, email, password, number from registration`,
            [],
            (error, results,fields)=>{
                if (error){
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getUserByUserId:(id, callBack) =>{
        pool.query(
            `select id,FirstName, LastName, Gender, ema il, password, number from registration where id =?`
            [id],
            (error, results, fields)=>{
                if(error){
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    getUserByUserEmail:(email,callBack) =>{
        pool.query(
            `select * from registration where email = ?`,
            [email],
            (error, results, field)=>{
                if(error){
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }

};
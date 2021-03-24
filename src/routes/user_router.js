const { createUser,getUsersByuserId,getUsers,updateUsers,deleteUser,login} = require('../controllers/user/user_controller');


const router = require('express').Router()
const {checktoken} = require("../../milderware/token_validation");


router.post("/",createUser);
router.get("/",getUsers);
router.get('/:id',getUsersByuserId);
router.patch('/',updateUsers);
router.delete("/:id",deleteUser);
router.post("/login",login)



module.exports= router;
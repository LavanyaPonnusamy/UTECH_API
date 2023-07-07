const { createUser,getUsers,getUserByUserId,login } = require ("./user.contorller");
const router = require ("express").Router();
const { checkToken } = require("../../auth/token_validation")

router.post("/",checkToken, createUser);
router.get("/",checkToken, getUsers);
router.get("/:id",checkToken, getUserByUserId);
router.post("/login",login);

module.exports = router;
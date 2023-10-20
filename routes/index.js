const  { Router } = require ('express');
const router = Router();
const PublicationRouter = require("./publication")
const UsersRouter = require("./user")
router.use("/", UsersRouter);
router.use("/", PublicationRouter);

module.exports = router
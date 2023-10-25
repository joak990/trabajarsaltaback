const  { Router } = require ('express');
const router = Router();
const PublicationRouter = require("./publication")
const UsersRouter = require("./user");
const CandidateRouter = require('./Candidate');
router.use("/", UsersRouter);
router.use("/", PublicationRouter);
router.use("/", CandidateRouter);
module.exports = router
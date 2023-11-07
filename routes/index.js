const  { Router } = require ('express');
const router = Router();
const PublicationRouter = require("./publication")
const UsersRouter = require("./user");
const CandidateRouter = require('./Candidate');
const upload = require("../libs/storage")
const SenderRouter = require('./Messages');
router.use("/", UsersRouter);
router.use("/", PublicationRouter);
router.use("/",upload.single('curriculum'), CandidateRouter);
router.use("/", SenderRouter);
module.exports = router
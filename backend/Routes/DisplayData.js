const express = require("express");
const router = express.Router();

router.post('/modelData', (req, res) =>
{
    try {
        res.send([global.modeldata]);
    } catch (error) {
        console.error(error.message);
        res.send("server error")


    }
})

router.post('/modelSampleData', (req, res) =>
{
    try {
        res.send([global.samplemodeldata]);
    } catch (error) {
        console.error(error.message);
        res.send("server error")


    }
})



module.exports = router;
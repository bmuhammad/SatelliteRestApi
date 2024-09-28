// Add express server and create application
let express = require("express");
let app = express();

//set up cors for site access
let cors = require('cors');

//Use the express Router opbject
let router = express.Router();

//Assign variable for accessing data. Data is in an array.
let satelliteRepo = require("./repos/satelliteRepo");
let satellites = satelliteRepo.get();

//Create GET to return a list of satellites
router.get("/", function (req, res, next) {
    res.send(satellites);
  });

//Configure router so all routes are prefixed /api/v1
app.use('/', router);

//Configure cors
app.use(cors());

//Create server to listen on port 3000
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

const router = require("express").Router();
const Pool = require("pg").Pool;
const pool = new Pool({
  user: "xymanbcpmaetso",
  host: "ec2-23-22-191-232.compute-1.amazonaws.com",
  database: "dfl4jabh70qmq2",
  password: "380616dfaa56e873b66e3cd42bf259c513a1ed1fb8613aca732bffc7c230f3a5",
  port: 5432,
  ssl: true,
});
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
router.get("/", async (req, res, next) => {
  console.log("here");
  await pool.query('SELECT * FROM "query_table"', (error, results) => {
    if (error) {
      console.log(error);
      res.status(200).json({ message: "Error. Please check connection!!" });
      // throw error;
    } else {
      // console.log(results.rows);
      res.status(200).json(results.rows);
    }
  });
});
module.exports = router;

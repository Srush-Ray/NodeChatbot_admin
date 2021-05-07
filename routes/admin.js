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
  try {
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
  } catch (error) {
    next(error);
  }
});

router.get("/quetype", async (req, res, next) => {
  try {
    await pool.query('SELECT * FROM "questype"', (error, results) => {
      if (error) {
        console.log(error);
        res.status(200).json({ message: "Error. Please check connection!!" });
        // throw error;
      } else {
        // console.log(results.rows);
        res.status(200).json(results.rows);
      }
    });
  } catch (error) {
    next(error);
  }
});

router.post("/delete", async (req, res, next) => {
  try {
    console.log(req.body);
    await pool.query(
      "DELETE FROM query_table WHERE id=" + req.body.id,
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(200).json({ error: "Error. Please check connection!!" });
          // throw error;
        } else {
          // console.log(results);
          res.status(200).json({ message: "Question answer deleted" });
        }
      }
    );
  } catch (error) {
    next(error);
  }
});
router.post("/addnew", async (req, res, next) => {
  try {
    console.log(req.body);
    await pool.query(
      `INSERT INTO query_table values(default,'${req.body.question}','${req.body.answer}',${req.body.satisfied},${req.body.unsatisfied},${req.body.view},'${req.body.queType}');`,
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(200).json({ error: "Error. Please check connection!!" });
          // throw error;
        } else {
          // console.log(results);
          res.status(200).json({ message: "Question answer added" });
        }
      }
    );
    // res.status(200).json({ message: "Question answer deleted" });
  } catch (error) {
    next(error);
  }
});

router.post("/deleteUnsat", async (req, res, next) => {
  try {
    console.log(req.body);
    await pool.query(
      "DELETE FROM list_unsat WHERE id=" + req.body.id,
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(200).json({ error: "Error. Please check connection!!" });
          // throw error;
        } else {
          // console.log(results);
          res.status(200).json({ message: "Question answer deleted" });
        }
      }
    );
  } catch (error) {
    next(error);
  }
});

router.get("/unsatQ", async (req, res, next) => {
  try {
    await pool.query('SELECT * FROM "list_unsat"', (error, results) => {
      if (error) {
        console.log(error);
        res.status(200).json({ message: "Error. Please check connection!!" });
        // throw error;
      } else {
        // console.log(results.rows);
        res.status(200).json(results.rows);
      }
    });
  } catch (error) {
    next(error);
  }
});
router.post("/editqa", async (req, res, next) => {
  console.log(req.body);
  try {
    await pool.query(
      `UPDATE query_table SET question='${req.body.questionNew}',answer='${req.body.answerNew}' where id=${req.body.qid}`,
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(200).json({ message: "Error. Please check connection!!" });
          // throw error;
        } else {
          // console.log(results.rows);
          res.status(200).json({ message: "Update done" });
        }
      }
    );
  } catch (error) {
    next(error);
  }
});
router.post("/addquesType", async (req, res, next) => {
  console.log(req.body);
  try {
    await pool.query(
      `INSERT INTO questype values(default,'${req.body.queTypeNew}');`,
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(200).json({ error: "Error. Please check connection!!" });
          // throw error;
        } else {
          // console.log(results);
          res.status(200).json({ message: "New Question Type added" });
        }
      }
    );
  } catch (error) {
    next(error);
  }
});

module.exports = router;

//insert into QuesType values(1,'is_canteen');

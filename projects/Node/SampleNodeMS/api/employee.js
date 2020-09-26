var connection = require("../db");
var app = require("../app");

/////////////////////// API for Employee /////////////////////
/////////////////////////////////////////////////////////


//Get All users
app.get("/v1/employees", (req, res) => {
  let sql = "SELECT * FROM employee";
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

/////////////////////////////////////////////////////////

// Get Employee by Id
app.get("/v1/employees/:id", (req, res) => {
  let id = req.params.id;
  let sql = "SELECT * FROM employee WHERE id = " + id;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    if (result.length == 0) {
      res.status(404).json({
        errorMessage: "Employee not found. with Id " + id,
        errorType: "404 NOT_FOUND"
      });
    } else {
      res.json(result);
    }
  });
});

//////////////////////////////////////////////////////////////////////
//Save user
app.post("/v1/employees", (req, res) => {
  let user = req.body;
  let sql = "INSERT INTO employee SET ?";
  connection.query(sql, user, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

///////////////////////////////////////////////////////////////////
// update User
app.put("/v1/employees/:id", (req, res) => {
  connection.query(
    "UPDATE `employee` SET `name` = ?  where `id` = ?",
    [
      req.body.name,
      req.body.id,
    ],
    function (error, results, fields) {
      if (error) throw error;
      res.send(JSON.stringify(results));
    }
  );
});
///////////////////////////////////////////////////////////////////
// Delete User
app.delete("/v1/employees/:id", (req, res) => {
  let id = req.params.id;
  connection.query("DELETE FROM `employee` WHERE `id`=?", [id], function (
    error,
    results,
    fields
  ) {
    if (error) throw error;
    res.send(results);
  });
});

  /////////////////////////////////////////////////////////
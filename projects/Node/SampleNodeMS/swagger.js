// const express = require("express");
// const app = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

var app = require("../app");

const port = process.env.PORT || 3000;

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Employee API",
      description: "Employee API Information",
      contact: {
        name: "Amazing Developer",
      },
      servers: ["http://localhost:3000"],
    },
  },
  // ['.routes/*.js']
  //apis: ["app.js"]
  apis: ["./api/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
/**
 * @swagger
 * /Employees:
 *  get:
 *    description: Use to request all Employees
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get("/employee", (req, res) => {
  res.status(200).send("Employee results");
});

/**
 * @swagger
 * /Employees:
 *    put:
 *      description: Use to return all Employees
 *    parameters:
 *      - name: Employee
 *        in: query
 *        description: Name of our Employee
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '201':
 *        description: Successfully created user
 */
app.put("/employee", (req, res) => {
  res.status(201).send("Successfully updated Employee");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

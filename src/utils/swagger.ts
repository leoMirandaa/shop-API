import { Express, Request, Response } from "express";
import swaggerJsdoc from "swagger-jsdoc"; // build swagger doc
import swaggerUI from "swagger-ui-express"; // expose documentation in an interface

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Shop API Docs",
      version: "1.0.0",
      description: "API developed with Node and Express",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
        },
      },
    },
  },
  apis: ["./src/routes/*.ts", "./src/models/*.ts"],
};

const swaggerSpecs = swaggerJsdoc(options);

function swaggerDocs(app: Express, port: number) {
  // Swagger page
  app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpecs));

  console.log("Swagger running");
}

export default swaggerDocs;

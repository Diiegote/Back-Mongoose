const { Router } = require("express");

const filmsRouter = Router();

filmsRouter.get("/");

filmsRouter.get("/:id");

filmsRouter.post("/");

filmsRouter.delete("/:id");

module.exports = filmsRouter;
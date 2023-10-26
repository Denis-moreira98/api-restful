import { Router, Request, Response } from "express";
import {
   createMovie,
   findMovieById,
   getAllMovies,
} from "./controllers/moviesControllers";
import { validate } from "./middleware/handleValidation";
import { movieCreateValidation } from "./middleware/movieValidation";

const router = Router();

export default router
   .get("/test", (req: Request, res: Response) => {
      res.status(200).send("API Working");
   })
   .post("/movie", movieCreateValidation(), validate, createMovie)
   .get("/movie/:id", findMovieById)
   .get("/movies", getAllMovies);

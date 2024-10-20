import { bodyParser, cors, contentType } from "../middlewares";
import { Express } from "express";

export default (app: Express): void => {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cors);
  app.use(contentType);
};

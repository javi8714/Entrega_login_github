import { Router } from "express";
import { CustomError } from "../services/error/customError.service.js";//estructura error
import { EError } from "../enums/EError.js";//tipos de error
import {checkRole} from "../middlewares/auth.js";
import { UsersController } from "../controllers/users.controller.js";
import { uploaderDocuments } from "../utils.js";

const router = Router();

router.post("/premium/:uid", checkRole(["admin"]) , UsersController.modifyRole);

router.put("/:uid/documents", uploaderDocuments.fields([
    {name:"identificacion", maxCount:1},
    {name:"domicilio", maxCount:1},
    {name:"estadoDeCuenta", maxCount:1},
]), UsersController.uploadDocuments)

export { router as usersRouter};
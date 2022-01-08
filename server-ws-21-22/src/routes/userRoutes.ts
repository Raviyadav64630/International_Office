import { Router } from "express";
import { UserController } from "../controllers/userController";
import { debug } from '../util/mongodb';

export class UserRoutes {

    router: Router;
    public userController: UserController = new UserController();

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        debug("User routes");
        // For TESTs
        // this.router.post("/register", this.userController.registerUser);
        this.router.post("/register", this.userController.registerUser);
        this.router.post("/login", this.userController.authenticateUser);
        //  this.router.get("*", this.userController.getAll);
    }
}
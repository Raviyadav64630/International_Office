import { Router } from "express";
import { RoomController } from "../controllers/roomController";

export class RoomRoutes {

    router: Router;
    public roomController: RoomController = new RoomController();

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        console.log("room routes");
        // For TESTs
        // this.router.post("/register", this.userController.registerUser);
        this.router.get("/rooms", this.roomController.getAll);
    }
}
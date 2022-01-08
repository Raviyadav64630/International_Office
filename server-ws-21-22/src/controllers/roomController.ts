
import { NextFunction, Request, Response } from "express";
import { Room } from "../models/room";
import { debug, JWT_SECRET } from "../util/mongodb";

export class RoomController {

  // async because of DB query in body
  public async getAll(req: Request, res: Response, next: NextFunction) {
    debug("getAll Rooms");
    let allrooms = await Room.find({}); // wait for results
    debug("getAll allrooms: ", allrooms);
    res.status(200).send(allrooms);
  }
}

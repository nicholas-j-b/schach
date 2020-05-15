import { Context } from "../config/context.js";

export class Controller {
    static makeMove(move) {
        Context.game.board.move(move);
    }
}
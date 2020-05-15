import { Context } from "../../config/context.js";
import { Config } from "../../config/config.js";
import { Position } from "../board/position.js";

export class Piece {
    constructor(colour, id) {
        this.colour = colour;
        this.id = id;
        this.image = new Image();
        this.image.src = this.fileName;
        this.position = new Position(...this.getStartPosition(), Config.PIECE.X_SIZE, Config.PIECE.Y_SIZE);
    }

    move(to) {
        this.position.boardPosition.x = to.x;
        this.position.boardPosition.y = to.y;
    }

    get fileName() {
        return `/assets/images/${Config.COLOUR_NAMES[this.colour]}-${this.constructor.pieceName}.png`;
    }

    getStartPosition() {
        return [this.startFile, this.startRank];
    }

    draw() {
        Context.ctx.drawImage(this.image, ...this.position.absolutePosition);
    }
}
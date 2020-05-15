import { Config } from "../../config/config.js";
import { Context } from "../../config/context.js";
import { Piece } from "../piece/piece.js";

export class Square {
    constructor(x, y, xSize, ySize, colour) {
        this.x = x;
        this.y = y;
        this.xSize = xSize;
        this.ySize = ySize;
        this.ogColour = Config.DRAW_COLOURS[Config.COLOUR_NAMES[colour]];
        this.colour = Config.DRAW_COLOURS[Config.COLOUR_NAMES[colour]];
        this.highlighted = false;
    }

    setUnhighlighted() {
        this.highlighted = false;
        this.colour = this.ogColour;
    }

    setHighlighted() {
        if (this.highlighted) {
            this.colour = this.ogColour;
        } else {
            this.colour = Config.DRAW_COLOURS[Config.COLOUR_NAMES[Config.COLOURS.SELECT]];
        }
        this.highlighted = !this.highlighted;
    }

    draw() {
        Context.ctx.fillStyle = this.colour;
        Context.ctx.fillRect(this.x, this.y, this.xSize, this.ySize);
    }
}
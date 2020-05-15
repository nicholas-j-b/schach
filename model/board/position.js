import { Config } from "../../config/config.js"

export class Position {
    constructor(x, y, xSize, ySize) {
        this.pieceSize = {
            x: xSize,
            y: ySize
        }
        this.boardPosition = {
            x: x,
            y: y
        }
    }

    get absolutePosition() {
        return [
            this.getAbsolute(true),
            this.getAbsolute(false)
        ]
    }

    getAbsolute(width) {
        if (width) {
            return this.calculateAbsolute(Config.BOARD.SQUARE_WIDTH, this.boardPosition.x, this.pieceSize.x);
        } else {
            return this.calculateAbsolute(Config.BOARD.SQUARE_HEIGHT, this.boardPosition.y, this.pieceSize.y);
        }
        
    }

    calculateAbsolute(stepSize, position, pieceSize) {
        const startEdge = 0;
        const firstPoint = stepSize / 2;
        return position * stepSize + firstPoint + startEdge - pieceSize;
    }
}
import { Square } from "./square.js";
import { Config } from "../../config/config.js";
import { PieceCollection } from "../piece/pieceCollection.js";

export class Board {
    constructor() {
        this.squares = this.initialiseSquares();
        this.pieces = this.initialisePieces();
    }

    initialiseSquares() {
        const squares = [];
        for (let i = 0; i < 8; i++) {
            const row = [];
            for (let j = 0; j < 8; j++) {
                let colour;
                if ((i + j) % 2 == 0) {
                    colour = Config.COLOURS.WHITE;
                } else {
                    colour = Config.COLOURS.BLACK;
                }
                let square = new Square(
                    Config.BOARD.SQUARE_WIDTH * j, 
                    Config.BOARD.SQUARE_HEIGHT * i, 
                    Config.BOARD.SQUARE_WIDTH, 
                    Config.BOARD.SQUARE_HEIGHT,
                    colour
                )
                row.push(square);
            }
            squares.push(row);
        }
        return squares;
    }

    initialisePieces() {
        const pieceCollection = new PieceCollection();
        for (let colourName in Config.CHESS_COLOURS) {
            const colour = Config.COLOURS[colourName];
            for (let type of PieceCollection.types) {
                pieceCollection.setPieces(...this.getPieceList(colour, type));
            }
        }
        return pieceCollection;
    }

    getPieceList(colour, cls) {
        const pieces = [];
        for (let i = 0; i < cls.startingNumber; i++) {
            const piece = new cls(colour, i);
            pieces.push(piece);
        }
        return [colour, cls, pieces];
    }

    onClick(x, y) {
        const pos = this.getSquareFromClick(x, y);
        console.log(pos);
        this.squares[pos.y][pos.x].setHighlighted();
    }

    getSquareFromClick(x, y) {
        return {
            x: Math.floor(x / Config.BOARD.SQUARE_WIDTH), 
            y: Math.floor(y / Config.BOARD.SQUARE_HEIGHT)
        };
    }

    update() {

    }

    draw() {
        this.drawSquares();
        this.drawPieces();
    }

    drawPieces() {
        for (let piece of this.pieces.getAllAlivePieces()) {
            piece.draw();
        }
    }

    drawSquares() {
        for (let row of this.squares) {
            for (let square of row) {
                square.draw();
            }
        }
    }
}
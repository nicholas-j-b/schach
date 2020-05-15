import { Board } from "./board.js";
import { Config } from "../../config/config.js";
import { Square } from "./square.js";
import { PieceCollection } from "../piece/pieceCollection.js";

export class BoardFactory {
    constructor() {
        this.board = new Board();
        this.board.boardSquares = this.initialiseSquares();
        this.board.pieces = this.initialisePieces();
        this.board.squares = this.initialiseSquaresToPieces();
        return this.board;
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

    initialiseSquaresToPieces() {
        const squares = [];
        for (let i = 0; i < 8; i++) {
            squares.push(new Array(8));
        }
        for (const piece of this.board.pieces.getAllAlivePieces()) {
            const boardPosition = piece.position.boardPosition;
            squares[boardPosition.x][boardPosition.y] = piece;
        }
        return squares;
    }

    getPieceList(colour, cls) {
        const pieces = [];
        for (let i = 0; i < cls.startingNumber; i++) {
            const piece = new cls(colour, i);
            pieces.push(piece);
        }
        return [colour, cls, pieces];
    }
}
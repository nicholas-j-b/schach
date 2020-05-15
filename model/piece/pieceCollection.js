import { Pawn } from "./pawn.js";
import { King } from "./king.js";
import { Queen } from "./queen.js";
import { Rook } from "./rook.js";
import { Bishop } from "./bishop.js";
import { Knight } from "./knight.js";

export class PieceCollection {
    static types = [
        King,
        Queen,
        Bishop,
        Knight,
        Rook,
        Pawn
    ];

    constructor() {
        this.pieces = [
            {
                king: [],
                queen: [],
                pawns: [],
                knights: [],
                rooks: [],
                bishops: []
            },
            {
                king: [],
                queen: [],
                pawns: [],
                knights: [],
                rooks: [],
                bishops: []
            }
        ]
    }

    setPieces(colour, cls, pieces) {
        this.pieces[colour][cls.pieceName] = pieces;
    }

    * getAllAlivePieces() {
        for (let colour of this.pieces) {
            for (let pieceName in colour) {
                for (let piece of colour[pieceName]) {
                    if (piece) {
                        yield piece;
                    }
                }
            }
        }
    }
}
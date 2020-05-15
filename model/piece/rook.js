import { Piece } from './piece.js'

export class Rook extends Piece {
    static pieceName = 'rook';
    static startingNumber = 2;

    constructor(colour, id) {
        super(colour, id);
    }

    get startRank() {
        return this.colour * 7;
    }

    get startFile() {
        return this.id * 7;
    }
}
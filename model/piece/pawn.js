import { Piece } from './piece.js'

export class Pawn extends Piece {
    static startingNumber = 8;
    static pieceName = 'pawn';

    constructor(colour, id) {
        super(colour, id);
    }

    get startRank() {
        return this.colour * 5 + 1;
    }

    get startFile() {
        return this.id;
    }
}
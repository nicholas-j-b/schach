import { Piece } from './piece.js'

export class King extends Piece {
    static pieceName = 'king';
    static startingNumber = 1;

    constructor(colour, id) {
        super(colour, id);
    }

    get startRank() {
        return this.colour * 7;
    }

    get startFile() {
        return 4;
    }
}
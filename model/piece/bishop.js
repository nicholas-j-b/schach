import { Piece } from './piece.js'

export class Bishop extends Piece {
    static pieceName = 'bishop';
    static startingNumber = 2;

    constructor(colour, id) {
        super(colour, id);
    }

    get startRank() {
        return this.colour * 7;
    }

    get startFile() {
        return this.id * 3 + 2;
    }
}
import { Piece } from './piece.js'

export class Knight extends Piece {
    static pieceName = 'knight';
    static startingNumber = 2;

    constructor(colour, id) {
        super(colour, id);
    }

    get startRank() {
        return this.colour * 7;
    }

    get startFile() {
        return this.id * 5 + 1;
    }
}
import { Piece } from './piece.js'

export class Queen extends Piece {
    static pieceName = 'queen';
    static startingNumber = 1;

    constructor(colour, id) {
        super(colour, id);
    }

    get startRank() {
        return this.colour * 7;
    }

    get startFile() {
        return 3;
    }
}
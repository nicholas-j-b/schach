import { Player } from './player.js';
import { Context } from '../../config/context.js';
import { Controller } from '../../controller/controller.js';

export class Human extends Player {
    constructor(colour, id) {
        super(colour, id);
        this.move = {
            from: null,
            to: null
        };
        this.resolve;
    }

    getNextMove() {
        return new Promise((resolve, reject) => {
            this.resolve = resolve;
        });
    }

    addClickPosition(pos) {
        if (this.move.from == null) {
            if (Context.game.board.checkMoveLegalFrom(pos, this.colour)) {
                this.move.from = pos;
            }
        } else if (this.move.to == null) {
            if (Context.game.board.checkMoveLegalTo(pos, this.colour)) {
                this.move.to = pos;
            }
        } 
        if (this.move.from != null && this.move.to != null) {
            Controller.makeMove(this.move);
            this.resolve(this.move);
            this.move.from = null
            this.move.to = null
        }
    }


}
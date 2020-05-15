import { Player } from './player.js';

export class Human extends Player {
    getNextMove() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("mmmoooove");
            }, 1000)
        });
    }

}
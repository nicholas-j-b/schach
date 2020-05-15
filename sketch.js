import { Config, Timer } from './config/config.js';
import { Context } from './config/context.js';
import { Human } from './model/player/human.js';
import { BoardFactory } from './model/board/boardFactory.js';

function main() {
    let canvas = document.getElementById("schachCanvas");
    let ctx = canvas.getContext("2d");
    Context.canvas = canvas;
    Context.ctx = ctx;
    Context.game = new Game();
}

class Game {
    constructor() {
        this.board = new BoardFactory();
        var self = this;
        this.players = [
            new Human(Config.COLOURS.WHITE, 0),
            new Human(Config.COLOURS.BLACK, 1)
        ];
        this.currentId = 0;
        Context.currentHumanPlayer = this.players[this.currentId];
        Context.currentHumanPlayer.moving = true;
        setInterval(function() {self.update(self)}, 1000 / Config.ANIMATION.fps);
        Context.canvas.addEventListener("click", this.onClick, false);
    }

    turnLoop() {
        if (!Context.currentHumanPlayer.aware) {
            Context.currentHumanPlayer.getNextMove().then((result) => {
                Context.currentHumanPlayer.aware = false;
                this.currentId = (this.currentId + 1) % 2;
                Context.currentHumanPlayer = this.players[this.currentId];
            });
            Context.currentHumanPlayer.aware = true;
        }
    }

    onClick(e) {
        const pos = Context.game.board.onClick(e.offsetX, e.offsetY);
        Context.currentHumanPlayer.addClickPosition(pos);
    }

    update(self) {
        self.draw(self);
        Timer.frame++;
        this.board.update();
        this.turnLoop();
    }

    draw(self) {
        Context.ctx.fillStyle = Config.DRAW_COLOURS.black;
        Context.ctx.fillRect(0, 0, Config.CANVAS_WIDTH, Config.CANVAS_HEIGHT);
        this.board.draw();
    }
}


window.onload = main

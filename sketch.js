import { Board } from './model/board/board.js'
import { Config, Timer } from './config/config.js';
import { Context } from './config/context.js';
import { Human } from './model/player/human.js';

function main() {
    let canvas = document.getElementById("schachCanvas");
    let ctx = canvas.getContext("2d");
    Context.canvas = canvas;
    Context.ctx = ctx;
    Context.game = new Game();
}

class Game {
    constructor() {
        this.board = new Board();
        var self = this;
        this.player = new Human();
        this.moving = false;
        setInterval(function() {self.update(self)}, 1000 / Config.ANIMATION.fps);
        Context.canvas.addEventListener("click", this.onClick, false);
    }

    turnLoop() {
        if (!this.moving) {
            this.move = this.player.getNextMove().then((result) => {
                console.log(result);
                this.moving = false;
            });
            this.moving = true;
        }
    }

    onClick(e) {
        Context.game.board.onClick(e.offsetX, e.offsetY);
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

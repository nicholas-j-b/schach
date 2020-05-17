//import { Config, Timer } from './config/config.js';
//import { Context } from './config/context.js';
//import { Human } from './model/player/human.js';
//import { BoardFactory } from './model/board/boardFactory.js';

import { serve } from "https://deno.land/std/http/server.ts";
import {
  acceptWebSocket,
  isWebSocketCloseEvent,
  isWebSocketPingEvent,
} from "https://deno.land/std/ws/mod.ts";

const port = 9901
console.log(`running on ${port}`);

for await (const req of serve(`:${port}`)) {
    const { conn, r: bufReader, w: bufWriter, headers } = req;
    try {
        const socket = await acceptWebSocket({
            conn,
            bufReader,
            bufWriter,
            headers
        });
        try {
            for await (const event of socket) {
                await socket.send(`
                    { "pieces": [
                        {
                            "colour": "white",
                            "pieceName": "pawn",
                            "id": "0",
                            "position": {
                                "x": 2,
                                "y": 2
                            }
                        },
                        {
                            "colour": "black",
                            "pieceName": "king",
                            "id": "3",
                            "position": {
                                "x": 4,
                                "y": 5
                            }
                        },
                        {
                            "colour": "white",
                            "pieceName": "queen",
                            "id": "1",
                            "position": {
                                "x": 0,
                                "y": 0
                            }
                        }
                    ]}
                `);
            }
        } catch (err) {
            if (!socket.isClosed) {
                await socket.close(1000).catch(console.error);
            }
        }
    } finally {

    }
}

//const webSocket = new WebSocket("ws://localhost:9901");

//webSocket.addEventListener('open', (event: any) => {
    //webSocket.send(`
        //{ "pieces": [
            //{
                //"colour": "white",
                //"pieceName": "pawn",
                //"id": "0"
            //},
            //{
                //"colour": "black",
                //"pieceName": "king",
                //"id": "3"
            //}
        //]}
    //`);
//});

//webSocket.addEventListener('message', (event: any) => {
    //console.log(event.data);
//});




//const game = new Game();

class Game {
    constructor() {
        //this.board = new BoardFactory();
        //var self = this;
        //this.players = [
            //new Human(Config.COLOURS.WHITE, 0),
            //new Human(Config.COLOURS.BLACK, 1)
        //];
        //this.currentId = 0;
        //Context.currentHumanPlayer = this.players[this.currentId];
        //Context.currentHumanPlayer.moving = true;
        //setInterval(function() {self.update(self)}, 1000 / Config.ANIMATION.fps);
        //Context.canvas.addEventListener("click", this.onClick, false);
    }

    //turnLoop() {
        //if (!Context.currentHumanPlayer.aware) {
            //Context.currentHumanPlayer.getNextMove().then((result) => {
                //Context.currentHumanPlayer.aware = false;
                //this.currentId = (this.currentId + 1) % 2;
                //Context.currentHumanPlayer = this.players[this.currentId];
            //});
            //Context.currentHumanPlayer.aware = true;
        //}
    //}
}
export class Config {
    static CANVAS_WIDTH = 800;
    static CANVAS_HEIGHT = 800;
    static ANIMATION = {
        fps: 30
    }
    static DRAW_COLOURS = {
        background: 'rgb(247, 220, 111)',
        white: 'rgb(237, 230, 221)',
        black: 'rgb(78, 135, 110)',
        select: 'rgb(118, 135, 180)',
        potential: 'rgb(178, 235, 180)',
    };
    static PIECE = {
        X_SIZE: 30,
        Y_SIZE: 30
    }
    static BOARD = {
        SQUARE_HEIGHT: Config.CANVAS_HEIGHT / 8,
        SQUARE_WIDTH: Config.CANVAS_WIDTH / 8
    }
    static COLOURS = {
       BLACK: 0,
       WHITE: 1,
       SELECT: 2,
       POTENTIAL: 3,
    };
    static CHESS_COLOURS = {
       BLACK: 0,
       WHITE: 1
    }
    static COLOUR_NAMES = [
        'black', 
        'white',
        'select',
        'potential'
    ];
}

export class Timer {
    static frame = 0;
    static animation = 0;

    static resetFrame() {
        this.frame = 0;
    }

    static resetAnimation() {
        this.animation = 0;
    }
}

export class Debug {
    static DEFUALT = 1;
}
import Phaser from 'phaser'

export default class Controls
{
    UP: Phaser.Input.Keyboard.Key;
    DOWN: Phaser.Input.Keyboard.Key;
    LEFT: Phaser.Input.Keyboard.Key;
    RIGHT: Phaser.Input.Keyboard.Key;
    KEY5?: Phaser.Input.Keyboard.Key;
    KEY6?: Phaser.Input.Keyboard.Key;
    KEY7?: Phaser.Input.Keyboard.Key;
    KEY8?: Phaser.Input.Keyboard.Key;
    KEY9?: Phaser.Input.Keyboard.Key;
    KEY10?: Phaser.Input.Keyboard.Key;

    constructor(scene: Phaser.Scene, up: string, down: string, left: string,right: string,key5?: string,
        key6?: string, key7?: string, key8?: string, key9?: string, key10?: string)
        {
            this.UP = scene.input.keyboard.addKey(up),
            this.DOWN = scene.input.keyboard.addKey(down),
            this.LEFT = scene.input.keyboard.addKey(left),
            this.RIGHT = scene.input.keyboard.addKey(right),
            this.KEY5 =  scene.input.keyboard.addKey(key5),
            this.KEY6 = scene.input.keyboard.addKey(key6),
            this.KEY7 = scene.input.keyboard.addKey(key7),
            this.KEY8 = scene.input.keyboard.addKey(key8),
            this.KEY9 = scene.input.keyboard.addKey(key9),
            this.KEY10 = scene.input.keyboard.addKey(key10)
        }

}

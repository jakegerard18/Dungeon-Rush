import Phaser from 'phaser'

export default class Preloader extends Phaser.Scene {
    constructor() {
        super('preloader');
    }

    preload() {
        this.load.image('tiles', 'tilemaps/tiles_dungeon_v1.png');
        this.load.tilemapTiledJSON('n_dungeon', 'dungeons/n_dungeon.json');
        this.load.atlas('hero', 'sprites/packed/hero/hero.png', 'sprites/packed/hero/hero.json');
    }

    create() {
        this.scene.start('game');
    }
}
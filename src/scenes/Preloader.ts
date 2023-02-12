import Phaser from 'phaser'

export default class Preloader extends Phaser.Scene {
    constructor() {
        super('preloader');
    }

    preload() {
        this.load.image('tiles', 'tilemaps/tiles_dungeon_v1.png');
        this.load.tilemapTiledJSON('n_dungeon', 'dungeons/n_dungeon.json');
        this.load.atlas('hero', 'sprites/hero.png', 'sprites/hero.json');
        this.load.atlas('slime', 'sprites/slime.png', 'sprites/slime.json');
        this.load.atlas('spider', 'sprites/spider.png', 'sprites/spider.json');
        this.load.atlas('goblin', 'sprites/goblin.png', 'sprites/goblin.json');
        this.load.atlas('sniper', 'sprites/sniper.png', 'sprites/sniper.json');
        this.load.atlas('bat', 'sprites/bat.png', 'sprites/bat.json');
        this.load.atlas('troll', 'sprites/troll.png', 'sprites/troll.json');
        this.load.atlas('orc', 'sprites/orc.png', 'sprites/orc.json');
        this.load.atlas('rat', 'sprites/rat.png', 'sprites/rat.json');
        this.load.image('heart-empty', 'sprites/heart_empty.png');
        this.load.image('heart-half', 'sprites/heart_half.png');
        this.load.image('heart-full', 'sprites/heart_full.png');
    }

    create() {
        this.scene.start('game');
    }
}
import Phaser from 'phaser'

export default class Preloader extends Phaser.Scene {
    constructor() {
        super('preloader');
    }

    preload() {
        this.load.image('tiles', 'tilemaps/tiles_dungeon_v1.png');
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

        // Dungeons:
        // this.load.image('NSEW', 'dungeons/nsew_dungeon.png');
        // this.load.image('NSE', ' dungeons/nes_dungeon.png');
        // this.load.image('NSW', 'dungeons/nws_dungeon.png');
        // this.load.image('NEW', 'dungeons/new_dungeon.png');
        // this.load.image('SEW', 'dungeons/sew_dungeon.png');
        // this.load.image('NE', 'dungeons/ne_dungeon.png');
        // this.load.image('NW', 'dungeons/nw_dungeon.png');
        // this.load.image('NS', 'dungeons/ns_dungeon.png');
        // this.load.image('SE', 'dungeons/se_dungeon.png');
        // this.load.image('SW', 'dungeons/sw_dungeon.png');
        // this.load.image('EW', 'dungeons/ew_dungeon.png');
        // this.load.image('S', 'dungeons/s_dungeon.png');
        // this.load.image('N', 'dungeons/n_dungeon.png');
        // this.load.image('E', 'dungeons/e_dungeon.png');
        // this.load.image('W', 'dungeons/w_dungeon.png');

        this.load.tilemapTiledJSON('NSEW', 'dungeons/n_dungeon.json');
        this.load.tilemapTiledJSON('NSE', ' dungeons/n_dungeon.json');
        this.load.tilemapTiledJSON('NSW', 'dungeons/n_dungeon.json');
        this.load.tilemapTiledJSON('NEW', 'dungeons/n_dungeon.json');
        this.load.tilemapTiledJSON('SEW', 'dungeons/n_dungeon.json');
        this.load.tilemapTiledJSON('NE', 'dungeons/n_dungeon.json');
        this.load.tilemapTiledJSON('NW', 'dungeons/n_dungeon.json');
        this.load.tilemapTiledJSON('NS', 'dungeons/n_dungeon.json');
        this.load.tilemapTiledJSON('SE', 'dungeons/n_dungeon.json');
        this.load.tilemapTiledJSON('SW', 'dungeons/n_dungeon.json');
        this.load.tilemapTiledJSON('EW', 'dungeons/n_dungeon.json');
        this.load.tilemapTiledJSON('S', 'dungeons/n_dungeon.json');
        this.load.tilemapTiledJSON('N', 'dungeons/n_dungeon.json');
        this.load.tilemapTiledJSON('E', 'dungeons/n_dungeon.json');
        this.load.tilemapTiledJSON('W', 'dungeons/n_dungeon.json');
    }

    create() {
        this.scene.start('game');
    }
}
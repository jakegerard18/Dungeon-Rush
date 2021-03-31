import Phaser from 'phaser';

export default class Preloader extends Phaser.Scene
{
    constructor(){
        super('preloader');
    }

    preload()
    {
        this.load.image('tiles', 'textures/tiles-extruded.png');
        this.load.image('door_front_closed', 'textures/door_front_closed.png');
        this.load.image('door_left_closed', 'textures/door_left_closed.png');
        this.load.image('door_right_closed', 'textures/door_right_closed.png');
        this.load.image('door_front_opened', 'textures/door_front_opened.png');
        this.load.tilemapTiledJSON('test_dungeon_json', 'textures/test_dungeon.json');
        this.load.tilemapTiledJSON('dungeon_01_json', 'textures/dungeon_01.json');
        this.load.atlas('hero', 'sprites/hero.png', 'sprites/hero.json');
        this.load.atlas('hero_flipped', 'sprites/hero_flipped.png', 'sprites/hero_flipped.json');
        this.load.atlas('slime', 'sprites/slime.png', 'sprites/slime.json');
        this.load.atlas('slime_flipped', 'sprites/slime_flipped.png', 'sprites/slime_flipped.json');
        this.load.atlas('rat', 'sprites/rat.png', 'sprites/rat.json');
        this.load.atlas('rat_flipped', 'sprites/rat_flipped.png', 'sprites/rat_flipped.json');
        this.load.atlas('bat', 'sprites/bat.png', 'sprites/bat.json');
        this.load.atlas('bat_flipped', 'sprites/bat_flipped.png', 'sprites/bat_flipped.json');
        this.load.atlas('spider', 'sprites/spider.png', 'sprites/spider.json');
        this.load.atlas('spider_flipped', 'sprites/spider_flipped.png', 'sprites/spider_flipped.json');
        this.load.atlas('goblin', 'sprites/goblin.png', 'sprites/goblin.json');
        this.load.atlas('goblin_flipped', 'sprites/goblin_flipped.png', 'sprites/goblin_flipped.json');
        this.load.atlas('archer', 'sprites/archer.png', 'sprites/archer.json');
        this.load.atlas('archer_flipped', 'sprites/archer_flipped.png', 'sprites/archer_flipped.json');
        this.load.atlas('orc', 'sprites/orc.png', 'sprites/orc.json');
        this.load.atlas('orc_flipped', 'sprites/orc_flipped.png', 'sprites/orc_flipped.json');
        this.load.atlas('troll', 'sprites/troll.png', 'sprites/troll.json');
        this.load.atlas('troll_flipped', 'sprites/troll_flipped.png', 'sprites/troll_flipped.json');
        
    }

    create()
    {
        this.scene.start('testdungeon');
    }
}
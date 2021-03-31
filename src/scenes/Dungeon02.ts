import Phaser from 'phaser'
import Hero from '../characters/Hero'
import Slime from '../characters/Slime'
import Controls from '../utils/Controls'
import {createHeroAnims, createSlimeAnims} from '../animations/Animations'
import {handleHeroSlimeCollision} from '../colliders/Collision_Callbacks'
import {showCollisions} from '../utils/ShowCollisions'
import { controlCamera } from '../utils/ControlCamera'

export default class Dungeon02 extends Phaser.Scene
{
    private cursors: Controls;
    private hero: Hero;
    private slimeGroup: Phaser.Physics.Arcade.Group;
    private finishLine: Phaser.GameObjects.Line;
   

    constructor()
    {
        super('dungeon02');
    }

    nextDungeon() 
    {
        this.scene.start('dungeon03');
    }

    preload()
    {
        createHeroAnims(this.anims);
        createSlimeAnims(this.anims);
        

    }

    create()
    {   
       
        //Instantiate sprites
        this.hero = new Hero(this, 100, 80, 'hero');
        
        //Set cursor keys
        this.cursors = new Controls(this, 'W', 'S', 'A', 'D', 'UP', 'DOWN', 'RIGHT', 'LEFT'); 

        //Generate tilemap and floor layer
        const map = this.make.tilemap({key: 'dungeon_01_json'});
        const tileset = map.addTilesetImage('dungeon', 'tiles', 16, 16, 1, 2);
        const floorLayer = map.createLayer('Floor', tileset, 0, 0);
        this.finishLine = this.add.line(738, 700, 0, 0, 0, 155, 0xff0000);

        this.add.existing(this.hero);
        

        this.slimeGroup = this.physics.add.group({
            classType: Slime,
            key: 'slime',
            quantity: 5,
            setXY: {x: 60, y: 80},
            immovable: true
            });

        //Generate wall and props layers
        const wallLayer = map.createLayer('Walls', tileset, 0, 0);
        const propsLayer = map.createLayer('Props', tileset, 0, 0);

        //Set colliders
        wallLayer.setCollisionByProperty({collides: true});
        propsLayer.setCollisionByProperty({collides: true})       
        this.physics.add.collider(this.hero, wallLayer);
        this.physics.add.collider(this.hero, propsLayer);
        this.physics.add.collider(this.hero, this.slimeGroup, handleHeroSlimeCollision, undefined, this);
        this.physics.add.collider(this.slimeGroup, wallLayer);
        this.physics.add.collider(this.hero, this.finishLine, this.nextDungeon, undefined, this);

        //Set camera to follow hero sprite
        //this.cameras.main.startFollow(this.hero, true)
        //showCollisions(wallLayer, this)
        
    }


    update()
    {
        this.hero.update(this.cursors);
        //controlCamera(this, this.cursors);
    }
}
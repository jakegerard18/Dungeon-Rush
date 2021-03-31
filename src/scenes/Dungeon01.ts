import Phaser from 'phaser'
import Hero from '../characters/Hero'
import Slime from '../characters/Slime'
import Controls from '../utils/Controls'
import {createHeroAnims, createSlimeAnims} from '../animations/Animations'
import {handleHeroSlimeCollision, handleSwordSlimeCollision} from '../colliders/Collision_Callbacks'
import {showCollisions} from '../utils/ShowCollisions'
import { controlCamera } from '../utils/ControlCamera'

export default class Dungeon01 extends Phaser.Scene
{
    private cursors: Controls;
    private hero: Hero;
    private slimeGroup1: Phaser.Physics.Arcade.Group;
    private slimeGroup2: Phaser.Physics.Arcade.Group;
    private finishLine: Phaser.GameObjects.Line;
   

    constructor()
    {
        super('dungeon01');
    }

    nextDungeon() 
    {
        this.scene.start('dungeon02');
    }

    preload()
    {
        createHeroAnims(this.anims);
        createSlimeAnims(this.anims);
        

    }

    create()
    {   
       
        //Instantiate sprites
        this.hero = new Hero(this, 50, 80, 'hero');
        
        //Set cursor keys
        this.cursors = new Controls(this, 'W', 'S', 'A', 'D', 'UP', 'DOWN', 'RIGHT', 'LEFT'); 

        //Generate tilemap and floor layer
        const map = this.make.tilemap({key: 'dungeon_01_json'});
        const tileset = map.addTilesetImage('dungeon', 'tiles', 16, 16, 1, 2);
        const floorLayer = map.createLayer('Floor', tileset, 0, 0);
        this.finishLine = this.add.line(738, 700, 0, 0, 0, 155, 0xff0000);

        this.add.existing(this.hero);
        this.physics.world.enable(this.finishLine);
        
        

        this.slimeGroup1 = this.physics.add.group({
            classType: Slime,
            key: 'slime',
            quantity: 2,
            setXY: {x: 300, y: 80},
            immovable: true
            });

        this.slimeGroup2 = this.physics.add.group({
            classType: Slime,
            key: 'slime',
            quantity: 2,
            setXY: {x: 500, y: 80},
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
        this.physics.add.collider(this.hero, this.slimeGroup1, handleHeroSlimeCollision, undefined, this);
        this.physics.add.collider(this.slimeGroup1, wallLayer);
        this.physics.add.collider(this.hero, this.slimeGroup2, handleHeroSlimeCollision, undefined, this);
        this.physics.add.collider(this.slimeGroup2, wallLayer);
        this.physics.add.collider(this.hero, this.finishLine, this.nextDungeon, undefined, this);
        this.physics.add.collider(this.hero.getSwordBody(this), this.slimeGroup1, handleSwordSlimeCollision, undefined, this);
        this.physics.add.collider(this.hero.getSwordBody(this), this.slimeGroup2, handleSwordSlimeCollision, undefined, this);


        //Set camera to follow hero sprite
        this.cameras.main.startFollow(this.hero, true)
        //showCollisions(wallLayer, this)
        
    }


    update()
    {
        this.hero.update(this.cursors);
        //controlCamera(this, this.cursors);
    }
}
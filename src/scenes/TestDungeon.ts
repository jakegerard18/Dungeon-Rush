import Phaser from 'phaser'
import Hero from '../characters/Hero'
import Slime from '../characters/Slime'
import Rat from '../characters/Rat'
import Bat from '../characters/Bat'
import Spider from '../characters/Spider'
import Goblin from '../characters/Goblin'
import Archer from '../characters/Archer'
import Orc from '../characters/Orc'
import Troll from '../characters/Troll'
import Controls from '../utils/Controls'
import {createBatAnims, createHeroAnims, createRatAnims, createSlimeAnims, createSpiderAnims, createGoblinAnims, createArcherAnims, createOrcAnims, createTrollAnims} from '../animations/Animations'
import {handleHeroRatCollision, handleHeroSlimeCollision, handleSwordRatCollision, handleSwordSlimeCollision, handleDoorCollision} from '../colliders/Collision_Callbacks'
import {showCollisions} from '../utils/ShowCollisions'
import { controlCamera } from '../utils/ControlCamera'
import {game} from '../main'


export default class Test_Dungeon extends Phaser.Scene
{
    private cursors: Controls;
    private hero: Hero;
    private slime: Slime;
    private rat: Rat;
    private bat: Bat;
    private spider: Spider;
    private goblin: Goblin;
    private archer: Archer;
    private orc: Orc;
    private troll: Troll;
    private enemies: Phaser.Physics.Arcade.Sprite[]; 

    

    constructor()
    {
        super('testdungeon');
    }

    preload()
    {
        createHeroAnims(this.anims);
        createSlimeAnims(this.anims);
        createRatAnims(this.anims);
        createBatAnims(this.anims);
        createSpiderAnims(this.anims);
        createGoblinAnims(this.anims);
        createArcherAnims(this.anims);
        createOrcAnims(this.anims);
        createTrollAnims(this.anims);
    }

    create()
    {   

        //Instantiate sprites
        this.hero = new Hero(this, 300, 100, 'hero');

        this.enemies = [
        // this.bat = new Bat(this, 100, 100, 'bat'),
        // this.spider = new Spider(this, 100, 100, 'spider'),
        // this.goblin = new Goblin(this, 200, 200, 'goblin'),
        // this.archer = new Archer(this, 200, 200, 'archer'),
        // this.orc = new Orc(this, 300, 300, 'orc'),
        // this.troll = new Troll(this, 400, 100, 'troll'),
        // this.slime = new Slime(this, 100, 100, 'slime'),
        this.rat = new Rat(this, 200, 200, 'rat')
        ]

        
        //Set cursor keys
        this.cursors = new Controls(this, 'W', 'S', 'A', 'D', 'UP', 'DOWN', 'RIGHT', 'LEFT'); 

        //Generate tilemap and floor layer
        const map = this.make.tilemap({key: 'test_dungeon_json'});
        const tileset = map.addTilesetImage('dungeon', 'tiles', 16, 16, 1, 2);

        const floorLayer = map.createLayer('Floor', tileset, 0, 0);
        const fringeLayer = map.createLayer('Fringe', tileset, 0, 0);
        

        //Add sprites to scenes
        this.add.existing(this.hero);
        this.enemies.forEach((enemy) =>{
            this.add.existing(enemy);
        })


        //Get door objects from Tiled object layer and store each door type in an array based on type set in Tiled
        const objLayer = map.getObjectLayer('ObjLayer');
        const doors_front_closed: Phaser.Types.Physics.Arcade.SpriteWithStaticBody[] = []
        const doors_left_closed: Phaser.Types.Physics.Arcade.SpriteWithStaticBody[] = []
        const doors_right_closed: Phaser.Types.Physics.Arcade.SpriteWithStaticBody[] = []

        objLayer.objects.forEach((obj, index) => {
            if(obj.type === 'door_front_closed')
            {
                doors_front_closed[index] = this.physics.add.staticSprite(obj.x + 16, obj.y - 4, 'door_front_closed');
                doors_front_closed[index].body.setSize(32, 14);
                doors_front_closed[index].body.setOffset(63, 82);     
            }

            else if(obj.type === 'door_left_closed')
            {
                doors_left_closed[index] = this.physics.add.staticSprite(obj.x - 6, obj.y + 8, 'door_left_closed');
                doors_left_closed[index].body.setSize(4, 44);
                doors_left_closed[index].body.setOffset(86, 73);     
            }

            else if(obj.type === 'door_right_closed')
            {
                doors_right_closed[index] = this.physics.add.staticSprite(obj.x + 8, obj.y + 8, 'door_right_closed');  
                doors_right_closed[index].body.setSize(4, 44);
                doors_right_closed[index].body.setOffset(70, 74);   
            }

            else
            {
                return;
            }
        });

        const wallLayer = map.createLayer('Walls', tileset, 0, 0);
        
        //Set colliders
        wallLayer.setCollisionByProperty({collides: true}); 

        
        fringeLayer.setCollisionByProperty({collides: true});


        //Add doors to scene



        
        //Add colliders
        this.physics.add.collider(this.hero, wallLayer);
        this.physics.add.collider(this.hero, fringeLayer);
        this.physics.add.collider(this.hero, doors_front_closed, handleDoorCollision, undefined, this);
        this.physics.add.collider(this.hero, doors_left_closed);
        this.physics.add.collider(this.hero, doors_right_closed);
        this.physics.add.collider(this.enemies, wallLayer);
        this.physics.add.collider(this.enemies, fringeLayer);
        this.physics.add.collider(this.enemies, doors_front_closed);
        this.physics.add.collider(this.enemies, doors_left_closed);
        this.physics.add.collider(this.enemies, doors_right_closed);
        this.physics.add.collider(this.hero, this.enemies, handleHeroRatCollision, undefined, this);
        this.physics.add.collider(this.hero.getSwordBody(this), this.enemies, handleSwordRatCollision, undefined, this);
  
        
 
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
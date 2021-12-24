import Phaser from 'phaser'
import Hero from '../characters/Hero'
import Slime from '../characters/Slime'
import Rat from '../characters/Rat'
import Dungeon01 from '../scenes/Dungeon01'
import Test_Dungeon from '../scenes/TestDungeon'
import {game} from '../main'

function handleHeroSlimeCollision(obj1: Phaser.GameObjects.GameObject, obj2: Phaser.GameObjects.GameObject)
{
    const hero = obj1 as Hero;
    const slime = obj2 as Slime;
    const hero_dx = hero.x - slime.x;
    const hero_dy = hero.y - slime.y;
    const hero_dir = new Phaser.Math.Vector2(hero_dx, hero_dy).normalize().scale(100);

    hero.handleDamage(hero_dir);
    
}

function handleSwordSlimeCollision(obj1: Phaser.GameObjects.GameObject, obj2: Phaser.GameObjects.GameObject)
{
    const sword = obj1 as Hero["swordBody"];
    const slime = obj2 as Slime;

    const slime_dx = slime.x - sword.x;
    const slime_dy = slime.y - sword.y;
    const slime_dir = new Phaser.Math.Vector2(slime_dx, slime_dy).normalize().scale(100);
    slime.handleDamage(slime_dir);
}

function handleHeroRatCollision(obj1: Phaser.GameObjects.GameObject, obj2: Phaser.GameObjects.GameObject)
{
    const hero = obj1 as Hero;
    const rat = obj2 as Rat;

    const hero_dx = hero.x - rat.x;
    const hero_dy = hero.y - rat.y;
    const hero_dir = new Phaser.Math.Vector2(hero_dx, hero_dy).normalize().scale(100);

    hero.handleDamage(hero_dir);
}

function handleSwordRatCollision(obj1: Phaser.GameObjects.GameObject, obj2: Phaser.GameObjects.GameObject)
{
    const sword = obj1 as Hero["swordBody"];
    const rat = obj2 as Rat;

    const rat_dx = rat.x - sword.x;
    const rat_dy = rat.y - sword.y;
    const rat_dir = new Phaser.Math.Vector2(rat_dx, rat_dy).normalize().scale(100);
    rat.handleDamage(rat_dir);
}

function handleDoorCollision(obj1: Phaser.GameObjects.GameObject, obj2: Phaser.GameObjects.GameObject)
{   

    const door = obj2 as Phaser.Types.Physics.Arcade.SpriteWithStaticBody
    door.setTexture('door_front_opened');
    door.body.destroy();
    
}



export {handleHeroSlimeCollision, handleSwordSlimeCollision, handleHeroRatCollision, handleSwordRatCollision, handleDoorCollision}              
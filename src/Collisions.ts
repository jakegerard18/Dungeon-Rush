import Phaser from 'phaser'
import { Types } from './Types'
import { Hero } from './sprites/Hero';
import Slime from './sprites/Slime';

export function handleHeroSlimeCollision(obj1: Phaser.GameObjects.GameObject, obj2: Phaser.GameObjects.GameObject) {
    const hero = obj1 as Hero.HeroClass;
    const slime = obj2 as Slime;
    const dx = hero.x - slime.x;
    const dy = hero.y - slime.y;
    const dir = new Phaser.Math.Vector2(dx, dy).normalize().scale(200);
    switch(hero.state) {
    case Types.SpriteState.Attacking:
        slime.handleDamage(dir);
    case Types.SpriteState.Vulnerable:
        hero.handleDamage(dir);
    }
}


import Phaser from 'phaser'
import { Types } from './Types'
import { Hero } from './sprites/Hero';
import Slime from './sprites/Slime';

export function handleHeroSlimeCollision(obj1: Phaser.GameObjects.GameObject, obj2: Phaser.GameObjects.GameObject) {
    const hero = obj1 as Hero.HeroClass;
    const slime = obj2 as Slime;
    let dir;
    const dx = hero.x - slime.x;
    const dy = hero.y - slime.y;
    switch(hero.state) {
    case Types.SpriteState.Attacking:
      dir = new Phaser.Math.Vector2(-dx, -dy).normalize().scale(200);
      slime.handleDamage(dir);
      break;
    case Types.SpriteState.Vulnerable:
      dir = new Phaser.Math.Vector2(dx, dy).normalize().scale(200);
      hero.handleDamage(dir);
      break;
    }
}


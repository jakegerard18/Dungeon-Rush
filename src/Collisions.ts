import Phaser from 'phaser'
import { Types } from './Types'
import { Hero } from './sprites/Hero';
import { Enemy } from './sprites/Enemy';

export function handleHeroEnemyCollision(obj1: Phaser.GameObjects.GameObject, obj2: Phaser.GameObjects.GameObject) {
  let dir;
  const hero = obj1 as Hero;
  const enemy = obj2 as Enemy;
  const dx = hero.x - enemy.x;
  const dy = hero.y - enemy.y;
  switch(hero.state) {
  case Types.SpriteState.Attacking:
    dir = new Phaser.Math.Vector2(-dx, -dy).normalize().scale(200);
    enemy.handleDamage(dir);
    break;
  case Types.SpriteState.Vulnerable:
    dir = new Phaser.Math.Vector2(dx, dy).normalize().scale(200);
    hero.handleDamage(dir);
    break;
  }
}


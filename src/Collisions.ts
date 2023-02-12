import Phaser from 'phaser'
import { sceneEvents } from './events/EventCenter';
import Hero from './sprites/Hero';
import Slime from './sprites/Slime';

export function handleHeroSlimeCollision(obj1: Phaser.GameObjects.GameObject, obj2: Phaser.GameObjects.GameObject) {
    const hero = obj1 as Hero;
    const slime = obj2 as Slime;
    const dx = hero.x - slime.x;
    const dy = hero.y - slime.y;
    const dir = new Phaser.Math.Vector2(dx, dy).normalize().scale(200);
    hero.handleDamage(dir);
    sceneEvents.emit('player-health-changed', hero.health);
}


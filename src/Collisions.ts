import Phaser from 'phaser'
import Slime from './sprites/Slime';

export function handleHeroSlimeCollision(obj1: Phaser.GameObjects.GameObject, obj2: Phaser.GameObjects.GameObject) {
    const slime = obj2 as Slime;
    const dx = this.hero.x - slime.x;
    const dy = this.hero.y - slime.y;
    const dir = new Phaser.Math.Vector2(dx, dy).normalize().scale(200);
    this.hero.setVelocity(dir.x, dir.y);
    this.hit = 1;
}


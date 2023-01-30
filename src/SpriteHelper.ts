import Phaser from 'phaser';

export function addSprite(scene: Phaser.Scene, spriteKey: string, x: number, y: number) {
   const sprite = scene.physics.add.sprite(x, y, spriteKey);
   sprite.body.setSize(sprite.width * 0.3, sprite.height * 0.3);
   return sprite;
}
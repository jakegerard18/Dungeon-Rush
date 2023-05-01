import Phaser from 'phaser';

export function createAnimations(scene: Phaser.Scene, sprite: string) {
  // Movement animations
  scene.anims.create({
      key: `${sprite}-idle`,
      frames: scene.anims.generateFrameNames(sprite, {prefix: `${sprite}-idle-`, start: 0, end: 2 }),
      yoyo: true,
      repeat: -1,
      frameRate: 5
  });
  scene.anims.create({
      key: `${sprite}-taunt`,
      frames: scene.anims.generateFrameNames(sprite, {prefix: `${sprite}-taunt-`, start: 0, end: 2 }),
      repeat: -1,
      frameRate: 5
  });
  scene.anims.create({
      key: `${sprite}-walk-down`,
      frames: scene.anims.generateFrameNames(sprite, {prefix: `${sprite}-walk-down-`, start: 0, end: 3 }),
      repeat: -1,
      frameRate: 10
  });
  scene.anims.create({
      key: `${sprite}-walk-up`,
      frames: scene.anims.generateFrameNames(sprite, {prefix: `${sprite}-walk-up-`, start: 0, end: 3 }),
      repeat: -1,
      frameRate: 10
  });
  scene.anims.create({
      key: `${sprite}-walk-right`,
      frames: scene.anims.generateFrameNames(sprite, {prefix: `${sprite}-walk-right-`, start: 0, end: 3 }),
      repeat: -1,
      frameRate: 10
  });

  // Attack animations
  scene.anims.create({
      key: `${sprite}-attack-down`,
      frames: scene.anims.generateFrameNames(sprite, {prefix: `${sprite}-attack-down-`, start: 0, end: 3 }),
      repeat: -1,
      frameRate: 20
  });
  scene.anims.create({
      key: `${sprite}-attack-up`,
      frames: scene.anims.generateFrameNames(sprite, {prefix: `${sprite}-attack-up-`, start: 0, end: 3 }),
      repeat: -1,
      frameRate: 20
  });
  scene.anims.create({
      key: `${sprite}-attack-right`,
      frames: scene.anims.generateFrameNames(sprite, {prefix: `${sprite}-attack-right-`, start: 0, end: 3 }),
      repeat: -1,
      frameRate: 20
  });

  // Damage animations
  scene.anims.create({
    key: `${sprite}-damage-down`,
    frames: scene.anims.generateFrameNames(sprite, {prefix: `${sprite}-damage-down-`, start: 0, end: 3 }),
    repeat: -1,
    frameRate: 20
  });
  scene.anims.create({
    key: `${sprite}-damage-up`,
    frames: scene.anims.generateFrameNames(sprite, {prefix: `${sprite}-damage-up-`, start: 0, end: 3 }),
    repeat: -1,
    frameRate: 20
  });
  scene.anims.create({
    key: `${sprite}-damage-right`,
    frames: scene.anims.generateFrameNames(sprite, {prefix: `${sprite}-damage-right-`, start: 0, end: 3 }),
    repeat: -1,
    frameRate: 20
  });
}

import Phaser from 'phaser';

export function createAnimations(scene: Phaser.Scene, sprite: string) {
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
    scene.anims.create({
        key: `${sprite}-walk-left`,
        frames: scene.anims.generateFrameNames(sprite, {prefix: `${sprite}-walk-right-`, start: 0, end: 3 }),
        repeat: -1,
        frameRate: 10
    });
}

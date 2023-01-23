import Phaser from 'phaser';

// Hero animations

export function createHeroAnims( scene: Phaser.Scene) {
    scene.anims.create({
        key: 'hero-idle',
        frames: scene.anims.generateFrameNames('hero', {prefix: 'hero-idle-', start: 0, end: 2 }),
        yoyo: true,
        repeat: -1,
        frameRate: 5
    });
    scene.anims.create({
        key: 'hero-victory',
        frames: scene.anims.generateFrameNames('hero', {prefix: 'hero-taunt-', start: 0, end: 2 }),
        repeat: -1,
        frameRate: 5
    });
    scene.anims.create({
        key: 'hero-walk-down',
        frames: scene.anims.generateFrameNames('hero', {prefix: 'hero-walk-down-', start: 0, end: 3 }),
        repeat: -1,
        frameRate: 10
    });
    scene.anims.create({
        key: 'hero-walk-up',
        frames: scene.anims.generateFrameNames('hero', {prefix: 'hero-walk-up-', start: 0, end: 3 }),
        repeat: -1,
        frameRate: 10
    });
    scene.anims.create({
        key: 'hero-walk-right',
        frames: scene.anims.generateFrameNames('hero', {prefix: 'hero-walk-right-', start: 0, end: 3 }),
        repeat: -1,
        frameRate: 10
    });
    scene.anims.create({
        key: 'hero-walk-left',
        frames: scene.anims.generateFrameNames('hero', {prefix: 'hero-walk-right-', start: 0, end: 3 }),
        repeat: -1,
        frameRate: 10
    });
}

// Slime animations

export function createSlimeAnims(scene: Phaser.Scene) {
     scene.anims.create({
        key: 'slime-idle',
        frames: scene.anims.generateFrameNames('slime', {prefix: 'slime-idle-', start: 0, end: 2 }),
        yoyo: true,
        repeat: -1,
        frameRate: 5
    });
    scene.anims.create({
        key: 'slime-taunt',
        frames: scene.anims.generateFrameNames('slime', {prefix: 'slime-taunt-', start: 0, end: 2 }),
        repeat: -1,
        frameRate: 5
    });
    scene.anims.create({
        key: 'slime-walk-down',
        frames: scene.anims.generateFrameNames('slime', {prefix: 'slime-walk-down-', start: 0, end: 3 }),
        repeat: -1,
        frameRate: 10
    });
    scene.anims.create({
        key: 'slime-walk-up',
        frames: scene.anims.generateFrameNames('slime', {prefix: 'slime-walk-up-', start: 0, end: 3 }),
        repeat: -1,
        frameRate: 10
    });
    scene.anims.create({
        key: 'slime-walk-right',
        frames: scene.anims.generateFrameNames('slime', {prefix: 'slime-walk-right-', start: 0, end: 3 }),
        repeat: -1,
        frameRate: 10
    });
    scene.anims.create({
        key: 'slime-walk-left',
        frames: scene.anims.generateFrameNames('slime', {prefix: 'slime-walk-right-', start: 0, end: 3 }),
        repeat: -1,
        frameRate: 10
    });
}

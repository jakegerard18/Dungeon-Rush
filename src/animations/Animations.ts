import Phaser from 'phaser';

const createHeroAnims = (anims: Phaser.Animations.AnimationManager) =>
{
    anims.create({
        key: 'hero-idle',
        frames: [
            {
                key: 'hero',
                frame: 'frame-0-0.png',
                duration: 640
            },
            {
                key: 'hero',
                frame: 'frame-0-1.png',
               
            },
            {
                key: 'hero',
                frame: 'frame-0-2.png',
                duration: 640
            },
            {
                key: 'hero',
                frame: 'frame-0-1.png',
            }],
        repeat: -1,
        frameRate: 10,
    });

    anims.create({
        key: 'hero-run-down',
        frames: [
            {
                key: 'hero',
                frame: 'frame-2-0.png',
            },
            {
                key: 'hero',
                frame: 'frame-2-1.png',
               
            },
            {
                key: 'hero',
                frame: 'frame-2-2.png',
            },
            {
                key: 'hero',
                frame: 'frame-2-3.png',
            }],
        repeat: -1,
        frameRate: 10,
    });

    anims.create({
        key: 'hero-run-right',
        frames: [
            {
                key: 'hero',
                frame: 'frame-3-0.png',
            },
            {
                key: 'hero',
                frame: 'frame-3-1.png',
               
            },
            {
                key: 'hero',
                frame: 'frame-3-2.png',
            },
            {
                key: 'hero',
                frame: 'frame-3-3.png',
            }],
        repeat: -1,
        frameRate: 10,
    });

    anims.create({
        key: 'hero-run-left',
        frames: [
            {
                key: 'hero_flipped',
                frame: 'frame-3-0.png',
            },
            {
                key: 'hero_flipped',
                frame: 'frame-3-1.png',
               
            },
            {
                key: 'hero_flipped',
                frame: 'frame-3-2.png',
            },
            {
                key: 'hero_flipped',
                frame: 'frame-3-3.png',
            }],
        repeat: -1,
        frameRate: 10,
    });

    anims.create({
        key: 'hero-run-up',
        frames: [
            {
                key: 'hero',
                frame: 'frame-4-0.png',
            },
            {
                key: 'hero',
                frame: 'frame-4-1.png',
               
            },
            {
                key: 'hero',
                frame: 'frame-4-2.png',
            },
            {
                key: 'hero',
                frame: 'frame-4-3.png',
            }],
        repeat: -1,
        frameRate: 10,
    });

    anims.create({
        key: 'hero-attack-down',
        frames:[
            {
                key: 'hero',
                frame: 'frame-5-0.png',
            },
            {
                key: 'hero',
                frame: 'frame-5-1.png',
            },
            {
                key: 'hero',
                frame: 'frame-5-2.png',
            },
            {
                key: 'hero',
                frame: 'frame-5-3.png',
            },

        ]        
    })

    anims.create({
        key: 'hero-attack-right',
        frames:[
            {
                key: 'hero',
                frame: 'frame-6-0.png',
            },
            {
                key: 'hero',
                frame: 'frame-6-1.png',
            },
            {
                key: 'hero',
                frame: 'frame-6-2.png',
            },
            {
                key: 'hero',
                frame: 'frame-6-3.png',
            },

        ]        
    })

    anims.create({
        key: 'hero-attack-left',
        frames:[
            {
                key: 'hero_flipped',
                frame: 'frame-6-0.png',
            },
            {
                key: 'hero_flipped',
                frame: 'frame-6-1.png',
            },
            {
                key: 'hero_flipped',
                frame: 'frame-6-2.png',
            },
            {
                key: 'hero_flipped',
                frame: 'frame-6-3.png',
            },

        ]        
    })

    anims.create({
        key: 'hero-attack-up',
        frames:[
            {
                key: 'hero',
                frame: 'frame-7-0.png',
            },
            {
                key: 'hero',
                frame: 'frame-7-1.png',
            },
            {
                key: 'hero',
                frame: 'frame-7-2.png',
            },
            {
                key: 'hero',
                frame: 'frame-7-3.png',
            },

        ]        
    })

    anims.create({
        key: 'hero-hit-up',
        frames:[
            {
                key: 'hero',
                frame: 'frame-8-0.png',
            },
            {
                key: 'hero',
                frame: 'frame-8-1.png',
            },
            {
                key: 'hero',
                frame: 'frame-8-2.png',
            },
            {
                key: 'hero',
                frame: 'frame-8-1.png',
            },
            {
                key: 'hero',
                frame: 'frame-8-2.png',
            }],
        frameRate: 10,        
    })
}

const createSlimeAnims = (anims: Phaser.Animations.AnimationManager) =>
{
    anims.create({
        key: 'slime-idle',
        frames: [
            {
                key: 'slime',
                frame: 'frame-0-0.png',
                duration: 640
            },
            {
                key: 'slime',
                frame: 'frame-0-1.png',
               
            },
            {
                key: 'slime',
                frame: 'frame-0-2.png',
                duration: 640
            },
            {
                key: 'slime',
                frame: 'frame-0-1.png',
            }],
        repeat: -1,
        frameRate: 10,
    });

    anims.create({
        key: 'slime-run-down',
        frames: [
            {
                key: 'slime',
                frame: 'frame-2-0.png',
            },
            {
                key: 'slime',
                frame: 'frame-2-1.png',
               
            },
            {
                key: 'slime',
                frame: 'frame-2-2.png',
            },
            {
                key: 'slime',
                frame: 'frame-2-3.png',
            }],
        repeat: -1,
        frameRate: 10,
    });

    anims.create({
        key: 'slime-run-right',
        frames: [
            {
                key: 'slime',
                frame: 'frame-3-0.png',
            },
            {
                key: 'slime',
                frame: 'frame-3-1.png',
               
            },
            {
                key: 'slime',
                frame: 'frame-3-2.png',
            },
            {
                key: 'slime',
                frame: 'frame-3-3.png',
            }],
        repeat: -1,
        frameRate: 10,
    });

    anims.create({
        key: 'slime-run-left',
        frames: [
            {
                key: 'slime_flipped',
                frame: 'frame-3-0.png',
            },
            {
                key: 'slime_flipped',
                frame: 'frame-3-1.png',
               
            },
            {
                key: 'slime_flipped',
                frame: 'frame-3-2.png',
            },
            {
                key: 'slime_flipped',
                frame: 'frame-3-3.png',
            }],
        repeat: -1,
        frameRate: 10,
    });

    anims.create({
        key: 'slime-run-up',
        frames: [
            {
                key: 'slime',
                frame: 'frame-4-0.png',
            },
            {
                key: 'slime',
                frame: 'frame-4-1.png',
               
            },
            {
                key: 'slime',
                frame: 'frame-4-2.png',
            },
            {
                key: 'slime',
                frame: 'frame-4-3.png',
            }],
        repeat: -1,
        frameRate: 10,
    });

    anims.create({
        key: 'slime-attack-down',
        frames:[
            {
                key: 'slime',
                frame: 'frame-5-0.png',
            },
            {
                key: 'slime',
                frame: 'frame-5-1.png',
            },
            {
                key: 'slime',
                frame: 'frame-5-2.png',
            },
            {
                key: 'slime',
                frame: 'frame-5-3.png',
            }],
        repeat: -1,
        frameRate: 10,        
    });

    anims.create({
        key: 'slime-attack-right',
        frames:[
            {
                key: 'slime',
                frame: 'frame-6-0.png',
            },
            {
                key: 'slime',
                frame: 'frame-6-1.png',
            },
            {
                key: 'slime',
                frame: 'frame-6-2.png',
            },
            {
                key: 'slime',
                frame: 'frame-6-3.png',
            }],
        repeat: -1,
        frameRate: 10,        
    });

    anims.create({
        key: 'slime-attack-left',
        frames:[
            {
                key: 'slime_flipped',
                frame: 'frame-6-0.png',
            },
            {
                key: 'slime_flipped',
                frame: 'frame-6-1.png',
            },
            {
                key: 'slime_flipped',
                frame: 'frame-6-2.png',
            },
            {
                key: 'slime_flipped',
                frame: 'frame-6-3.png',
            }],
        repeat: -1,
        frameRate: 10,        
    });

    anims.create({
        key: 'slime-attack-up',
        frames:[
            {
                key: 'slime',
                frame: 'frame-7-0.png',
            },
            {
                key: 'slime',
                frame: 'frame-7-1.png',
            },
            {
                key: 'slime',
                frame: 'frame-7-2.png',
            },
            {
                key: 'slime',
                frame: 'frame-7-3.png',
            }],
        repeat: -1,
        frameRate: 10,        
    });

    anims.create({
        key: 'slime-hit-down',
        frames:[
            {
                key: 'slime',
                frame: 'frame-8-0.png',
            },
            {
                key: 'slime',
                frame: 'frame-8-1.png',

            },
            {
                key: 'slime',
                frame: 'frame-8-2.png',
            },
            {
                key: 'slime',
                frame: 'frame-8-1.png',
            }],
        repeat: 1,
        frameRate: 15,        
    });   


    anims.create({
        key: 'slime-hit-right',
        frames:[
            {
                key: 'slime',
                frame: 'frame-9-0.png',
            },
            {
                key: 'slime',
                frame: 'frame-9-1.png',
            },
            {
                key: 'slime',
                frame: 'frame-9-2.png',
            },
            {
                key: 'slime',
                frame: 'frame-9-1.png',
            }],
        repeat: 1,
        frameRate: 15,        
    });

    anims.create({
        key: 'slime-hit-left',
        frames:[
            {
                key: 'slime_flipped',
                frame: 'frame-9-0.png',
            },
            {
                key: 'slime_flipped',
                frame: 'frame-9-1.png',
            },
            {
                key: 'slime_flipped',
                frame: 'frame-9-2.png',
            },
            {
                key: 'slime_flipped',
                frame: 'frame-9-1.png',
            }],
        repeat: 1,
        frameRate: 15,        
    });

    anims.create({
        key: 'slime-hit-up',
        frames:[
            {
                key: 'slime',
                frame: 'frame-10-0.png',
            },
            {
                key: 'slime',
                frame: 'frame-10-1.png',

            },
            {
                key: 'slime',
                frame: 'frame-10-2.png',
            },
            {
                key: 'slime',
                frame: 'frame-10-1.png',
            }],
        repeat: 1,
        frameRate: 15,        
    });        
    
}

const createRatAnims = (anims: Phaser.Animations.AnimationManager) =>
{
    anims.create({
        key: 'rat-idle',
        frames: [
            {
                key: 'rat',
                frame: 'frame-0-0.png',
            },
            {
                key: 'rat',
                frame: 'frame-0-1.png',
               
            },
            {
                key: 'rat',
                frame: 'frame-0-2.png',
            },
            {
                key: 'rat',
                frame: 'frame-0-1.png',
            }],
        repeat: -1,
        frameRate: 10,
    });

    anims.create({
        key: 'rat-run-down',
        frames: [
            {
                key: 'rat',
                frame: 'frame-2-0.png',
            },
            {
                key: 'rat',
                frame: 'frame-2-1.png',
               
            },
            {
                key: 'rat',
                frame: 'frame-2-2.png',
            },
            {
                key: 'rat',
                frame: 'frame-2-3.png',
            }],
        repeat: -1,
        frameRate: 10,
    });

    anims.create({
        key: 'rat-run-right',
        frames: [
            {
                key: 'rat',
                frame: 'frame-3-0.png',
            },
            {
                key: 'rat',
                frame: 'frame-3-1.png',
               
            },
            {
                key: 'rat',
                frame: 'frame-3-2.png',
            },
            {
                key: 'rat',
                frame: 'frame-3-3.png',
            }],
        repeat: -1,
        frameRate: 10,
    });

    anims.create({
        key: 'rat-run-left',
        frames: [
            {
                key: 'rat_flipped',
                frame: 'frame-3-0.png',
            },
            {
                key: 'rat_flipped',
                frame: 'frame-3-1.png',
               
            },
            {
                key: 'rat_flipped',
                frame: 'frame-3-2.png',
            },
            {
                key: 'rat_flipped',
                frame: 'frame-3-3.png',
            }],
        repeat: -1,
        frameRate: 10,
    });

    anims.create({
        key: 'rat-run-up',
        frames: [
            {
                key: 'rat',
                frame: 'frame-4-0.png',
            },
            {
                key: 'rat',
                frame: 'frame-4-1.png',
               
            },
            {
                key: 'rat',
                frame: 'frame-4-2.png',
            },
            {
                key: 'rat',
                frame: 'frame-4-3.png',
            }],
        repeat: -1,
        frameRate: 10,
    });

    anims.create({
        key: 'rat-attack-down',
        frames:[
            {
                key: 'rat',
                frame: 'frame-5-0.png',
            },
            {
                key: 'rat',
                frame: 'frame-5-1.png',
            },
            {
                key: 'rat',
                frame: 'frame-5-2.png',
            },
            {
                key: 'rat',
                frame: 'frame-5-3.png',
            }],
        repeat: -1,
        frameRate: 10,        
    });

    anims.create({
        key: 'rat-attack-right',
        frames:[
            {
                key: 'rat',
                frame: 'frame-6-0.png',
            },
            {
                key: 'rat',
                frame: 'frame-6-1.png',
            },
            {
                key: 'rat',
                frame: 'frame-6-2.png',
            },
            {
                key: 'rat',
                frame: 'frame-6-3.png',
            }],
        repeat: -1,
        frameRate: 10,        
    });

    anims.create({
        key: 'rat-attack-left',
        frames:[
            {
                key: 'rat_flipped',
                frame: 'frame-6-3.png',
            },
            {
                key: 'rat_flipped',
                frame: 'frame-6-2.png',
            },
            {
                key: 'rat_flipped',
                frame: 'frame-6-1.png',
            },
            {
                key: 'rat_flipped',
                frame: 'frame-6-0.png',
            }],
        repeat: -1,
        frameRate: 10,        
    });

    anims.create({
        key: 'rat-attack-up',
        frames:[
            {
                key: 'rat',
                frame: 'frame-7-0.png',
            },
            {
                key: 'rat',
                frame: 'frame-7-1.png',
            },
            {
                key: 'rat',
                frame: 'frame-7-2.png',
            },
            {
                key: 'rat',
                frame: 'frame-7-3.png',
            }],
        repeat: -1,
        frameRate: 10,        
    });

    anims.create({
        key: 'rat-hit-down',
        frames:[
            {
                key: 'rat',
                frame: 'frame-8-0.png',
            },
            {
                key: 'rat',
                frame: 'frame-8-1.png',

            },
            {
                key: 'rat',
                frame: 'frame-8-2.png',
            },
            {
                key: 'rat',
                frame: 'frame-8-1.png',
            }],
        repeat: 1,
        frameRate: 15,        
    });   


    anims.create({
        key: 'rat-hit-right',
        frames:[
            {
                key: 'rat',
                frame: 'frame-9-0.png',
            },
            {
                key: 'rat',
                frame: 'frame-9-1.png',
            },
            {
                key: 'rat',
                frame: 'frame-9-2.png',
            },
            {
                key: 'rat',
                frame: 'frame-9-1.png',
            }],
        repeat: 1,
        frameRate: 15,        
    });

    anims.create({
        key: 'rat-hit-left',
        frames:[
            {
                key: 'rat_flipped',
                frame: 'frame-9-0.png',
            },
            {
                key: 'rat_flipped',
                frame: 'frame-9-1.png',
            },
            {
                key: 'rat_flipped',
                frame: 'frame-9-2.png',
            },
            {
                key: 'rat_flipped',
                frame: 'frame-9-1.png',
            }],
        repeat: 1,
        frameRate: 15,        
    });

    anims.create({
        key: 'rat-hit-up',
        frames:[
            {
                key: 'rat',
                frame: 'frame-10-0.png',
            },
            {
                key: 'rat',
                frame: 'frame-10-1.png',

            },
            {
                key: 'rat',
                frame: 'frame-10-2.png',
            },
            {
                key: 'rat',
                frame: 'frame-10-1.png',
            }],
        repeat: 1,
        frameRate: 15,        
    });
}

const createBatAnims = (anims: Phaser.Animations.AnimationManager) =>
{
    anims.create({
        key: 'bat-idle',
        frames: [
            {
                key: 'bat',
                frame: 'frame-0-0.png',
            },
            {
                key: 'bat',
                frame: 'frame-0-1.png',
               
            },
            {
                key: 'bat',
                frame: 'frame-0-2.png',
            },
            {
                key: 'bat',
                frame: 'frame-0-1.png',
            }],
        repeat: -1,
        frameRate: 10,
    });

    anims.create({
        key: 'bat-run-down',
        frames: [
            {
                key: 'bat',
                frame: 'frame-2-0.png',
            },
            {
                key: 'bat',
                frame: 'frame-2-1.png',
               
            },
            {
                key: 'bat',
                frame: 'frame-2-2.png',
            },
            {
                key: 'bat',
                frame: 'frame-2-3.png',
            }],
        repeat: -1,
        frameRate: 10,
    });

    anims.create({
        key: 'bat-run-right',
        frames: [
            {
                key: 'bat',
                frame: 'frame-3-0.png',
            },
            {
                key: 'bat',
                frame: 'frame-3-1.png',
               
            },
            {
                key: 'bat',
                frame: 'frame-3-2.png',
            },
            {
                key: 'bat',
                frame: 'frame-3-3.png',
            }],
        repeat: -1,
        frameRate: 10,
    });

    anims.create({
        key: 'bat-run-left',
        frames: [
            {
                key: 'bat_flipped',
                frame: 'frame-3-0.png',
            },
            {
                key: 'bat_flipped',
                frame: 'frame-3-1.png',
               
            },
            {
                key: 'bat_flipped',
                frame: 'frame-3-2.png',
            },
            {
                key: 'bat_flipped',
                frame: 'frame-3-3.png',
            }],
        repeat: -1,
        frameRate: 10,
    });

    anims.create({
        key: 'bat-run-up',
        frames: [
            {
                key: 'bat',
                frame: 'frame-4-0.png',
            },
            {
                key: 'bat',
                frame: 'frame-4-1.png',
               
            },
            {
                key: 'bat',
                frame: 'frame-4-2.png',
            },
            {
                key: 'bat',
                frame: 'frame-4-3.png',
            }],
        repeat: -1,
        frameRate: 10,
    });

    anims.create({
        key: 'bat-attack-down',
        frames:[
            {
                key: 'bat',
                frame: 'frame-5-0.png',
            },
            {
                key: 'bat',
                frame: 'frame-5-1.png',
            },
            {
                key: 'bat',
                frame: 'frame-5-2.png',
            },
            {
                key: 'bat',
                frame: 'frame-5-3.png',
            }],
        repeat: -1,
        frameRate: 10,        
    });

    anims.create({
        key: 'bat-attack-right',
        frames:[
            {
                key: 'bat',
                frame: 'frame-6-0.png',
            },
            {
                key: 'bat',
                frame: 'frame-6-1.png',
            },
            {
                key: 'bat',
                frame: 'frame-6-2.png',
            },
            {
                key: 'bat',
                frame: 'frame-6-3.png',
            }],
        repeat: -1,
        frameRate: 10,        
    });

    anims.create({
        key: 'bat-attack-left',
        frames:[
            {
                key: 'bat_flipped',
                frame: 'frame-6-3.png',
            },
            {
                key: 'bat_flipped',
                frame: 'frame-6-2.png',
            },
            {
                key: 'bat_flipped',
                frame: 'frame-6-1.png',
            },
            {
                key: 'bat_flipped',
                frame: 'frame-6-0.png',
            }],
        repeat: -1,
        frameRate: 10,        
    });

    anims.create({
        key: 'bat-attack-up',
        frames:[
            {
                key: 'bat',
                frame: 'frame-7-0.png',
            },
            {
                key: 'bat',
                frame: 'frame-7-1.png',
            },
            {
                key: 'bat',
                frame: 'frame-7-2.png',
            },
            {
                key: 'bat',
                frame: 'frame-7-3.png',
            }],
        repeat: -1,
        frameRate: 10,        
    });

    anims.create({
        key: 'bat-hit-down',
        frames:[
            {
                key: 'bat',
                frame: 'frame-8-0.png',
            },
            {
                key: 'bat',
                frame: 'frame-8-1.png',

            },
            {
                key: 'bat',
                frame: 'frame-8-2.png',
            },
            {
                key: 'bat',
                frame: 'frame-8-1.png',
            }],
        repeat: 1,
        frameRate: 15,        
    });   


    anims.create({
        key: 'bat-hit-right',
        frames:[
            {
                key: 'bat',
                frame: 'frame-9-0.png',
            },
            {
                key: 'bat',
                frame: 'frame-9-1.png',
            },
            {
                key: 'bat',
                frame: 'frame-9-2.png',
            },
            {
                key: 'bat',
                frame: 'frame-9-1.png',
            }],
        repeat: 1,
        frameRate: 15,        
    });

    anims.create({
        key: 'bat-hit-left',
        frames:[
            {
                key: 'bat_flipped',
                frame: 'frame-9-0.png',
            },
            {
                key: 'bat_flipped',
                frame: 'frame-9-1.png',
            },
            {
                key: 'bat_flipped',
                frame: 'frame-9-2.png',
            },
            {
                key: 'bat_flipped',
                frame: 'frame-9-1.png',
            }],
        repeat: 1,
        frameRate: 15,        
    });

    anims.create({
        key: 'bat-hit-up',
        frames:[
            {
                key: 'bat',
                frame: 'frame-10-0.png',
            },
            {
                key: 'bat',
                frame: 'frame-10-1.png',

            },
            {
                key: 'bat',
                frame: 'frame-10-2.png',
            },
            {
                key: 'bat',
                frame: 'frame-10-1.png',
            }],
        repeat: 1,
        frameRate: 15,        
    });
}

const createSpiderAnims = (anims: Phaser.Animations.AnimationManager) =>
{
    anims.create({
        key: 'spider-idle',
        frames: [
            {
                key: 'spider',
                frame: 'frame-0-0.png',
            },
            {
                key: 'spider',
                frame: 'frame-0-1.png',
               
            },
            {
                key: 'spider',
                frame: 'frame-0-2.png',
            },
            {
                key: 'spider',
                frame: 'frame-0-1.png',
            }],
        repeat: -1,
        frameRate: 10,
    });

    anims.create({
        key: 'spider-run-down',
        frames: [
            {
                key: 'spider',
                frame: 'frame-2-0.png',
            },
            {
                key: 'spider',
                frame: 'frame-2-1.png',
               
            },
            {
                key: 'spider',
                frame: 'frame-2-2.png',
            },
            {
                key: 'spider',
                frame: 'frame-2-3.png',
            }],
        repeat: -1,
        frameRate: 10,
    });

    anims.create({
        key: 'spider-run-right',
        frames: [
            {
                key: 'spider',
                frame: 'frame-3-0.png',
            },
            {
                key: 'spider',
                frame: 'frame-3-1.png',
               
            },
            {
                key: 'spider',
                frame: 'frame-3-2.png',
            },
            {
                key: 'spider',
                frame: 'frame-3-3.png',
            }],
        repeat: -1,
        frameRate: 10,
    });

    anims.create({
        key: 'spider-run-left',
        frames: [
            {
                key: 'spider_flipped',
                frame: 'frame-3-0.png',
            },
            {
                key: 'spider_flipped',
                frame: 'frame-3-1.png',
               
            },
            {
                key: 'spider_flipped',
                frame: 'frame-3-2.png',
            },
            {
                key: 'spider_flipped',
                frame: 'frame-3-3.png',
            }],
        repeat: -1,
        frameRate: 10,
    });

    anims.create({
        key: 'spider-run-up',
        frames: [
            {
                key: 'spider',
                frame: 'frame-4-0.png',
            },
            {
                key: 'spider',
                frame: 'frame-4-1.png',
               
            },
            {
                key: 'spider',
                frame: 'frame-4-2.png',
            },
            {
                key: 'spider',
                frame: 'frame-4-3.png',
            }],
        repeat: -1,
        frameRate: 10,
    });

    anims.create({
        key: 'spider-attack-down',
        frames:[
            {
                key: 'spider',
                frame: 'frame-5-0.png',
            },
            {
                key: 'spider',
                frame: 'frame-5-1.png',
            },
            {
                key: 'spider',
                frame: 'frame-5-2.png',
            },
            {
                key: 'spider',
                frame: 'frame-5-3.png',
            }],
        repeat: -1,
        frameRate: 10,        
    });

    anims.create({
        key: 'spider-attack-right',
        frames:[
            {
                key: 'spider',
                frame: 'frame-6-0.png',
            },
            {
                key: 'spider',
                frame: 'frame-6-1.png',
            },
            {
                key: 'spider',
                frame: 'frame-6-2.png',
            },
            {
                key: 'spider',
                frame: 'frame-6-3.png',
            }],
        repeat: -1,
        frameRate: 10,        
    });

    anims.create({
        key: 'spider-attack-left',
        frames:[
            {
                key: 'spider_flipped',
                frame: 'frame-6-3.png',
            },
            {
                key: 'spider_flipped',
                frame: 'frame-6-2.png',
            },
            {
                key: 'spider_flipped',
                frame: 'frame-6-1.png',
            },
            {
                key: 'spider_flipped',
                frame: 'frame-6-0.png',
            }],
        repeat: -1,
        frameRate: 10,        
    });

    anims.create({
        key: 'spider-attack-up',
        frames:[
            {
                key: 'spider',
                frame: 'frame-7-0.png',
            },
            {
                key: 'spider',
                frame: 'frame-7-1.png',
            },
            {
                key: 'spider',
                frame: 'frame-7-2.png',
            },
            {
                key: 'spider',
                frame: 'frame-7-3.png',
            }],
        repeat: -1,
        frameRate: 10,        
    });

    anims.create({
        key: 'spider-hit-down',
        frames:[
            {
                key: 'spider',
                frame: 'frame-8-0.png',
            },
            {
                key: 'spider',
                frame: 'frame-8-1.png',

            },
            {
                key: 'spider',
                frame: 'frame-8-2.png',
            },
            {
                key: 'spider',
                frame: 'frame-8-1.png',
            }],
        repeat: 1,
        frameRate: 15,        
    });   


    anims.create({
        key: 'spider-hit-right',
        frames:[
            {
                key: 'spider',
                frame: 'frame-9-0.png',
            },
            {
                key: 'spider',
                frame: 'frame-9-1.png',
            },
            {
                key: 'spider',
                frame: 'frame-9-2.png',
            },
            {
                key: 'spider',
                frame: 'frame-9-1.png',
            }],
        repeat: 1,
        frameRate: 15,        
    });

    anims.create({
        key: 'spider-hit-left',
        frames:[
            {
                key: 'spider_flipped',
                frame: 'frame-9-0.png',
            },
            {
                key: 'spider_flipped',
                frame: 'frame-9-1.png',
            },
            {
                key: 'spider_flipped',
                frame: 'frame-9-2.png',
            },
            {
                key: 'spider_flipped',
                frame: 'frame-9-1.png',
            }],
        repeat: 1,
        frameRate: 15,        
    });

    anims.create({
        key: 'spider-hit-up',
        frames:[
            {
                key: 'spider',
                frame: 'frame-10-0.png',
            },
            {
                key: 'spider',
                frame: 'frame-10-1.png',

            },
            {
                key: 'spider',
                frame: 'frame-10-2.png',
            },
            {
                key: 'spider',
                frame: 'frame-10-1.png',
            }],
        repeat: 1,
        frameRate: 15,        
    });
}

const createGoblinAnims = (anims: Phaser.Animations.AnimationManager) =>
{
    anims.create({
        key: 'goblin-idle',
        frames: [
            {
                key: 'goblin',
                frame: 'frame-0-0.png',
            },
            {
                key: 'goblin',
                frame: 'frame-0-1.png',
               
            },
            {
                key: 'goblin',
                frame: 'frame-0-2.png',
            },
            {
                key: 'goblin',
                frame: 'frame-0-1.png',
            }],
        repeat: -1,
        frameRate: 10,
    });

    anims.create({
        key: 'goblin-run-down',
        frames: [
            {
                key: 'goblin',
                frame: 'frame-2-0.png',
            },
            {
                key: 'goblin',
                frame: 'frame-2-1.png',
               
            },
            {
                key: 'goblin',
                frame: 'frame-2-2.png',
            },
            {
                key: 'goblin',
                frame: 'frame-2-3.png',
            }],
        repeat: -1,
        frameRate: 10,
    });

    anims.create({
        key: 'goblin-run-right',
        frames: [
            {
                key: 'goblin',
                frame: 'frame-3-0.png',
            },
            {
                key: 'goblin',
                frame: 'frame-3-1.png',
               
            },
            {
                key: 'goblin',
                frame: 'frame-3-2.png',
            },
            {
                key: 'goblin',
                frame: 'frame-3-3.png',
            }],
        repeat: -1,
        frameRate: 10,
    });

    anims.create({
        key: 'goblin-run-left',
        frames: [
            {
                key: 'goblin_flipped',
                frame: 'frame-3-0.png',
            },
            {
                key: 'goblin_flipped',
                frame: 'frame-3-1.png',
               
            },
            {
                key: 'goblin_flipped',
                frame: 'frame-3-2.png',
            },
            {
                key: 'goblin_flipped',
                frame: 'frame-3-3.png',
            }],
        repeat: -1,
        frameRate: 10,
    });

    anims.create({
        key: 'goblin-run-up',
        frames: [
            {
                key: 'goblin',
                frame: 'frame-4-0.png',
            },
            {
                key: 'goblin',
                frame: 'frame-4-1.png',
               
            },
            {
                key: 'goblin',
                frame: 'frame-4-2.png',
            },
            {
                key: 'goblin',
                frame: 'frame-4-3.png',
            }],
        repeat: -1,
        frameRate: 10,
    });

    anims.create({
        key: 'goblin-attack-down',
        frames:[
            {
                key: 'goblin',
                frame: 'frame-5-0.png',
            },
            {
                key: 'goblin',
                frame: 'frame-5-1.png',
            },
            {
                key: 'goblin',
                frame: 'frame-5-2.png',
            },
            {
                key: 'goblin',
                frame: 'frame-5-3.png',
            }],
        repeat: -1,
        frameRate: 10,        
    });

    anims.create({
        key: 'goblin-attack-right',
        frames:[
            {
                key: 'goblin',
                frame: 'frame-6-0.png',
            },
            {
                key: 'goblin',
                frame: 'frame-6-1.png',
            },
            {
                key: 'goblin',
                frame: 'frame-6-2.png',
            },
            {
                key: 'goblin',
                frame: 'frame-6-3.png',
            }],
        repeat: -1,
        frameRate: 10,        
    });

    anims.create({
        key: 'goblin-attack-left',
        frames:[
            {
                key: 'goblin_flipped',
                frame: 'frame-6-3.png',
            },
            {
                key: 'goblin_flipped',
                frame: 'frame-6-2.png',
            },
            {
                key: 'goblin_flipped',
                frame: 'frame-6-1.png',
            },
            {
                key: 'goblin_flipped',
                frame: 'frame-6-0.png',
            }],
        repeat: -1,
        frameRate: 10,        
    });

    anims.create({
        key: 'goblin-attack-up',
        frames:[
            {
                key: 'goblin',
                frame: 'frame-7-0.png',
            },
            {
                key: 'goblin',
                frame: 'frame-7-1.png',
            },
            {
                key: 'goblin',
                frame: 'frame-7-2.png',
            },
            {
                key: 'goblin',
                frame: 'frame-7-3.png',
            }],
        repeat: -1,
        frameRate: 10,        
    });

    anims.create({
        key: 'goblin-hit-down',
        frames:[
            {
                key: 'goblin',
                frame: 'frame-8-0.png',
            },
            {
                key: 'goblin',
                frame: 'frame-8-1.png',

            },
            {
                key: 'goblin',
                frame: 'frame-8-2.png',
            },
            {
                key: 'goblin',
                frame: 'frame-8-1.png',
            }],
        repeat: 1,
        frameRate: 15,        
    });   


    anims.create({
        key: 'goblin-hit-right',
        frames:[
            {
                key: 'goblin',
                frame: 'frame-9-0.png',
            },
            {
                key: 'goblin',
                frame: 'frame-9-1.png',
            },
            {
                key: 'goblin',
                frame: 'frame-9-2.png',
            },
            {
                key: 'goblin',
                frame: 'frame-9-1.png',
            }],
        repeat: 1,
        frameRate: 15,        
    });

    anims.create({
        key: 'goblin-hit-left',
        frames:[
            {
                key: 'goblin_flipped',
                frame: 'frame-9-0.png',
            },
            {
                key: 'goblin_flipped',
                frame: 'frame-9-1.png',
            },
            {
                key: 'goblin_flipped',
                frame: 'frame-9-2.png',
            },
            {
                key: 'goblin_flipped',
                frame: 'frame-9-1.png',
            }],
        repeat: 1,
        frameRate: 15,        
    });

    anims.create({
        key: 'goblin-hit-up',
        frames:[
            {
                key: 'goblin',
                frame: 'frame-10-0.png',
            },
            {
                key: 'goblin',
                frame: 'frame-10-1.png',

            },
            {
                key: 'goblin',
                frame: 'frame-10-2.png',
            },
            {
                key: 'goblin',
                frame: 'frame-10-1.png',
            }],
        repeat: 1,
        frameRate: 15,        
    });
}

const createArcherAnims = (anims: Phaser.Animations.AnimationManager) =>
{
    anims.create({
        key: 'archer-idle',
        frames: [
            {
                key: 'archer',
                frame: 'frame-0-0.png',
            },
            {
                key: 'archer',
                frame: 'frame-0-1.png',
               
            },
            {
                key: 'archer',
                frame: 'frame-0-2.png',
            },
            {
                key: 'archer',
                frame: 'frame-0-1.png',
            }],
        repeat: -1,
        frameRate: 10,
    });

    anims.create({
        key: 'archer-run-down',
        frames: [
            {
                key: 'archer',
                frame: 'frame-2-0.png',
            },
            {
                key: 'archer',
                frame: 'frame-2-1.png',
               
            },
            {
                key: 'archer',
                frame: 'frame-2-2.png',
            },
            {
                key: 'archer',
                frame: 'frame-2-3.png',
            }],
        repeat: -1,
        frameRate: 10,
    });

    anims.create({
        key: 'archer-run-right',
        frames: [
            {
                key: 'archer',
                frame: 'frame-3-0.png',
            },
            {
                key: 'archer',
                frame: 'frame-3-1.png',
               
            },
            {
                key: 'archer',
                frame: 'frame-3-2.png',
            },
            {
                key: 'archer',
                frame: 'frame-3-3.png',
            }],
        repeat: -1,
        frameRate: 10,
    });

    anims.create({
        key: 'archer-run-left',
        frames: [
            {
                key: 'archer_flipped',
                frame: 'frame-3-0.png',
            },
            {
                key: 'archer_flipped',
                frame: 'frame-3-1.png',
               
            },
            {
                key: 'archer_flipped',
                frame: 'frame-3-2.png',
            },
            {
                key: 'archer_flipped',
                frame: 'frame-3-3.png',
            }],
        repeat: -1,
        frameRate: 10,
    });

    anims.create({
        key: 'archer-run-up',
        frames: [
            {
                key: 'archer',
                frame: 'frame-4-0.png',
            },
            {
                key: 'archer',
                frame: 'frame-4-1.png',
               
            },
            {
                key: 'archer',
                frame: 'frame-4-2.png',
            },
            {
                key: 'archer',
                frame: 'frame-4-3.png',
            }],
        repeat: -1,
        frameRate: 10,
    });

    anims.create({
        key: 'archer-attack-down',
        frames:[
            {
                key: 'archer',
                frame: 'frame-5-0.png',
            },
            {
                key: 'archer',
                frame: 'frame-5-1.png',
            },
            {
                key: 'archer',
                frame: 'frame-5-2.png',
            },
            {
                key: 'archer',
                frame: 'frame-5-3.png',
            }],
        repeat: -1,
        frameRate: 10,        
    });

    anims.create({
        key: 'archer-attack-right',
        frames:[
            {
                key: 'archer',
                frame: 'frame-6-0.png',
            },
            {
                key: 'archer',
                frame: 'frame-6-1.png',
            },
            {
                key: 'archer',
                frame: 'frame-6-2.png',
            },
            {
                key: 'archer',
                frame: 'frame-6-3.png',
            }],
        repeat: -1,
        frameRate: 10,        
    });

    anims.create({
        key: 'archer-attack-left',
        frames:[
            {
                key: 'archer_flipped',
                frame: 'frame-6-3.png',
            },
            {
                key: 'archer_flipped',
                frame: 'frame-6-2.png',
            },
            {
                key: 'archer_flipped',
                frame: 'frame-6-1.png',
            },
            {
                key: 'archer_flipped',
                frame: 'frame-6-0.png',
            }],
        repeat: -1,
        frameRate: 10,        
    });

    anims.create({
        key: 'archer-attack-up',
        frames:[
            {
                key: 'archer',
                frame: 'frame-7-0.png',
            },
            {
                key: 'archer',
                frame: 'frame-7-1.png',
            },
            {
                key: 'archer',
                frame: 'frame-7-2.png',
            },
            {
                key: 'archer',
                frame: 'frame-7-3.png',
            }],
        repeat: -1,
        frameRate: 10,        
    });

    anims.create({
        key: 'archer-hit-down',
        frames:[
            {
                key: 'archer',
                frame: 'frame-8-0.png',
            },
            {
                key: 'archer',
                frame: 'frame-8-1.png',

            },
            {
                key: 'archer',
                frame: 'frame-8-2.png',
            },
            {
                key: 'archer',
                frame: 'frame-8-1.png',
            }],
        repeat: 1,
        frameRate: 15,        
    });   


    anims.create({
        key: 'archer-hit-right',
        frames:[
            {
                key: 'archer',
                frame: 'frame-9-0.png',
            },
            {
                key: 'archer',
                frame: 'frame-9-1.png',
            },
            {
                key: 'archer',
                frame: 'frame-9-2.png',
            },
            {
                key: 'archer',
                frame: 'frame-9-1.png',
            }],
        repeat: 1,
        frameRate: 15,        
    });

    anims.create({
        key: 'archer-hit-left',
        frames:[
            {
                key: 'archer_flipped',
                frame: 'frame-9-0.png',
            },
            {
                key: 'archer_flipped',
                frame: 'frame-9-1.png',
            },
            {
                key: 'archer_flipped',
                frame: 'frame-9-2.png',
            },
            {
                key: 'archer_flipped',
                frame: 'frame-9-1.png',
            }],
        repeat: 1,
        frameRate: 15,        
    });

    anims.create({
        key: 'archer-hit-up',
        frames:[
            {
                key: 'archer',
                frame: 'frame-10-0.png',
            },
            {
                key: 'archer',
                frame: 'frame-10-1.png',

            },
            {
                key: 'archer',
                frame: 'frame-10-2.png',
            },
            {
                key: 'archer',
                frame: 'frame-10-1.png',
            }],
        repeat: 1,
        frameRate: 15,        
    });
}

const createOrcAnims = (anims: Phaser.Animations.AnimationManager) =>
{
    anims.create({
        key: 'orc-idle',
        frames: [
            {
                key: 'orc',
                frame: 'frame-0-0.png',
            },
            {
                key: 'orc',
                frame: 'frame-0-1.png',
               
            },
            {
                key: 'orc',
                frame: 'frame-0-2.png',
            },
            {
                key: 'orc',
                frame: 'frame-0-1.png',
            }],
        repeat: -1,
        frameRate: 10,
    });

    anims.create({
        key: 'orc-run-down',
        frames: [
            {
                key: 'orc',
                frame: 'frame-2-0.png',
            },
            {
                key: 'orc',
                frame: 'frame-2-1.png',
               
            },
            {
                key: 'orc',
                frame: 'frame-2-2.png',
            },
            {
                key: 'orc',
                frame: 'frame-2-3.png',
            }],
        repeat: -1,
        frameRate: 10,
    });

    anims.create({
        key: 'orc-run-right',
        frames: [
            {
                key: 'orc',
                frame: 'frame-3-0.png',
            },
            {
                key: 'orc',
                frame: 'frame-3-1.png',
               
            },
            {
                key: 'orc',
                frame: 'frame-3-2.png',
            },
            {
                key: 'orc',
                frame: 'frame-3-3.png',
            }],
        repeat: -1,
        frameRate: 10,
    });

    anims.create({
        key: 'orc-run-left',
        frames: [
            {
                key: 'orc_flipped',
                frame: 'frame-3-0.png',
            },
            {
                key: 'orc_flipped',
                frame: 'frame-3-1.png',
               
            },
            {
                key: 'orc_flipped',
                frame: 'frame-3-2.png',
            },
            {
                key: 'orc_flipped',
                frame: 'frame-3-3.png',
            }],
        repeat: -1,
        frameRate: 10,
    });

    anims.create({
        key: 'orc-run-up',
        frames: [
            {
                key: 'orc',
                frame: 'frame-4-0.png',
            },
            {
                key: 'orc',
                frame: 'frame-4-1.png',
               
            },
            {
                key: 'orc',
                frame: 'frame-4-2.png',
            },
            {
                key: 'orc',
                frame: 'frame-4-3.png',
            }],
        repeat: -1,
        frameRate: 10,
    });

    anims.create({
        key: 'orc-attack-down',
        frames:[
            {
                key: 'orc',
                frame: 'frame-5-0.png',
            },
            {
                key: 'orc',
                frame: 'frame-5-1.png',
            },
            {
                key: 'orc',
                frame: 'frame-5-2.png',
            },
            {
                key: 'orc',
                frame: 'frame-5-3.png',
            }],
        repeat: -1,
        frameRate: 10,        
    });

    anims.create({
        key: 'orc-attack-right',
        frames:[
            {
                key: 'orc',
                frame: 'frame-6-0.png',
            },
            {
                key: 'orc',
                frame: 'frame-6-1.png',
            },
            {
                key: 'orc',
                frame: 'frame-6-2.png',
            },
            {
                key: 'orc',
                frame: 'frame-6-3.png',
            }],
        repeat: -1,
        frameRate: 10,        
    });

    anims.create({
        key: 'orc-attack-left',
        frames:[
            {
                key: 'orc_flipped',
                frame: 'frame-6-3.png',
            },
            {
                key: 'orc_flipped',
                frame: 'frame-6-2.png',
            },
            {
                key: 'orc_flipped',
                frame: 'frame-6-1.png',
            },
            {
                key: 'orc_flipped',
                frame: 'frame-6-0.png',
            }],
        repeat: -1,
        frameRate: 10,        
    });

    anims.create({
        key: 'orc-attack-up',
        frames:[
            {
                key: 'orc',
                frame: 'frame-7-0.png',
            },
            {
                key: 'orc',
                frame: 'frame-7-1.png',
            },
            {
                key: 'orc',
                frame: 'frame-7-2.png',
            },
            {
                key: 'orc',
                frame: 'frame-7-3.png',
            }],
        repeat: -1,
        frameRate: 10,        
    });

    anims.create({
        key: 'orc-hit-down',
        frames:[
            {
                key: 'orc',
                frame: 'frame-8-0.png',
            },
            {
                key: 'orc',
                frame: 'frame-8-1.png',

            },
            {
                key: 'orc',
                frame: 'frame-8-2.png',
            },
            {
                key: 'orc',
                frame: 'frame-8-1.png',
            }],
        repeat: 1,
        frameRate: 15,        
    });   


    anims.create({
        key: 'orc-hit-right',
        frames:[
            {
                key: 'orc',
                frame: 'frame-9-0.png',
            },
            {
                key: 'orc',
                frame: 'frame-9-1.png',
            },
            {
                key: 'orc',
                frame: 'frame-9-2.png',
            },
            {
                key: 'orc',
                frame: 'frame-9-1.png',
            }],
        repeat: 1,
        frameRate: 15,        
    });

    anims.create({
        key: 'orc-hit-left',
        frames:[
            {
                key: 'orc_flipped',
                frame: 'frame-9-0.png',
            },
            {
                key: 'orc_flipped',
                frame: 'frame-9-1.png',
            },
            {
                key: 'orc_flipped',
                frame: 'frame-9-2.png',
            },
            {
                key: 'orc_flipped',
                frame: 'frame-9-1.png',
            }],
        repeat: 1,
        frameRate: 15,        
    });

    anims.create({
        key: 'orc-hit-up',
        frames:[
            {
                key: 'orc',
                frame: 'frame-10-0.png',
            },
            {
                key: 'orc',
                frame: 'frame-10-1.png',

            },
            {
                key: 'orc',
                frame: 'frame-10-2.png',
            },
            {
                key: 'orc',
                frame: 'frame-10-1.png',
            }],
        repeat: 1,
        frameRate: 15,        
    });
}

const createTrollAnims = (anims: Phaser.Animations.AnimationManager) =>
{
    anims.create({
        key: 'troll-idle',
        frames: [
            {
                key: 'troll',
                frame: 'frame-0-0.png',
            },
            {
                key: 'troll',
                frame: 'frame-0-1.png',
               
            },
            {
                key: 'troll',
                frame: 'frame-0-2.png',
            },
            {
                key: 'troll',
                frame: 'frame-0-1.png',
            }],
        repeat: -1,
        frameRate: 10,
    });

    anims.create({
        key: 'troll-run-down',
        frames: [
            {
                key: 'troll',
                frame: 'frame-2-0.png',
            },
            {
                key: 'troll',
                frame: 'frame-2-1.png',
               
            },
            {
                key: 'troll',
                frame: 'frame-2-2.png',
            },
            {
                key: 'troll',
                frame: 'frame-2-3.png',
            }],
        repeat: -1,
        frameRate: 10,
    });

    anims.create({
        key: 'troll-run-right',
        frames: [
            {
                key: 'troll',
                frame: 'frame-3-0.png',
            },
            {
                key: 'troll',
                frame: 'frame-3-1.png',
               
            },
            {
                key: 'troll',
                frame: 'frame-3-2.png',
            },
            {
                key: 'troll',
                frame: 'frame-3-3.png',
            }],
        repeat: -1,
        frameRate: 10,
    });

    anims.create({
        key: 'troll-run-left',
        frames: [
            {
                key: 'troll_flipped',
                frame: 'frame-3-0.png',
            },
            {
                key: 'troll_flipped',
                frame: 'frame-3-1.png',
               
            },
            {
                key: 'troll_flipped',
                frame: 'frame-3-2.png',
            },
            {
                key: 'troll_flipped',
                frame: 'frame-3-3.png',
            }],
        repeat: -1,
        frameRate: 10,
    });

    anims.create({
        key: 'troll-run-up',
        frames: [
            {
                key: 'troll',
                frame: 'frame-4-0.png',
            },
            {
                key: 'troll',
                frame: 'frame-4-1.png',
               
            },
            {
                key: 'troll',
                frame: 'frame-4-2.png',
            },
            {
                key: 'troll',
                frame: 'frame-4-3.png',
            }],
        repeat: -1,
        frameRate: 10,
    });

    anims.create({
        key: 'troll-attack-down',
        frames:[
            {
                key: 'troll',
                frame: 'frame-5-0.png',
            },
            {
                key: 'troll',
                frame: 'frame-5-1.png',
            },
            {
                key: 'troll',
                frame: 'frame-5-2.png',
            },
            {
                key: 'troll',
                frame: 'frame-5-3.png',
            }],
        repeat: -1,
        frameRate: 10,        
    });

    anims.create({
        key: 'troll-attack-right',
        frames:[
            {
                key: 'troll',
                frame: 'frame-6-0.png',
            },
            {
                key: 'troll',
                frame: 'frame-6-1.png',
            },
            {
                key: 'troll',
                frame: 'frame-6-2.png',
            },
            {
                key: 'troll',
                frame: 'frame-6-3.png',
            }],
        repeat: -1,
        frameRate: 10,        
    });

    anims.create({
        key: 'troll-attack-left',
        frames:[
            {
                key: 'troll_flipped',
                frame: 'frame-6-3.png',
            },
            {
                key: 'troll_flipped',
                frame: 'frame-6-2.png',
            },
            {
                key: 'troll_flipped',
                frame: 'frame-6-1.png',
            },
            {
                key: 'troll_flipped',
                frame: 'frame-6-0.png',
            }],
        repeat: -1,
        frameRate: 10,        
    });

    anims.create({
        key: 'troll-attack-up',
        frames:[
            {
                key: 'troll',
                frame: 'frame-7-0.png',
            },
            {
                key: 'troll',
                frame: 'frame-7-1.png',
            },
            {
                key: 'troll',
                frame: 'frame-7-2.png',
            },
            {
                key: 'troll',
                frame: 'frame-7-3.png',
            }],
        repeat: -1,
        frameRate: 10,        
    });

    anims.create({
        key: 'troll-hit-down',
        frames:[
            {
                key: 'troll',
                frame: 'frame-8-0.png',
            },
            {
                key: 'troll',
                frame: 'frame-8-1.png',

            },
            {
                key: 'troll',
                frame: 'frame-8-2.png',
            },
            {
                key: 'troll',
                frame: 'frame-8-1.png',
            }],
        repeat: 1,
        frameRate: 15,        
    });   


    anims.create({
        key: 'troll-hit-right',
        frames:[
            {
                key: 'troll',
                frame: 'frame-9-0.png',
            },
            {
                key: 'troll',
                frame: 'frame-9-1.png',
            },
            {
                key: 'troll',
                frame: 'frame-9-2.png',
            },
            {
                key: 'troll',
                frame: 'frame-9-1.png',
            }],
        repeat: 1,
        frameRate: 15,        
    });

    anims.create({
        key: 'troll-hit-left',
        frames:[
            {
                key: 'troll_flipped',
                frame: 'frame-9-0.png',
            },
            {
                key: 'troll_flipped',
                frame: 'frame-9-1.png',
            },
            {
                key: 'troll_flipped',
                frame: 'frame-9-2.png',
            },
            {
                key: 'troll_flipped',
                frame: 'frame-9-1.png',
            }],
        repeat: 1,
        frameRate: 15,        
    });

    anims.create({
        key: 'troll-hit-up',
        frames:[
            {
                key: 'troll',
                frame: 'frame-10-0.png',
            },
            {
                key: 'troll',
                frame: 'frame-10-1.png',

            },
            {
                key: 'troll',
                frame: 'frame-10-2.png',
            },
            {
                key: 'troll',
                frame: 'frame-10-1.png',
            }],
        repeat: 1,
        frameRate: 15,        
    });
}

export {createHeroAnims, createSlimeAnims, createRatAnims, createBatAnims, createSpiderAnims, createGoblinAnims, createArcherAnims, createOrcAnims, createTrollAnims};
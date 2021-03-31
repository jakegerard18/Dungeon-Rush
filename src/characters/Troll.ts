import Phaser from 'phaser'

enum Current_State
{
    UP,
    DOWN,
    LEFT,
    RIGHT,
    ATTACKING_UP,
    ATTACKING_DOWN,
    ATTACKING_LEFT,
    ATTACKING_RIGHT,
    DAMAGED
}

const randomDirection = (exclude: Current_State) =>
{
    let newDirection = Phaser.Math.Between(0, 7);
    return newDirection;
}

export default class Troll extends Phaser.Physics.Arcade.Sprite
{
    private currentState = Current_State.LEFT;
    private moveEvent: Phaser.Time.TimerEvent;
    private health = 2;
    private vel = 100;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number)
    {
        super(scene, x, y, texture, frame);
        this.anims.play('troll-run-left', true);
        this.scene.physics.world.enable(this);
        this.body.setSize(16, 16);
        this.body.setOffset(15, 15);
        this.moveEvent = scene.time.addEvent({
            delay: 1000,
            callback: () =>
            {
                this.currentState = randomDirection(this.currentState);
            },
            loop: true
        }) 
        
    }

    private performDamage = (animKey: string) =>
    {
        this.health--;
        if(this.health === 0)
        {
            this.anims.play(animKey, true);
            this.setTint(0xff0000);
            this.moveEvent.reset({
                delay: 500,
                callback: () =>
                {
                    this.disableBody(true, true);
                },
            })
            
        }
        else
        {
            this.anims.play(animKey, true);
            this.setTint(0xff0000);
            this.moveEvent.reset({
                delay: 500,
                callback: () =>
                {   
                    this.clearTint()
                    this.currentState = randomDirection(this.currentState);
                },
                loop: true
            })
        }
    }

    public handleDamage = (dir: Phaser.Math.Vector2) =>
    {   
        switch(this.currentState)
        {
            case Current_State.UP:
                {
                    this.currentState = Current_State.DAMAGED;
                    this.setVelocity(dir.x, dir.y);
                    this.performDamage('troll-hit-up');
                    break;
                }

            case Current_State.DOWN:
                {
                    this.currentState = Current_State.DAMAGED;
                    this.setVelocity(dir.x, dir.y);
                    this.performDamage('troll-hit-down');
                    break;
                }

            case Current_State.LEFT:
                {
                    this.currentState = Current_State.DAMAGED;
                    this.setVelocity(dir.x, dir.y);
                    this.performDamage('troll-hit-left');
                    break;
                }

            case Current_State.RIGHT:
                {
                    this.currentState = Current_State.DAMAGED;
                    this.setVelocity(dir.x, dir.y);
                    this.performDamage('troll-hit-right');
                    break;
                }
            
            case Current_State.ATTACKING_UP:
                {
                    this.currentState = Current_State.DAMAGED;
                    this.setVelocity(dir.x, dir.y);
                    this.performDamage('troll-hit-up')
                    break;
                }

            case Current_State.ATTACKING_DOWN:
                {
                    this.currentState = Current_State.DAMAGED;
                    this.setVelocity(dir.x, dir.y);
                    this.performDamage('troll-hit-down')
                    break;
                }

            case Current_State.ATTACKING_LEFT:
                {
                    this.currentState = Current_State.DAMAGED;
                    this.setVelocity(dir.x, dir.y);
                    this.performDamage('troll-hit-left')
                    break;
                }

            case Current_State.ATTACKING_RIGHT:
                {
                    this.currentState = Current_State.DAMAGED;
                    this.setVelocity(dir.x, dir.y);
                    this.performDamage('troll-hit-right')
                    break;
                }
        }
    }

    destroy(fromScene?: boolean)
    {
        this.moveEvent.destroy();
        super.destroy();
    }

    preUpdate(t:number, dt:number)
    {
        super.preUpdate(t, dt);

        switch(this.currentState){
            case Current_State.UP:
                this.setVelocity(0, -this.vel);
                this.anims.play('troll-run-up', true);
                break;

            case Current_State.DOWN:
                this.setVelocity(0, this.vel);
                this.anims.play('troll-run-down', true);
                break;

            case Current_State.LEFT:
                this.setVelocity(-this.vel, 0);
                this.anims.play('troll-run-left', true);
                break;

            case Current_State.RIGHT:
                this.setVelocity(this.vel, 0);
                this.anims.play('troll-run-right', true);
                break;

            case Current_State.ATTACKING_UP:
                this.setVelocity(0, 0);
                this.anims.play('troll-attack-up', true);
                break;

            case Current_State.ATTACKING_DOWN:
                this.setVelocity(0, 0);
                this.anims.play('troll-attack-down', true);
                break;

            case Current_State.ATTACKING_LEFT:
                this.setVelocity(0, 0);
                this.anims.play('troll-attack-left', true);
                break;

            case Current_State.ATTACKING_RIGHT:
                this.setVelocity(0, 0);
                this.anims.play('troll-attack-right', true);
                break;
        }
    }
}
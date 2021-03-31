import Phaser, { Physics } from 'phaser'; 
import Controls from '../utils/Controls';
import {game} from '../main'


enum Current_State
{
    UP,
    DOWN,
    LEFT,
    RIGHT,
    IDLE,
    DAMAGED,
}

export default class Hero extends Phaser.Physics.Arcade.Sprite
{
    private vel = 200;
    private elapsed = 0;
    private damaged = false;
    private attacking = false;
    private health = 5000;
    private currentState;
    private damagedEvent: Phaser.Time.TimerEvent;
    private swordBody: Phaser.Physics.Arcade.Sprite;
    
    
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number)
    {
        super(scene, x, y, texture, frame);
        this.scene.physics.world.enable(this);
        this.body.setSize(16, 16);
        this.body.setOffset(15, 15);
        this.currentState = Current_State.IDLE;

        this.swordBody = new Physics.Arcade.Sprite(scene, this.x, this.y, null);
        this.scene.physics.world.enable(this.swordBody)
        this.swordBody.setImmovable(true);
        this.swordBody.setSize(16, 12);    
    }

    public getSwordBody(scene: Phaser.Scene)
    {
        return this.swordBody;
    }

    public handleDamage = (dir: Phaser.Math.Vector2) =>
    {   
        if(this.currentState != Current_State.DAMAGED)
        {
            this.currentState = Current_State.DAMAGED;
            this.health--;
            if(this.health === 0)
            {
                this.disableBody(true, true);
            }
            else
            {
                this.setVelocity(dir.x, dir.y);
                this.swordBody.setVelocity(dir.x, dir.y);
                this.setTint(0xff0000);
                this.damagedEvent = this.scene.time.addEvent({
                    delay: 250,
                    callback: () =>
                    {   
                        this.clearTint();
                        this.currentState = Current_State.IDLE;
                    },
                })
            }
        }

    }

    public setAttacking(isAttacking: boolean)
    {
        if(isAttacking)
        {
            this.scene.physics.world.enable(this.swordBody);
            this.swordBody.x = this.x;
            this.swordBody.y = this.y;
        }

        else
        {
            this.scene.physics.world.disable(this.swordBody);
        }
    }

    public handleControls(cursors: Controls)
    {
        if(cursors.DOWN.isDown && !(cursors.KEY5.isDown || cursors.KEY6.isDown || cursors.KEY7.isDown || cursors.KEY8.isDown || this.currentState === Current_State.DAMAGED))
        {   
            this.currentState = Current_State.DOWN;
            this.setAttacking(false);
            this.body.setSize(16, 16);
            this.body.setOffset(15, 15);
            this.anims.play('hero-run-down', true);
            this.setVelocity(0, this.vel);

        }

        else if(cursors.UP.isDown && !(cursors.KEY5.isDown || cursors.KEY6.isDown || cursors.KEY7.isDown || cursors.KEY8.isDown || this.currentState === Current_State.DAMAGED))
        {
            this.currentState = Current_State.UP;
            this.setAttacking(false);
            this.body.setSize(16, 16);
            this.body.setOffset(15, 15);
            this.anims.play('hero-run-up', true);  
            this.setVelocity(0, -this.vel);
        }

        else if(cursors.RIGHT.isDown && !(cursors.KEY5.isDown || cursors.KEY6.isDown || cursors.KEY7.isDown || cursors.KEY8.isDown || this.currentState === Current_State.DAMAGED))
        {
            this.currentState = Current_State.RIGHT;
            this.setAttacking(false);
            this.body.setSize(16, 16);
            this.body.setOffset(15, 15);
            this.anims.play('hero-run-right', true);
            this.setVelocity(this.vel, 0); 
        }

        else if(cursors.LEFT.isDown && !(cursors.KEY5.isDown || cursors.KEY6.isDown || cursors.KEY7.isDown || cursors.KEY8.isDown || this.currentState === Current_State.DAMAGED))
        {
            this.currentState = Current_State.LEFT;
            this.setAttacking(false);
            this.body.setSize(16, 16);
            this.body.setOffset(15, 15);
            this.anims.play('hero-run-left', true);
            this.setVelocity(-this.vel, 0); 
        }

        else if(cursors.KEY5.isDown && this.currentState != Current_State.DAMAGED)
        {   
            this.currentState = Current_State.UP;
            this.setAttacking(true);            
            this.setVelocity(0, 0);
            this.swordBody.setOffset(7, -4);
            this.swordBody.setVelocity(0, 0);
            this.anims.play('hero-attack-up', true);  
        }

        else if(cursors.KEY6.isDown && this.currentState != Current_State.DAMAGED)
        {   
            this.currentState = Current_State.DOWN;
            this.setAttacking(true);
            this.setVelocity(0, 0);
            this.swordBody.setOffset(7, 22);
            this.swordBody.setVelocity(0, 0);
            this.anims.play('hero-attack-down', true);
        }

        else if(cursors.KEY7.isDown && this.currentState != Current_State.DAMAGED)
        {   
            this.currentState = Current_State.RIGHT;
            this.setAttacking(true);
            this.setVelocity(0, 0);
            this.swordBody.setOffset(20, 7);
            this.swordBody.setVelocity(0, 0);
            this.anims.play('hero-attack-right', true);
        }

        else if(cursors.KEY8.isDown && this.currentState != Current_State.DAMAGED)
        {   
            this.currentState = Current_State.LEFT;
            this.setAttacking(true);
            this.setVelocity(0, 0);
            this.swordBody.setOffset(-6, 7);
            this.swordBody.setVelocity(0, 0);
            this.anims.play('hero-attack-left', true);
        }

        else if(this.currentState != Current_State.DAMAGED)
        {
            this.currentState = Current_State.IDLE;
            this.body.setSize(16, 16);
            this.body.setOffset(15, 15);
            this.setVelocity(0, 0);
            this.setAttacking(false);
            this.anims.play('hero-idle', true)           
        }

        else                                             
        {
            this.setAttacking(false);
        }
    }

    update(cursors: Controls)
    {
       this.handleControls(cursors)
    }
}
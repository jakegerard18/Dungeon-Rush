import Phaser from 'phaser'
import Controls from './Controls'

const controlCamera = (scene: Phaser.Scene, controls: Controls) =>
{

    if(controls.KEY5.isDown)
    {
        scene.cameras.main.scrollY -= 10;
    }

    else if(controls.KEY6.isDown)
    {
        scene.cameras.main.scrollY += 10;
    }

    else if(controls.KEY7.isDown)
    {
        scene.cameras.main.scrollX += 10;
    }

    else if(controls.KEY8.isDown)
    {
        scene.cameras.main.scrollX -= 10;
    }

}

export {controlCamera}
var cellw = 256;
var cellh = 256;
var W = 1600;
var H = 1000;
var startText;
var started = false;
var images = []  ;
var floorplan;
var floorplanCount;
var cellQueue;
var endrooms;
var maxrooms = 10;
var minrooms = 7;

var config = {
    type: Phaser.AUTO,
    width: W,
    height: H,
    parent: 'isaac_gen',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    if(window.baseUrl)
        this.load.setBaseURL(baseUrl);

    this.load.image('NSEW', 'assets/dungeons/nsew_dungeon.png');
    this.load.image('NSE', 'assets/dungeons/nes_dungeon.png');
    this.load.image('NSW', 'assets/dungeons/nws_dungeon.png');
    this.load.image('NEW', 'assets/dungeons/new_dungeon.png');
    this.load.image('SEW', 'assets/dungeons/sew_dungeon.png');
    this.load.image('NE', 'assets/dungeons/ne_dungeon.png');
    this.load.image('NW', 'assets/dungeons/nw_dungeon.png');
    this.load.image('NS', 'assets/dungeons/ns_dungeon.png');
    this.load.image('SE', 'assets/dungeons/se_dungeon.png');
    this.load.image('SW', 'assets/dungeons/sw_dungeon.png');
    this.load.image('EW', 'assets/dungeons/ew_dungeon.png');
    this.load.image('N', 'assets/dungeons/n_dungeon.png');
    this.load.image('S', 'assets/dungeons/s_dungeon.png');
    this.load.image('E', 'assets/dungeons/e_dungeon.png');
    this.load.image('W', 'assets/dungeons/w_dungeon.png');
}

function create ()
{
    started = true;
    placedSpecial = false;
    if(startText) {
        startText.destroy();
        startText = null;
    }
    images.forEach(image => {
        image.destroy();
    });
    images = [];
    floorplan = [];
    for(var i =0; i<=100; i++) floorplan[i] = 0;
    floorplanCount = 0;
    cellQueue = [];
    endrooms = [];
    visit(this, 45);
}

function update()
{
    if(started){
        if(cellQueue.length > 0)
        {
            var i = cellQueue.shift();
            var x = i % 10;
            var created = false;
            if(x > 1) created = created | visit(this, i - 1);
            if(x < 9) created = created | visit(this, i + 1);
            if(i > 20) created = created | visit(this, i - 10);
            if(i < 70) created = created | visit(this, i + 10);
            if(!created) {
                endrooms.push(i);
            }
        }
        apply_dungeon_maps(this, floorplan)
    }
}

function visit(scene, i)
{
    if(floorplan[i])
        return false;

    var neighbours = ncount(i);

    if (neighbours > 1)
        return false;

    if (floorplanCount >= maxrooms)
        return false;

    if(Math.random() < 0.5 && i != 45)
        return false;

    cellQueue.push(i);
    floorplan[i] = 1;
    floorplanCount += 1;
    return true;
}

function ncount(i)
{
    return floorplan[i-10] + floorplan[i-1] + floorplan[i+1] + floorplan[i+10];
}

function apply_dungeon_maps(scene, floorplan) {
    for (var i = 0; i < floorplan.length; i++)
    {
        if (floorplan[i] == 1) {
            var map = check_neighbors(i)
            img(scene, i, map)
        }
    }
}

function check_neighbors(cell) {
    var neighbors = []
    if (floorplan[cell-10])
        neighbors += 'N';
    if (floorplan[cell+10])
        neighbors += 'S';
    if (floorplan[cell+1])
        neighbors += 'E';
    if (floorplan[cell-1])
        neighbors += 'W';
    
    return neighbors.toString()
}

function img(scene, i, name)
{
    var x = i % 10;
    var y = (i - x) / 10;
    var img = scene.add.image(W/2 + cellw * (x - 5), H/2 + cellh * (y - 4), name);
    images.push(img);
    return img;
}

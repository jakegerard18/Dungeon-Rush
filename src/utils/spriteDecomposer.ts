// This is a simple utility to produce a .json file from a sprite atlas
// that seperates the atlas into a frame by frame representation.

interface frameHash {
  frame:{
    x: number;
    y: number;
    w: number;
    h: number;
  };
  rotated: boolean;
  trimmed: boolean;
  spriteSourceSize: {
    x: number;
    y: number;
    w: number;
    h: number;
  };
  sourceSize:{
    w: number;
    h: number;
  };
}

interface outerHash {
  frames: {[name: string]: frameHash}
  meta: {
    app: string;
    version: string;
    image: string;
    format: string;
    size: {w: number, h: number};
    scale: string;
    smartupdate?: string;
  };

}

const spriteDecomposer = (img: string, width: number, height: number, depth: number, rows: number, cols: number) => {

  let x = 1;
  let y = 1;
  let w = width;
  let h = height;
  let image = img;
  let xInc = width/cols;
  let yInc = height/rows;
  let framesArray = []


  const hash: outerHash = {
    frames: {},
    meta: {
      app: "Sprite-Decomposer",
      version: "1.0",
      image: image,
      format: "RGBA8888",
      size: {w: width, h: height},
      scale: "1"
    }
  };

  for(let i = 0; i < rows; i++){
    for(let k = 0; k < cols; k++){
      let frameName = "frame-" + i + "-" + k + ".png"
      hash.frames[frameName] = {
        frame: {x, y, h: depth, w: depth},
        rotated: false,
        trimmed: false,
        spriteSourceSize: {x, y, w: width, h: height},
        sourceSize: {
          w: width,
          h: height,
        },
      };
      x += xInc;
    }
    x = 1;
    y += yInc;
  }


  return JSON.stringify(hash)

}

export {spriteDecomposer}

import { k } from "../kaboom.js";
import { initializePlayer } from "../player.js";
import { GameMap } from "./index.js";

export var mapObj = null;

export const mapArray = {
  map: [
    "############################################################",
    "############################################################",
    "#############################()#############################",
    "____________________________________________________________",
    "____________________________________________________________",
    "************************************************************",
    "************************************************************",
    "************************************************************",
    "~~~*~~~~~*~~~~~*~~~~~*~~~~~*~~~~~*~~~~~*~~~~~*~~~~~*~~~~~*~~",
    "************************************************************",
    "************************************************************",
    "############################################################",
    "############################################################",
    "############################################################",
  ],
  objs: [
    {
      pos: [[8, 1], [11, 1]], comps: [
        k.area(),
        k.solid(),
      ],
    },
    {
      pos: [[0, 4]], comps: [
        k.sprite("car_red", { frame: 0 }),
        k.area(),
        k.solid(),
      ],
    },
    {
      pos: [[0, 5]], comps: [
        k.sprite("car_red", { frame: 1 }),
        k.area(),
        k.solid(),
      ],
    },
  ],
  legend: {
    width: 16,
    height: 16,
    "#": (ctx) => ([
      k.sprite("wall_stone"),
      k.area(),
      k.solid(),
    ]),
    "(": (ctx) => ([
      k.sprite( "door_left"),
      k.area(),
      k.solid(),
    ]),
    ")": (ctx) => ([
      k.sprite("door_right"),
      k.area(),
      k.solid(),
    ]),
    "_": (ctx) => ([
      k.sprite("sidewalk"),
      k.layer("floor"),
      k.area(),
    ]),
    "B": (ctx) => ([
      k.sprite("bouncer"),
      k.area(),
      k.solid(),
    ]),
    "*": (ctx) => ([
      k.sprite("pavement"),
      k.layer("floor"),
      k.area(),
    ]),
    "!": (ctx) => ([
      k.sprite("pavement_vert"),
      k.layer("floor"),
      k.area(),
    ]),
    "~": (ctx) => ([
      k.sprite("pavement_horiz"),
      k.layer("floor"),
      k.area(),
    ]),
    "j": (ctx) => ([
      k.sprite("pavement_junction_up"),
      k.layer("floor"),
      k.area(),
    ])
  },
  spawn: [ 27, 6 ],
};

export const loadLevel1 = () => k.scene("level1", async () => {
  mapObj = new GameMap(mapArray);

  await initializePlayer("player_bad", mapObj);

  k.camScale(4);
});

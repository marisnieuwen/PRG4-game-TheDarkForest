import * as PIXI from "pixi.js";
import { Unicorn } from "./unicorn";
import { Player } from "./player";

import playerImage from "./images/harry.png";
import unicornImage from "./images/unicornsad.png";
import savedImage from "./images/unicornsaved.png";
import bgImage from "./images/map.png";

export class Game {
  public pixi: PIXI.Application;
  private loader: PIXI.Loader;
  private player: Player;
  private background: PIXI.Sprite;
  private unicorns: Unicorn[] = [];

  constructor() {
    this.pixi = new PIXI.Application({ width: 700, height: 500 });
    document.body.appendChild(this.pixi.view);

    this.loader = new PIXI.Loader();
    this.loader
      .add("playerTexture", playerImage)
      .add("unicornTexture", unicornImage)
      .add("savedTexture", savedImage)
      .add("backgroundTexture", bgImage);

    this.loader.load(() => this.doneLoading());
  }

  public doneLoading() {
    this.background = new PIXI.Sprite(
      this.loader.resources["backgroundTexture"].texture!
    );
    this.pixi.stage.addChild(this.background);

    for (let i = 0; i < 10; i++) {
      let unicorn = new Unicorn(
        this,
        this.loader.resources["unicornTexture"].texture!,
        this.loader.resources["savedTexture"].texture!
      );
      this.pixi.stage.addChild(unicorn);
      this.unicorns.push(unicorn);
    }

    this.player = new Player(
      this,
      this.loader.resources["playerTexture"].texture!
    );
    this.pixi.stage.addChild(this.player);

    this.pixi.stage.x = this.pixi.screen.width / 2;
    this.pixi.stage.y = this.pixi.screen.height / 2;

    this.pixi.ticker.add((delta) => this.update(delta));
  }

  private update(delta: number) {
    this.player.update(delta);

    for (let unicorn of this.unicorns) {
      unicorn.update(delta);

      if (this.collision(unicorn, this.player)) {
        unicorn.saved();
      }
    }
  }

  private collision(sprite1: PIXI.Sprite, sprite2: PIXI.Sprite) {
    const bounds1 = sprite1.getBounds();
    const bounds2 = sprite2.getBounds();

    return (
      bounds1.x < bounds2.x + bounds2.width &&
      bounds1.x + bounds1.width > bounds2.x &&
      bounds1.y < bounds2.y + bounds2.height &&
      bounds1.y + bounds1.height > bounds2.y
    );
  }
}

import * as PIXI from "pixi.js";
import { Game } from "./game";

export class Unicorn extends PIXI.Sprite {
  public game: Game;
  private alive: boolean = true;
  private savedTexture: PIXI.Texture;

  constructor(game: Game, texture: PIXI.Texture, savedTexture: PIXI.Texture) {
    super(texture);
    this.savedTexture = savedTexture;
    this.game = game;
    this.anchor.set(0.5);
    this.x = Math.random() * 1800; // map size
    this.y = Math.random() * 1300; // map size
  }

  update(delta: number) {
    if (this.alive) {
      // Bewegende unicorns
      // this.x += Math.random() * 4 - 1;
      // this.y += Math.random() * 4 - 1;
    }
  }

  saved() {
    this.alive = false;
    this.texture = this.savedTexture;
  }
}

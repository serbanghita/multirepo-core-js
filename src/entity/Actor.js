import Entity from "./Entity";
import Utils from "../Utils";

export default class Actor extends Entity {
    constructor(id, x, y, name) {
        super(id, x, y);
        this.name = name;
    }

    getName() {
        return this.name;
    }

    spawn() {
        Utils.getRandomInt(0, 10);
        return true;
    }
}
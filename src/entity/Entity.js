export default class Entity {
    constructor(id, x, y) {
        this.id = id;
        this.x = x;
        this.y = y;
    }

    getPosition() {
        return {x: this.x, y: this.y};
    }

    spawn() {
        return true;
    }
}

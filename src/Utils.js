export default class Utils {
    static getRandomInt(max, min) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
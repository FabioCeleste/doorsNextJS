export default class DoorModel {
    #doorNumber: number
    #hasGift: boolean
    #selected: boolean
    #open: boolean

    constructor(doorNumber: number, hasGift = false, selected = false, open = false) {
        this.#doorNumber = doorNumber
        this.#hasGift = hasGift
        this.#selected = selected
        this.#open = open
    }

    get doorNumber() {
        return this.#doorNumber
    }
    get hasGift() {
        return this.#hasGift 
    }
    get selected() {
        return this.#selected
    }
    get open() {
        return this.#open
    }
    get closed() {
        return !this.open
    }

    changeSelected() {
        const selected = !this.selected;
        return new DoorModel(this.doorNumber, this.#hasGift, selected, this.open)
    }

    unselect() {
        const selected = false;
        return new DoorModel(this.doorNumber, this.#hasGift, selected, this.open)
    }

    opening() {
        const open = true;
        return new DoorModel(this.doorNumber, this.hasGift, this.selected, open)
    }
}
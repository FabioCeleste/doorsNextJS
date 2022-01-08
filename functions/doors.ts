import DoorModel from "../model/door";

export function createDoors(amount: number, doorHasGift: number): DoorModel[] {
    return  Array.from({length: amount}, (_, i) => {
        const numb = i + 1
        const hasGift = numb === doorHasGift
        return new DoorModel(numb, hasGift)
    })
}

export function attDoors(doors: DoorModel[], changedDoor: DoorModel): DoorModel[] {
    return doors.map(door => {
        const sameAsChanged = door.doorNumber === changedDoor.doorNumber

        if (sameAsChanged){
            return changedDoor
        } else {
            return changedDoor.open ? door : door.unselect()
        }
    })
} 
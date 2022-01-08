import styles from "../styles/Door.module.css";
import DoorModel from '../model/door'
import Gift from './Gift'

interface DoorProps {
    value: DoorModel
    onChange: (newDoor: DoorModel) => void
}

export default function Door(props: DoorProps) {
    const door = props.value;
    const isSelected = door.selected && !door.open ? styles.selected : ''

    function changeSelection(e) {
        props.onChange(door.changeSelected())
    }
    function open(e) {
        e.stopPropagation()
        props.onChange(door.opening())
    }

    function renderDoor() {
        return (

            <div className={styles.door}>
                <div className={styles.number}>{door.doorNumber}</div>
                <div className={styles.handle} onClick={open}></div>
            </div>


        )
    }

    return (
        <div className={styles.area} onClick={changeSelection}>
            <div className={`${styles.structure} ${isSelected}`}>
                {door.closed ?
                 renderDoor() : door.hasGift ? <Gift /> : false }
            </div>
                <div className={styles.floor}></div>
        </div>
    )
}
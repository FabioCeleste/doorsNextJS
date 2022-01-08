import { useEffect, useState } from "react";
import Door from "../../../components/Door";
import DoorModel from "../../../model/door";
import { attDoors, createDoors } from "../../../functions/doors";
import styles from '../../../styles/Game.module.css'
import Link from "next/link";
import { useRouter } from "next/router";

export default function Game() {
    const router = useRouter()

    const [doors, setDoors] = useState([])
    const [valid, setValid] = useState(false)

    useEffect(() => {
        const doors = +router.query.doors
        const hasGift = +router.query.hasGift
 
        const validDoors = doors >= 3 && doors <= 100
        const validGift = hasGift > 0 && hasGift <= doors

        setValid(validDoors && validGift)
        
    }, [valid])
    
    useEffect(() => {
        const doors = +router.query.doors
        const hasGift = +router.query.hasGift
        setDoors(createDoors(doors, hasGift))
    }, [router.query])

    function renderDoors() {
        return valid && doors.map(door => {
            return <Door key={door.doorNumber} value={door} onChange={
                newDoor => setDoors(attDoors(doors, newDoor))
            } />
        })
    }

    return (
        <div className={styles.game} >
            <div className={styles.doors}>
                {renderDoors()}
            </div>

            <div className={styles.button}>
                <Link href="/">
                    <button>Reiniciar</button>
                </Link>
            </div>
        </div>
    )
}
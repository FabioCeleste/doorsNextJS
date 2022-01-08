import { useEffect, useState } from "react";
import Door from "../../../components/Door";
import DoorModel from "../../../model/door";
import { attDoors, createDoors } from "../../../functions/doors";
import styles from '../../../styles/Game.module.css'
import Link from "next/link";
import { useRouter } from "next/router";

export default function Game() {
    const router = useRouter()
     
    const [p1, setP1] = useState(new DoorModel(1))
    const [doors, setDoors] = useState(createDoors(50, 2))

    useEffect(() => {
        const doors = +router.query.doors
        const hasGift = +router.query.hasGift
        setDoors(createDoors(doors, hasGift))

    }, [router.query])

    function renderDoors() {
        return doors.map(door => {
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
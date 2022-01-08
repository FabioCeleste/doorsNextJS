import styles from '../styles/Form.module.css'
import Card from "../components/Card";
import Link from 'next/link';
import InputNumber from '../components/InputNumber';
import { useState } from 'react';

export default function Form() {
  const [amountDoors, setAmountDoors] = useState(3)
  const [hasGift, setHasGift] = useState(1)
  
  
  return (
    <div className={styles.form}>
      <div>
        <Card bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <InputNumber value={amountDoors} onChange={newAmount => setAmountDoors(newAmount)} text='Qtde Portas?' />
        </Card>
      </div>
      <div>
        <Card>
          <InputNumber value={hasGift} onChange={newGift => setHasGift(newGift)} text='Com Presente?' />
        </Card>
        <Card bgcolor="#28a085">
          <Link href={`/game/${amountDoors}/${hasGift}`}>
            <h2 className={styles.start} >Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  )
}

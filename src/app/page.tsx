import { AiOutlinePlus } from "react-icons/ai";
import styles from "./page.module.css";
import CountdownTimer from '@/components/CountDown/CountDown';
const HomePage = () => {
  const eventDate = '2023-12-31T23:59:59';
  return (
    <main>
      <div className={styles.container}>

        <button className='glowing-btn'>
          <span className='glowing-txt'>N<span className='faulty-letter'>O</span>VATOS</span>
        </button>


        <div className={styles['bottom-image']}>
          <div className={`${styles['bottom-image']} ${styles['bottom-image1']}`}></div>
          <div className={`${styles['bottom-image']} ${styles['bottom-image2']}`}></div>

          <div className={styles.buttons}>
            <div className={styles.countdown}>
              <CountdownTimer targetDate={eventDate} />
            </div>
            <div className={styles.register}>
              <AiOutlinePlus />
              <h2>JOIN THE EVENT</h2>
            </div>
          </div>
        </div>
      </div >
      <div className={styles.more}></div>
    </main>
  )
}

export default HomePage
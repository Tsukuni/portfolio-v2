import Image from 'next/image';
import styles from '../../styles/Home.module.scss'
import { AiOutlineUser } from 'react-icons/ai';
import { GrPersonalComputer } from 'react-icons/gr';
import { SnsIconList } from '../components';

export default function Home() {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.imageBox}>
          <Image
            src="/icon.jpg"
            alt="icon"
            width={200}
            height={200}
          />
        </div>
        <div className={styles.head}>
          <AiOutlineUser className={styles.icon} />
          <span className={styles.iconText}>Kenta Tsukuni</span>

          <GrPersonalComputer className={styles.icon} />
          <span className={styles.iconText}>Engineer</span>
        </div>

        <div className={styles.description}>
          <div className={styles.row}>
            <div className={styles.cell}>
              2019.04 - now
            </div>
            <div className={styles.cell}>
              COUNTERWORKS, Inc.
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.cell}>
              2019.12 - 2020.09
            </div>
            <div className={styles.cell}>
              YOUTRUST, Inc.
              <span className={styles.badge}>sidejob</span>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.cell}>
              2019.10 - now
            </div>
            <div className={styles.cell}>
              and, Inc.
              <span className={styles.badge}>sidejob</span>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.cell}>
              2018.05 - 2020.01
            </div>
            <div className={styles.cell}>
              PIXTA, Inc.
              <span className={styles.badge}>sidejob</span>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.cell}>
              2015.04 - 2019.03
            </div>
            <div className={styles.cell}>
              Doshisha, Univ.
            </div>
          </div>
        </div>

        <div className={styles.skillBox}>
          <span className={styles.skillBadge}>Typescript</span>
          <span className={styles.skillBadge}>Javascript</span>
          <span className={styles.skillBadge}>PHP</span>
          <span className={styles.skillBadge}>Ruby</span>
          <span className={styles.skillBadge}>React</span>
          <span className={styles.skillBadge}>Next</span>
          <span className={styles.skillBadge}>Ruby On Rails</span>
          <span className={styles.skillBadge}>Laravel</span>
        </div>
      </div>
      <SnsIconList />
    </>
  )
}

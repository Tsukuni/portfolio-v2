import React from 'react';
import { AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';
import { RiFacebookCircleFill } from 'react-icons/ri';
import Link from 'next/link';
import styles from '../../styles/SnsIconList.module.scss';

export default function SnsIconList() {
  return (
    <div className={styles.container}>
      <Link href="https://github.com/Tsukuni">
        <a>
          <AiFillGithub className={styles.icon}/>
        </a>
      </Link>

      <Link href="https://twitter.com/tteooiyry">
        <a>
          <AiFillTwitterCircle className={styles.icon}/>
        </a>
      </Link>

      <Link href="https://www.facebook.com/tteooi.ryry">
        <a>
          <RiFacebookCircleFill className={styles.icon}/>
        </a>
      </Link>
    </div>
  );
};
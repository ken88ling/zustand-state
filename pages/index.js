import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import useStore from '../usestore';

export default function Home() {
  const { bears, increasePopulation } = useStore();
  return (
    <div className={styles.container}>
      {bears}
      <div onClick={increasePopulation}>Click me</div>
    </div>
  );
}

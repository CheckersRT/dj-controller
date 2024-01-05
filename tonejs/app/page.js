import Image from "next/image";
import styles from "./page.module.css";
import dynamic from "next/dynamic";

const PlayerOne = dynamic(() => import("../components/PlayerOne"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className={styles.grid_container}>
      <section className={`${styles.player} ${styles.grid_item}`}>
        <PlayerOne />
      </section>
      <section className={`${styles.mixer} ${styles.grid_item}`}>
        {/* <Mixer/> */}
      </section>
      <section className={`${styles.player} ${styles.grid_item}`}>
      <PlayerOne />
      </section>
    </main>
  );
}

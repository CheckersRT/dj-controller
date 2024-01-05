import Image from "next/image";
import styles from "./page.module.css";
import dynamic from "next/dynamic";

const PlayerOne = dynamic(() => import("../components/PlayerOne"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className={styles.main}>
      <PlayerOne/>
    </main>
  );
}

import Image from "next/image";
import styles from "./page.module.css";
import dynamic from "next/dynamic";

const Player = dynamic(() => import("../components/Player"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className={styles.main}>
      <Player/>
    </main>
  );
}

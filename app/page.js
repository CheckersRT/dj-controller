import styles from "./page.module.css";
import dynamic from "next/dynamic";

const Controller = dynamic(
  () => import("../components/Controller/Controller"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <main>
      <Controller />
    </main>
  );
}

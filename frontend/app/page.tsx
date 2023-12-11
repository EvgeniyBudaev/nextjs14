import styles from './page.module.css'
import {SimpleForm} from "@/app/simpleForm";

export default function Home() {
  return (
    <main className={styles.main}>
      <SimpleForm />
    </main>
  )
}

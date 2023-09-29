import styles from './page.module.css'
import Data from 'public/accommodation.json';

export default function Home() {
  const accommodations = Data.accommodations;

  return (
    <main className={styles.main}>
      <ul>
        {accommodations.map((acco)=> <li>{acco.name}</li>)}
      </ul>
    </main>
  )
}

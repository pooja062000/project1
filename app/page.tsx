import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <main className={styles.main}>
   
<Link href='/home'> Home </Link>
    <Link href='about'> About </Link> 
    <Link href='services'> Services </Link> 
    <Link href='contact'> Contact </Link> 
  
    </main>
  
  )
}

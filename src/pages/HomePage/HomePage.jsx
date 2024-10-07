import styles from './HomePage.module.css'


const HomePage = () => (
    <div className={styles.container}>
      <h1 className={styles.headerWel}>Welcome to the Contacts App</h1>
      <p className={styles.parWel}>This app helps you manage your contacts efficiently.</p>
    </div>
  );
  
  export default HomePage;
  
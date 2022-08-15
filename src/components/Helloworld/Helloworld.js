import styles from './Helloworld.module.css'

function Helloworld() {
  return (
    <div className={styles.test}>
      Hello World {Date().toLocaleString()}
    </div>
  );
}

export default Helloworld;

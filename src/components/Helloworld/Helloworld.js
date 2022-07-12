import styles from './Helloworld.module.css'

function Helloworld(props) {
  return (
    <div className={styles.test}>
      Hello World {props.name}
    </div>
  );
}

export default Helloworld;

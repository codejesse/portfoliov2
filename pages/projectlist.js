import styles from '../styles/Home.module.css'

const projectlist = (props) => {
    return (
     <div className={styles.row}>
        <div className={styles.projects}>
            <img src={props.img} />
            <p>{props.description} <a target="_blank" href={props.link}>{props.name} &rarr;</a></p>
        </div>
     </div>
    )
}
export default projectlist
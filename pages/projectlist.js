import styles from '../styles/Home.module.css'

const projectlist = (props) => {
    return (
        <div className={styles.projects}>
            <img src={props.img} />
            <p>{props.description} <a href={props.link}>{props.name} &rarr;</a></p>
        </div>
    )
}
export default projectlist
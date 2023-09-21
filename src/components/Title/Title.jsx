import styles from "./Title.module.css"
const Title = ({color,children})=>{
    return(
        <h2 className={styles.title} style={{color}}>{children}</h2>
    )

}
export default Title;
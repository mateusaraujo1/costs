import styles from './Select.module.css'

function Select({text, name, option, handleOnChange, value}) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name}>
            
            <option value="">Select category</option>
            
            </select>
        </div>
    )
}

export default Select
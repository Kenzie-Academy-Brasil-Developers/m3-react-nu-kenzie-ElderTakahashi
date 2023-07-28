import styles from "./style.module.scss";

export const Select = ({children, label, id, value, setValue}) => {
    return (
        <div className={styles.selectBox}>
            <label className="caption" htmlFor={id}>{label}</label>
            <select id={id} name={id} value={value} onChange={(e) => setValue(e.target.value)}>
                {children}
            </select>
        </div>
    );
};
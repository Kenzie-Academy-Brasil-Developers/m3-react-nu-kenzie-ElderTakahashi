import styles from "./style.module.scss";

export const RecordCard = ({id, title, value, category, removeRecord}) => {
    return (
        <li className={`
            ${styles.recordCard} 
            ${category === "Entrada" ? styles.green : null}`}>        
        
            <div >
                <h3 className="title three"> {title}</h3>
                <p className="paragraph lightGray">{category}</p>
            </div>
            <div >
                <p className="paragraph">{Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                <button className="btn del" onClick={() => removeRecord(id)}>Excluir</button>
            </div>        
        </li>
    );
};
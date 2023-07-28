import styles from "./style.module.scss";

export const DisplayTotal = ({ recordList }) => {

    const totalValue = recordList.reduce((prevValue, record) => {
        if (record.category === 'Entrada') {
            return prevValue + Number(record.value);
        } else if (record.category === 'Despesa') {
            return prevValue - Number(record.value);
        } else {
            return prevValue;
        }
    }, 0);

    return (        
        <div className={styles.flexBox} >
            <div>
                <h3 className="title three">Valor total:</h3>
                <h3 className="title three pink">{totalValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h3>    
            </div>
            <p className="paragraph lightGray">O valor se refere ao saldo</p>
        </div>        
    );
};

import { RecordCard } from "./RecordCard.jsx";
import styles from "./style.module.scss";

export const RecordsSection = ({recordList, removeRecord}) => {
    return (
        <section className={styles.flexBox}>
            <h3 className="title three">Resumo Financeiro</h3>    
            {recordList.length > 0 ? (
                <ul>
                    {recordList.map((record) => (
                        <RecordCard
                            key={record.id}
                            id={record.id}
                            category={record.category}
                            title={record.title}
                            value={record.value}
                            removeRecord={removeRecord}
                        />
                    ))}
                </ul>  
            ) : (
                <h2 className="title two">Você ainda não possui nenhum lançamento</h2>
            )}
        </section>
    );
};
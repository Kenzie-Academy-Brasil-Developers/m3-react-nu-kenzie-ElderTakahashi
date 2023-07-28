import { DisplayTotal } from "./DisplayTotal";
import { RecordForm } from "./RecordForm";
import styles from "./style.module.scss";

export const FormSection = ({addRecord, recordList}) => {  
    return (
        <section className={styles.flexBox}>     
            <RecordForm addRecord={addRecord}/>          
            {recordList.length > 0 ? <DisplayTotal recordList={recordList}/> : null}  
        </section>
    );
};

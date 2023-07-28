import { useState } from "react";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import { FormSection } from "../../components/sections/FormSection";
import { RecordsSection } from "../../components/sections/RecordsSection";
import { toast } from "react-toastify";

export const HomePage = () => {

    const [recordList, setRecordList] = useState([]);       
    
    const addRecord = (formData) => {
        const newRecord = { ...formData, id: crypto.randomUUID() };
        setRecordList([...recordList, newRecord]);
    };

    const removeRecord = (removeId) => {
        const newRecordList = recordList.filter((record) => record.id !== removeId);
        setRecordList(newRecordList); 
        toast.success("Registro deletado com sucesso!");       
    };
    
    return (
        <DefaultTemplate>
            <FormSection addRecord={addRecord} recordList={recordList}/>
            <RecordsSection removeRecord={removeRecord} recordList={recordList}/>
        </DefaultTemplate>
    );
};
import { Input } from "./Input";
import { Select } from "./Select";
import { useState } from "react";
import styles from "./style.module.scss";
import { toast } from "react-toastify";

export const RecordForm = ({addRecord}) => {
    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("Entrada");

    const submit = (event) => {
        event.preventDefault()
        if (!title || !value) {            
            toast.error("Por favor preencha todos os campos e tente novamente.")
            return;
        };

        addRecord({ title, value, category });
        toast.success("Registro criado com sucesso!")        
        setTitle("");
        setValue("");
        setCategory("Entrada");        
    };

    return (        
        <form className={styles.formBox} onSubmit={submit}>
            <div >                                                   
                <Input
                    label="Descrição"
                    placeholder="Digite aqui sua descrição"
                    type="text"
                    id="title"
                    value={title}
                    setValue={setTitle}
                />

                <Input
                    label="Valor (R$)"
                    placeholder="1"
                    type="number"
                    id="value"
                    value={value}
                    setValue={setValue}
                />                
                
                <Select
                    label="Tipo de valor "
                    id="category"
                    value={category}
                    setValue={setCategory}
                    >
                    <option value="Entrada">Entrada</option>
                    <option value="Despesa">Despesa</option>
                </Select>
            </div>
            <button className="btn submit" type="submit">Inserir valor</button>
        </form>        
    );
};
import { Header } from "../Header";

export const DefaultTemplate = ({children}) => {
    return (
        <>  
            <Header />
            <main className="container center">{children}</main>            
        </>
    );
};

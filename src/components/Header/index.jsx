import KenzieLogo from "../../assets/nu-kenzie-logo.svg";

export const Header = () => {
    return (
        <header>
            <div className="container">
                <div>
                    <img src={KenzieLogo} alt="Logo" />
                </div>
            </div>
        </header>
    );
};
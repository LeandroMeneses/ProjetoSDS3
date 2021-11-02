const Footer = () => { // a função pode ser declarada assim também
    //function NavBar() { ou assim
    return (
        <div>
            <footer className="footer mt-auto py-3 bg-dark">
                <div className="container">
                    <p className="text-light">App desenvolvido por <a href="https://github.com/LeandroMeneses" target="_blank" rel="noreferrer">Leandro Meneses</a></p>
                    <p className="text-light"><small><strong>Semana Spring React - Semana top de estudos</strong><br />
                        Me contacte: <a href="https://www.linkedin.com/in/devleandromeneses/" target="_blank" rel="noreferrer">@LeandroMeneses</a></small></p>
                </div>
            </footer>
        </div>
    );
}
export default Footer;
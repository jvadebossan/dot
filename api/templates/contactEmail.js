export const contactEmail = (name, lastName, email, cel, message) => {
    return `
        <div>
            <p>Olá, alguém entrou em contato com a dot através do formulario do site.</p>

            <h1>Informações:</h1>
            <ul>
                <li class = "name">Nome: ${name} ${lastName}</li>
                <li class = "email">Email: ${email}</li>
                <li class = "cel">Telefone: ${cel}</li>
            </ul>

            <h1>Mensagem:</h1>
            <p>${message}</p>
        </div>
    `;
};

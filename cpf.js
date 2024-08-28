
    // Função para aplicar máscara de CPF
    function aplicarMascaraCPF(cpf) {
        cpf = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
        cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        return cpf;
    }

    // Adicionando eventos ao campo de CPF
    document.getElementById('cpf').addEventListener('input', function(e) {
        e.target.value = aplicarMascaraCPF(e.target.value);
    });

    // Validando o CPF no envio do formulário
    document.getElementById('cpfForm').addEventListener('submit', function(e) {
        const cpfInput = document.getElementById('cpf');
        const cpf = cpfInput.value;

        // Verifica se o CPF está no formato correto
        const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

        if (!cpfRegex.test(cpf)) {
            e.preventDefault(); // Impede o envio do formulário
            cpfInput.classList.add('is-invalid'); // Adiciona classe de erro
        } else {
            cpfInput.classList.remove('is-invalid'); // Remove classe de erro se o CPF for válido
        }
    });

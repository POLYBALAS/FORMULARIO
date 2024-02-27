
function formatarPlaca(input) {
	input.value = input.value.toUpperCase();

	input.value = input.value.replace(/[^A-Z0-9]/g, '');

	if (input.value.length > 7) {
		input.value = input.value.substring(0, 7);
	}

	if (input.value.length > 3 && input.value.charAt(3) !== '-') {
		input.value = input.value.substring(0, 3) + '-' + input.value.substring(3);
	}
}

(function () {
	var formulario = document.formulario_registro,
		elementos = formulario.elements;

	var validarInputs = function () {
		for (var i = 0; i < elementos.length; i++) {
			if (elementos[i].type == "text") {

				if (elementos[i].value.length == 0) {
					console.log('O campo ' + elementos[i].name + ' está incompleto');
					elementos[i].className = elementos[i].className + " error";
					return false;
				} else {
					elementos[i].className = elementos[i].className.replace(" error", "");
				}
			}
		}

		if (elementos.pass.value !== elementos.pass2.value) {
			elementos.pass.value = "";
			elementos.pass2.value = "";
			elementos.pass.className = elementos.pass.className + " error";
			elementos.pass2.className = elementos.pass2.className + " error";
		} else {
			elementos.pass.className = elementos.pass.className.replace(" error", "");
			elementos.pass2.className = elementos.pass2.className.replace(" error", "");
		}

		return true;
	};

	var enviar = function (e) {
		if (!validarInputs()) {
			console.log('Faltou validar os Input');
			e.preventDefault();
		} else if (!validarRadios()) {
			console.log('Faltou validar os Radio Button');
			e.preventDefault();
		} else if (!validarCheckbox()) {
			console.log('Faltou validar Checkbox');
			e.preventDefault();
		} else {
			console.log('Envia');
			e.preventDefault();
		}
	};

	var focusInput = function () {
		this.parentElement.children[1].className = "label active";
		this.parentElement.children[0].className = this.parentElement.children[0].className.replace("error", "");
	};

	var blurInput = function () {
		if (this.value <= 0) {
			this.parentElement.children[1].className = "label";
			this.parentElement.children[0].className = this.parentElement.children[0].className + " error";
		}
	};

	// --- Eventos ---
	formulario.addEventListener("submit", enviar);

	for (var i = 0; i < elementos.length; i++) {
		if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password") {
			elementos[i].addEventListener("focus", focusInput);
			elementos[i].addEventListener("blur", blurInput);
		}
	}

	var dataAtual = new Date();
	var proximaSemanaDoMes = getWeekOfMonth(dataAtual) + 1;

	document.getElementById('semanaAtual').value = proximaSemanaDoMes;

	function getWeekOfMonth(date) {
		var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
		var dayOfWeek = firstDay.getDay() - 1;
		var diff = date.getDate() + dayOfWeek;
		return Math.ceil(diff / 7);
	}

	var mesAtual = dataAtual.getFullYear() + '-' + ('0' + (dataAtual.getMonth() + 1)).slice(-2);

	// Define o valor do campo de entrada como o mês atual
	document.getElementById('mes').value = mesAtual;

	// Calcula a data da próxima segunda-feira (sete dias após a data atual)
	var proximaSegundaFeira = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), dataAtual.getDate() + (1 - dataAtual.getDay()) + 7);

	// Formata a data da próxima segunda-feira no formato apropriado (YYYY-MM-DD)
	var dataFormatadaSegunda = proximaSegundaFeira.toISOString().slice(0, 10);

	// Define o valor do campo de data como a data da próxima segunda-feira
	document.getElementById('segunda').value = dataFormatadaSegunda;

	// Calcula a data da próxima terça-feira (sete dias após a data atual)
	var proximaTercaFeira = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), dataAtual.getDate() + (2 - dataAtual.getDay()) + 7);

	// Formata a data da próxima terça-feira no formato apropriado (YYYY-MM-DD)
	var dataFormatadaTerca = proximaTercaFeira.toISOString().slice(0, 10);

	// Define o valor do campo de data como a data da próxima terça-feira
	document.getElementById('terca').value = dataFormatadaTerca;

	// Calcula a data da próxima quarta-feira (sete dias após a data atual)
	var proximaQuartaFeira = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), dataAtual.getDate() + (3 - dataAtual.getDay()) + 7);

	// Formata a data da próxima quarta-feira no formato apropriado (YYYY-MM-DD)
	var dataFormatadaQuarta = proximaQuartaFeira.toISOString().slice(0, 10);

	// Define o valor do campo de data como a data da próxima quarta-feira
	document.getElementById('quarta').value = dataFormatadaQuarta;

	// Calcula a data da próxima quinta-feira (sete dias após a data atual)
	var proximaQuintaFeira = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), dataAtual.getDate() + (4 - dataAtual.getDay()) + 7);

	// Formata a data da próxima quinta-feira no formato apropriado (YYYY-MM-DD)
	var dataFormatadaQuinta = proximaQuintaFeira.toISOString().slice(0, 10);

	// Define o valor do campo de data como a data da próxima quinta-feira
	document.getElementById('quinta').value = dataFormatadaQuinta;

	// Calcula a data da próxima sexta-feira (sete dias após a data atual)
	var proximaSextaFeira = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), dataAtual.getDate() + (5 - dataAtual.getDay()) + 7);

	// Formata a data da próxima sexta-feira no formato apropriado (YYYY-MM-DD)
	var dataFormatadaSexta = proximaSextaFeira.toISOString().slice(0, 10);

	// Define o valor do campo de data como a data da próxima sexta-feira
	document.getElementById('sexta').value = dataFormatadaSexta;

	// Calcula a data do próximo sábado (sete dias após a data atual)
	var proximoSabado = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), dataAtual.getDate() + (6 - dataAtual.getDay()) + 7);

	// Formata a data do próximo sábado no formato apropriado (YYYY-MM-DD)
	var dataFormatadaSabado = proximoSabado.toISOString().slice(0, 10);

	// Define o valor do campo de data como a data do próximo sábado
	document.getElementById('sabado').value = dataFormatadaSabado;

	// Função para formatar a rota
    function formatarRota(input) {
        // Transforma todo o texto em maiúsculas
        input.value = input.value.toUpperCase();

        // Garante que o campo tenha no máximo 5 caracteres
        if (input.value.length > 5) {
            input.value = input.value.substring(0, 5);
        }

        // Insere o hífen após as duas primeiras letras
        if (input.value.length == 2 && input.value.charAt(2) !== '-') {
            input.value = input.value.substring(0, 2) + '-' + input.value.substring(2);
        }
    }

    // Adiciona a função formatarRota ao elemento desejado
    var elementoRota = document.getElementById('seuElementoRota'); // Substitua 'seuElementoRota' pelo ID do seu elemento
    if (elementoRota) {
        elementoRota.addEventListener('input', function () {
            formatarRota(this);
        });
    }

    // Função para formatar o CPF
    function formatarCPF(input) {
        // Format CPF as 999.999.999-99
        let unformatted = input.value.replace(/[^\d]/g, '');
        if (unformatted.length === 11) {
            input.value = `${unformatted.substring(0, 3)}.${unformatted.substring(3, 6)}.${unformatted.substring(6, 9)}-${unformatted.substring(9)}`;
        }
    }

    // Adiciona a função formatarCPF ao elemento desejado
    var elementoCPF = document.getElementById('seuElementoCPF'); // Substitua 'seuElementoCPF' pelo ID do seu elemento
    if (elementoCPF) {
        elementoCPF.addEventListener('input', function () {
            formatarCPF(this);
        });
    }

    // Função para permitir apenas números
    function onlyNumbers(event) {
        // Permite apenas a entrada de caracteres numéricos
        const keyCode = event.which || event.keyCode;
        const isNumeric = (keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105);
        return isNumeric;
    }

    // Adiciona a função onlyNumbers ao elemento desejado
    var elementoNumerico = document.getElementById('seuElementoNumerico'); // Substitua 'seuElementoNumerico' pelo ID do seu elemento
    if (elementoNumerico) {
        elementoNumerico.addEventListener('keypress', function (event) {
            if (!onlyNumbers(event)) {
                event.preventDefault();
            }
        });
    }
}())
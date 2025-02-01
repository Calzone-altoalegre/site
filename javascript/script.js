document.addEventListener('DOMContentLoaded', function(){

    const phone = "5585988113671"

    let pedido = "---------------------------\n\n"
    let order = ""

    let totalConta = 0
    let totalItens = 0
    let metade_pizzas = 0

    let pizzaPassed = true
    let dinheiro_active = false;
    let pix_active = false;
    let cartao_active = false;
    let metade_valores = [];

    let inputs = document.querySelectorAll('input[type="number"]');
    let inputs_metades = document.querySelectorAll(".metade")

    // Para cada input, definimos o valor como 0
    inputs.forEach(input => {
        input.value = 0; // Zera o valor
    });

    // Chamar função somaPedido para modificar conta do pedido
    inputs.forEach(input => {
        input.addEventListener('input', somarItens); 
    });

    // Chama cada input para cada metade de pizzas
    inputs_metades.forEach(input2 =>{
        input2.addEventListener('input', () => {
            metade_pizzas = 0
            //Adicionando o valor no vetor se for maior que -1
            if(input2.value > -1 && input2.value != 0){
                // Adicionando
                // Selecionar o preço relacionado ao input
                const subtitle = input2.nextElementSibling;
                const price = subtitle.nextElementSibling
                metade_valores.push(parseFloat(price.textContent)) 
            }

            //Remove se o valor for zero
            if(input2.value == 0){
                // Removendo
                const subtitle = input2.nextElementSibling;
                const price = subtitle.nextElementSibling
                const price_float = parseFloat(price.textContent)

                /* Loop para remover o valor especifico */
                for (var i = 0; i <= metade_valores.length; i++) {
                    if(metade_valores[i] == price_float){
                        console.log("Removendo valor especifico")
                        metade_valores.splice(i,1);
                    }
                }
            }

            /* Depois de passar por todos inputs */
            /* Somar valores das metades das pizzas */
            let vector = metade_valores
            if(metade_valores.length % 2 == 0){
                // Par
                /* Implementar solução para escolher valores  */
                /* De acorco com metade_valores.length /2 */
                /* Percorer e pegar o maior valor e dobrar */
                let sortedVector = [...vector].sort((a, b) => a - b);
                let maxValues = sortedVector.slice(vector.length/2);
                let dobradoMaValues = maxValues.map((valor) => valor * 2)
                //console.log("Valores dobrados: "+dobradoMaValues);

                /* Adcionando valores na conta */
                for (var i = 0; i < dobradoMaValues.length; i++) {
                    metade_pizzas += dobradoMaValues[i];
                }
            
                console.log("Total a ser adicionado: "+metade_pizzas)
                pizzaPassed = true
            } else {
                //console.log("impar")
                pizzaPassed = false
            }

            setPedido()

        })
    })
    
    //Soma todos os itens
    function somarItens() {
        let total = 0;
    
        //IDs Salgados
        let salgadoQueijo = document.getElementById('salgado-queijo');
        let salgadoCarne = document.getElementById('salgado-carne');
        let salgadoMisto = document.getElementById('salgado-misto');
        let salgadoFrango = document.getElementById('salgado-frango');
        let salgadoEnroladinho = document.getElementById('salgado-enroladinho');
        let salgadoCoxinha = document.getElementById('salgado-coxinha');
    
        //IDs Pasteis
        let pastelFrangoM = document.getElementById('past-frang-m')
        let pastelFrangoG = document.getElementById('past-frang-g')

        let pastelFrangoCatupiryM = document.getElementById('past-frang-catu-m')
        let pastelFrangoCatupiryG = document.getElementById('past-frang-catu-g')
        
        let pastelFrangoCreamCheeseM = document.getElementById('past-cream-che-m')
        let pastelFrangoCreamCheeseG = document.getElementById('past-cream-che-g')

        let pastelCarneM = document.getElementById('past-carne-m')
        let pastelCarneG = document.getElementById('past-carne-g')

        let pastelQueijoM = document.getElementById('past-queijo-m')
        let pastelQueijoG = document.getElementById('past-queijo-g')

        let pastelModaM = document.getElementById('past-moda-m')
        let pastelModaG = document.getElementById('past-moda-g')

        let pastelFrangoPassasM = document.getElementById('past-frang-passas-m')
        let pastelFrangoPassasG = document.getElementById('past-frang-passas-g')

        let pastelFrangoRicotaM = document.getElementById('past-frang-ricota-m')
        let pastelFrangoRicotaG = document.getElementById('past-frang-ricota-g')

        let pastel4QueijosM = document.getElementById('past-4queijos-m')
        let pastel4QueijosG = document.getElementById('past-4queijos-g')

        let pastelCalabresaM = document.getElementById('past-calabresa-m')
        let pastelCalabresaG = document.getElementById('past-calabresa-g')

        let pastelMistoM = document.getElementById('past-misto-m')
        let pastelMistoG = document.getElementById('past-misto-g')

        let pastelCarneSecaM = document.getElementById('past-carne-seca-m')
        let pastelCarneSecaG = document.getElementById('past-carne-seca-g')

        let pastelCarneSecaCatupiryM = document.getElementById('past-carne-seca-catup-m')
        let pastelCarneSecaCatupiryG = document.getElementById('past-carne-seca-catup-g')

        let pastelPortuguesaM = document.getElementById('past-portuguesa-m')
        let pastelPOrtuguesaG = document.getElementById('past-portuguesa-g')

        let pastelChocolateM = document.getElementById('past-chocolate-m')
        let pastelChocolateG = document.getElementById('past-chocolate-g')

        let pastelRomeuM = document.getElementById('past-romeu-m')
        let pastelRomeuG = document.getElementById('past-romeu-g')

        //IDS PIZZAS
        let pizzaCalabresa = document.getElementById('pizza-calabresa')
        let pizzaFrango = document.getElementById('pizza-frango')
        let pizzaFrangoCatupiry = document.getElementById('pizza-frango-catupiry')
        let pizzaCarneSeca = document.getElementById('pizza-carne-seca')
        let pizzaCarneSecaCatupiry = document.getElementById('pizza-carne-seca-catupiry')
        let pizzaBolonhesa = document.getElementById('pizza-bolonhesa')
        let pizzaMista = document.getElementById('pizza-mista')
        let pizzaModa = document.getElementById('pizza-moda')
        let pizzaPortuguesa = document.getElementById('pizza-portuguesa')
        let pizzaMarguerita = document.getElementById('pizza-marguerita')
        let pizzaMussarela = document.getElementById('pizza-mussarela')
        let pizzaBacon = document.getElementById('pizza-bacon')
        let pizzaChocolate = document.getElementById('pizza-chocolate')

        //IDS CALZONE
        let calzoneFrango = document.getElementById('calzone-frango')
        let calzoneFrangoCatupiry = document.getElementById('calzone-frango-catupiry')
        let calzoneFrangoRicota = document.getElementById('calzone-frango-ricota')
        let calzoneCarne = document.getElementById('calzone-carne')
        let calzoneCarneSeca = document.getElementById('calzone-carne-seca')
        let calzoneCarneSecaCatupiry = document.getElementById('calzone-carne-seca-catupiry')
        let calzoneMisto = document.getElementById('calzone-misto')
        let calzoneModa = document.getElementById('calzone-moda')
        let calzonePortuguesa = document.getElementById('calzone-portguesa')
        let calzoneQueijo = document.getElementById('calzone-queijo')
        let calzoneChocolate = document.getElementById('calzone-chocolate')
        let calzoneRomeu = document.getElementById('calzone-romeu')

        //IDS BEBIDAS
        let coca1l = document.getElementById('coca-1l')
        let coca2l = document.getElementById('coca-2l')
        let guarana1l = document.getElementById('guarana-1l')
        /* let guarana2l = document.getElementById('guarana-2l') */
        let saoGeraldo1l = document.getElementById('geraldo-1l')
        let saoGeraldo2l = document.getElementById('geraldo-2l')
        let cocaLata = document.getElementById('coca-lata')
        let saoGeraldoLata = document.getElementById('saogeraldo-lata')
        let sucoGoiaba = document.getElementById('suco-goiaba')
        let sucoManga = document.getElementById('suco-manga')
        let sucoMaracuja = document.getElementById('suco-maracuja')
        let sucoAcerola = document.getElementById('suco-acerola')
        
        //IDS ACOMPANHAMENTOS   
        let milho = document.getElementById('milho')
        let cebola = document.getElementById('cebola')
        let azeitona = document.getElementById('azeitona')
        let ovo = document.getElementById('ovo')
        let calabresa = document.getElementById('calabresa')
        let carne = document.getElementById('carne')
        let queijo = document.getElementById('queijo')
        let presunto = document.getElementById('presunto')
        let bacon = document.getElementById('bacon')
        let catupiry = document.getElementById('catupiry')
        let ricota = document.getElementById('ricota')
        let creamCheese = document.getElementById('cream-cheese')
        let maionese = document.getElementById('maionese')
        let ketchup = document.getElementById('ketchup')



        // Somar o total de cada input, caso haja um valor inserido
        //Salgado
        total += (parseInt(salgadoQueijo.value) || 0) * 3.50;
        total += (parseInt(salgadoCarne.value) || 0) * 3.50;
        total += (parseInt(salgadoMisto.value) || 0) * 3.50;
        total += (parseInt(salgadoFrango.value) || 0) * 3.50;
        total += (parseInt(salgadoEnroladinho.value) || 0) * 3.50;
        total += (parseInt(salgadoCoxinha.value) || 0) * 3.50;

        //Pastel
        total += (parseInt(pastelFrangoM.value) || 0) * 7.50;
        total += (parseInt(pastelFrangoG.value) || 0) * 10.00;
        

        total += (parseInt(pastelFrangoCatupiryM.value) || 0) * 8.00;
        total += (parseInt(pastelFrangoCatupiryG.value) || 0) * 13.50;

        total += (parseInt(pastelFrangoCreamCheeseM.value) || 0) * 11.50;
        total += (parseInt(pastelFrangoCreamCheeseG.value) || 0) * 16.50;

        total += (parseInt(pastelCarneM.value) || 0) * 7.50;
        total += (parseInt(pastelCarneG.value) || 0) * 12.00;
        
        total += (parseInt(pastelQueijoM.value) || 0) * 7.50;
        total += (parseInt(pastelQueijoG.value) || 0) * 8.50;

        total += (parseInt(pastelModaM.value) || 0) * 8.50;
        total += (parseInt(pastelModaG.value) || 0) * 15.00;

        total += (parseInt(pastelFrangoPassasM.value) || 0) * 8.00;
        total += (parseInt(pastelFrangoPassasG.value) || 0) * 10.50;

        total += (parseInt(pastelFrangoRicotaM.value) || 0) * 8.00;
        total += (parseInt(pastelFrangoRicotaG.value) || 0) * 13.00;

        total += (parseInt(pastel4QueijosM.value) || 0) * 8.50;
        total += (parseInt(pastel4QueijosG.value) || 0) * 13.50;

        total += (parseInt(pastelCalabresaM.value) || 0) * 8.00;
        total += (parseInt(pastelCalabresaG.value) || 0) * 12.50;

        total += (parseInt(pastelMistoM.value) || 0) * 7.50;
        total += (parseInt(pastelMistoG.value) || 0) * 12.00;

        total += (parseInt(pastelCarneSecaM.value) || 0) * 8.00;
        total += (parseInt(pastelCarneSecaG.value) || 0) * 14.50;

        total += (parseInt(pastelCarneSecaCatupiryM.value) || 0) * 8.50;
        total += (parseInt(pastelCarneSecaCatupiryG.value) || 0) * 15.50;

        total += (parseInt(pastelPortuguesaM.value) || 0) * 8.50;
        total += (parseInt(pastelPOrtuguesaG.value) || 0) * 15.50;

        total += (parseInt(pastelChocolateM.value) || 0) * 8.00;
        total += (parseInt(pastelChocolateG.value) || 0) * 13.00;

        total += (parseInt(pastelRomeuM.value) || 0) * 8.00;
        total += (parseInt(pastelRomeuG.value) || 0) * 13.00;

        //PIZZA
        total += (parseInt(pizzaCalabresa.value) || 0) * 28.50;
        total += (parseInt(pizzaFrango.value) || 0) * 28.50;
        total += (parseInt(pizzaFrangoCatupiry.value) || 0) * 30.50;
        total += (parseInt(pizzaCarneSeca.value) || 0) * 32.00;
        total += (parseInt(pizzaCarneSecaCatupiry.value) || 0) * 33.50;
        total += (parseInt(pizzaBolonhesa.value) || 0) * 28.00;
        total += (parseInt(pizzaMista.value) || 0) * 27.50;
        total += (parseInt(pizzaModa.value) || 0) * 32.50;
        total += (parseInt(pizzaPortuguesa.value) || 0) * 30.50;
        total += (parseInt(pizzaMarguerita.value) || 0) * 29.00;
        total += (parseInt(pizzaMussarela.value) || 0) * 26.50;
        total += (parseInt(pizzaBacon.value) || 0) * 30.00;
        total += (parseInt(pizzaChocolate.value) || 0) * 30.00;    
        
        //CALZONES
        total += (parseInt(calzoneFrango.value) || 0) * 17.50;
        total += (parseInt(calzoneFrangoCatupiry.value) || 0) * 18.00;
        total += (parseInt(calzoneFrangoRicota.value) || 0) * 14.00;
        total += (parseInt(calzoneCarne.value) || 0) * 14.00;
        total += (parseInt(calzoneCarneSeca.value) || 0) * 17.50;
        total += (parseInt(calzoneCarneSecaCatupiry.value) || 0) * 19.00;
        total += (parseInt(calzoneMisto.value) || 0) * 12.50;
        total += (parseInt(calzoneModa.value) || 0) * 20.00;
        total += (parseInt(calzonePortuguesa.value) || 0) * 16.50;
        total += (parseInt(calzoneQueijo.value) || 0) * 11.50;
        total += (parseInt(calzoneChocolate.value) || 0) * 14.50;
        total += (parseInt(calzoneRomeu.value) || 0) * 14.50;

        //BEBIDAS
        total += (parseInt(coca1l.value) || 0) * 9.00;
        total += (parseInt(coca2l.value) || 0) * 14.00;
        total += (parseInt(guarana1l.value) || 0) * 8.00;
        total += (parseInt(saoGeraldo1l.value) || 0) * 9.00;
        total += (parseInt(saoGeraldo2l.value) || 0) * 13.00;
        total += (parseInt(cocaLata.value) || 0) * 5.00;
        total += (parseInt(saoGeraldoLata.value) || 0) * 5.00;
        total += (parseInt(sucoGoiaba.value) || 0) * 4.00;
        total += (parseInt(sucoManga.value) || 0) * 4.00;
        total += (parseInt(sucoMaracuja.value) || 0) * 4.00;
        total += (parseInt(sucoAcerola.value) || 0) * 4.00;

        //ACOMPANHAMENTOS
        total += (parseInt(milho.value) || 0) * 2.00;
        total += (parseInt(cebola.value) || 0) * 2.00;
        total += (parseInt(azeitona.value) || 0) * 2.00;
        total += (parseInt(ovo.value) || 0) * 2.00;
        total += (parseInt(calabresa.value) || 0) * 4.00;
        total += (parseInt(carne.value) || 0) * 4.00;
        total += (parseInt(queijo.value) || 0) * 4.00;
        total += (parseInt(presunto.value) || 0) * 4.00;
        total += (parseInt(catupiry.value) || 0) * 3.00;
        total += (parseInt(ricota.value) || 0) * 4.00;
        total += (parseInt(creamCheese.value) || 0) * 4.00;
        total += (parseInt(maionese.value) || 0) * 0.00;
        total += (parseInt(ketchup.value) || 0) * 0.00;

        // Atualiza o valor total na página
        totalItens = total

        //Atualizar os valores dos pasteis 

        // Iteração para capturar os produtos
        /* inputs.forEach(input => {
            if (parseInt(input.value) > 0) {
                const label = input.closest('label').textContent.trim().split('\n')[0].trim();
                // Selecionar o preço relacionado ao input
                const priceElement = input.nextElementSibling;
                order = `${label} - ${priceElement.textContent} - Quantidade: ${input.value} \n  `; // Use \n para quebra de linha
                console.log(order)
            }
        }); */

        setPedido()        
    }

    //Atualizando Valores do Pedido
    function setPedido (){
        totalConta = totalItens + metade_pizzas

        console.log('totalItens: '+totalItens)
        console.log('metade_pizzas: '+metade_pizzas)

        document.getElementById('total-value').textContent = `R$ ${totalConta.toFixed(2)}`;
    }


    //Enviando para Whatsapp
    document.getElementById('enviar').addEventListener('click', function () {
        let pedido = "";
        let order = "";
        let anyProduct = false;

        const nome = document.getElementById('nome').value;
        const bairro = document.getElementById('bairro').value;
        const numCasa = document.getElementById('num-casa').value;
        const comentario = document.getElementById('comentario').value;

        // Iteração para capturar os produtos
        inputs.forEach(input => {
            if (parseInt(input.value) > 0) {
                const label = input.closest('label').textContent.trim().split('\n')[0].trim();
                const priceElement = input.nextElementSibling;
                order += `${label} - ${priceElement.textContent} - Quantidade: ${input.value}\n`; // Use \n para quebra de linha
                anyProduct = true;
            }
        });

        if (!anyProduct) {
            alert("Selecione algum produto no cardápio!");
            return;
        }

        if(!pizzaPassed){
            alert("Você não pode comprar a metade de uma pizza!");
            return;
        }

        // Validações dos campos obrigatórios
        if (!nome) {
            alert("Digite seu Nome");
            return;
        }

        if (!bairro) {
            alert("Digite o Seu bairro");
            return;
        }

        if (!numCasa) {
            alert("Digite o número da sua Casa");
            return;
        }

        if (!dinheiro_active && !pix_active && !cartao_active) {
            alert("Selecione um Método de pagamento");
            return;
        }

        const metodoPagamento = dinheiro_active ? "Dinheiro" : pix_active ? "Pix" : "Cartão";

        // Construção do texto usando template string
        pedido = `
Boa noite, me chamo ${nome} e esse é meu pedido:

----------ENDEREÇO----------

Nome: ${nome}
Bairro: ${bairro}
N°: ${numCasa}
Comentário: ${comentario || "Nenhum"}
Método de Pagamento: ${metodoPagamento}

-----------PEDIDO-----------

${order}

-----------------------------

Valor total: ${totalConta} 

Taxa de Entrega a Combinar!

`;

        //Printando pedido no console
        console.log(pedido)

        // Codificar a mensagem
        const encodedMessage = encodeURIComponent(pedido);

        // Criar o link para o WhatsApp
        const whatsappLink = `https://wa.me/${phone}?text=${encodedMessage}`;

        // Abrir o WhatsApp
        window.open(whatsappLink, '_blank');
    });

    /*           BOTOES              */
    let dinheiro = document.getElementById('dinheiro'); // Primeiro, pegamos o elemento
    dinheiro.addEventListener('click', function () {  // Agora, adicionamos o listener de clique

        if (dinheiro_active == false) {
            activeDinheiro();
            disablePix();
            disableCartao();
        } else {
            disableDinheiro();
        }
        
    });

    let pix = document.getElementById('pix'); // Primeiro, pegamos o elemento
    pix.addEventListener('click', function () {  // Agora, adicionamos o listener de clique

        if (pix_active == false) {
            activePix();
            disableDinheiro();
            disableCartao();
        } else {
            disablePix();
        }
    });
    
    let cartao = document.getElementById('cartao'); // Primeiro, pegamos o elemento
    cartao.addEventListener('click', function () {  // Agora, adicionamos o listener de clique

        if (cartao_active == false) {
            activeCartao();
            disableDinheiro();
            disablePix();
        } else {
            disableCartao();
        }

    });

    function disableDinheiro () {
        dinheiro.style.transform = 'scale(1.0)';  // Alteramos a escala ao clicar
        dinheiro.style.backgroundColor = 'rgb(240, 237, 237)';
        dinheiro.style.color = 'black';

        dinheiro_active = false;
    }

    function activeDinheiro () {
        dinheiro.style.transform = 'scale(1.1)';  // Alteramos a escala ao clicar
        dinheiro.style.backgroundColor = 'green';
        dinheiro.style.color = 'white';

        dinheiro_active = true;
    }

    function disablePix () {
        pix.style.transform = 'scale(1.0)';  // Alteramos a escala ao clicar
        pix.style.backgroundColor = 'rgb(240, 237, 237)';
        pix.style.color = 'black';

        pix_active = false;
    }

    function activePix () {
        pix.style.transform = 'scale(1.1)';  // Alteramos a escala ao clicar
        pix.style.backgroundColor = 'green';
        pix.style.color = 'white';

        pix_active = true;
    }

    function disableCartao () {
        cartao.style.transform = 'scale(1.0)';  // Alteramos a escala ao clicar
        cartao.style.backgroundColor = 'rgb(240, 237, 237)';
        cartao.style.color = 'black';

        cartao_active = false;
    }

    function activeCartao () {
        cartao.style.transform = 'scale(1.1)';  // Alteramos a escala ao clicar
        cartao.style.backgroundColor = 'green';
        cartao.style.color = 'white';

        cartao_active = true;
    }
    
})

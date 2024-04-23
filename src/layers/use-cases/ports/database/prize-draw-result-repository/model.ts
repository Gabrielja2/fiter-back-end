export class PrizeDrawResultModel {
    constructor(
        public readonly id: string,
        public readonly prizeDrawId: string,
        public drawNumbers: number[],
        public winnerTicketsId: string[],
        public drawPrize: number
    ) { }
}

// Ao comprar ticket:
// 1. buscar o sorteio atual (current), caso não exista, criar um, e pegar o ID dele para colocar na tabela de ticket.
// 2. prosseguir com a compra do ticket atribuindo ao usuario
// 3. ...
// Ao clicar no botão sortear:
// 1. buscar o sorteio atual (current)
// 2. sortear 15 numeros aleatorios e não repetidos de 1 a 25
// 3. verificar tickets vencedores, verificando cada registro na tabela de tickets relacionados com o sorteio atual
// 4. os tickets vencedores serão agrupados para serem registrados no campo winnerTicketsId
// 5. precisará fazer o calculo do drawPrize, baseado na quantidade de números sorteados nos bilhetes vencedores, para salvar o total (soma) do prêmio de todas os bilhetes vencedores
// 6. subtrair ou somar o saldo do usuário baseado no resultado
// 7. marcar o sorteio atual (current) como false, e criar um novo, com o sequencial +1
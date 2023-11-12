/* 1. Considere o seguinte array:
const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99,
1290.00, 15000.00];

a. Imprima no console o índice do primeiro salário maior que
7.500 utilizando o findIndex
b. Crie uma nova lista filtrada com os salários que são maior que
8.000 utilizando o filter */
function exercicio1(){
      //a
 const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99, 1290.00, 15000.00];
 const indiceEncontrado = salarios.findIndex(function(salario){
       return salario > 7500.00
 })
 document.write(indiceEncontrado)
 document.write('<br>')
 //b
 const procuraSalario = salarios.filter(function(salarios){
       return salarios > 7500.00
 })
 document.write(procuraSalario); 

}

/* 2. James estava criando uma array com as cores do arco-íris, e ele
esqueceu algumas cores. As cores padrão de um arco-íris são
normalmente listadas nesta ordem:
const rainbow = ["Vermelho", "Laranja", "Amarelo", "Verde", "Azul",
"Roxo"];

mas James tinha isto:
const rainbow = ["Vermelho", "Laranja", "Preto", "Azul"];

Usando somente o método splice insira as cores que faltam na array e
remova a cor "Preto", seguindo estes passos:

a. Remova "Preto"
b. Adicione "Amarelo" e "Verde"
c. Adicione "Roxo"
 */
function exercicio2(){
      const rainbow = ["Vermelho", "Laranja", "Preto", "Azul"];
      //a
      const deletePreto = rainbow.splice(2 , 1)
      document.write(rainbow);
      document.write('<br>')
      //b
      const adicionaAmarelo = rainbow.push('Amarelo')
      const adicionaVerde = rainbow.push('Verde')
      document.write(rainbow);
      document.write('<br>')
      //c
      const adicionaRoxo = rainbow.push('Roxo')
      document.write(rainbow);
      document.write('<br>')
}



/* 3. Crie um cadastro de pessoas onde o usuário informe o nome, idade
e se está trabalhando ou não, se a pessoa estiver trabalhando
pergunte para ele o salário que está ganhando. Para cada pessoa

cadastrada, pergunte ao usuário se ele deseja continuar
cadastrando ou não. No final, mostre as pessoas que estão
desempregadas, as pessoas que estão empregadas separadas
pelas que ganham mais que 2500 e menos que 2500.

Exemplo de resultado:
Pessoas desempregadas:
Nome: Alessandro, Idade: 28
Nome: Alessandro, Idade: 28

Pessoas empregadas com salários menores que 2500:
Nome: Alessandro, Idade: 28, Salário: 1500
Nome: Alessandro, Idade: 28, Salário: 2400

Pessoas empregadas com salários maiores que 2500:
Nome: Alessandro, Idade: 28, Salário: 2700
Nome: Alessandro, Idade: 28, Salário: 3000 */

function exercicio3(){
      const usuarios = [
            /*       {
                        nome: 'dionei',
                        idade: 31,
                        trabalha: true,
                        salario: 2400,
                  },
                  {
                        nome: 'ana',
                        idade: 31,
                        trabalha: false,
                        salario: 2500,
                  },
                  {
                        nome: 'carlos',
                        idade: 31,
                        trabalha: true,
                        salario: 1500,
                  },
                  {
                        nome: 'paulo',
                        idade: 31,
                        trabalha: true,
                        salario: 3000,
                  },
                  {
                        nome: 'andre',
                        idade: 31,
                        trabalha: false,
                        salario: 1500,
                  }, */
            ]
            let continuar = true
             while (continuar) {
                 const nome = prompt('digite o nome de uma pessoa')
                 const idade = Number(prompt('digite o idade de uma pessoa'))
                 const trabalha = confirm('Esta trabalhando??')
                 const salario = parseFloat(prompt(('Qual o seu salario')))
            
                 const usuario = {
                       nome,
                       idade,
                       trabalha,
                       salario
                 }
            
                 usuarios.push(usuario)
            
                 continuar = confirm('deseja continuar?')
            
            }   
            const desempregados = usuarios.filter(function(usuarios){
                 return usuarios.trabalha === false
            })
            console.log(desempregados);
            
            
            const empregadosSalarioMenor = usuarios.filter(function(usuarios){
                  return usuarios.salario < 2500 && usuarios.trabalha === true
            })
            console.log(empregadosSalarioMenor);
            
            
            const empregadosSalarioMaior = usuarios.filter(function(usuarios){
                  return usuarios.salario > 2500 && usuarios.trabalha === true
            })
            console.log(empregadosSalarioMaior);
            
}

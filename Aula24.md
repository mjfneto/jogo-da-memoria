# Aula 24

## 01 Tirando responsabilidades do nosso component

Organização do component:

- retirada da parte de inserção;
- o componente precisa ser simples, _stateless_. O que cabe ao componente é, somente, sua estrutura HTML e suas classes CSS.
- A página tem a responsabilidade de inserir o componente. Isso será feito na lição seguinte.

![aula24 lição 1 organizando o componente](mdimg/24.01_organizando_o_componente.png)

Acima, é possível ver como a legibilidade do código é melhorada com a retirada da responsabilidade de inserção do componente. Este passa a lidar apenas com a estrutura e estilização.

## 02 Função retornando um valor

Agora que o componente está organizado somente com suas respectivas responsabilidades, sem códigos que adicionam uma complexidade de leitura, precisamos pegar o componente adicioná-lo à page.

A page tem a responsabilidade de receber o componente daquela função e o insere na tela.

![organizando o retorno do código componente](mdimg/24.02_organizando_a_insercao_do_componente.png)

Acima, a função retorna a variável que contém a estrutura do componente descrita no valor de uma string.

![recebendo o componente no arquivo da page](mdimg/24.02_organizando_a_insercao_do_componente2.png)

Agora, o arquivo da page trabalha com o que foi retornado do arquivo do componente, a string com a estruturação do componente e a executa. O `console.log(memoryCard)` e o `console.log(memoryCardFront)` registram no console o valor das respectivas variáveis, as strings descritivas.
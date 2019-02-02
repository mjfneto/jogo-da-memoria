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

## 03 Tirando responsabilidades do nosso object

## 04 Inserindo o elemento cards-wrapper

Organização da page.

Inserir os components e objects na tela.

Essa organização facilita a manutenção do código, porque cada um dos níveis da pirâmide RSCSS tem sua responsabilidade, cada pasta é facilmente encontrada e contém as descrições de cada nível exclusivamente.

Se quero mudar a ordem de inserção dos elementos, isso é responsabilidade da page.

Sendo assim, a inserção do elemento pode ser feita no elemento `id="root"` com o método `insertAdjacentHTL`:

![insercao na page do cardWrapper](mdimg/24.04_organizando_a_page.png)

## 05 Eita! O cards-wrapper é uma String!

## 06 Transformando o cards-wrapper em um element

## 07 Adicionando alguns memory cards

## 08 Vixi, como vamos adicionar eventos no cartão?

[HTMLAttributes](https://www.w3schools.com/tags/ref_attributes.asp)

[Dom on-event handlers](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers)

> The Web platform provides several ways to get notified of DOM events.  Two common styles are: the generalized addEventListener() and a set of specific **on-event handlers**. This page focuses on the details of how the latter work.

>The on-event handlers are a group of properties offered by DOM elements to help manage how that element reacts to events. Elements can be interactive (e.g. links, buttons, images, forms) or non-interactive (e.g. the base document). Events are the actions like being clicked, detecting pressed keys, getting focus, etc. The on-event handler is usually named according to the event it is designed to react to, such as onclick, onkeypress, onfocus, etc.
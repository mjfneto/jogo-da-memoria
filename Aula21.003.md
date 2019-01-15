# Aula 21

## 003 Dando cor para o memory-card

### Organizando o CSS com RSCSS

#### O propósito do RSCSS

[Falando sobre RSCSS](https://willianjusten.com.br/falando-sobre-rscss/#comp)

Há duas abordagens principais para arquiteturas de CSS, a näive (CSS nativo, _nesting_) e a BEM (**B**lock, **E**lement, **M**odifier). A segunda surgiu como uma tentativa de diminuir a poluição visual do CSS causada pelo aninhamento, mas acabou arcando com o custo de poluir mais o markup, o que a primeira não fazia.

![Gráfico comparativo entre arquitetura de aninhamento e arquitetura BEM em termos de limpeza visual](mdimg/css-cleanliness-chart.png)

O RSCSS surgiu como uma resposta a esse problema, visando deixar tanto markup como CSS mais limpos.

> A ideia principal dele é criar um componente pai, que irá governar os elementos internos a partir do `child selector >`, também chamado de seletor filho ou descendente.

![Exemplo de utilização do seletor descendente com RSCSS](mdimg/rscss.png)

[Documentação do RSCSS](https://rscss.io/)

[Seletores CSS importante para aprender](https://willianjusten.com.br/alguns-seletores-css-importantes-para-aprender/)

#### Componentes

1. Tudo é um componente

> Os _componentes_ deverão ser nomeados com **pelo menos duas palavras**, separadas por um traço.

![exemplo de componente](mdimg/component-example.png)

Cada componente deve ter elementos.

#### Elementos

> Elementos são coisas dentro do seu componente. Devem ter classes com **somente uma palavra**.

![elementos de componentes](mdimg/component-elements.png)

. Elementos seletores

> Prefira usar o seletor filho `>` sempre que possível. Isso previne que a propriedade passe para componentes internos indesejados, e também performa melhor que seletores descendentes.

. Múltiplas palavras

> Para aqueles **elementos que precisam de uma ou mais palavras**, concatene elas **sem traços ou underscore**.

```CSS
.profile-box {
  > .firstname { /* ... */ }
  > .lastname { /* ... */ }
  > .avatar { /* ... */ }
}
```

. Evite usar tags como seletores

> **Use classe sempre que possível.** Tags podem vir com uma pequena perda de desempenho por não serem muito específicas e também podem não ser tão descritivas.

. Variações

> Componentes podem ter variações, assim como os elementos.

> As classes de variações devem ser prefixadas por um traço.

![Exemplos de nomeação para variações de componentes](mdimg/component-modifiers.png)

. Nomeando variações

```CSS
.like-button {
  &.-wide { /* ... */ }
  &.-short { /* ... */ }
  &.-disabled { /* ... */ }
}
```

#### Componentes aninhados

> Evite modificar o componente interno através do componente principal. **Prefira adicionar uma variação ao componente interno e aplicá-la a partir dele**.

```HTML
<div class='article-header'>
  <div class='vote-box -highlight'>
    ...
  </div>
  ...
</div>
```

```CSS
.vote-box {
  &.-highlight > .up { /* ... */ }
}
```

#### Layouts

> Componentes devem ser criados de forma que possam ser reutilizados em diferentes contextos. **Evite colocar essas propriedades nos componentes:**

. Posicionamento (position, top, left, right, bottom)

.Floats (float, clear)

. Margens (margin)

. Dimensões fixas (width, height) \* com exceção de elementos que precisam ter tamanhos fixos mesmo.

#### Defina posicionamento nos pais

> Se você realmente precisa definir algum tipo de posicionamento no componente, faça isso no componente pai que irá contê-lo. No exemplo abaixo, note que a largura e float são aplicadas no contexto do componente list, não no componente em si.

```CSS
.article-list {
  & {
    @include clearfix;
  }

  > .article-card {
    width: 33.3%;
    float: left;
  }
}

.article-card {
  & { /* ... */ }
  > .image { /* ... */ }
  > .title { /* ... */ }
  > .category { /* ... */ }
}
```

#### Helpers

> Essas classes tem como uso principal, sobrescrever valores, coloque-as em arquivos separados e as nomeie com underscore. Essas classes, em geral, são marcadas com `!important`. Portanto, **use com muita cautela e as evite o máximo possível**.

#### Estrutura CSS

Único conselho, colocar um componente por arquivo.

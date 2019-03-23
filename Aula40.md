# Aula 40

## 01 "HTML do nosso logo avatar"

O logo avatar é um object, pois é simples, podendo ser reutilizado em outros contextos.

OBS: Não confundir a palavra component do RSCSS com a palavra component do React.

>Se um object precisa ser reaproveitável, então é melhor não atribuir a ele propriedades de posicionamento.

## 02 "CSS do object logo-collabcode"

## 03 "HTML do nosso título"

## 04 "Vida pro title-collabcode com CSS"

## 05 "Deixar o conteúdo dinâmico"

## 06 "Letras muito grandes, cuidado"

## 07 "Idioma do nosso jogo"

```HTML
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />

    <title lang="en">Memory Game</title>

<!-- ... -->
```

É possível usar o atributo lang dentro das tags de abertura para especificar o idioma de um elemento. Fazemos isso acima, definindo o idioma do documento HTML como, principalmente, `pt-BR`, porém, especificamos que alguns elementos estão em outro idioma. Isso é bom para acessibilidade e para SEO.

> Por ser um atributo global, `lang` pode ser usado em qualquer tag.

```HTML
<p lang="pt-BR">Muito <em lang="en">text</em>.</p>
```

## 08 "Criando o nosso wrapper"

Criação de um **object estrutural.** Agrupa um conjunto de informações e as posiciona. É um object wrapper que envolve components.

## 09 "Refazendo o logo-collabcode (Dislexia)"

É possível aninhar elementos passando-os como argumentos para as funções que renderizam seus elementos pais.

```JS
(function() {
    const $root = document.querySelector('#root');

    const $loginButton = flatButton.render('Log in');
    const $signupButton = flatButton.render("Sign up", true);

    const $logoCollabcode = logoCollabcode.render();
    const $titleCollabcode = titleCollabcode.render('Welcome!');

    const $logoWrapper = logoWrapper.render($logoCollabcode); // a string $logoCollabcode é passada como argumento

    console.log($logoWrapper);

    $root.insertAdjacentHTML('beforeend', $loginButton);
    $root.insertAdjacentHTML('beforeend', $signupButton);
    $root.insertAdjacentHTML('beforeend', $logoWrapper);
    $root.insertAdjacentHTML('beforeend', $titleCollabcode);
})()
```

A string `$logoCollabcode` é argumento na renderização do `$logoWrapper` (`$children`). Perceba que a inserção desse HTML no `$root` substitui a inserção do `$logoCollabcode`.

```JS
const logoWrapper = (function() {
    const module = {};

    module.render = $children => {
        return `<div class="logo-wrapper">${$children}</div>`
    }

    return {
        render: module.render
    }
})();
```

## 10 "logo-wrapper com dois filhos"

## 11 "logo-wrapper recebendo vários filhos"

### Spread operator (`...`) para passar um número indeterminado de filhos

```JS
(function() {
    const $root = document.querySelector('#root');

    const $loginButton = flatButton.render('Log in');
    const $signupButton = flatButton.render("Sign up", true);

    const $logoCollabcode = logoCollabcode.render();
    const $titleCollabcode = titleCollabcode.render('Welcome!');

    const $logoWrapper = logoWrapper.render($logoCollabcode, $titleCollabcode); // dois argumentos são passados

    console.log($logoWrapper);

    $root.insertAdjacentHTML('beforeend', $loginButton);
    $root.insertAdjacentHTML('beforeend', $signupButton);
    $root.insertAdjacentHTML('beforeend', $logoWrapper);
})()
```

```JS
const logoWrapper = (function() {
    const module = {};

    module.render = (...$children) => { // ambos os argumentos são recebidos
        return `
            <div class="logo-wrapper">
                ${$children}
            </div>
        `
    }

    return {
        render: module.render
    }
})();
```

O spread operator cria um array com os argumentos passados.

![spread operator](mdimg/40.10_usando_spread_operator.png)

Mas isso gera um efeito indesejado, que é uma string separada por vírgulas sendo aninhada no wrapper (as vírgulas chegam a ser renderizadas na tela).

Para consertar isso, fazemos uso do método array `join()`:

[join() no w3schools.com](https://www.w3schools.com/jsref/jsref_join.asp)

```JS
const logoWrapper = (function() {
    const module = {};

    module.render = (...$children) => { // ambos os argumentos são recebidos
        return `
            <div class="logo-wrapper">
                ${$children.join('')}
            </div>
        `
    }

    return {
        render: module.render
    }
})();
```

![spread operator](mdimg/40.10_usando_spread_operator_com_join.png)
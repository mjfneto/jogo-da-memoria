# Aula 39

## 01 "Adicionar botão de signup"

## 02 "Refactory flat-button pra mudar content"

## 03 "Duas soluções, variação do flat-button"

## 04 "Refactory flat-button com class"

## 05 "Refactory flat-button sem class"

## 06 "Bug louco no flat-button"

## 07 "Deixar o flat-button único"

## 08 "Revisão"

Deixamos o componente único, o que é uma características de libraries como React. Usamos uma propriedade privada do nosso objeto `module` para fazer isso. `module._id` é incrementado toda vez que um novo componente é renderizado, o que garante essa modularidade, e escalabilidade do código. O uso de _template strings_ é chave nesse processo de diferenciação de componentes, pois permite que expressões, como o _operador ternário_ complementem o nosso código com a flexibilidade necessária pra criar variações de CSS a partir de JavaScript.

Essa maneira de reutilizar código com modularidade é uma das bases da framework React, que diferencia componentes únicos intrinsecamente, com o elemento sendo renderizado com uma classe específica. O `module._id` não é uma necessidade no React porque ele já faz parte do núcleo da framework.

```JS
const flatButton = (function() {
    const module = {};

    module._id = 0;

    module._style = active => {
      const $head = document.querySelector("head");

      const $style = document.createElement("style");

      $style.textContent = `
            .flat-button-${module._id} {
                background-color: ${active ? "#f25a70" : "#eae6da"};
                color: ${active ? "#fff" : "#fffcee"};
                font-size: 24px;
                font-weight: bold;
                width: 50vw;
                height: 176px;
                text-transform: uppercase;
            }
        `;

      $head.insertAdjacentElement("beforeend", $style);
    };

    module.render = (content = "", active = false) => {
        module._id++;
        module._style(active);
        return `<button class="flat-button-${module._id}">${content}</button>`
    }

    return {
        render: module.render
    }
})()
```
# Aula 36

## 01 "Botão animado com css"

## 02 "Deixa botão animado com opacity"

## 03 "Animando também a nossa camada"

## 04 "Add class -disable com JavaScript"

## 05 "Adicionar delay na camada"

## 06 "Acabou, só que não"

## 07 "Show, setTimeout! Oi event transitionend"

O setTimeout funciona para remover o elemento pai da layer e do botão, mas isso impacta negativamente a manutenção, porque não facilita a identificação dos valores de tempo de espera e da animação. Se uma alteração tivesse que ser feita em um deles, quem estivesse cuidando disso teria de procurar onde está o setTimeout para fazer a adequação dos valores. Sendo assim, trocamos o setTimeout para uma captação de evento do browser, que observa quando uma animação termina, iniciando uma função a partir deste ponto, é o event handler inline `onTransitionEnd`, que observa o evento `ontransitionend`.

```CSS
module._style = () => {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');

        $style.textContent = `
            .transparency-layer {
                display: block;
                background-color: rgba(58, 64, 66, 0.5);
                position: absolute;
                height: 100vh;
                width: 100vw;
                top: 0;
                transition: opacity 300ms 200ms linear;
                /* 300ms de animação + 200ms de delay = 500ms
                 * (tempo total da transição que leva para a camada ter a classe -disable)
                 */
            }

            .transparency-layer.-disable {
                opacity: 0;
            }
        `;

        $head.insertBefore($style, null);
    };
```

```JS
module.handleTransitionEnd = (event, $component) => {
        /*Ambos os filhos de layer-start são alvos do event handler onTransitionEnd,
         * logo, precisamos especificar que o fim da transição do transparency-layer,
         * quando ela já tem a classe -disable, é a ocorrência do evento ontransitionend,
         * e onTransitionEnd deve ser executado.
         */
        if (event.target.classList.contains('transparency-layer')) {
            console.log(event); /*transitionend { target: div.transparency-layer.-disable, propertyName: "opacity", pseudoElement: "" }*/
            $component.remove();
        }
    }
```

>Isso é bastante útil, pois nos permite fazer uma manutenção facilitada do código CSS dos arquivos dos components filhos de um object. No caso, nas strings que definem os estilos dos filhos do object layer-start (os components transparency-layer e game-button) podemos fazer simplesmente alterações no tempo de transição, sem a necessidade de procurar o arquivo que conteria o `setTimeout` para fazer as devidas adequações de valores de tempo. Isso economiza tempo de manutenção, o que é valioso para empresas.
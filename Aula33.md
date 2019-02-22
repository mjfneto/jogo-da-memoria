# Aula 33

## 01 "Criar um novo componente"

### Nomeclaturas na arquitetura RSCSS

A nomenclatura de components na arquiterura RSCSS tem uma regra: nomes compostos, separados por hífen (`-`).

```CSS
.primeiraPalavra-segundaPalavra {...}
```

Observe que, em JS, hífen não é permitido, por isso é recomendado o uso de camelCase.

```JS
const primeiraPalavraSegundapalavra;
```

Dentro dos components podem haver itens, que têm uma regra de nomeclatura: uma palavra, somente.

```JS
const item;
```

```CSS
.item {}
```


### Organização das pastas na arquitetura RSCSS

- Pasta component (components são mais simples, sem muitas responsabilidades)

- Pasta Object (cuida da parte estrutural)

## 02 "Estrutura e organização do point-bar"

Estrutura padrão para criação de um componente neste projeto.

```JS
const pointBar = (function (){

    const module = {};

    module.create = () => {
        return `
            <header>
                <span>1</span>
            </header>
        `
    };

    return {
        create: module.create
    }

}());
```
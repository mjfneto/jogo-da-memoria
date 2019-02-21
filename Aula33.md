# Aula 33

## 01 "Criar um novo componente"

### Nomeclaturas na arquitetura RSCSS

A nomenclatura de components na arquiterura RSCSS tem uma regra: nomes compostos, separados por hífen (`-`).

```JS
const primeiraPalavra-segundapalavra;
```

```CSS
.primeiraPalavra-segundaPalavra {...}
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
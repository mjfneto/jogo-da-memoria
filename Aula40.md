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
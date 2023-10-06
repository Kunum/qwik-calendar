# qwik-calendar

Um componente de calendário para aplicações qwik!

*O objetivo é recriar [wojtekmaj/react-calendar](https://github.com/wojtekmaj/react-calendar) para aplicações qwik. Essa biblioteca ainda está em desenvolvimento, portanto ainda há muitas features incompletas.*

## Instalação

Você pode instalar esse essa biblioteca de componentes usando:

```shell
npm i qwik-calendar
```

## Uso

```jsx
import { Calendar } from "./components/calendar";

export default () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Calendar by Kunum</title>
      </head>
      <body>
        <Calendar/>
      </body>
    </>
  );
};
```

## Guia para o usuário

### Calendar

| Nome do Prop   | Descrição                                 | Valor padrão | Valores de exemplo                             |
| ----------- | ------------------------------------------- | ------------- | ------------------------------------------ |
| onClickDay$ | Função chamada quando o usuário clica em um dia. | n/a           | `(value) => alert('Dia clicado: ', value)` |

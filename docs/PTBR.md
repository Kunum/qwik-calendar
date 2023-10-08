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
import { Calendar } from "qwik-calendar";

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

```tsx
import { Calendar } from "qwik-calendar";

<Calendar/>
```

| Nome do Prop     | Tipo                                             | Descrição                                                 | Valor padrão                               | Valores de exemplo             |
| ---------------- | ------------------------------------------------ | --------------------------------------------------------- | ------------------------------------------ | ------------------------------ |
| onClickDay$      | Função chamada quando o usuário clica em um dia. | n/a                                                       | `(value) => alert('Dia clicado: ', value)` |                                |
| calendarStyles   | CSSProperties\| undefined                        | Estilos CSS para o container do calendário                | n/a                                        | `{borderRadius: "10px"}`       |
| navigationStyles | CSSProperties\| undefined                        | Estilos CSS para o container da navegação (header)        | n/a                                        | `{backgroundColor: "#DDDDDD"}` |
| monthViewStyles  | CSSProperties\| undefined                        | Estilos CSS para o container do mês (dias)                | n/a                                        | `{backgroundColor: "#EEEEEE"}` |
| dayStyles        | CSSProperties\| undefined                        | Estilos CSS para cada dia individual                      | n/a                                        | `{borderRadius: "50%"}`        |
| daysStyles       | CSSProperties\| undefined                        | Estilos CSS para o container dos dias                     | n/a                                        | `{backgroundColor: "#EEEEEE"}` |
| invalidDayStyles | CSSProperties\| undefined                        | Estilos CSS para cada dia inválido (dias de outros meses) | n/a                                        | `{color: "#FEFEFE"}`           |
| dayTextColor     | string \| undefined                              | A cor do número do dia                                    | `"#00000"`                                 | `"#101101"`                    |
| weekendTextColor | string \| undefined                              | A cor do número do dia de final de semana                 | `"#d10000"`                                | `"ff0000"`                     |
| todayBgColor     | string \| undefined                              | A cor de fundo do dia atual no calendário                 | `"#ffff76"`                                | `"ffe386"`                     |

## Documentação em outros idiomas

* [EN](https://github.com/Kunum/qwik-calendar/blob/main/docs/EN.md)

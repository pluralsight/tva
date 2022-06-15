export type { IconName } from './getIconString'

type ColorKeyword =
  | 'aliceblue'
  | 'antiquewhite'
  | 'aqua'
  | 'aquamarine'
  | 'azure'
  | 'beige'
  | 'bisque'
  | 'black'
  | 'blanchedalmond'
  | 'blue'
  | 'blueviolet'
  | 'brown'
  | 'burlywood'
  | 'cadetblue'
  | 'chartreuse'
  | 'chocolate'
  | 'coral'
  | 'cornflowerblue'
  | 'cornsilk'
  | 'crimson'
  | 'cyan'
  | 'darkblue'
  | 'darkcyan'
  | 'darkgoldenrod'
  | 'darkgray'
  | 'darkgreen'
  | 'darkgrey'
  | 'darkkhaki'
  | 'darkmagenta'
  | 'darkolivegreen'
  | 'darkorange'
  | 'darkorchid'
  | 'darkred'
  | 'darksalmon'
  | 'darkseagreen'
  | 'darkslateblue'
  | 'darkslategray'
  | 'darkslategrey'
  | 'darkturquoise'
  | 'darkviolet'
  | 'deeppink'
  | 'deepskyblue'
  | 'dimgray'
  | 'dimgrey'
  | 'dodgerblue'
  | 'firebrick'
  | 'floralwhite'
  | 'forestgreen'
  | 'fuchsia'
  | 'gainsboro'
  | 'ghostwhite'
  | 'gold'
  | 'golden'
  | 'gray'
  | 'green'
  | 'greenyellow'
  | 'grey'
  | 'honeydew'
  | 'hotpink'
  | 'indianred'
  | 'indigo'
  | 'ivory'
  | 'khaki'
  | 'lavender'
  | 'lavenderblush'
  | 'lawngreen'
  | 'lemonchiffon'
  | 'lightblue'
  | 'lightcoral'
  | 'lightcyan'
  | 'lightgoldenrodyellow'
  | 'lightgray'
  | 'lightgreen'
  | 'lightgrey'
  | 'lightpink'
  | 'lightsalmon'
  | 'lightseagreen'
  | 'lightskyblue'
  | 'lightslategray'
  | 'lightslategrey'
  | 'lightsteelblue'
  | 'lightyellow'
  | 'lime'
  | 'limegreen'
  | 'linen'
  | 'magenta'
  | 'maroon'
  | 'mediumaquamarine'
  | 'mediumblue'
  | 'mediumorchid'
  | 'mediumpurple'
  | 'mediumseagreen'
  | 'mediumslateblue'
  | 'mediumspringgreen'
  | 'mediumturquoise'
  | 'mediumvioletred'
  | 'midnightblue'
  | 'mintcream'
  | 'mistyrose'
  | 'moccasin'
  | 'navajowhite'
  | 'navy'
  | 'oldlace'
  | 'olive'
  | 'olivedrab'
  | 'orange'
  | 'orangered'
  | 'orchid'
  | 'palegoldenrod'
  | 'palegreen'
  | 'paleturquoise'
  | 'palevioletred'
  | 'papayawhip'
  | 'peachpuff'
  | 'peru'
  | 'pink'
  | 'plum'
  | 'powderblue'
  | 'purple'
  | 'rebeccapurple'
  | 'red'
  | 'rosybrown'
  | 'royalblue'
  | 'saddlebrown'
  | 'salmon'
  | 'sandybrown'
  | 'seagreen'
  | 'seashell'
  | 'sienna'
  | 'silver'
  | 'skyblue'
  | 'slateblue'
  | 'slategray'
  | 'slategrey'
  | 'snow'
  | 'springgreen'
  | 'steelblue'
  | 'tan'
  | 'teal'
  | 'thistle'
  | 'tomato'
  | 'turquoise'
  | 'violet'
  | 'wheat'
  | 'white'
  | 'whitesmoke'
  | 'yellow'
  | 'yellowgreen'

type HexDigit = DecDigit | 'a' | 'b' | 'c' | 'd' | 'e' | 'f'
type DecDigit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
type Digits0to4 = '0' | '1' | '2' | '3' | '4'

type WhiteSpace = ' '
type Trim<T> = T extends `${WhiteSpace}${infer U}`
  ? Trim<U>
  : T extends `${infer U}${WhiteSpace}`
  ? Trim<U>
  : T

type AngleType = '' | 'deg' | 'rad' | 'grad' | 'turn'

type Angle<T extends string> = T extends `${number}${AngleType}` ? 1 : never

type Hex3 = `${HexDigit}${HexDigit}${HexDigit}`
type Hex4 = `${HexDigit}${HexDigit}${HexDigit}${HexDigit}`

type HexColor<T extends string> = Lowercase<T> extends `#${Hex3}`
  ? T
  : Lowercase<T> extends `#${Hex3}${infer Rest}`
  ? Rest extends Hex3
    ? T
    : Rest extends HexDigit
    ? T
    : Lowercase<T> extends `#${Hex4}${infer Rest}`
    ? Rest extends Hex4
      ? T
      : never
    : never
  : never

type OnlyDecDigits<T extends string> = T extends `${DecDigit}${infer Rest}`
  ? Rest extends ''
    ? 1
    : OnlyDecDigits<Rest>
  : never

type IsDecNumber<T extends string> =
  T extends `${infer Integer}.${infer Fractional}`
    ? Integer extends ''
      ? OnlyDecDigits<Fractional>
      : Fractional extends ''
      ? OnlyDecDigits<Integer>
      : OnlyDecDigits<Integer> & OnlyDecDigits<Fractional>
    : OnlyDecDigits<T>

type IntegerPart<T extends string> = T extends `${infer I}.${infer F}` ? I : T

type IsInteger<T extends string> = 1 extends IsDecNumber<T>
  ? T extends IntegerPart<T>
    ? 1
    : never
  : never

type Less100<T extends string> = IsDecNumber<T> extends 1
  ? IntegerPart<T> extends `${DecDigit}` | `${DecDigit}${DecDigit}` | '100'
    ? 1
    : never
  : never

type Color255<T extends string> = 1 extends IsInteger<T>
  ? T extends
      | `${DecDigit}`
      | `${DecDigit}${DecDigit}`
      | `1${DecDigit}${DecDigit}`
      | `2${Digits0to4}${DecDigit}`
      | `25${Digits0to4 | '5'}`
    ? 1
    : never
  : never

type IsPercent<T extends string> = '0' extends T
  ? 1
  : T extends `${infer P}%`
  ? Less100<P>
  : never

type IsColorValue<T extends string> = IsPercent<T> | Color255<T>

type RGB<T extends string> = T extends `rgb(${infer R},${infer G},${infer B})`
  ? '111' extends `${IsColorValue<Trim<R>>}${IsColorValue<
      Trim<G>
    >}${IsColorValue<Trim<B>>}`
    ? T
    : never
  : never

type Opacity<T extends string> = IsDecNumber<T> | IsPercent<T>

type RGBA<T extends string> =
  T extends `rgba(${infer R},${infer G},${infer B},${infer O})`
    ? '1111' extends `${IsColorValue<Trim<R>>}${IsColorValue<
        Trim<G>
      >}${IsColorValue<Trim<B>>}${Opacity<Trim<O>>}`
      ? T
      : never
    : never

type RGB4<T extends string> =
  T extends `rgb(${infer R}${WhiteSpace}${infer G}${WhiteSpace}${infer B})`
    ? '111' extends `${IsColorValue<Trim<R>>}${IsColorValue<
        Trim<G>
      >}${IsColorValue<Trim<B>>}`
      ? T
      : never
    : never

type RGBA4<T extends string> =
  T extends `rgb(${infer R}${WhiteSpace}${infer G}${WhiteSpace}${infer B}/${infer O})`
    ? '1111' extends `${IsColorValue<Trim<R>>}${IsColorValue<
        Trim<G>
      >}${IsColorValue<Trim<B>>}${Opacity<Trim<O>>}`
      ? T
      : never
    : never

type HSL<T extends string> = T extends `hsl(${infer H},${infer S},${infer L})`
  ? `111` extends `${Angle<Trim<H>>}${IsPercent<Trim<S>>}${IsPercent<Trim<L>>}`
    ? T
    : never
  : never

type HSLA<T extends string> =
  T extends `hsla(${infer H},${infer S},${infer L},${infer O})`
    ? `1111` extends `${Angle<Trim<H>>}${IsPercent<Trim<S>>}${IsPercent<
        Trim<L>
      >}${Opacity<Trim<O>>}`
      ? T
      : never
    : never

type HSL4<T extends string> =
  T extends `hsl(${infer H}${WhiteSpace}${infer S}${WhiteSpace}${infer L})`
    ? `111` extends `${Angle<Trim<H>>}${IsPercent<Trim<S>>}${IsPercent<
        Trim<L>
      >}`
      ? T
      : never
    : never

type HSLA4<T extends string> =
  T extends `hsl(${infer H}${WhiteSpace}${infer S}${WhiteSpace}${infer L}/${infer O})`
    ? `1111` extends `${Angle<Trim<H>>}${IsPercent<Trim<S>>}${IsPercent<
        Trim<L>
      >}${Opacity<Trim<O>>}`
      ? T
      : never
    : never

type HWB<T extends string> =
  T extends `hwb(${infer H}${WhiteSpace}${infer W}${WhiteSpace}${infer B})`
    ? `111` extends `${Angle<Trim<H>>}${IsPercent<Trim<W>>}${IsPercent<
        Trim<B>
      >}`
      ? T
      : never
    : never

type HWBA<T extends string> =
  T extends `hwb(${infer H}${WhiteSpace}${infer W}${WhiteSpace}${infer B}/${infer O})`
    ? `1111` extends `${Angle<Trim<H>>}${IsPercent<Trim<W>>}${IsPercent<
        Trim<B>
      >}${Opacity<Trim<O>>}`
      ? T
      : never
    : never

type ColorValue<T extends string> =
  | HexColor<T>
  | RGB<T>
  | RGBA<T>
  | RGB4<T>
  | RGBA4<T>
  | HSL<T>
  | HSLA<T>
  | HSL4<T>
  | HSLA4<T>
  | HWB<T>
  | HWBA<T>

export type CSSColor<T extends string> =
  | ColorValue<T>
  | ColorKeyword
  | 'currentColor'
  | 'transparent'
  | 'inherit'
  | 'initial'

// https://www.typescriptlang.org/play?#code/C4TwDgpgBAwg9gGzgJwNIRAdxQEygXgCgooAfKAcgEMEBLAYwgCMEBXCC4syqgO2FoBHdpgAWtYBy7lqwqpxIyqcgLZVktXlMU8AXq2TbuFJhFoBzIzKa0AzsKuUWVegGsFx573qiIOGipwvDge1myOJuEAbrSIEMChTshwmLyJJgYIWHBwIdKU9FQ48Szs6T7qwIasthE+cPSIVJLlKDStyLwAZkiYEMildSi8trQI7vkU9BoqtkHlIHzp-siug8vqrvSLaZMrruaIxbzJeToU++bIVCAbq1cQELvnl4a3e5uuolSutHeuaks-HkH1WiFoUQgDye-zavEssOQPloZ2M+0MqJk+1sAXmoNctSo0OeaM2tgQzWY4X+5MpVxuNIpkge7xem2ABmEcDsEX2MTiCT2jzAYE0ExewtsrhA6z2tBU9NZaPlLOWuUsA2pky6tEMTA0bnSPTaCDEEgiXRQEFswGJRtYPlGIPO5iomlsTBQcHS5lEcBtZpak0OCExlBDxx91yVMjtwcMTxAEAQvSjGHSfq0IGKmAzcGAot44uMmhwtD4GPSpYs3smEJQMcoXx+f0mFMhwX66XbT2Kmpqom7VFScfOCAggW84i6lpJMjovuAsrHFlEwEa1wQ3dX65228XEaepyTKZS+7XivPtoTc8oC4vbyvheL853OIQk6vhNHxnvwClMpaiui60sy0ZfkyUKPm2b6SMmy6-juJ6pjBKgRHQaE-q+Wi3hQgJPMAzrGGoyR4ucaFlqwaiqOomgRBRtBUQhMgMVRKDImGeF+IxKhgAYYDjukrGzBARI3kJ3FUaBVJlJMwm2GAGjwlhlDCRyyBcjyEmUSo-LjlUfhCSivA7sxqmaOuhhUCoRk2iAyS1EJDSFKMuG8FQURUAAVik4hBuc7lRI2FBHBSjDpOCkIRXQkI4NcTARdc8IRHCGqGZM7HiJxYA0FCRxHrk6Q5eOKkUMV8Scqw3KOZM5V6fEla1VQOWLGaYBFaJPh8TOHXIKwRVikVbA2bVKR9mZZX8YJkx6hA9CFHxyACREjXnA5MrJKk6TJIsCATTiOA4OO+opLh76fpMOLBBtp3pN+4mXaJti+Cmd20E87lvQgkLIHd0r7ZBAN0uBl2Qaql28Gel2KZo5ilTajx7UBxiEbhkjtJMwDiDa03nMAcBqPj6TqZpNXnPVgrnGIomU8YgYRPTtiBK4ETIVD5xs5gcaEKAkBQAAEhAAAeAAiFgSAQUAi3NYvmBLSgUJ4isyPQyuUCExgcMYXScLz0DS-QssS-glAAAxqxQACMFsAEwWwAzBbAAsFsAKwWwAbBbADsFsABwWwAnLr4D6+L-6m-jTuSxQ5vGNbxh28YjvGC7hA86HUAAOp+RAADKOWMDHlAZ3zAAqMwADxlwAfJLZdQMLkjBLYUAAAYACQAN45+aBcuBAAC+3eaF0-RQAAqoPbdQFwJAAPxQBX8qVxPddz1AABcS+N0Lzc4K3ndd6P49T93veSP3jDT7PJB33fi-Lyoq-r-f9-b2XADc6d61AACC8Jxxl0zibCgFtijmAttcDWsZoEW3UrsUu0AAHmHHNXXe+9W42iUuYOuJsN4Nybr2Q+3deBMX6MPLuKCgGh2nhve+i9Lb0LvtvLQP0f6Z0FkLe2ksj5cKNsASh-Dw5COFgIuhv8uHRxNnwsRIju7CLloIhRcilGiNFiItuHC+ZcPgEgZA6CiEtygNg2GeDb5QAADIpH6C5CA1c65GIPu3AAxCo7hdC35QEfsw7e1i+hIioLUBxGDiGuPcfbShJ9kBQAAErWkEVorxC84kJNCcYrh9tmFeJ8ckt+294k2nSc4xREhsl5O8UvcpeS-E2MCcE2uxTD5uK7lIqJ3Rx6FMSdUipKSulNIFsLJ2PTekMKqaMiZW8oBsP6CMipm8ZnIHKawiA7CkFQAAPK8CyAbARthDF7zCaY+E5iCEDKPrs+Rx8OkxK6Z45Ji9+lONbmAuZjC5nby2TsmW4d9ldJrss6ZqzZnrIAJK2ANgAOXIQYwhhzjHHNwQQM5zz24jxuVAUF-AoQUIAHTorHjEgAYtcegAggg0HuTkzF2KNQDNeRMxeXyQCXKUfsklLhyXuQQACiZ28OVktiNy+lHhJmVOZayiQ+ysXMn6LysVUyJU-LZZXGVOLkB1wAGSbO2Sy5VUrK4Cq5TQeVXjPm6slf+Bx2joBqo1AABUqAczBJiqhmORffOFLqj7RMxYPfF1zCVQCJVSt+i9QWArLjazFtg7X9GdUct1JzJYb0tgM8FUKYXWryY-dNtL+iOuQMAEJbyoBpo+UC9hNTK0gt-pY60thLam1NgmhFSakX4Pvhmua0KVCmFhY4+FzimE5ppbK5Ahbi2NNRRc-ViTuCzsNlcy1N8ZBNvNqWkdoyVlVuSTu2tmc9EoBtq7V2rbnGIrwam9Nsb80DvKbmmd3cV0zzmV48gi7xHPrnTfN9b8P2W2-UutRQHxGvoVXfD9Ntn2-MjnAJ2lCX1-vvlB12MG2VwejjId2obR1bt6fupZ1bFnRvBfa2xBFz1YPbVe++sdFaoqjXhyN5yCXj3tYPAApOB0Zi9622Ebc2yu9rX7bprUssFtgj3IAAGo0HYFR11ODzFkYo-wEJ5BpMnrPbXaNsSADiAAhRTl6U2evOcgcwTAAAUbHbmDwADR2agPpxzznDODwAJQ8epVbS2Ccn1d3BdJuT4Rq5V1iTXGulDguIBQKFhTT9K76aizFqTcXZPyfsUlwzqWkm8fGWJkjxHgUSd-hswuEgQAmZo5Lbt9Be39o0zG8jSJKO6fWQZwzf8avKY9XfL1YS26WaYFQWzgbOluYmzE1zTnptQA83N31GyvP5d8-5-zDGh0kKC+l-RCXssRdS93WL+2svhZXil6LJ29vxfOzl47XcKsuCqxd5+Gy8ulqY0V0rgKSOdaM07Xr7qiDmZnSN8bvrYmUIvvnQuQ9nOufPrnK+CP5see8w+ygG2tvepuyF+7R3ru7YJ2FpLV20uk8S1XXL0W1sVNyT93dZrxN6aM3-IHg2219dBwNizVnIcYuh8jvu8P2lBqRz3FHYv3ODwAPTOZW5j0dfnNusZJxlg7b3K6ReJ6du7ZOq4U-x5rwnK9aeUOe-QV7SWPt06+xW4re7WfrP5nnSxwPk285IFz5xbdRDkkF0G-mU3fV51Dxiyxq2sdtw2zPQL1DDsr35o91TbX1NJbzqn2wrXGAZ6rpYz7jLCsEdZzU-7kj3c9d99RnnKLtvtwDxSIP48Q9LYxeH9vQao9d-Hkr+nYzY9x-V4n7XKe9c57U1OquWeJ+5-awXx7VubdVzt7hh5Jf5ll73RXzh7vOcDNM97neM6m8t5iSHkXl8ZfzfD1fuHA9xfjyj8rjfQ-Lbx4b0fUfSXx9pfn-nivLPv-lPtroXvbsXt9qXk7marvjolXgfqikfvXt6mfs5pflLqLo-s5nfpgdftgfNlHgrvNv3jHhth-iPoAkns-H-jdgAdPkAdnvQWAUvpVqANrmvgPhvlAVvjAfknAdAPzFnMZjXkpiDigUNqIJgDZugTDtLgQb6lnHIVgdfLLq-tSu-p-njlQlQWPkwaAUllnPoengwc-BblwdSjwSVszvwb9q7sIdXofrVsfqIf7tIefgLMofgaofNkoffqjk-jEh5sQcttHqOu-hQQnrob-sYXnqYZXEYXPgYTTqwS9uwbbkXgVlYc7nwe-AIbAKbmTk4TzoMkLNJs1l1hUezg4uQF1pznXLUezvUdwG7h7o0uQK0dXg0QLPvs1p0c0R0cIX0Q4datGjAHnHnOUaIUfgUWdmTt0dJugNkMgHgCrAYIYPwNJvAklApOoARBbJoL4BoAkCWCZAIBjIQMUPQBSIYFAF0KwN4FylAC4IwGAP+FMcUWYtZo0PotvOMZMRlg4p5tvFENyDgOnHLnLlAPan-BMQQPgAiYiUiciSiaiciYQC8RAG8bdsgNZhQC4lQISRQJ5hifNFie8RlniS4vNDSarCSZididJlSYSVQDrPSWSYyZSfibSfND1Oya8RSfoniZWPyeSTiXiYcf0BIMSaSQKeKRQFUHwLsRsQkKKZyUKRQJoBIOWFuGqYKSgHifQOsQRFsXqfKRDpbA5jbA5vbJ5jKQyfqbiRQBaZxlaa6fbJxnaWaUyc6VZmNjbKbDaYGU7IGabLiqbK7F6bKWKT6SNv6abO6QmQ5iGa6bipGfaRyY6XiWfvbB7IGW-E7K6WWgmVGQ6fKTmXmRAg5lAIWdWU2p6RmXKT6TmdAtWbWcWQ2d6VyTmZHAYLwG2UWfWaWZmeWYHvbN7IHPSDgAOXWSWY2TGd2bSNZvmfWdWQGUWWGaeumV2RqU3mNiuUmVAOudWa7HOSSdGeqQab6TZmmjbFALafOZeU6S6UeZxveZ2ReVmdedZrefeVAFCWmcOU2VyS+TbG+R6f+VAIBY+V+RWabEeQmR2UBQubuWOZWVCAhW+UOTBaOQgNZrmfBeuR2ZBaeR+WWc2WhabBAphcRVCaRchU+dme4QRTRdhTuVeVITZgRdRURWxZ+eWcxXmaxYhXRWefxc2YJVRRhbxSJVAPRTKYQJCcGn-KCpYvCWiRpZpeieRVyS4q6PIOxU6QSSyQZeJbpSZRZThbGQLvbM2muSuQxV+XGdZgGUGcmabI5bhdZiGfmQ5VZYuXhQRfZYOR5QpYQEAA

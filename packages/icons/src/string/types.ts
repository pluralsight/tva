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
    : Lowercase<T> extends `#${Hex4}${infer Rest2}`
    ? Rest2 extends Hex4
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

type IntegerPart<T extends string> = T extends `${infer I}.${number}` ? I : T

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

// https://www.typescriptlang.org/play?#code/C4TwDgpgBAwg9gGzgJwNIRAdxQEygXgCgooAfKAcgEMEBLAYwgCMEBXCC4syqgO2FoBHdpgAWtYBy7lqwqpxIyqcgLZVktXlMU8AXq2TbuFJhFoBzIzKa0AzsKuUWVegGsFx573qiIOGipwvDge1myOJuEAbrSIEMChTshwmLyJJgYIWHBwIdKU9FQ48Szs6T7qwIasthE+cPSIVJLlKDStyLwAZkiYEMildSi8trQI7vkU9BoqtkHlIHzp-siug8vqrvSLaZMrruaIxbzJeToU++bIVCAbq1cQELvnl4a3e5uuolSutHeuaks-HkH1WiFoUQgDye-zavEssOQPloZ2M+0MqJk+1sAXmoNctSo0OeaM2tgQzWY4X+5MpVxuNIpkge7xem2ABmEcDsEX2MTiCT2jzAYE0ExewtsrhA6z2tBU9NZaPlLOWuUsA2pky6tEMTA0bnSPTaCDEEgiXRQEFswGJRtYPlGIPO5iomlsTBQcHS5lEcBtZpak0OCExlBDxx91yVMjtwcMTxAEAQvSjGHSfq0IGKmAzcGAot44uMmhwtD4GPSpYs3smEJQMcoXx+f0mFMhwX66XbT2Kmpqom7VFScfOCAggW84i6lpJMjovuAsrHFlEwEa1wQ3dX65228XEaepyTKZS+7XivPtoTc8oC4vbyvheL853OIQk6vhNHxnvwClMpaiui60sy0ZfkyUKPm2b6SMmy6-juJ6pjBKgRHQaE-q+Wi3hQgJPMAzrGGoyR4ucaFlqwaiqOomgRBRtBUQhMgMVRKDImGeF+IxKhgAYYDjukrGzBARI3kJ3FUaBVJlJMwm2GAGjwlhlDCRyyBcjyEmUSo-LjlUfhCSivA7sxqmaOuhhUCoRk2iAyS1EJDSFKMuG8FQURUAAVik4hBuc7lRI2FBHBSjDpOCkIRXQkI4NcTARdc8IRHCGqGZM7HiJxYA0FCRxHrk6Q5eOKkUMV8Scqw3KOZM5V6fEla1VQOWLGaYBFaJPh8TOHXIKwRVikVbA2bVKR9mZZX8YJkx6hA9CFHxyACREjXnA5MrJKk6TJIsCATTiOA4OO+opLh76fpMOLBBtp3pN+4mXaJti+Cmd20E87lvQgkLIHd0r7ZBAN0uBl2Qaql28Gel2KZo5ilTajx7UBxiEbhkjtJMwDiDa03nMAcBqPj6TqZpNXnPVgrnGIomU8YgYRPTtiBK4ETIVD5xs5gcaEKAkBQAAEhAAAeAAiFgSAQUAi3NYvmBLSgUJ4isyPQyuUCExgcMYXScLz0DS-QssS-glAAAxqxQACMFsAEwWwAzBbAAsFsAKwWwAbBbADsFsABwWwAnLr4D6+L-6m-jTuSxQ5vGNbxh28YjvGC7hA86HUAAOp+RAADKOWMDHlAZ3zAAqMwADxlwAfJLZdQMLkjBLYUAAAYACQAN45+aBcuBAAC+3eaF0-RQAAqoPbdQFwJAAPxQBX8qVxPddz1AABcS+N0Lzc4K3ndd6P49T93veSP3jDT7PJB33fi-Lyoq-r-f9-b2XADc6d61AACC8Jxxl0zibCgFtijmAttcDWsZoEW3UrsUu0AAHmHHNXXe+9W42iUuYOuJsN4Nybr2Q+3deBMX6MPLuKCgGh2nhve+i9Lb0LvtvLQP0f6Z0FkLe2ksj5cKNsASh-Dw5COFgIuhv8uHRxNnwsRIju7CLloIhRcilGiNFiItuHC+ZcPgEgZA6CiEtygNg2GeDb5QAADIpH6C5CA1c65GIPu3AAxCo7hdC35QEfsw7e1i+hIioLUBxGDiGuPcfbShJ9kBQAAErWkEVorxC84kJNCcYrh9tmFeJ8ckt+294k2nSc4xREhsl5O8UvcpeS-E2MCcE2uxTD5uK7lIqJ3Rx6FOADbTxFS+mLy6TbJpAthZO2qX0t+uSJnTNYRAdh0yalsP6OU2Z7CkFQAAPK8CyAbARthDF7zCaY+E5iCHDKPrs+Rx8OkxK6b0nJqSilONbmA8ZKSmEzM2dskAlylH7K6TXFZUAlnIG0dAAAkrYA2AA5chBjCGHOMcc3BBAznPPbiPG5UBwX8ChBQgAdJiseMSABi1x6ACCCDQe5kzsW4o1MM150zF5bJ2TLcO+yyUuEpe5BAgLPlcopbEXljKPALMqayn57K-mVxxcyfo-LxVby+Wyw2HLZX0oVVAAAZCqqVaqZWCp5TQRVXjt6St+RIfZtcwV0vlcgAACpUA5mCTFVDMai++CLXVH2idiwehKu5kJUKYZANKGHYqBWXW1kK5V4vhcM5Fpz76W2GZCmFcKHHlMfmmzVjrnWNLeZU1NRbVnLJqcCuZyz1mWOtLYS2ptTYuqOe6k5ksN7prmrCkN-QQnoo+ckxecaNROuQMAPtiLnEXOlRIG+5Bp0Gtnd3S1iT46NrFRUxhpbK3zOSWW0F6y9EoBtq7V2zakWtpRUQFNabbDDt7TavJOb0ULvETPItXj53LpncoruK6b4frfvOy237F2-v-e+pVd95022XRyyOcAnaUIg4B++MHXZwb+Qh6OMh3bhsHVAAdfT91ApBTG2wDrbEEXPc4pNnq76x0Vui6NT7CNRvOUS8eDrB4AFJIMTMXrW2w9bG2Vwda-CZJH1mQqPcgAAajQdgNGsGXvMZCyjSJqONPILJk9Z6bXrNiQAcQAELKbdTg5Nd9vVhLbsgcwTAAAUnHbmDwADQuagEZ9znmTODwAJT8YeVbS2CcX3dxk4gFACnwjVyrrEmuNdKGRf0TFpTT9K5GcS8l2wsm0v2IyyZ7LSSBNVM+WRitZH1kbMLhIEA5m6Mm07fQbtoaQnkHU1R-gWbDOmb-g11T9GSA2eMXZhzVBnPXOJXEnzU3x7eY83NmJfnFt+o2QFkrwXQuhaY5OkhXcUvRcUwV+L2WIu5ai-J47cWV5ZaS+dvL13Ctna7jVlwdWbvPw2cVotUziM7vLXugHB7f7GZM07Ablmhs7xffZpznnYmUIvvnQuQ9PPefPrnK+aOltQD84F7NlBtu7Z9Q9y7+XPuVwS-dg7F3UtParndnLj3YvPaS5tzdZXJPA9I1WkHmcwd-whyN2jg3r3WfOXDybfrEeY77qj9p02Mc9yxwr3zg8AD0nn1sE9YyFnbHHacs-S6dmnh2rus8Zy983FO2eULe-QD7GXvvs9+1z-7FWgdVckXnSxkOPXi+G+c0Q5JpdYv5rNv1edI9YssRtwnbdtsz3C1QwBJ2V782txRrr46Mt5yzxpxg3WMuWJ+8y93FSSOLL57a-mvv+si5U1DwPMO9vtxDxSMP02I+raxdH3v0248D-HjrjnEbE9J8N9Q9Pz9M9m+z5p4vVd8-z8L1pqupeacO6d1XF3+GHkse557s13vOG++F4msXaK29tw7138eEe5eXzV7j6PT+UcD0V+POPuuCMT8tsnjft3NPpTnPjlmvkvivCvuATnpTpvvvrSofh7jXtXmsj7pYkLv7m2i3o3u3qHp5o-irvLp-p5m-kQc-iQbjnHlrrjqPgnttgAVPmnqAQXrAXnqwYvrnhvi9tvqAJTnvmPgRkgZXjzqgdWpIlnGZrgY1tfj6qIJgPDrjoQcjtjl-jElnEjqrpQX6vjoISkv-oAaTqnqgjPpXGAedhAVwSvFnBwUXlYc-EVq7uXsIZVigXuqfjopIQ3pfs3rIbZvIYoX6soVodfJ5hoe-qoerjQWtvHqxv-owSniARluYbTpYZTjYavmwVXI4fbrVnwc7mXqVi4V7m4SfjXoeuTk9j4QHiMkLLJu1nEqZg0YLg4uQGDsLnXG0X1h0dwHXn7tpgLPXg0X0T0eQH0ZgQMfzJIcMV4T1oennHnPUdIWLrAJUazp0asfougNkMgHgCrAYIYPwLJvAklApOoARBbJoL4BoAkCWCZAIBjIQMUPQBSIYFAF0KwN4DylAC4IwGAP+EsdUSco5o0PotvDAAsUsTXP5tvFENyDgOnBrhrlAA6n-AsQQPgJiVidiTibiXiTiYQL8RAP8XTigI5hQC4lQFSRQP5oSfNMSQCZduSS4vNKyarLSUSSSbJsyVSVQDrByfSVyUyRSWyfND1AKX8YyfouSZWBKQyaScgOSVcf0BIDSXSZKQqeSVUHwGcYcQkHKUKdKRQJoBIOWFuAaVKWSVMAcQRMcRaZqRQFLpbG5jbG5vbP5mqZyZaYqY6Q5o5pbDxi6YGfbDxh6fadyb6UwBNjbKbG6bGU7LGabPiqbK7GGeqfKRGXDtGabMGTmW5gmYGfiqmZ6YKd6eSXfvbB7LGW-E7IGYRjmWmV6Q6RWVWRAm5lALWe2Q2qGSWRqRGRWdAu2Z2fWT2eGcKRWZHAYLwEOXWd2Y2aWc2aHvbN7IHPSDgDOV2Q2b2RmeObSI5tWd2e2TGXWUmaesWWOUaR3hNgeXmVAMee2a7FubSemYaVaU6XeVAO6dua+T6U6Txnef+SGfOX2cKe+UMjwsiUWcBTuUaX+QBZ+f+ZBeeS+WWRQC2abHeTmSOdBT+eWUua2VCJhf+XOd+ahehURSOVAMiY+aOShYuQgI5pWabBAhRd2VRVADRThWRQoYxVWaxU+XRf2TxUxSxcedhaRc2cJXxWJWxdRQJU2UJU5iJYRTJVhXJbRYQEiVACSn-OCpYhifiYZUZQSQpcKS4q6PIBeVaZSbyZZYJWZbZY5RJZmX6fbI2keQeVxQ6VmY5jGXGfmabF5f2aHgmdWZ5c5buQxUxR5bOYFWqenEAA

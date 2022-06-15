export type { IconName } from './getIconString'

type ColorKeyword =
  | 'black'
  | 'silver'
  | 'gray'
  | 'white'
  | 'maroon'
  | 'red'
  | 'purple'
  | 'fuchsia'
  | 'green'
  | 'lime'
  | 'olive'
  | 'yellow'
  | 'navy'
  | 'blue'
  | 'teal'
  | 'aqua'
  | 'orange'
  | 'aliceblue'
  | 'antiquewhite'
  | 'aquamarine'
  | 'azure'
  | 'beige'
  | 'bisque'
  | 'blanchedalmond'
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
  | 'gainsboro'
  | 'ghostwhite'
  | 'gold'
  | 'goldenrod'
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
  | 'limegreen'
  | 'linen'
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
  | 'oldlace'
  | 'olivedrab'
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
  | 'rosybrown'
  | 'royalblue'
  | 'saddlebrown'
  | 'salmon'
  | 'sandybrown'
  | 'seagreen'
  | 'seashell'
  | 'sienna'
  | 'skyblue'
  | 'slateblue'
  | 'slategray'
  | 'slategrey'
  | 'snow'
  | 'springgreen'
  | 'steelblue'
  | 'tan'
  | 'thistle'
  | 'tomato'
  | 'turquoise'
  | 'violet'
  | 'wheat'
  | 'whitesmoke'
  | 'yellowgreen'
  | 'rebeccapurple'

type HexDigit = DecDigit | 'a' | 'b' | 'c' | 'd' | 'e' | 'f'
type DecDigit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
type Digits0to4 = '0' | '1' | '2' | '3' | '4'

type WhiteSpace = ' '
type Trim<T> = T extends `${WhiteSpace}${infer U}`
  ? Trim<U>
  : T extends `${infer U}${WhiteSpace}`
  ? Trim<U>
  : T

type Hex3 = `${HexDigit}${HexDigit}${HexDigit}`

type HexColor<T extends string> = Lowercase<T> extends `#${Hex3}`
  ? T
  : Lowercase<T> extends `#${Hex3}${infer Rest}`
  ? Rest extends Hex3
    ? T
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

type Degree<T extends string> = 1 extends IsInteger<T>
  ? T extends
      | `${DecDigit}`
      | `${DecDigit}${DecDigit}`
      | `${'1' | '2'}${DecDigit}${DecDigit}`
      | `3${Digits0to4 | '5'}${DecDigit}`
      | '360'
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

type HSL<T extends string> = T extends `hsl(${infer H},${infer S},${infer L})`
  ? `111` extends `${Degree<Trim<H>>}${IsPercent<Trim<S>>}${IsPercent<Trim<L>>}`
    ? T
    : never
  : never

type HSLA<T extends string> =
  T extends `hsla(${infer H},${infer S},${infer L},${infer O})`
    ? `1111` extends `${Degree<Trim<H>>}${IsPercent<Trim<S>>}${IsPercent<
        Trim<L>
      >}${Opacity<Trim<O>>}`
      ? T
      : never
    : never

type ColorValue<T extends string> =
  | HexColor<T>
  | RGB<T>
  | RGBA<T>
  | HSL<T>
  | HSLA<T>

export type CSSColor<T extends string> =
  | ColorValue<T>
  | ColorKeyword
  | 'currentColor'
  | 'transparent'
  | 'inherit'

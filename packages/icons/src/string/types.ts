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

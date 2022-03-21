// This removes all the weird spacing templating adds to match the cleanup
// method used in buttonJS.ts
function cleanupString(content: string) {
  return content.trim().replace(/^ {2,6}/gm, '')
}

const baseCSS = cleanupString(`
  appearance: none;
  background-color: transparent;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-family: 'PS TT Commons Roman', 'Gotham SSm A', 'Gotham SSm B', Arial,
  sans-serif;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  transition: background-color 250ms ease-in-out, color 250ms ease-in-out;

  &:active {
    outline: none;
  }
  &:focus {
    outline: 3px solid hsl(249deg 63% 34% / 100%);
  }
  &:focus:not(:focus-visible) {
    box-shadow: none;
    outline: none;
  }
`)

export const defaultButtonCSS = cleanupString(`
  ${baseCSS}

  color: hsl(235deg 30% 78% / 100%);
  font-size: 16px;
  padding: 10px 16px;
  &:hover {
    color: #fff;
    background-color: hsl(237deg 30% 36% / 100%);
  }
  &:active {
    background-color: hsl(249deg 63% 34% / 100%) !important;
  }
`)

export const textWeakButtonCSS = cleanupString(`
  ${baseCSS}

  color: hsl(249deg 63% 67% / 100%);
  font-size: 16px;
  padding: 10px 16px;
  &:hover {
    color: #fff;
    background-color: hsl(249deg 63% 43% / 100%);
  }
  &:active {
    background-color: hsl(249deg 63% 34% / 100%) !important;
  }
`)

export const weakButtonCSS = cleanupString(`
  ${baseCSS}

  background-color: hsl(238deg 30% 32% / 100%);
  color: hsl(0deg 0% 100% / 100%);
  font-size: 16px;
  padding: 10px 16px;
  &:hover {
    color: #fff;
    background-color: hsl(237deg 30% 36% / 100%);
  }
  &:active {
    background-color: hsl(240deg 31% 25% / 100%) !important;
  }
`)

export const mediumButtonCSS = cleanupString(`
  ${baseCSS}

  background-color: hsl(249deg 63% 51% / 100%);
  color: #fff;
  font-size: 16px;
  padding: 10px 16px;
  &:hover {
    color: #fff;
    background-color: hsl(249deg 63% 43% / 100%);
  }
  &:active {
    background-color: hsl(249deg 63% 34% / 100%) !iimportant;
  }
`)

export const strongButtonCSS = cleanupString(`
  ${baseCSS}

  background-color: hsl(249deg 63% 25% / 100%);
  color: hsl(249deg 62% 92% / 100%);
  font-size: 16px;
  padding: 10px 16px;
  &:hover {
    color: #fff;
    background-color: hsl(249deg 63% 43% / 100%);
  }
  &:active {
    background-color: hsl(249deg 63% 34% / 100%) !important;
  }
`)

export const xsButtonCSS = cleanupString(`
  ${baseCSS}

  color: hsl(235deg 30% 78% / 100%);
  font-size: 12px;
  padding: 4px 8px;
  &:hover {
    color: #fff;
    background-color: hsl(237deg 30% 36% / 100%);
  }
  &:active {
    background-color: hsl(249deg 63% 34% / 100%) !important;
  }
`)

export const sButtonCSS = cleanupString(`
  ${baseCSS}

  color: hsl(235deg 30% 78% / 100%);
  font-size: 14px;
  padding: 6px 12px;
  &:hover {
    color: #fff;
    background-color: hsl(237deg 30% 36% / 100%);
  }
  &:active {
    background-color: hsl(249deg 63% 34% / 100%) !important;
  }
`)

export const lButtonCSS = cleanupString(`
  ${baseCSS}

  color: hsl(235deg 30% 78% / 100%);
  font-size: 16px;
  padding: 14.5px 24px;
  &:hover {
    color: #fff;
    background-color: hsl(237deg 30% 36% / 100%);
  }
  &:active {
    background-color: hsl(249deg 63% 34% / 100%) !important;
  }
`)

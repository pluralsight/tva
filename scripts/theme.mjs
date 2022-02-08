#!/usr/bin/env node

'use strict'

// NOTE: The only reason this file is using .mjs is due to 'chalk' using
// modules internally
import chalk from 'chalk'

export const command = chalk.whiteBright
export const error = chalk.bold.red
export const info = chalk.bold.cyan
export const importantNote = chalk.bold.yellow
export const success = chalk.bold.greenBright
export const warning = chalk.redBright
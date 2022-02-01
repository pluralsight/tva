#!/usr/bin/env node

'use strict'

// NOTE: The only reason this file is using .mjs is due to 'chalk' using
// modules internally
import chalk from 'chalk'

export const error = chalk.bold.red

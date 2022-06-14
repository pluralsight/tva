import { resolve, join } from 'path'
import { copyFileSync, renameSync, readdirSync } from 'fs'
import fse from 'fs-extra'

const srcPath = join('build', 'generated')
const buildPath = join('build')
const indexFileIn = 'index.ts'
const indexFileOut = 'wrapper.js'

fse.copySync(resolve(srcPath, 'svelte'), resolve(buildPath, 'svelte'))

renameSync(
  resolve(buildPath, 'svelte', indexFileIn),
  resolve(buildPath, 'svelte', indexFileOut)
)

copyFileSync(
  resolve(srcPath, 'string', indexFileIn),
  resolve(buildPath, 'string', indexFileOut)
)

function createModuleWrappers(currentPath) {
  const files = readdirSync(currentPath, { withFileTypes: true })

  files.forEach((file) => {
    if (file.isDirectory()) {
      createModuleWrappers(join(currentPath, file.name))
    } else {
      if (file.name === indexFileIn) {
        copyFileSync(
          resolve(currentPath, file.name),
          resolve(currentPath.replace(srcPath, buildPath), indexFileOut)
        )
      }
    }
  })
}
createModuleWrappers(srcPath)

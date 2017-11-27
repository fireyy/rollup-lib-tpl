module.exports = {
  prompts: {
    name: {
      message: 'What is the name of the new project?',
      default: ':folderName:'
    },
    description: {
      message: 'How would you descripe the new project?',
      default: `my project`
    },
    buble: {
      type: 'confirm',
      message: 'Convert ES2015 with buble?'
    },
    unit: {
      type: 'confirm',
      message: 'Setup unit tests with Ava?'
    },
    lint: {
      type: 'confirm',
      message: 'Use ESLint to lint your code?'
    }
  },
  "filters": {
    "test/**/*": "unit"
  },
  complete({log, chalk, isNewFolder, folderName}) {
    log.success('Done!')
    if (isNewFolder) {
      log.info(`cd ${chalk.yellow(folderName)} to get started!`)
    }
  }
}

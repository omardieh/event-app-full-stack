import colors from 'colors';

export default {
  server: {
    success: [
      '🖥️ ',
      colors.bgBlack.bold(` SERVER `),
      ` App is running, visit: `,
      colors.blue(`http://localhost:${port}`),
    ].join(''),
  },
  error: {
    portInUse: [
      '❌ ',
      colors.bgRed.bold(` ERROR `),
      ` Port ${port} is already in use. Please choose another port.`,
    ].join(''),
    serverFailure: (error: NodeJS.ErrnoException) =>
      ['❌ ', colors.bgRed.bold(` ERROR `), ` Failed to start the server: `, colors.red(error.message)].join(''),
    unexpected: (error: Error) =>
      ['❌ ', colors.bgRed.bold(` ERROR `), ` An unexpected error occurred: `, colors.red(error.message)].join(''),
    unknown: ['❌ ', colors.bgRed.bold(` ERROR `), ` An unknown error occurred.`].join(''),
  },
};
module.exports = {
  container: ({ theme }) => ({
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    ':after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      opacity: 0.5,
      zIndex: -1,
      backgroundColor: theme.colors.canvas,
    }
  }),
  header: ({ theme }) => ({
    display: 'flex',
    minHeight: theme.space[7],
    fontSize: theme.fontSizes[10],
    padding: theme.space[4],
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  }),
  startButton: ({ theme }) => ({
    marginTop: `${theme.space[4]} !important`
  })
}

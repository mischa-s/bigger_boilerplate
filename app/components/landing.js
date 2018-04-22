const h = require('react-hyperscript')
const { compose } = require('recompose')
const { partial } = require('ramda')
const { connect: connectStyles } = require('react-fela')
const { connect: connectStore } = require('redux-bundler-react')
const Typography = require('material-ui/Typography').default
const Button = require('material-ui/Button').default
const Paper = require('material-ui/Paper').default

const styles = require('../styles/landing')

module.exports = compose(
  connectStyles(styles),
  partial(connectStore, [
    'doUpdateUrl'
  ])
)(Landing)

function Landing (props) {
  const {
    styles,
    updateUrl
  } = props

  return (
    h('div', {
      className: styles.container
    }, [
      h(Paper, {
        className: styles.header
      }, [
        h(Typography, {
          variant: 'display4',
          color: 'default',
          align: 'center'
        }, [
          h('img', {
            src: '/yip_is_a_platform.png'
          })
        ]),
        h(Button, {
          variant: 'raised',
          color: 'primary',
          size: 'large',
          className: styles.startButton,
          href: '/onboarding/0'
        }, [
          'Join the network'
        ])
      ])
    ])
  )
}

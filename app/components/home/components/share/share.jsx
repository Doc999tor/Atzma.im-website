import Dialog from 'share-dialog'
import './share.styl'

export default class Share extends React.Component {
  static propTypes = {
    rights: PropTypes.object.isRequired,
    opt: PropTypes.object.isRequired
  }
  render () {
    return this.props.rights.timeline.share && (
      <div id='share'>
        <img src={config.urls.soc_net + 'facebook.png'}
          onClick={() => {
            this.props.opt.urls.map(val => {
              Dialog.facebook(val).open()
            })
          }}
          className={'icon-default facebook'}
        />
        <img className={'icon-default twitter'}
          onClick={() => {
            this.props.opt.urls.map(val => {
              Dialog.twitter(val, this.props.opt.title, this.props.opt.text).open()
            })
          }}
          src={config.urls.soc_net + 'twitter.png'}
        />
        <img className={'icon-default pingterest'}
          onClick={() => {
            this.props.opt.urls.map(val => {
              Dialog.pinterest(val, this.props.opt.title, this.props.opt.text).open()
            })
          }}
          src={config.urls.soc_net + 'pinterest.png'}
        />
        <img className={'icon-default gplus'}
          src={config.urls.soc_net + 'google.png'}
          onClick={() => {
            this.props.opt.urls.map(val => {
              Dialog.gplus(val, this.props.opt.title, this.props.opt.text).open()
            })
          }}
        />
        <img className={'icon-default linkedin'}
          onClick={() => {
            this.props.opt.urls.map(val => {
              Dialog.linkedIn(val, this.props.opt.title, this.props.opt.text).open()
            })
          }}
          src={config.urls.soc_net + 'linkedin.png'}
        />
      </div>
    )
  }
}

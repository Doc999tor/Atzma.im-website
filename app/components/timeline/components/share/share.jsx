import Dialog from 'share-dialog'
import './share.styl'

export default class Share extends React.Component {
  state = {
    isVisibleIcons: false
  }
  static propTypes = {
    rights: PropTypes.object.isRequired,
    opt: PropTypes.object.isRequired
  }
  share = () => {
    if (navigator.share) {
      navigator.share(this.props.opt)
    // .then(() => console.log('Successful share'))
    // .catch(er => console.log('Error sharing', er))
    } else this.setState({isVisibleIcons: !this.state.isVisibleIcons})
  }
  render () {
    return this.props.rights.timeline.share && (
      <div id='share'>
        <img className='share' src={config.urls.media + 'ic-share-pink.svg'} onClick={this.share} />
        <img src={config.urls.soc_net + 'facebook.png'} onClick={() => Dialog.facebook(this.props.opt.url).open()}
          className={'icon-default ' + (this.state.isVisibleIcons ? 'isVisible facebook' : '')} />
        <img className={'icon-default ' + (this.state.isVisibleIcons ? 'isVisible twitter' : '')}
          onClick={() => Dialog.twitter(this.props.opt.url, this.props.opt.title, this.props.opt.text).open()}
          src={config.urls.soc_net + 'twitter.png'} />
        <img className={'icon-default ' + (this.state.isVisibleIcons ? 'isVisible pingterest' : '')}
          onClick={() => Dialog.pinterest(this.props.opt.url, this.props.opt.title, this.props.opt.text).open()}
          src={config.urls.soc_net + 'pinterest.png'} />
        <img className={'icon-default ' + (this.state.isVisibleIcons ? 'isVisible gplus' : '')} src={config.urls.soc_net + 'google.png'}
          onClick={() => Dialog.gplus(this.props.opt.url, this.props.opt.title, this.props.opt.text).open()} />
        <img className={'icon-default ' + (this.state.isVisibleIcons ? 'isVisible linkedin' : '')}
          onClick={() => Dialog.linkedIn(this.props.opt.url, this.props.opt.title, this.props.opt.text).open()}
          src={config.urls.soc_net + 'linkedin.png'} />
      </div>
    )
  }
}

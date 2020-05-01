import './btn-try-free.styl'

export default ({ label, absolute }) => {
  return (
    <a className={'try-for-free-btn' + (absolute ? config.isRTL ? ' rtl' : ' ltr' : '')} href={config.urls.signup}>
      <svg>
        <use xlinkHref={config.urls.media + 'ic_try.svg#ic_try'} />
      </svg>
      {label}
    </a>
  )
}

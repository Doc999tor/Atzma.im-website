import './index.styl'

export default ({ item, i }) => {
  return (
    <div className='title'>
      <div className='title-wrap'>
        <h1>{item.title}</h1>
        <div className='header-desc'>
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  )
}
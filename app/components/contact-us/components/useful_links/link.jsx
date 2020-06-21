import './link.styl'

export default ({ item, index }) => {
	return (
		<a class='useful_link' href={item.link_to} target='_blank'>
      <span className='main_content'>
        <span class='title' >{config.translations.contact_us.useful_links.links[index].title}</span>
        <span class='text'>{config.translations.contact_us.useful_links.links[index].text}</span>
      </span>
			<button class='link_button' type='button'>
				<span className='label'>{config.translations.contact_us.useful_links.link_label}</span>
				<img src={config.urls.media + 'ic_arrow_right.svg'} alt='arrow' />
			</button>
		</a>
	)
}

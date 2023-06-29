import './index.css'
import { TLink } from '../../interfaces'

function generate_favicon_url(url: string, size: number) {
    let domain = new URL(url)
    let tmp_list = domain.hostname.split('.')

    if (tmp_list.length === 3) {
        tmp_list.shift()
    }

    let domain_url = tmp_list.join('.')

    return `https://www.google.com/s2/favicons?sz=${size}&domain_url=${domain_url}`
}

type Props = {
    uuid: string
    name: string
    links: TLink[]
}

function Section(props: Props) {
    function edit_section() {

    }

    return (
        <div className='section'>
            <button data-uuid={props.uuid} id='edit-button' onClick={edit_section}>Edit</button>
            <p className='section-name'>{props.name}</p>
            <ul>
                {props.links.map((item) => {
                    return (
                        <li key={item.id} data-uuid={item.id}>
                            <img className='favicon' src={item.website_icon} />
                            <a href={item.url}>
                                {item.name}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Section

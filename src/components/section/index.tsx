import './index.css'

function generate_favicon_url(url: string, size: number) {
    let domain = (new URL(url));
    let tmp_list = domain.hostname.split('.');

    if (tmp_list.length == 3) {
        tmp_list.shift();
    }

    let domain_url = tmp_list.join('.');

    return `https://www.google.com/s2/favicons?sz=${size}&domain_url=${domain_url}`;
}

type Props = {
    name: string;
    links: { label: string; url: string }[]
}

function Section(props: Props) {
    return <div className='section'>
        <div>
            <p className='section-name'>{props.name}</p>
            <ul>
                {props.links.map((item) => {
                    return (<li>
                        <img className='favicon' src={generate_favicon_url(item.url, 16)} />
                        <a href={item.url}>{item.label}</a>
                    </li>)
                })}
            </ul>
        </div>
    </div>
}

export default Section

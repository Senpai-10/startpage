export interface Section {
    id: string
    name: string
    links: Array<Link>
}

export interface Link {
    id: string
    name: string
    url: string
    website_icon: string
}


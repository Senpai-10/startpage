export interface TSection {
    uuid: string
    name: string
    links: Array<TLink>
}

export interface TLink {
    uuid: string
    name: string
    url: string
    website_icon: string
}

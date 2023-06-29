export interface TSection {
    id: string
    name: string
    links: Array<TLink>
}

export interface TLink {
    id: string
    name: string
    url: string
    website_icon: string
}

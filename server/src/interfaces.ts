export interface Section {
    uuid: string
    name: string
    links: Array<Link>
}

export interface Link {
    uuid: string
    name: string
    url: string
    website_icon: string
}

export interface RData {
    success_message?: string,
    error_message?: string,
    data?: Section
}

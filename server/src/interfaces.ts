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

export interface RData {
    success_message?: string,
    error_message?: string,
    data?: Section
}

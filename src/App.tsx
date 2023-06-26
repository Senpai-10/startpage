import './App.css'
import Section from './components/section'

const data = [
    {
        name: 'General',
        links: [
            {
                label: 'Youtube',
                url: 'https://www.youtube.com',
            },
            {
                label: 'Wallhaven',
                url: 'https://wallhaven.cc',
            },
            {
                label: 'Gmail',
                url: 'https://mail.google.com/mail',
            },
            {
                label: 'Calendar',
                url: 'https://calendar.google.com',
            },
        ],
    },
    {
        name: 'Online shopping',
        links: [
            {
                label: 'Amazon sa',
                url: 'https://www.amazon.sa',
            },
            {
                label: 'Aliexpress',
                url: 'https://www.aliexpress.com',
            },
            {
                label: 'Newegg',
                url: 'https://www.newegg.com',
            },
            {
                label: 'Ebay',
                url: 'https://www.ebay.com',
            },
        ],
    },
    {
        name: 'Dev',
        links: [
            {
                label: 'Github',
                url: 'https://github.com',
            },
            {
                label: 'Stackoverflow',
                url: 'https://stackoverflow.com',
            },
        ],
    },
    {
        name: 'Anime',
        links: [
            {
                label: 'Anilist',
                url: 'https://anilist.co/home',
            },
            {
                label: 'MAL',
                url: 'https://myanimelist.net',
            },
            {
                label: 'Animepahe',
                url: 'https://animepahe.org',
            },
            {
                label: 'Gogoanime',
                url: 'https://gogoanime.cl',
            },
            {
                label: 'Subsplease',
                url: 'https://subsplease.org',
            },
        ],
    },
]

function App() {
    return (
        <div id='App'>
            <main>
                <header>
                    <h2 id='greeting'>Welcome Back</h2>
                    <button id='add'>Add</button>
                </header>
                <div id='sections'>
                    {data.map((item) => {
                        return <Section name={item.name} links={item.links} />
                    })}
                </div>
            </main>
        </div>
    )
}

export default App

export default function manifest() {
  return {
    name: 'AGAM App',
    short_name: 'Next.js App',
    description: 'Next.js App',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/agam.jpg',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}

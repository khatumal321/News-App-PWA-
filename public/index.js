window.addEventListener('load', async e => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('pwa.js')
            .then(() => {
                console.log('service worker register')
            })
    }
})
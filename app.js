var myapp = new Vue({
    el: '#app',
    data() {
        return {
            title: 'CryptoList'
            , cryptos: [
                {
                    name: 'btc'
                    , logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png'
                }
            ]
        }
    }
})
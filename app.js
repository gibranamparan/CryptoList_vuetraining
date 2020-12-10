new Vue({
    el: '#app',
    data() {
        return {
            title: 'CryptoList'
            , selectedCoin: 'bitcoin'
            , cryptos: [
                {
                    name: 'bitcoin'
                    , symbol: 'btc'
                    , logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png'
                    , changePrice: -5
                    , prices:[
                        {day: "Monday", price: 8400}
                        ,{day: "Tuesday", price: 7900}
                        ,{day: "Wednesday", price: 8200}
                        ,{day: "Thursday", price: 9000}
                        ,{day: "Friday", price: 9400}
                        ,{day: "Saturday", price: 10000}
                        ,{day: "Sunday", price: 10200}
                    ]
                    , currentPrice : 9000
                },
                {
                    name: 'etherium'
                    , symbol: 'eth'
                    , logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png'
                    , changePrice: 20
                    , prices:[
                        {day: "Monday", price: 300}
                        ,{day: "Tuesday", price: 350}
                        ,{day: "Wednesday", price: 400}
                        ,{day: "Thursday", price: 450}
                        ,{day: "Friday", price: 500}
                        ,{day: "Saturday", price: 550}
                        ,{day: "Sunday", price: 600}
                    ]
                    , currentPrice : 550
                }
            ]
        }
    },
    methods: {
        selectCoin(crypto){
            this.selectedCoin = crypto.name
        }
    },
    computed: {
        coinsList(){
            return this.cryptos.map(c => c.name).join(", ");
        }
    },
    created() {
        console.log("created... we can get data from an external source like an API")
    },
    mounted() {
        //Difference with created is that the DOM is now available.
        console.log("mounted... we can render stuff in the screen since the DOM is now available, like the data got in created hook")
    }
})
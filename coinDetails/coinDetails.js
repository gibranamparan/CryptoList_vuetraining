Vue.component("CoinDetails",{
    props:['crypto'],
    data(){
        return {
            quantity: 0
            , showPrices: false
        };
    },
    methods:{
        toggleShowPrices() {
            this.showPrices = !this.showPrices;
        },
        emitSelect(){
            this.$emit("coin-selected",this.crypto);
        },
        priceStyle(price){
            return { 
                green : price >= this.crypto.currentPrice
                , orange : price >= this.crypto.currentPrice * .9 && price < this.crypto.currentPrice
                , red: price < this.crypto.currentPrice * .9 
            };
        }
    },
    computed:{
        inCoin(){
            if(!this.crypto.currentPrice)
                return 0;

            return this.quantity / this.crypto.currentPrice;
        }
    },
    template: `
    <div v-on:click="emitSelect" class="row">
        <div id="details" class="col-md-6">
            <img v-bind:src="crypto.logo" v-bind:alt="crypto.name">
            <span>{{crypto.name}}</span>
            <span v-bind:class = "crypto.changePrice > 0 ? 'green' : 'red'"> 
                \${{crypto.currentPrice}} ({{crypto.changePrice}}%)
            </span>
            <span v-if="crypto.changePrice > 0">👍</span>
            <span v-else>👎</span>

            <button class="btn" v-on:click = "toggleShowPrices">
                {{ showPrices ? "Hide" : "Show" }} Prices
            </button>
            <div>
                <span>
                    <label>USD:</label>
                    <input type="number" v-model = "quantity">
                </span>
                <span>= {{inCoin}} {{crypto.symbol}}</span>
            </div>
            <ul v-show = "showPrices">
                <li v-for="(p,i) in crypto.prices" v-bind:key = 'p.day'>
                    <span v-bind:class = "priceStyle(p.price)">
                        {{p.day}} - \${{p.price}}
                    </span>
                </li>
            </ul>
        </div>
        <div class="col-md-6">
            <slot name="graph"></slot>
            <slot name="more-info"></slot>
        </div>
    </div>
    `,
})
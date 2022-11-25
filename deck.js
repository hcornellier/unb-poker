const { random } = require("colors");
const card = require("./card")

module.exports = class deck {
    constructor() {
        // this.generateDeck()

        // console.log("Generate Deck");
        var dec = [];
        var suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
        for (var i = 0; i < 4; i++){
            // console.log(i);
            for (var j = 0; j < 13; j++){
                dec[j + (13 * i)] = new card(j+1, suits[i]);
                // console.log(dec[j+(13*i)]);
            }
        }
        // var i = 0;
        // for (var j = 0; j < 13; j++){
        //     dec[j + (13 * (i % 4))] = new card(j+1, suits[i]);
        //     i++;
        // i += 1 % 4;
        // }
        this.deck = dec;
        console.log(this.deck);
    }

    // generateDeck() {
    //     console.log("Generate Deck")
    //     let dec = [];
    //     let suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    //     for (var i = 0; i++; i < 4){
    //         for (var j = 0; j++; j < 13){
    //             dec[j + (13 * i)] = new card(j+1, suits[i])
    //         }
    //     }
    //     this.deck = dec
    // }

    pickCard(){
        console.log("Pick card");
        var random = Math.floor(Math.random() * 52);
        console.log(random);
        var card = null;
        do {
            random = (random + 1) % 52;
            console.log(random);
            card = this.deck[random];
        } while (card === null)
        this.deck[random] = null;
        return card;
    }
}
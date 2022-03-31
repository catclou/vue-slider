// ISTANZIARE VUE:
var app = new Vue (
    {
        el: '#root',
        data: {
            numeroImmagine: 0,
            immagini: [
                'https://source.unsplash.com/random/?offer',
                'https://source.unsplash.com/random/?sale',
                'https://source.unsplash.com/random/?buy'
            ],
            products: [
                {
                    id: 1,
                    nome: 'Nike',
                    price: 120,
                    media: 'https://source.unsplash.com/random/?shoes'
                },
                {
                    id: 2,
                    nome: 'Borriello',
                    price: 1200,
                    media: 'https://source.unsplash.com/random/?shoes'
                },
                {
                    id: 3,
                    nome: 'Vans',
                    price: 70,
                    media: 'https://source.unsplash.com/random/?shoes'
                },
                {
                    id: 4,
                    nome: 'All-Stars',
                    price: 95,
                    media: 'https://source.unsplash.com/random/?shoes'
                },
                {
                    id: 5,
                    nome: 'Yeezy',
                    price: 750,
                    media: 'https://source.unsplash.com/random/?shoes'
                },
                {
                    id: 6,
                    nome: 'Diadora',
                    price: 70,
                    media: 'https://source.unsplash.com/random/?shoes'
                }
            ],
            carrello: []
        },
        methods: {
            addToCart: function(element) { 
                console.log( element );
                this.carrello.push(element); // ATTENZIONE! Il this non funziona bene con l'arrow function
            },
            removeFromCart: function(id) {
                this.carrello = this.carrello.filter(
                    (element) => {
                        if( element.id !== id ) {
                            return true
                        }
                        return false
                    }
                )
            },
            totalPrice: function() {
                let total = 0;
                this.carrello.forEach(
                    (element) => {
                        total += element.price;
                    }
                )
                return total
            },
            fotoPrecedente() {
                this.numeroImmagine -= 1;
                if (this.numeroImmagine < 0)  this.numeroImmagine = (this.immagini.length - 1);
            },
            fotoSuccessiva() {
                this.numeroImmagine += 1;
                if (this.numeroImmagine < 0) {
                    this.numeroImmagine = (this.immagini.length + 1);
                }
                if (this.numeroImmagine = 3) {
                    this.numeroImmagine = 0;
                }
                if (this.numeroImmagine = 4) {
                    this.numeroImmagine = 1;
                }
                if (this.numeroImmagine = 5) {
                    this.numeroImmagine = 2;
                }
            }
        }
    }
)
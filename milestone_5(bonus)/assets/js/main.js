const app = new Vue({
    el: "#app",

    data: {

        me:{
            name: 'Serena',
            avatar: '_io',
            visible: true,
        },

        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },

            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '13/05/2020 14:35:00',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '14/05/2020 15:00:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },

            {
                name: 'Marco',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '4/02/2020 12:30:30',
                        text: 'Hai comprato una nuova auto?',
                        status: 'sent'
                    },
                    {
                        date: '15/02/2020 05:45:00',
                        text: 'Si, ho trovato un buon affare',
                        status: 'received'
                    }
                ],
            },

            {
                name: 'Luisa',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '30/06/2020 19:30:55',
                        text: 'Hai finito gli esami universitari?',
                        status: 'sent'
                    },
                    {
                        date: '31/06/2020 20:30:00',
                        text: 'Si, devo soltanto preparare la tesi',
                        status: 'received'
                    }
                ],
            },

            {
                name: 'Aurelio',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '25/07/2020 16:30:25',
                        text: 'Andiamo a prendere un gelato?',
                        status: 'sent'
                    },
                    {
                        date: '25/07/2020 16:31:00',
                        text: 'Si, so già che gusti prendere :Q_',
                        status: 'received'
                    },
                    {
                        date: '25/07/2020 16:45:00',
                        text: 'Ovvio, come minimo tanto non c\'è',
                        status: 'sent'
                    },
                    {
                        date: '25/07/2020 16:58:00',
                        text: 'Ma stai zitto, non la gufare!',
                        status: 'received'
                    },
                    {
                        date: '25/07/2020 17:10:00',
                        text: 'Poi sono povero quindi paghi te',
                        status: 'received'
                    },
                    {
                        date: '25/07/2020 17:25:00',
                        text: 'Vabbè dai',
                        status: 'sent'
                    },
                    {
                        date: '25/07/2020 18:10:00',
                        text: 'Allora ci vediamo dopo',
                        status: 'sent'
                    },
                ],
            },

            {
                name: 'Simone',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '10/05/2020 12:30:55',
                        text: 'Vieni te a prendermi domani?',
                        status: 'sent'
                    },
                    {
                        date: '10/05/2020 12:50:00',
                        text: 'Si tranquillo, passo verso le 4!',
                        status: 'received'
                    }
                ],
            },
        ],

        activeContact: 0,   
        
        newMessage: "",

        searchContact: "",

        counterDrop: null,

    },

    methods: {

        selectContact(el, index){
            this.activeContact = [index];
        },

        writeMessage(){
            this.contacts[this.activeContact].messages.push({
                date: dayjs(new Date()).format('DD/MM/YYYY HH:mm:ss'),
                text: this.newMessage,
                status: 'sent',
            })
            setTimeout(() => {
                this.contacts[this.activeContact].messages.push({
                    date: dayjs(new Date()).format('DD/MM/YYYY HH:mm:ss'),
                    text: "Okay, a presto! 👍😁",
                    status: 'received',
                })
            }, 1000);
                this.newMessage = "";
        },
        
        searchWord(string1, string2){
            let word = "";
            for(let i = 1; i <= string1.length; i++){
                word += string2[i-1];
            }
            if (string1.toLowerCase() == word.toLowerCase()){
                return string2;
            }
        },

        lastAccessActiveContact(){

            this.contacts[this.activeContact].messages.forEach(message => {
                if (message.status == "received") {
                    this.contacts[this.activeContact].lastData = message.date
                }
            });
            return this.contacts[this.activeContact].lastData;
        },

        lastAccessContacts(index){
            this.contacts[index].messages.forEach(message => {
                if (message.status == "received") {
                    this.contacts[index].lastAccess = message.date
                }
            });
            return (this.contacts[index].lastAccess); 
        },

        lastMessage(index){
            this.contacts[index].messages.forEach(message => {
                    this.contacts[index].lastMsg = message.text
            });
            return (this.contacts[index].lastMsg);
        },
        
        showDropDown(index){
            this.contacts[this.activeContact].messages.forEach((msg, i) =>{
                if (!msg.dropdown && i == index){
                    msg.dropdown = true;
                    this.counterDrop = i;
                } else if (msg.dropdown && i == index){
                    this.counterDrop = null;
                    msg.dropdown = false;
                } else {
                    msg.dropdown = false;
                }
            })
            return this.contacts[this.activeContact].messages[index].dropdown;
        },

        deleteMessage(index){
            this.contacts[this.activeContact].messages.splice(index, 1)
        }
    },


})
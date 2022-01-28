console.log('Vue Ok!', Vue);

Vue.config.devtools = true;

const message = new Vue({

    el: '#root',

    data: {
    tasks: [
        {text: 'Fare la spesa a Zia May', done: true,},
        {text: 'Portare Mary Jane sopra la Statua della Libertà', done: false,},
        {text: 'Mangiare una Pizza al SALAMINO da Frank', done: false,},
        {text: 'Scattare un selfie con Russel Crowe', done: false,},
    ],
    }
});
console.log('Vue Ok!', Vue);

Vue.config.devtools = true;

const message = new Vue({

    el: '#root',

    data: {
    
    newTask: '',
    tasks: [
        {text: 'Fare la spesa a Zia May', done: true,},
        {text: 'Portare Mary Jane sopra la Statua della Libertà', done: false,},
        {text: 'Mangiare una Pizza al SALAMINO da Frank', done: false,},
        {text: 'Scattare un selfie con Russel Crowe', done: false,},
    ],
},

    // # Functions

    methods: {

        addItem() {

            const newTask = this.newTask.trim();
            if (newTask) {
                this.tasks.push({text: newTask, done: false,})
            }
            this.newTask = '';

        },

        removeItem (index) {
            this.tasks.splice(index, 1)
        },

        deletedItem (index) {
            this.tasks[index].done = !this.tasks[index].done;
        }

    },
});
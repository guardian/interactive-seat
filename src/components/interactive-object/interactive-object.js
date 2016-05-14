import InteractiveModal from '../interactive-modal/interactive-modal';
import template from './interactive-object.html!text';
import Vue from 'vue';

let InteractiveObject = Vue.extend({
    template,
    components: {
        InteractiveModal
    },
    props: ['object', 'config'],
    data() {
        return {
            showModal: false,
            selectedOption: undefined
        };
    },
    events: {
        'option-selected': function (option) {
            this.showModal = false;

            // guard against choosing the same option
            if (this.selectedOption !== option) {
                this.selectedOption = option;

                // allow event propagation
                return true;
            }
        }
    }
});

export default InteractiveObject;

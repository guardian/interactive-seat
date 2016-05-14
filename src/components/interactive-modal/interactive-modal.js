import template from './interactive-modal.html!text';
import Vue from 'vue';

let InteractiveModal = Vue.extend({
    template,
    props: [
        'object',
        'config',
        'showModal',
        'selectedOptionId'
    ],
    methods: {
        selectOption(option) {
            this.$dispatch('option-selected', option);
        }
    }
});

export default InteractiveModal;

import InteractiveInfo from '../interactive-info/interactive-info';
import Share from '../share/share';
import template from './interactive-results.html!text';
import Vue from 'vue';

let InteractiveResults = Vue.extend({
    template,
    props: ['challengeCompleted', 'config'],
    components: {
        InteractiveInfo,
        Share
    },
    methods: {
        restart() {
            this.$dispatch('restart');
        }
    }
});

export default InteractiveResults;

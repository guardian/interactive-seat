import Vue from 'vue';

let Block = Vue.extend({
    props: {
        content: {
            type: Object
        },
        config: {
            type: Object
        }
    }
});

export default Block;

import Vue from 'vue';

let Block = Vue.extend({
    props: {
        content: {
            type: Object
        },
        config: {
            type: Object
        }
    },
    methods: {
        getImageUrl(imagePath) {
            return `${ this.config.assetPath }${ imagePath }`;
        }
    }
});

export default Block;

import template from './responsive-image.html!text';
import Vue from 'vue';

let ResponsiveImage = Vue.extend({
    template,
    props: {
        path: String,
        extension: {
            type: String,
            default: '.jpg'
        },
        widths: {
            type: Array,
            default: [140, 500, 1000, 2000, 5760]
        },
        sizes: {
            default: '100vw'
        },
        alt: String
    },
    computed: {
        srcSet() {
            return this.widths.map((width) => `${ this.path }${ width }${ this.extension } ${ width }w`).join(', ');
        }
    }
});

export default ResponsiveImage;

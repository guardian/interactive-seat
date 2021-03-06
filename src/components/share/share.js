import Vue from 'vue';

import events from '../../js/modules/events';
import template from './share.html!text';

let Share = Vue.extend({
    template,
    props: {
        text: String,
        url: String,
        image: String,
        events: {
            type: Object,
            default() {
                return events;
            }
        }
    },
    computed: {
        facebookUrl() {
            return `https://www.facebook.com/sharer/sharer.php?u=${ encodeURIComponent(this.url) }/sfb`;
        },
        twitterUrl() {
            return `https://twitter.com/intent/tweet?text=${ encodeURIComponent(`${ this.text } ${ this.image }`) }&url=${ encodeURIComponent(this.url) }/stw`;
        },
        emailUrl() {
            return `mailto:?subject=${ encodeURIComponent(this.text) }&body=${ encodeURIComponent(this.url) }/sbl`;
        }
    },
    methods: {
        onClickLink(network, event) {
            window.open(event.target.getAttribute('href'), `${ network }share`, 'menubar=no,location=no,resizable=no,scrollbars=no,status=no,width=640,height=320');
        }
    }
});

export default Share;

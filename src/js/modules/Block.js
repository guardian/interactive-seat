import isArray from 'lodash.isarray';
import isObject from 'lodash.isobject';
import Vue from 'vue';

let Block = Vue.extend({
    props: ['content', 'config'],
    data() {
        if (isObject(this.content) && isArray(this.content.modifiers)) {
            let classObject = this.content.modifiers.reduce((accumulator, modifier) => {
                let className = `c-${this.content.block}--${modifier}`;

                accumulator[className] = true;

                return accumulator;
            }, {});

            return {
                classObject
            };
        }

        return {};
    }
});

export default Block;

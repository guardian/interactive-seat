import bonzo from 'ded/bonzo';

import fetchJSON from './lib/fetch';
import cleanData from './lib/cleanData';
import isMobile from './lib/isMobile';
import Header from '../components/header/header';

const BLOCKS = {
    header: Header
};

const APP = {
    blocks: [],

    init(el) {
        this.el = el;
        this.$el = bonzo(el);
        this.isMobile = isMobile();

        fetchJSON('http://interactive.guim.co.uk/docsdata-test/1ukLv0mLRiysvsraIUv-izI4BFEsv42_OrwNGxQIOGwY.json')
            .then((data) => cleanData(data))
            .then((data) => this.initBlocks(data))
            .then(() => {
                this.bindEvents()
                    .render();
            });

        return this;
    },

    bindEvents() {
        return this;
    },

    initBlocks(data) {
        data.blocks.forEach((block) => {
            if (BLOCKS.hasOwnProperty(block.block)) {
                this.blocks.push(new BLOCKS[block.block](block, data.config, this.isMobile).init());
            }
        });

        return this;
    },

    render() {
        let fragment = document.createDocumentFragment();

        this.blocks.reduce((fragment, block) => {
            fragment.appendChild(block.el);

            return fragment;
        }, fragment);

        this.$el.html(fragment);

        return this;
    }
};

export let init = APP.init.bind(APP);

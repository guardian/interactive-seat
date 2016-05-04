import bonzo from 'ded/bonzo';

import fetchJSON from './lib/fetch';
import cleanData from './lib/cleanData';
import isMobile from './lib/isMobile';
import Header from '../components/header/header';
import Navigation from '../components/navigation/navigation';
import Tracking from '../components/tracking/tracking';
import { CONTENT_URL } from './modules/variables';

const BLOCKS = {
    header: Header,
    navigation: Navigation,
    tracking: Tracking
};

const APP = {
    blocks: [],

    init(el) {
        this.el = el;
        this.$el = bonzo(el);
        this.isMobile = isMobile();

        this.fetchContent()
            .then((data) => cleanData(data))
            .then((data) => {
                this.bindEvents()
                    .initBlocks(data)
                    .render();

                console.log(data);
            });

        return this;
    },

    fetchContent() {
        return fetchJSON(CONTENT_URL);
    },

    bindEvents() {
        return this;
    },

    initBlocks(data) {
        data.blocks.forEach((block) => {
            if (block.active !== 'false' && BLOCKS.hasOwnProperty(block.block)) {
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

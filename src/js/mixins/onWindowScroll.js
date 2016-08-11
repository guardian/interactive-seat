import without from 'lodash.without';

let callbacks = [];
let scrollRunning = false;

function scrollHandler(...args) {
    if (!scrollRunning) {
        scrollRunning = true;

        if (window.requestAnimationFrame) {
            window.requestAnimationFrame(() => runCallbacks(...args));
        } else {
            setTimeout(() => runCallbacks(...args), 66);
        }
    }
}

function runCallbacks(...args) {
    callbacks.forEach((callback) => callback(...args));

    scrollRunning = false;
}

window.addEventListener('scroll', scrollHandler, false);

const onWindowScroll = {
    data() {
        return {
            disposers: []
        };
    },
    methods: {
        onWindowScroll(callback) {
            callbacks.push(callback);

            let disposer = () => {
                callbacks = without(callbacks, callback);
            };

            this.disposers.push(disposer);

            return () => {
                disposer();

                this.disposers = without(this.disposers, disposer);
            };
        }
    },
    beforeDestroy() {
        this.disposers.forEach((disposer) => disposer());
    }
};

export default onWindowScroll;

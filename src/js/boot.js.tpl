import { loadCSS } from 'fg-loadcss';

const supportsLocalStorage = (() => {
    const test = 'test';

    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);

        return true;
    } catch(e) {
        return false;
    }
})();

export function boot(el, context, config, mediator) {
    let bandwidth = 0;

    // Loading message while we fetch JS / CSS
    el.innerHTML = '<div style="text-align: center; padding: 72px 0; min-height: 1000px; min-height: 100vh;"><img style="margin: auto" src="https://interactive.guim.co.uk/2015/09/rugby-es6/g-optimize.gif"></div>';

    // if localStorage is supported and if there's a previous value for 'width'
    // set the default bandwidth to this value
    if (supportsLocalStorage) {
        const interactiveBandwidth = localStorage.getItem('interactive-bandwidth');

        if (interactiveBandwidth !== null) {
            bandwidth = parseInt(interactiveBandwidth, 10);
        }
    }

    config = {
        assetPath: '<%= assetPath %>',
        bandwidth
    };

    // Load CSS asynchronously
    loadCSS('<%= assetPath %>/main.css');

    require(['<%= assetPath %>/bandwidth.js']).then((bandwidth) => {
        bandwidth.default().then((value) => {
            config.bandwidth = value;

            localStorage.setItem('interactive-bandwidth', value);
        });
    });

    // Load JS and init
    require(['<%= assetPath %>/main.js']).then(
        (main) => main.init(el, context, config, mediator),
        (err) => console.error('Error loading main:', err)
    );
}

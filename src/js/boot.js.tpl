'use strict';
define([], function() {
    function addCSS(url) {
        var head = document.querySelector('head');
        var link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('type', 'text/css');
        link.setAttribute('href', url);
        head.appendChild(link);
    }

    return {
        boot: function(el, context, config, mediator) {

            // Loading message while we fetch JS / CSS
            el.innerHTML = '<div style="text-align: center; padding: 72px 0; min-height: 1000px; min-height: 100vh;"><img style="margin: auto" src="https://interactive.guim.co.uk/2015/09/rugby-es6/g-optimize.gif"></div>';

            config = {
                'assetPath': '<%= assetPath %>'
            };

            // Load CSS asynchronously
            window.setTimeout(function() {
                addCSS('<%= assetPath %>/main.css');
            }, 10);

            // Load JS and init
            require(['<%= assetPath %>/main.js'], function(main) {
                main.init(el, context, config, mediator);
            }, function(err) { console.error('Error loading boot.', err); });
        }
    };
});

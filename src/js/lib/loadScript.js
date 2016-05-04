export default function loadScript(url, callback) {
    let script = document.createElement('script');
    let done = false;

    script.charset = 'utf-8';
    script.src = url;

    script.onload = script.onreadystatechange = function () {
        if (!done && (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete')) {
            done = true;

            if (callback) {
                callback();
            }

            script.onload = script.onreadystatechange = null;

            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        }
    };

    document.body.appendChild(script);
}

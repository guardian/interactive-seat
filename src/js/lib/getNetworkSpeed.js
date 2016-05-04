import loadScript from './loadScript';

const SMALL_FILE_URL = 'http://cdn.theguardian.tv/interactive/speedtest/testfilesmall.dat';
const LARGE_FILE_URL =  'http://cdn.theguardian.tv/interactive/speedtest/testfile.dat';
const SMALL_FILE_SIZE = 1024 * 8;
const LARGE_FILE_SIZE = 102400 * 8;
const FILE_SIZE_DELTA = LARGE_FILE_SIZE - SMALL_FILE_SIZE;
const TIMEOUT_DURATION = 5000;
const BANDWIDTH_DEFAULT = 1000;

function timeFile(url, callback) {
    let startTime = Date.now();
    url += '?bust=' + startTime;
    let err = null;

    loadScript(url, function () {
        let endTime = Date.now();
        let loadTime = endTime - startTime;
        let loadSeconds = loadTime * 0.001;

        if (callback) {
            callback(err, loadSeconds);
        }
    });
}

/**
* Get the current connection bandwidth
* @param {object} callback Callback function.
* @return {integer} Bandwidth value in bits per second.
*/
export default function getNetworkSpeed(callback) {
    let loadSecondsLarge = 0;
    let loadSecondsSmall = 0;

    let timeout = setTimeout(function() {
        if (callback) {
            callback(BANDWIDTH_DEFAULT);
        }
    }, TIMEOUT_DURATION);

    function bothLoaded() {
        let loadSecondsDiff = Math.max(loadSecondsLarge - loadSecondsSmall, 0.01);
        let rate = FILE_SIZE_DELTA / loadSecondsDiff;
        let ratekbps = Math.round(rate / 1024);

        ratekbps = Math.min(ratekbps, 10000);
        ratekbps = Math.max(ratekbps, 100);

        if (callback) {
            callback(ratekbps);

            clearTimeout(timeout);
        }
    }

    timeFile(SMALL_FILE_URL, function(err) {
        //make sure dnscache is happy
        if (!err) {
            timeFile(LARGE_FILE_URL, function(err, loadSeconds) {
                if (!err) {
                    loadSecondsSmall = loadSeconds;
                    timeFile(LARGE_FILE_URL, function(err, loadSeconds) {
                        if (!err) {
                            loadSecondsLarge = loadSeconds;
                            bothLoaded();
                        }
                    });
                }
            });
        }
    });
}

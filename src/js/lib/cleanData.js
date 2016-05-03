export default function cleanData(data) {
    data.blocks.forEach(function(block) {
        if (block.hasOwnProperty('copy')) {
            block.copy = block.copy.replace(/[\r\n]+/g, '\n').split('\n');
        }
    });

    return data;
}

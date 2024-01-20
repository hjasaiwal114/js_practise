function doAthing() {
    byDoingSomethingElse();
}

function byDoingSomethingElse() {
    throw new Error('uh oh!');
}

function init() {
    try {
        doAthing();
    } catch(e) {
        console.log(e);
    }
}

init();
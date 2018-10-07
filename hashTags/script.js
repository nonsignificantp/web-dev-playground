
window.onload = () => {
    var twits = document.getElementsByTagName('p')

    for (let i = 0; i < twits.length; i++) {
        markHashTags(twits[i]);
    }
};

function markHashTags(twit) {
    let cleanTwit = getCleanText(twit);
    let hashTags = findHashTags(cleanTwit);
    let newTwitContent = addLinkTags(twit, hashTags);

    updateText(twit, newTwitContent);
}

function getCleanText(string) {
    return string.innerHTML.trim().replace(/(\r\n|\n|\r)/gm,"").replace(/\s+/g, " ").split(" ");
}

function findHashTags(twit) {
    let hashTags = []
    twit.forEach((word) => {
        if (isValidHashTag(word)) {
        if (!hashTags.includes(word)) hashTags.push(word);
        }
    });
    return hashTags
}

function addLinkTags(twit, hashTags) {
    let twitContent = twit.innerHTML;

    hashTags.forEach((word) => {
        let find = new RegExp(word, 'g');
        twitContent = twitContent.replace(find, `<a href='#'>${word}</a>`);
    });

    return twitContent
}

function isValidHashTag(word) {
    return word.charAt(0) == '#' && word.length > 1;
}

function updateText(element, text) {
    element.innerHTML = text;
}

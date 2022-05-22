var utils = (function () {
  var unescapeHarder = function (txt) {
    return unescape(txt)
      .replace('&nbsp;', ' ')
      .replace('…', '')
      .replace('\\n', ' ')
      .replace('http', ' http');
  };

  var nodeToText = function (node) {
    if (!node) {
      return '';
    }
    return (
      unescapeHarder(node.nodeValue || '') +
      nodeToText(node.firstChild) +
      nodeToText(node.nextSibling)
    );
  };

  return {
    unescapeHarder: unescapeHarder,
    nodeToText: nodeToText,
  };
})();
module.exports = utils;

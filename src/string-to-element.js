
/**
 * [stringToNode description]
 * @param  {[type]} string [description]
 * @return {[type]}        [description]
 */
var stringToElement = function(string) {
	var node = document.createElement('div');
	node.innerHTML(string);
	return node.childNodes[0];
};
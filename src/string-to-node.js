var stringToNode = function(string) {
	var node = document.createElement('div');
	node.innerHTML(string);
	return node.childNodes[0];
};
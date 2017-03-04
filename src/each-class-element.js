/**
 * [toClass description]
 * @param  {[type]}   className [description]
 * @param  {Function} fn        [description]
 * @return {[type]}             [description]
 */
var eachClassElement = function(className, fn) {
	Array.prototype.forEach.call(document.getElementsByClassName(className), fn);
};
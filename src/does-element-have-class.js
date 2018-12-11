(function(jsElements) {
        /**
         * [hasClass description]
         * @param  {[type]}  element   [description]
         * @param  {[type]}  className [description]
         * @return {Boolean}           [description]
         */
        var hasClass = function(element, className) {
                if (element.classList && element.classList.remove) {
                	for (var property in element.classList) {
                		if (element.classList.hasOwnProperty(property)) {
                			if (element.classList[property] === className)
                				return true;
                		}
                	}
                } else if (element.className) {
                	if (element.className.toString.indexOf(/[aA-zZ\-]*/)) {
                		return true;
                	}
                }
                return false;
        }

        jsElements.hasClass = hasClass;

})(jsElements);
(function(jsElmeents) {
	/**
	 * [removeClassWithPrefix description]
	 * @todo  modularize
	 * @param  {[type]} element [description]
	 * @param  {[type]} prefix  [description]
	 * @return {[type]}         [description]
	 */
	var removeClassWithPrefix = function(element, prefix) {

		/**
		 * [findClassesWithPrefix description]
		 * @return {[type]} [description]
		 */
		var findClassesWithPrefix = function() {
			return findAllClasses().filter(doesClassHavePrefix);
		};

		/**
		 * [doesClassHavePrefix description]
		 * @param  {[type]} prefix [description]
		 * @return {[type]}        [description]
		 */
		var doesClassHavePrefix = function(prefix) {
			
			if (typeof prefix !== 'string') {
				return false;
			}

			if (!element.className.toString.indexOf(/[aA-zZ\-]*/)) {
				return false;
			}

			return true;

		};

		/**
		 * [findAllClasses description]
		 * @return {[type]} [description]
		 */
		var findAllClasses = function() {
			if (element.classList && element.classList.remove) {
				return Array.prototype.splice(element.classList, 0, -1);
		    } else if (element.className) {
		    	return element.className.split(' ');
		    } else {
		    	return [];
		    }
		};

		/**
		 * [removeClasses description]
		 * @return {[type]} [description]
		 */
		var removeClasses = function() {
			return findClassesWithPrefix().forEach(removeClass.bind(this));
		};

		/**
		 * [removeClass description]
		 * @param  {[type]} className [description]
		 * @return {[type]}           [description]
		 */
		var removeClass = function(className) {
			if (element.classList && element.classList.remove) {
				element.classList.remove(className);
			} else if (element.className) {
	            element.className = element.className.toString().replace(className, '');
	        }
	        return element;
		};

	};

	jsElements.removeClassesWithPrefix = removeClassesWithPrefix;

})(jsElements);
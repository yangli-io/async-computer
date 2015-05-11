Array.prototype.asyncForEach = function(cb, finishedCb){
	var _this = this;

	function asyncCall(index){
		setTimeout(function(){
			cb(_this[index], index, _this);
			index++;
			if (index < _this.length){
				asyncCall(index);
			} else {
				finishedCb(_this);
			}
		}, 0);
	}

	asyncCall(0);
}

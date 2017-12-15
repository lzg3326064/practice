(function() {

// 获取元素
	var e = function(element) {
		if(element.charAt(0) === "#") {  // 如果元素开头为#
			return document.querySelector(element);  // 返回该元素
		} else {
			return document.querySelectorAll(element);  // 否则返回元素列表
		}
	};

// 定义变量
	var nums = e(".num"),  	// 所有数字
		oper = e(".oper"), 		// 所有操作符
		equal = e("#equal"),	// 等于号
		view = e("#view"),		// 显示口
		clear = e("#clear"),	// 清屏
		reset = e("#reset"),	// 错误重置
		curNum = "",					// 当前输入的数字
		oldNum = "",					// 之前输入的数字
		result,								// 结果
		operator;							// 操作符变量

// 当数字被点击，获取当前选择的数字并显示
	var getNum = function() {
		if(result) {  // 如果结果已经显示，重置数字
			curNum = this.getAttribute("data-num"); 
			result = "";
		} else {
			curNum += this.getAttribute("data-num");  // 否则，添加到当前数字，curNum 为字符串
		}
		view.innerHTML = curNum;		// 显示当前输入的数字
	};

// 当操作符被点击，将当前数字赋值给旧数字，并且保存操作符
	var moveNum = function() {
		oldNum = curNum;
		curNum = "";
		operator = this.getAttribute("data-oper");
		view.innerHTML = operator;
		equal.setAttribute("data-result","");  // 重置result的data-result属性
	};

// 当等于号被点击，进行计算
	var calculator = function() {

		// 将string转换为numbers
		oldNum = parseFloat(oldNum);
		curNum = parseFloat(curNum);

		// 根据操作符计算
		switch(operator) {
			case "+":
				result = oldNum + curNum;
				break;
			case "-":
				result = oldNum - curNum;
				break;
			case "*":
				result = oldNum * curNum;
				break;
			case "/":
				result = oldNum / curNum;
				break;

			// 如果等于号被按下，但是没有操作符的话，result依然为当前数字
			default:
				result = curNum;
		}

			// 异常返回判断
			if(!isFinite(result)) {
				if(isNaN(result)) {  // 如果result为NaN，显示提醒
					result = "你把她弄坏了"
				} else  { // 如果resul为infiniy，比如一个数除以0
					result = "看看你做了什么";
					e("#calculator").classList.add("broken"); // calculator坏掉
					e("#reset").classList.add("show"); // 接着显示reset按钮
				}
			}

		// 显示结果
		view.innerHTML = result;
		equal.setAttribute("data-result",result);
		// 重置数字，继续运算
		curNum = result;
	}

//清屏
	var clearDisplay = function() {
		curNum = "";
		oldNum = "";
		view.innerHTML = "0";
	};

//事件绑定
	
	// 绑定点击事件给所有的数字
	for(var i = 0; i < nums.length; i++) {
		nums[i].onclick = getNum;
	}

	// 绑定点击事件给clear按钮
	clear.onclick = clearDisplay;

	// 绑定点击事件给操作符
	for(var i = 0; i< oper.length; i++) {
		oper[i].onclick = moveNum;
	}

	// 绑定点击事件给等于号
	equal.onclick = calculator;

	// 绑定点击事件给reset
	reset.onclick = function() {
		window.location = window.location;
	}
	
})();


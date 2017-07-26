//IIFE
var budgetController = (function(){
	
	// Function Constructors
	var Expense = function(id, description, value){
		this.id = id;
		this.description = description;
		this.value = value;
		this.percentage = -1;
	};

	/*	
		Add functions to prototypes so that each expense will point to this prototype functions
		Add function to calculate percentage
	*/
	Expense.prototype.calculatePercentage = function (total) {
		// Check is total > 0
		if(total > 0){
			this.percentage = Math.round((this.value / total) * 100)
		}
	};
	
	//Add function to return percentage
	Expense.prototype.getPercentage = function () {
		return this.percentage;
	};
	
	// Function Constructors
	var Income = function(id, description, value){
		this.id = id;
		this.description = description;
		this.value = value;
	};
	
	var calucateTotal = function(type){
		var sum = 0;
		data.allItems[type].forEach(function(elem){
			sum += elem.value;
		});	
		data.totals[type] = sum;
	};
	
	var data = {
		allItems : {
			exp: [],
			inc: [],
		},
		totals: {
			exp: 0,
			inc: 0
		},
		budget : 0,
		percentage: -1
	};
	
	return {
		addItem : function(type, desc, val){
			var newItem, ID;
			
			// Create new ID
			// Select id of last element and add 1
			ID = data.allItems[type].length > 0 ? 
				data.allItems[type][data.allItems[type].length - 1].id + 1 : 0;
			
			// Create new item based on type
			if(type == 'inc'){
				newItem = new Income(ID, desc, val);				
			} else {
				newItem = new Expense(ID, desc, val);
			}
			
			// Use obj array notation to access correct list type
			data.allItems[type].push(newItem);
			
			// Return the new element
			return newItem;
		},
		
		deleteItem: function(type, ID){
			var ids, index
			// Can't remove by ID, since Items may be deleted
			//We use Map instead of forEach, since Map returns a new array
			ids = data.allItems[type].map(function(current){
				return current.id;
			});
			//find the index of the ID passed in
			index = ids.indexOf(ID);
			console.log(ids, type, ID, index);
			if(index !== -1){
				//remove item starting at index, and remove 1 item
				data.allItems[type].splice(index, 1);
			}
								
		},
		
		calculateBudget: function(){
			// Calculate total income and expenses
			calucateTotal('exp');
			calucateTotal('inc');
			// Calculate budget income - expenses
			data.budget = data.totals.inc - data.totals.exp;
			// Calculate % of income to debt
			if(data.totals.inc > 0) {
				data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
		   	} else {
			   	data.percentage = -1;
		   }
		},
		
		calculatePercentages: function(){
			/*
			a=20,
			b=10,
			c=40
			income = 100
			a = 20 /100 = 20%
			*/
			
			// Calculate expense percentages
			data.allItems.exp.forEach(function (elem) {
				elem.calculatePercentage(data.totals.inc);
			});
		},
		
		getPercentages: function(){
			var allPercentages;
			//Map returns an array
			allPercentages = data.allItems.exp.map(function (elem) {
				return elem.getPercentage();
			});
			return allPercentages;
		},
		
		getBudget: function(){
			return {
				budget: data.budget,
				totalIncome: data.totals.inc,
				totalExpense: data.totals.exp,
				percentage: data.percentage
			}	
		},
		
		testing: function(){
			console.log(data);
		}		
	}
	
})();

var uiController = (function(){
    var DOMStrings = {
		// Set DOM strings
        inputType : '.add__type',
        inputDescription : '.add__description',
        inputValue : '.add__value',
        incomeList : '.income__list',
        expenseList : '.expenses__list',
		container: '.container',
        inputBtn: '.add__btn',
		incomeLabel: '.budget__income--value',
		expenseLabel: '.budget__expenses--value',
		percentageLabel: '.budget__expenses--percentage',
		budgetLabel: '.budget__value',
		expensePercentageLabel: '.item__percentage',
		dateLabel: '.budget__title--month',
		typeSelection: '.add__type',
    };

	var formatNumber = function(num, type){
			var numSplit, int, dec
			/*
			+ or -  minus before number
			exactly 2 decimal points
			comma sepateting thousands
			2310.4567 -> + 2,314.46
			2000      -> + 2,000.00
			*/
			
			//get absolute number -removing sign
			num = Math.abs(num);
			num = num.toFixed(2); //set number of decimal places to 2 and round
			numSplit = num.split('.');
			int = numSplit[0];
			dec = numSplit[1];
			
			if(int.length > 3){
				int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3) //input 2310, output 2,310
			} 
			
			return (type === 'exp' ? '-': type === 'inc' ? '+': '') + ' ' + int + '.' + dec;
			
	};
	
	var getType = function(amount){
		return amount > 0 ? 'inc': amount < 0 ? 'exp' : '';
		
	};
	
	var nodelistForeach = function(list, callback){
		for(var i = 0; i < list.length; i++){
				callback(list[i], i);	
			}
	};
	
    return {
        getInput: function(){
            var bugetType = document.querySelector(DOMStrings.inputType).value;
            var budgetDescription = document.querySelector(DOMStrings.inputDescription).value;
            var budgetItem = parseFloat(document.querySelector(DOMStrings.inputValue).value);          
            
			//return public object
            return {
                type: bugetType, 
                description: budgetDescription, 
                value: budgetItem
            };
        },
		
		addListItem: function(obj, type){
			// Create HTML string with placeholder text
			var html, newHTML, incomeList, expenseList, element;
			
			if(type === 'inc'){
				element = DOMStrings.incomeList;
				html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
			} else if(type === 'exp'){
				element = DOMStrings.expenseList;
				html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
			}

			// Replace placeholder text
			newHtml = html.replace('%id%',obj.id);
			newHtml = newHtml.replace('%description%',obj.description);
			newHtml = newHtml.replace('%value%', formatNumber(obj.value, getType(obj.value)));
			
			// Insert HTML into DOM
			document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);			
		},
		
		deleteListItem: function(selectorID){
			var element;
			// We need to grab the parent to remove the parent and remove the child
			element = document.getElementById(selectorID);
			element.parentNode.removeChild(element);
		},
		
		clearFields: function(){
			var fields, fieldArr;
			// Returns a list not an array
			fields =  document.querySelectorAll(DOMStrings.inputDescription +  ',' + DOMStrings.inputValue);
			// Call the prototype function slice and pass in the 
			// List fields using call
			fieldArr = Array.prototype.slice.call(fields);
			// Clear the fields foreach function takes 3 args (elem, indx, array)
			fieldArr.forEach(function (elem) {
				elem.value = '';
			});
			
			// Set focus to 1st element of list (description)
			fieldArr[0].focus();
			
		},
		
		displayBudget : function(obj){
			document.querySelector(DOMStrings.incomeLabel).innerHTML = formatNumber(obj.totalIncome, getType(obj.totalIncome));
			document.querySelector(DOMStrings.expenseLabel).innerHTML = formatNumber(obj.totalExpense, getType(obj.totalIncome));
			
			if(obj.budget > 0){
				document.querySelector(DOMStrings.budgetLabel).innerHTML = formatNumber(obj.budget, 'inc');
			} else if(obj.budget < 0){
				document.querySelector(DOMStrings.budgetLabel).innerHTML = formatNumber(obj.budget, 'exp');
			} else{
				document.querySelector(DOMStrings.budgetLabel).innerHTML = formatNumber(0, '');
			}
			
			if(obj.percentage > 0){
				document.querySelector(DOMStrings.percentageLabel).innerHTML = obj.percentage + '%';
			} else{
				document.querySelector(DOMStrings.percentageLabel).innerHTML = '- - -';
			}			
		},
		
		displayPercentages: function(percentages){
			var fields = document.querySelectorAll(DOMStrings.expensePercentageLabel);
			/* 	Create a function to loop though our node list, 
				return the element and the index.
				Parameters are the list and the callback function
			*/
			
			//Call the function, pass in the list and the function to be excuted
			nodelistForeach(fields, function(current){
				current.classList.toggle('red-focus');
			});

		},
		
		displayMonth : function(){
			var now, year, months, month
			months = ['January', 'February', 'March', 'April', 'May', 'June', 
					  'July', 'August', 'September', 'October', 'November', 'December'];
			now = new Date();
			year = now.getFullYear();
			month = now.getMonth();
			
			document.querySelector(DOMStrings.dateLabel).innerHTML = months[month] + ' ' + year;
		},
		
		changeType: function(){			
			var fields  = document.querySelectorAll(DOMStrings.typeSelection + ','
													+ DOMStrings.inputDescription + ',' 
													+ DOMStrings.inputValue);

			//Call the function, pass in the list and the function to be excuted
			nodelistForeach(fields, function(current){
				//toggle the red focus class for expenses
				current.classList.toggle('red-focus');
			});	
			
			document.querySelector(DOMStrings.inputBtn).classList.toggle('red');
		},
		
        getDomStrings: function(){
            return DOMStrings;
        }
    }
})();


var controller = (function(budgetCtrlr, uiCtrlr){
	
	var setupEventListener = function(){
		var DOM = uiCtrlr.getDomStrings();
		
		//Add event listeners
		document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
		document.addEventListener('keypress', function(event){        
			// Some Browsers use which, so good practive to use both
			if(event.keyCode === 13 || event.which === 13) { 
				ctrlAddItem();
			}
		});

		// Use event bulling to grab event at the parent of both lists
		document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
		
		document.querySelector(DOM.typeSelection).addEventListener('change', uiCtrlr.changeType);
	};
	
	var updatePercentages = function(){
		var percentages;
		// 1. Calculate the percentages
		budgetCtrlr.calculatePercentages();
		// 2. Read them from budget controller
		percentages = budgetCtrlr.getPercentages();
		// 3. Update UI
		uiCtrlr.displayPercentages(percentages);
	};
		
	// update budget
	var updateBudget = function(){
		//1. Calculate budget
		budgetCtrlr.calculateBudget();
		//2. Return the budget
		var budget = budgetCtrlr.getBudget();
		//3. Display the budget on the UI
		uiCtrlr.displayBudget(budget);
	};
	
	// Add item to list
    var ctrlAddItem = function(){
		var input, newItem;
        //1. Get input data
		input = uiCtrlr.getInput();
		
		if(input.description !== '' && !isNaN(input.value)){
			//2. Add the item to bugetController
			newItem = budgetCtrlr.addItem(input.type, input.description, input.value);
			//3. Add the item to the UI
			uiCtrlr.addListItem(newItem, input.type);
			//4. Clear the fields
			uiCtrlr.clearFields();
			//5. Calculate and update budget
			updateBudget();
			//6. Calculate and update percentages
			updatePercentages();
		}
    };
    
	// delete item from list
	var ctrlDeleteItem = function(event){
		var itemID, splitID, type, ID;
		
		// Grab ID of element if ID is present
		itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
		// Only remove item if ID is present
		if(itemID){
			splitID = itemID.split('-');
			type = splitID[0];
			ID = parseInt(splitID[1]);

			//1. Delete item from data structure						
			budgetCtrlr.deleteItem(type, ID);
			//2. Delete item from UI
			uiCtrlr.deleteListItem(itemID);
			//3. Update and show the new budget
			updateBudget();
		}
	};
	
	//return public function
	return {
		init: function(){
			console.log('App started');	
			uiCtrlr.displayMonth();
			setupEventListener();
			uiCtrlr.displayBudget({
				budget: 0,
				totalIncome: 0,
				totalExpense: 0,
				percentage: -1
			});
		}
	};
})(budgetController, uiController);

controller.init();
function calculate () {
	const nm1 = +document.querySelector('[name="nm1"]').value;
	const nm2 = +document.querySelector('[name="nm2"]').value;
	const oper = document.querySelector('[name="oper"]').value;
	
	let result;
	
	if (oper === 'plus') {
		result = nm1 + nm2;
	}  else if (oper === 'divide') {
		result = nm1 / nm2;
	}  else if (oper === 'multiply') {
		result = nm1 * nm2;
	}   else if (oper === 'minus') {
		result = nm1 - nm2;
	}   else {
		console.error('Wrong oper!');
		alert('Wrong operation is selected');
	}
	document.querySelector('.calc-result').value = result;
}
document.querySelector('.calc-calculate').addEventListener('click',function() {
	calculate ();
	});
	
	document.querySelector('[name="oper"]').addEventListener('change', function () {
		calculate ();
	});
	
	document.querySelector('[name="nm1"]').addEventListener('input', function () {
		calculate ();
	});
		
		document.querySelector('[name="nm2"]').addEventListener('input', function () {
		 calculate ();
	});
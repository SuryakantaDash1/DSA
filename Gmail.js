
	const finddomains = (input) => {

		let domainFre = {};
		let ans = [];

		for (let i = 0; i < input.length; i++) {

			let findindex = input[i].indexOf('@');

			if (input[i].substring(findindex + 1) in domainFre)
				domainFre[input[i].substring(findindex + 1)]++;
			else domainFre[input[i].substring(findindex + 1)] = 1;
		}

		for (let it in domainFre)
			ans.push([it, domainFre[it]]);

		return ans.sort();
	}

	let input = [
		'ghi@hotmail.com', 'def@yahoo.com', 'ghi@gmail.com', 'abc@channelier.com', 'abc@hotmail.com', 'def@hotmail.com', 'abc@gmail.com', 'abc@yahoo.com', 'def@channelier.com','jkl@hotmail.com', 'ghi@yahoo.com', 'def@gmail.com'
	];
	let ans = [];
	ans = finddomains(input);

	for (let i = 0; i < ans.length; i++)
    console.log(`${ans[i][0]} ${ans[i][1]}`);



  
  
function whatIsInAName(collection, source) {

  const arr = [];

  let lengthOfCollection = collection.length;

  let propertyNames = Object.getOwnPropertyNames(source);


  for (let i = 0; i < lengthOfCollection; i++) {
	  for (let j = 0; j < propertyNames.length; j++) {
			if (collection[i].hasOwnProperty(propertyNames[j])) {
				if (collection[i][propertyNames[j]] === source[propertyNames[j]])
				arr.push(collection[i])
			}
	  }
  }

  let uniqueEntries = [];

	arr.forEach((c) => {
		if (!uniqueEntries.includes(c)) {
			uniqueEntries.push(c);
		}
	});

//   let result = arr.reduce((a, b ) => a && b);

	let finalResult = []; 

	for (let k = 0; k < uniqueEntries.length; k++) {
		if (Object.getOwnPropertyNames(uniqueEntries[k]) === propertyNames) {
			finalResult.push(uniqueEntries[k])
		}
		return finalResult;
	}

	return finalResult;
}

console.log(whatIsInAName(
	[{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], 
	{ "apple": 1, "bat": 2 }
	));
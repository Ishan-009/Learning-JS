// For-of-loop , it automatically iterates over an array and print the index element in earch iteration of a loop

let arrayItems = ["fruits", "vegetables"];
for (const menu of arrayItems) console.log(menu);

// if suppose we want items with its index , we can use entries method over the for of loop like this

for (const [idx, items] of arrayItems.entries())
  console.log(`Printing Items with respective Index ${idx + 1}:- ${items}`);

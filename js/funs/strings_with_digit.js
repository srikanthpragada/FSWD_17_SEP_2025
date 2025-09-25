
names = ['Abc', 'Abc 123', 'Xy 99', 'Def']

selected_names = names.filter(s => /\d/.test(s))

console.log(selected_names)


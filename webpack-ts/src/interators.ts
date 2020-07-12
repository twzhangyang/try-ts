const list = ['one', 'two', 'three'];

for (let l in list) {
  console.log(l);
}

for (let l of list) {
  console.log(l);
}

const set: any = new Set(list);
set.some = 'thing';
for (let l in set) {
  console.log(l);
}

for (let l of set) {
  console.log(l);
}

function* iAmAGenerator(): Iterator<number> {
  for( let i = 0; i<3; i ++) {
    const inside = yield i;
    console.log(`inside ${i}`, inside);
  }
}

const iterator = iAmAGenerator();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.return(1));
console.log(iterator.throw("exception"));

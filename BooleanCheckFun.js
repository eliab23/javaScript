function booWho(argument) {
  if (argument === true || argument === false) {
    console.log(true);
  } else {
    console.log(false);
  }
}

booWho(true);
booWho(false);
booWho([1, 2, 3]);
booWho([].slice);
booWho({ "a": 1 });
booWho(1);
booWho(NaN);
booWho("a");
booWho("true");
booWho("false");
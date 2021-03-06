//Burger constructor
var Burger = function(path, name) {
  this.path = path;
  this.name = name;
  this.vote = 0;
};

//Create Objects...Want to shorten this up?
var b1 = new Burger('burg1.jpg', 'b1');
var b2 = new Burger('burg2.jpg', 'b2');
var b3 = new Burger('burg3.png', 'b3');
var b4 = new Burger('burg4.jpg', 'b4');
var b5 = new Burger('burg5.jpg', 'b5');
var b6 = new Burger('burg6.jpg', 'b6');
var b7 = new Burger('burg7.png', 'b7');
var b8 = new Burger('burg8.jpg', 'b8');
var b9 = new Burger('burg9.jpeg', 'b9');
var b10 = new Burger('burg10.jpeg', 'b10');
var b11 = new Burger('burg11.jpg', 'b11');
var b12 = new Burger('burg12.jpg', 'b12');
var b13 = new Burger('burg13.jpg', 'b13');
var b14 = new Burger('burg14.jpg', 'b14');
var b15 = new Burger('burg15.jpg', 'b15');
var b16 = new Burger('burg16.jpg', 'b16');
var b17 = new Burger('burg17.jpg', 'b17');
var b18 = new Burger('burg18.jpg', 'b18');
var b19 = new Burger('burg19.jpg', 'b19');
var b20 = new Burger('burg20.jpg', 'b20');

//tracking object
var tracker = {
  //array of burger objects
  burgArray: [b1, b2, b3, b4, b5, b6, b7, b8, b9, b10,
  b11, b12, b13, b14, b15, b16, b17, b18, b19, b20],

  //array of votes -- currently not updating onclick.  object vote variable is updating.
  burgVotes: [b1.vote, b2.vote, b3.vote, b4.vote, b5.vote, b6.vote, b7.vote, b8.vote, b9.vote, b10.vote,
  b11.vote, b12.vote, b13.vote, b14.vote, b15.vote, b16.vote, b17.vote, b18.vote, b19.vote, b20.vote],

  leftImage: '',
  rightImage: '',
};

tracker.randImg = function() {
  return Math.floor(Math.random() * tracker.burgArray.length);
};

tracker.addImages = function() {
  var img0Loc = document.getElementById('img0');
  var img1Loc = document.getElementById('img1');
  tracker.leftImage = tracker.randImg();
  img0Loc.src = 'img/' + tracker.burgArray[tracker.leftImage].path;
  tracker.rightImage = tracker.randImg();
  img1Loc.src = 'img/' + tracker.burgArray[tracker.rightImage].path;
  if (img0Loc.src == img1Loc.src) {
    img1Loc.src = 'img/' + tracker.burgArray[tracker.randImg()].path;
  };
  //console.log(tracker.leftImage, tracker.rightImage);
};


tracker.voteTrackL = function() {
  console.log('clicked left image!');
  tracker.burgArray[tracker.leftImage].vote += 1
  tracker.addImages();
  // for (var i = 0; i < tracker.burgArray.length; i++) {
  //   var num = tracker.burgArray[i].name;
  //   var grabLi = document.getElementById(num);
  //   grabLi.appendChild(document.createTextNode(tracker.burgArray[i].vote));
  //   grabLi.appendChild();
  //};
};

tracker.voteTrackR = function() {
  console.log('clicked right image!');
  tracker.burgArray[tracker.rightImage].vote += 1;
  tracker.addImages();
};

//Click one image to replace both images with new random.  Need to add vote tracking
var vote0 = document.getElementById('img0');
var vote1 = document.getElementById('img1');
vote0.addEventListener('click', tracker.voteTrackL);
vote1.addEventListener('click', tracker.voteTrackR);

tracker.addImages();

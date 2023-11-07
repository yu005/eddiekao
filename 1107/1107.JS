var x = 5 + 2 + 3;
console.log(x);

var y = "5" + 2 + 3;
console.log(y);

var age = 22;
if (age < 18) {
    console.log("未成年")
} else if (age < 65) {
    console.log("成年人")
} else {
    console.log("老年人")
}

for (i = 1; i < 10; i++) {
    for (j = 1; j < 10; j++) {
        a = i * j;
        console.log(i + '*' + j + '=' + a);
    }
}


function pic() {
    var imgElement1 = document.getElementById('pic1');
    var imgElement2 = document.getElementById('pic2');

    var currentSrc1 = imgElement1.src;
    var currentSrc2 = imgElement2.src;

    if (currentSrc1.endsWith('images/cat.jpg')) {
        imgElement1.src = 'images/R.png';
        imgElement2.src = 'images/cat.jpg';
    } else {
        imgElement1.src = 'images/cat.jpg';
        imgElement2.src = 'images/R.png';
    }
}
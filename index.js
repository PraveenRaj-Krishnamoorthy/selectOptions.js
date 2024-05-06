// button function name func() is common for all the components!;

// const func = () => {
//     let x = document.getElementsByName("check")
//     let output = document.querySelector(".checked")
//     // console.log(x);
//     let y = "";
//     for (let i = 0; i < x.length; i++) {
//         if (x[i].checked) {
//             y += x[i].value + " "
//         }
//         output.innerHTML = y
//     }
// }

const func = () => {
    // first method easiest!
    // let x = document.getElementById("select1");
    // let y = x.value
    // console.log(y);
    // ********************************************

    // second method
    let x = document.getElementById("select1")
    let y = document.getElementById("select2")
    let p = x.options[x.selectedIndex].value;
    let q = y.options[y.selectedIndex].value;
    if (p != q) {
        alert();
    } else {
        alert(p + " " + q)
    }
}
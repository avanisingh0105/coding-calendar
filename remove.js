function onStorageEvent(storageEvent) {
  alert("storage event");
}




window.addEventListener("storage", onStorageEvent, false);

// var removedContestfrompopup = localStorage.getItem(`removedContest`);
// var main = document.getElementById("main");
// main.innerHTML += removedContestfrompopup;
// console.log( (removedContestfrompopup));
// console.log (typeof (removedContestfrompopup));

// // Array.from(selectDivs).forEach(function (element) {
// //     element.addEventListener("mouseover", function () {

// //         var c = element.childNodes;
// //         c[3].style.display = "block";

// //         c[3].addEventListener("click", function () {
// //             var Contest = c[3].parentElement;
// //             console.log(typeof (Contest));
// //             var u = Contest.childNodes[1].href;//giving href

// //             console.log((u));//undefined
// //             console.log((Contest));//giving div

// //             localStorage.setItem("removedContest", Contest.outerHTML);//undefined
// //             mapRemoved.add(u);
// //             Contest.remove();
// //             var removedContestfrompopup = localStorage.getItem("removedContest");
// //             var main = document.getElementById("main");
// //             main.innerHTML += removedContestfrompopup;
// //             console.log(typeof (removedContestfrompopup));

// //             console.log((removedContestfrompopup));

// //         });
// //     });

// //     element.addEventListener("mouseout", function () {
// //         var c = element.childNodes;
// //         c[3].style.display = "none";
// //     });

// // });
var main = document.createElement("div");
main.setAttribute("id", "main");
document.body.appendChild(main);


function all() {
  // api url
  const api_url = "https://kontests.net/api/v1/all";
  getapi(api_url);
  // Defining async function
  async function getapi(url) {
    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
   
    show(data);
  }

  var refreshButton = document.getElementById("refreshButton");
  refreshButton.addEventListener("click", refresh);
  function refresh() {
    // document.getElementById("liveSection").innerHTML = "";
    // document.getElementById("upcomingSection").innerHTML = "";

    liveSection.remove();
    upcomingSection.remove();
    mainSection.remove();
    getapi(api_url);
    console.log("refreshed");
  }

   var removedPageButton = document.getElementById("removedPageButton");
   removedPageButton.addEventListener("click", refresh);
  // function refresh() {
  //   liveSection.remove();
  //   upcomingSection.remove();
  //   mainSection.remove();
  //   getapi(api_url);
  //   console.log("refreshed");
  // }

  // var refreshButton = document.getElementById("refreshButton");
  //  console.log(refreshButton);
  //  refreshButton.addEventListener("click", refresh);
  // window.addEventListener("DOMContentLoaded", (event) => {
  // });

  // Function to hide the loader
  // function hideloader() {
  //     document.getElementById('loading').style.display = 'none';
  // }
  // Function to define innerHTML for HTML table
  // function show(data) {
  //     data.sort(GetSortOrder("end_time"));
  //     let tab =""

  //     let map = new Map();
  //     map.set('CodeForces', 'codeforces.png');
  //     map.set('CodeChef', 'codechef.png');
  //     map.set('HackerEarth', 'hackerearth.svg');
  //     map.set('HackerRank', 'hackerrank.png');
  // //     // Loop to access all rows
  //     for (let r of data) {
  //        var s =  map.get(r.site);
  //         tab += `<div><img src="assets/${s}">
  //  <a href="${r.url}" target="_blank" >${r.name}</a>${r.status}</div>`;

  //     }
  //     document.getElementById("data").innerHTML = tab;
  // //     // Setting innerHTML as tab
  //     var divList = document.getElementsByTagName("div");

  //     //var divList = document.querySelectorAll("div");
  //     for (let d of divList) {
  //         d.style.backgroundColor = "lightgreen";

  //         d.style.width = "400px";
  //         d.style.height = "50px";
  //         d.style.fontSize = "15px";
  //         d.style.margin = "10px";
  //         d.style.padding = "15px";

  //     }
  //    // console.log(data);
  // }

  let mapImage = new Map();
  mapImage.set("CodeForces", "codeforces.png");
  mapImage.set("CodeChef", "codechef.png");
  mapImage.set("HackerEarth", "hackerearth.svg");
  mapImage.set("HackerRank", "hackerrank.png");
  mapImage.set("LeetCode", "leetcode.png");

  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  document.body.style.width = "700px";

  function show(data) {
    //live section

    data.sort((a, b) => {
      return new Date(a.end_time) - new Date(b.end_time); // descending
    });
    // var main = document.createElement('div');
    // main.setAttribute("id", "main");
    // document.body.appendChild(main);

    var liveSection = document.createElement("div");
    liveSection.setAttribute("id", "liveSection");
    // var liveSection = document.getElementById("liveSection");

    var liveContests = document.createElement("div");
    var liveContestsText = document.createTextNode("LIVE Contests!");
    liveContests.style.backgroundColor = "#4287f5";
    liveContests.style.color = "white";
    liveContests.style.fontSize = "150%";
    liveContests.style.marginBottom = "10px";
    liveContests.style.padding = "15px";
    liveContests.style.width = "1000%";

    // liveContests.style.width = "400px";

    liveContests.appendChild(liveContestsText);
    liveSection.appendChild(liveContests);

    document.body.appendChild(liveSection);

    //upcoming section
    var upcomingSection = document.createElement("div");
    upcomingSection.setAttribute("id", "upcomingSection");
    //var upcomingSection = document.getElementById("upcomingSection");

    var upcomingContests = document.createElement("div");
    var upcomingContestsText = document.createTextNode("Upcoming Contests!");
    upcomingContests.style.backgroundColor = "#4287f5";
    upcomingContests.style.color = "white";
    upcomingContests.style.fontSize = "150%";
    upcomingContests.style.marginBottom = "10px";
    upcomingContests.style.padding = "15px";
    upcomingContests.style.width = "1000%";

    // liveContests.style.width = "400px";

    upcomingContests.appendChild(upcomingContestsText);
    upcomingSection.appendChild(upcomingContests);

    document.body.appendChild(upcomingSection);
    //main
    var mainSection = document.createElement("div");
    mainSection.setAttribute("id", "mainSection");
    var mainContests = document.createElement("div");
    var mainContestsText = document.createTextNode("main Contests!");
    mainContests.style.backgroundColor = "#4287f5";
    mainContests.style.color = "white";
    mainContests.style.fontSize = "150%";
    mainContests.style.marginBottom = "10px";
    mainContests.style.padding = "15px";
    mainContests.style.width = "1000%";

    // liveContests.style.width = "400px";
    //var mainSection = document.getElementById("mainSection");

    mainContests.appendChild(mainContestsText);
    mainSection.appendChild(mainContests);

    document.body.appendChild(mainSection);
    for (let d of data) {
      var site = d.site;
      var name = d.name;
      var url = d.url;
      var start_time = d.start_time;
      var end_time = d.end_time;
      var duration = d.duration;
      var in_24_hours = d.in_24_hours;
      var status = d.status;
      // if (mapRemoved.has(url)) continue;
      if (localStorage.getItem(url) != null) {
        console.log(`Email address exists`);
        var removedContestfrompopup = localStorage.getItem(url);
        // var mainSection = document.getElementById("mainSection");
        mainSection.innerHTML += removedContestfrompopup;
        continue;
      }
      var divElement = document.createElement("div");
      //setting image
      var imageElement = document.createElement("img");
      var imageName = mapImage.get(site);
      imageElement.setAttribute("src", `assets/${imageName}`);

      //  imageElement.style.width = "30px";
      // imageElement.style.height = "30px";
      imageElement.style.fontSize = "20px";
      imageElement.style.marginBottom = "2px";
      // imageElement.style.padding = "1px";
      imageElement.style.backgroundColor = "grey";
      imageElement.style.margin = "5px";
      divElement.appendChild(imageElement);
      //contest name with link
      var heading = document.createElement("a");
      heading.setAttribute("href", `${url}`);
      heading.setAttribute("target", "_blank");
      heading.style.margin = "5px";

      let headingtext = document.createTextNode(`${name}`);
      heading.appendChild(headingtext);
      // appending heading to each div
      divElement.appendChild(heading);

      //start time
      //if CODING then " Started" and only end time
      //if BEFORE then start time and end time
      //end time

      if (status == "CODING") {
        let endTime = document.createElement("p");
        var localDateStart = new Date(`${end_time}`);
        let endTimeText = document.createTextNode(
          `Ends at : ${localDateStart}`
        );

        // let startTimeText = document.createTextNode(`${start_time.toString()}`);

        endTime.appendChild(endTimeText);
        divElement.appendChild(endTime);
        liveSection.appendChild(divElement);
      } else if (status == "BEFORE") {
        let startTime = document.createElement("p");
        var localDateStart = new Date(`${start_time}`);
        let startTimeText = document.createTextNode(
          `Starts at : ${localDateStart}`
        );
        // let startTimeText = document.createTextNode(`${end_time}`);
        let endTime = document.createElement("p");
        var localDateEnd = new Date(`${end_time}`);
        let endTimeText = document.createTextNode(`Ends at : ${localDateEnd}`);
        // let endTimeText = document.createTextNode(`${end_time}`);
        startTime.appendChild(startTimeText);
        divElement.appendChild(startTime);
        endTime.appendChild(endTimeText);
        divElement.appendChild(endTime);

        upcomingSection.appendChild(divElement);
      }

      divElement.style.width = "700px";
      // divElement.style.height = "50px";
      divElement.style.fontSize = "200%";
      divElement.style.marginBottom = "10px";
      divElement.style.padding = "15px";
      divElement.style.backgroundColor = "grey";
      divElement.className = "myDIV";

      //remove button
      var removeButton = document.createElement("button");
      var removeButtonText = document.createTextNode("Remove contest");
      removeButton.className = "hidden";
      removeButton.style.display = "none";
      removeButton.appendChild(removeButtonText);
      divElement.appendChild(removeButton);
      //    divElement.style.backgroundColor = "green";

      //appending each div to body
      // document.body.appendChild(divElement);
    }
    // document.getElementById("demo").addEventListener("mouseover", mouseOver);
    // document.getElementById("demo").addEventListener("mouseout", mouseOut);
    var selectDivs = document.getElementsByClassName("myDIV");

    // document.getElementsByClassName("myDIV").addEventListener("mouseover", mouseOver);
    // document.getElementsByClassName("myDIV").addEventListener("mouseout", mouseOut);

    Array.from(selectDivs).forEach(function (element) {
      element.addEventListener("mouseover", mouseOver);
      element.addEventListener("mouseout", mouseOut);
    });
    function removeContest() {
      var Contest = this.parentElement;
      console.log(typeof Contest);
      var u = Contest.childNodes[1].href; //giving href

      console.log(u); //giving url
      console.log(Contest); //giving div

      localStorage.setItem(u, Contest.outerHTML); //setting url->div
      // mapRemoved.add(u);
      Contest.remove();
      var removedContestfrompopup = localStorage.getItem(u);
      var mainSection = document.getElementById("mainSection");
      mainSection.innerHTML += removedContestfrompopup;
      console.log(typeof removedContestfrompopup);

      console.log(removedContestfrompopup);
    }
    function mouseOver() {
      var c = this.childNodes;
      c[3].style.display = "block";

      c[3].addEventListener("click", removeContest);
    }

    function mouseOut() {
      var c = this.childNodes;
      c[3].style.display = "none";
    }
  }
}


  document.addEventListener("DOMContentLoaded", all);



"use strict";

function createBookmarksTable() {
  const root = document.querySelector("DL");
  console.log("root");
  const bookmarksTable = document.createElement("table");
  root.append(bookmarksTable);
  const contentArray = [...document.links];
  console.log(contentArray);
  contentArray.forEach((link) => {
    const tr = document.createElement("tr");
    const tdName = document.createElement("td");
    const tdValue = document.createElement("td");
    tdName.textContent = link.textContent;
    tdValue.textContent = link.href;
    bookmarksTable.append(tr);
    tr.append(tdName, tdValue);
  });
  root.querySelector("DT").remove();
}


window.addEventListener("click", createBookmarksTable);
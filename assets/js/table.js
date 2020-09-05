"use strict";

window.addEventListener("load", createBookmarksTable, {once: true});


function createBookmarksTable() {
  const root = document.querySelector("DL");
  const bookmarksTable = document.createElement("table");
  root.append(bookmarksTable);
  const contentArray = [...document.links];
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



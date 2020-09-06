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
    const tdValueLink = document.createElement("a");
    const tdValue = document.createElement("td");
    tdName.textContent = link.textContent;
    tdValueLink.href = link.href;
    tdValueLink.textContent = tdValueLink.href;
    bookmarksTable.append(tr);
    tr.append(tdName, tdValue);
    tdValue.append(tdValueLink);
  });
  root.querySelector("DT").remove();
  document.querySelector("H1").textContent = "Bookmarks Table";
}



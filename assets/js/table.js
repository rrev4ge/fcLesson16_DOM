"use strict";

window.addEventListener("load", createBookmarksTable, {once: true});

function createBookmarksTable() {
  const root = document.querySelector("DL");
  const bookmarksTable = document.createElement("table");
  root.append(bookmarksTable);
  const contentArray = [...document.links];
  contentArray.forEach((link) => {
    const {href, textContent} = link;
    const tr = bookmarksTable.insertRow();
    const tdName = tr.insertCell();
    const tdValue = tr.insertCell();
    bookmarksTable.append(tr);
    const tdValueLink = document.createElement("a");
    tdName.textContent = textContent;
    tdValueLink.href = href;
    tdValueLink.textContent = tdValueLink.href;
    tdValue.append(tdValueLink);
  });
  root.querySelector("DT").remove();
  document.querySelector("H1").textContent = "Bookmarks Table";
}



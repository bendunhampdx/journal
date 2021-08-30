// Business logic for Journal

export function Journal() {
  this.entries = {};
  this.entryId = 0;
}

Journal.prototype.addEntry = function(entry) {
  entry.id = this.assignId();
  this.entries[entry.id] = entry;
};

Journal.prototype.assignId = function() {
  this.entryId += 1;
  return this.entryId;
};

// Journal.prototype.findEntry = function(id) {
//   if (this.entries[id] != undefined) {
//     return this.entries[id];
//   }
//   return false;
// };

// Business logic for Entry

// export function Entry(date, title, text) {
//   this.date = date;
//   this.title = title;
//   this.text = text;
// }

// Entry.prototype.getTeaser = function() {
//   const teaser = (inputtedText.split(" ", 8)).join();
// };
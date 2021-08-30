import { Journal } from './journal.js';
import { Entry } from './journal.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

let yourJournal = new Journal();
console.log(yourJournal);

// function displayEntryTitles(entryToDisplay) {
//   console.log(yourJournal);
//   let entryList = $("ul#entries");
//   let htmlForJournalEntry = "";
//   Object.keys(entryToDisplay.entries).forEach(function(key) {
//     const entry = entryToDisplay.findEntry(key);
//     htmlForJournalEntry += "<li id=" + entry.id + ">" + entry.title + " " + entry.date + "</li>";
//   });
//   entryList.html(htmlForJournalEntry);
// }
function showEntry(entryId) {
  const entry = yourJournal.findEntry(entryId);
  console.log(entry);
  $('#journalEntries').show();
  $('.journalDate').html(entry.date);
  $('.journalTitle').html(entry.title);
  $('.journalText').html(entry.text);
}
$('#makeEntry').click(function() {
  $('#newEntry').show();
  $('#makeEntry').hide();
});

$('form#journal').submit(function(event) {
  event.preventDefault();
  const inputtedDate = $('input#date').val();
  const inputtedTitle = $('input#title').val();
  console.log(inputtedTitle);
  const inputtedText = $('input#text-area').val();
  // $("#date1").text(inputtedDate);
  // $("#title1").text(inputtedTitle);
  // $("#entry1").text(inputtedText);
  
  let newEntry = new Entry(inputtedDate, inputtedTitle, inputtedText);
  console.log(newEntry);
  
  yourJournal.addEntry(newEntry);
  showEntry(yourJournal);
  console.log(showEntry(yourJournal));
});
 
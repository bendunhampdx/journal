// import Entry from './journal.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$('#makeEntry').click(function() {
  $('#newEntry').show();
  $('#makeEntry').hide();
});

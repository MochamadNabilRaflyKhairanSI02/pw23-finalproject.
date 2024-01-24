// JavaScript code for the given HTML

// Add event listener to the hamburger menu
document.querySelector('.bx-menu').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
 });
 
 // Add event listener to the close button in the navbar
 document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('nav').classList.remove('active');
 });
 
 // Add event listener to the links in the navbar
 document.querySelectorAll('nav ul li a').forEach(function(link) {
    link.addEventListener('click', function() {
        document.querySelector('nav').classList.remove('active');
    });
 });
 
 // Add event listener to the dropdown button
 document.querySelector('.dropdown-btn').addEventListener('click', function() {
    document.querySelector('.dropdown-content').classList.toggle('show');
 });
 
 // Add event listener to the table rows
 document.querySelectorAll('table tbody tr').forEach(function(row) {
    row.addEventListener('click', function() {
        document.querySelectorAll('table tbody tr').forEach(function(otherRow) {
            otherRow.classList.remove('active');
        });
        row.classList.add('active');
    });
 });
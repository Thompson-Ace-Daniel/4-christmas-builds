const dateElement = document.querySelector('.current-date');
const currentDate = new Date();
const options = { year: 'numeric' };
dateElement.textContent = "25th Dec, " + currentDate.toLocaleDateString(undefined, options);
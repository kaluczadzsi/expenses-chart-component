'use strict';

const daysEl = document.querySelectorAll('.col');
const days = [];

window.addEventListener('DOMContentLoaded', displayCharts);

document.querySelector('figure').addEventListener('mouseover', (e) => {
  if (e.target.classList.contains('col')) {
    e.target.classList.add('active');
  }
});

document.querySelector('figure').addEventListener('mouseout', (e) => {
  if (e.target.classList.contains('col')) {
    e.target.classList.remove('active');
  }
});

async function loadCharts() {
  const resp = await fetch('./data.json');
  const data = await resp.json();

  return data;
}

function displayCharts() {
  daysEl.forEach((day) => {
    days.push(day.dataset.day);
  });

  document.querySelectorAll('.col').forEach((el, i) => {
    loadCharts().then((data) => {
      if (el.dataset.day === data[i].day) {
        el.style.height = `${Math.floor(data[i].amount) * 2}px`;
      }
    });
  });
}

const t = [
  {
    day: 'mon',
    amount: 17.45,
  },
  {
    day: 'tue',
    amount: 34.91,
  },
];

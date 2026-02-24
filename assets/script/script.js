let interviewList = [];
let rejectedList = [];
let currentStatus = 'all-filter-btn';

let countStatusDisplay = document.getElementById('count-status');

let total = document.getElementById('total');
let interviewCounter = document.getElementById('interviewCounter');
let rejectedCounter = document.getElementById('rejectedCounter');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

const allCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main');
const filterSection = document.getElementById('filtered-section');

function calculateCounts() {

  const totalJobs = allCardSection.children.length;

  total.innerText = totalJobs;
  interviewCounter.innerText = interviewList.length;
  rejectedCounter.innerText = rejectedList.length;

  if (currentStatus === 'all-filter-btn') {
    countStatusDisplay.innerText = `${totalJobs} jobs`;
  } else if (currentStatus === 'interview-filter-btn') {
    countStatusDisplay.innerText = `${interviewList.length} of ${totalJobs} jobs`;
  } else if (currentStatus === 'rejected-filter-btn') {
    countStatusDisplay.innerText = `${rejectedList.length} of ${totalJobs} jobs`;
  }
}

calculateCounts();


function toggleStyle(id) {
  allFilterBtn.classList.add('bg-gray-300', 'text-black');
  interviewFilterBtn.classList.add('bg-gray-300', 'text-black');
  rejectedFilterBtn.classList.add('bg-gray-300', 'text-black');

  allFilterBtn.classList.remove('bg-black', 'text-white');
  interviewFilterBtn.classList.remove('bg-black', 'text-white');
  rejectedFilterBtn.classList.remove('bg-black', 'text-white');

  const selectedBtn = document.getElementById(id);
  currentStatus = id;

  // console.log(currentStatus);

  selectedBtn.classList.remove('bg-gray-300', 'text-black');
  selectedBtn.classList.add('bg-black', 'text-white');

  if (id === "all-filter-btn") {
    allCardSection.classList.remove('hidden');
    filterSection.classList.add('hidden');
  } else {
    allCardSection.classList.add('hidden');
    filterSection.classList.remove('hidden');
    if (id === "interview-filter-btn") renderList(interviewList);
    if (id === "rejected-filter-btn") renderList(rejectedList);
  }


  currentStatus = id;
  calculateCounts();

}

mainContainer.addEventListener('click', function (event) {
  if (event.target.classList.contains('interview-btn') || event.target.classList.contains('rejected-btn')) {
    const parentNode = event.target.closest('.card');

    const companyName = parentNode.querySelector('.company-name').innerText;
    const jobDegination = parentNode.querySelector('.job-designation').innerText;
    const jobInfo = parentNode.querySelector('.job-info').innerText;
    const jobDescription = parentNode.querySelector('.job-description').innerText;

    const isInterview = event.target.classList.contains('interview-btn');
    const statusText = isInterview ? "Interview" : "Rejected";

    const cardData = {
      companyName,
      jobDegination,
      jobInfo,
      actionStatus: statusText,
      jobDescription
    }

    if (isInterview) {
      if (!interviewList.find(item => item.companyName === companyName)) interviewList.push(cardData);
      rejectedList = rejectedList.filter(item => item.companyName !== companyName);
    } else {
      if (!rejectedList.find(item => item.companyName === companyName)) rejectedList.push(cardData);
      interviewList = interviewList.filter(item => item.companyName !== companyName);
    }

    const mainCard = Array.from(allCardSection.children).find(card => card.querySelector('.company-name').innerText === companyName);
    if (mainCard) {
      mainCard.querySelector('.status').innerText = statusText;
    }

    if (currentStatus === 'interview-filter-btn') renderList(interviewList);
    if (currentStatus === 'rejected-filter-btn') renderList(rejectedList);
    calculateCounts();
  } else if (event.target.classList.contains('btn-delete')) {
    const parentNode = event.target.closest('.card');
    const companyName = parentNode.querySelector('.company-name').innerText;

    const allCards = allCardSection.querySelectorAll('.card');
    allCards.forEach(card => {
      if (card.querySelector('.company-name').innerText === companyName) {
        card.remove();
      }
    });

    interviewList = interviewList.filter(item => item.companyName !== companyName);
    rejectedList = rejectedList.filter(item => item.companyName !== companyName);

    parentNode.remove();

    calculateCounts();

  }
});

function renderList(list) {
  filterSection.innerHTML = '';

  if(list.length === 0) {
    let blankCard = document.createElement('div');
    blankCard.className = "card flex justify-center items-center border p-8";
    blankCard.innerHTML = `
      <div class="text-center space-y-2">
        <img src="assets/others/jobs.png" alt="No applications" class="mx-auto mb-4 w-24">
        <p class="text-gray-500 font-medium">No applications found in this category.</p>
        <span class="text-gray-400 text-sm">Comming Soon New Opportunities</span>
      </div>
    `;
    filterSection.appendChild(blankCard);
    return;
  }

  list.forEach(item => {
    let div = document.createElement('div');
    div.className = "card flex justify-between border p-8";
    div.innerHTML = `
      <div class="space-y-6">
        <div>
          <h2 class="company-name text-xl font-bold pb-2">${item.companyName}</h2>
          <span class="job-designation">${item.jobDegination}</span>
          <p class="job-info pt-4">${item.jobInfo}</p>
        </div>
        <div class="space-y-2">
            <button class="status bg-teal-100 border-2 rounded p-1">${item.actionStatus}</button>
            <p class="job-description">${item.jobDescription}</p>
        </div>
        <div class="space-x-3">
            <button class="interview-btn bg-green-300 border-2 rounded p-1">Interview</button>
            <button class="rejected-btn bg-red-300 border-2 rounded p-1">Rejected</button>
        </div>
      </div>
      <div>
        <button class="btn-delete bg-red-200 text-red-600 px-4 py-2">
          Delete
        </button>
      </div>
    `;
    filterSection.appendChild(div);
  });
}

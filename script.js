
// https://phi-lab-server.vercel.app/api/v1/lab/issues
const container = document.getElementById("issuesContainer")
const spinner = document.getElementById("spinner")

async function loadIssues(){

spinner.classList.remove("hidden")

const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")

const data = await res.json()

displayIssues(data.data)

spinner.classList.add("hidden")

}

loadIssues()



//Display data 
function displayIssues(issues){

container.innerHTML=""

issues.forEach(issue=>{

const card = document.createElement("div")

card.classList.add("issue-card")

if(issue.status==="open"){
card.classList.add("issue-open")
}else{
card.classList.add("issue-closed")
}

card.innerHTML = `

<h3>${issue.title}</h3>

<p>${issue.description}</p>

<p>Status: ${issue.status}</p>
<p>Author: ${issue.author}</p>
<p>Priority: ${issue.priority}</p>
<p>Label: ${issue.label}</p>

`
card.addEventListener("click",()=>{
openModal(issue)
})

container.appendChild(card)

})

}


//Modal system 
const modal = document.getElementById("issueModal")

function openModal(issue){

modal.classList.remove("hidden")

document.getElementById("modalTitle").innerText = issue.title
document.getElementById("modalDesc").innerText = issue.description

document.getElementById("modalInfo").innerHTML = `

<p>Status: ${issue.status}</p>
<p>Author: ${issue.author}</p>
<p>Priority: ${issue.priority}</p>
<p>Label: ${issue.label}</p>
<p>Created: ${issue.createdAt}</p>

`

}

document.getElementById("closeModal").onclick = ()=>{
modal.classList.add("hidden")
}

//Search Functionallity 
document.getElementById("searchBtn").addEventListener("click", async ()=>{

const text = document.getElementById("searchInput").value

const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${text}`)

const data = await res.json()

displayIssues(data.data)

})


//tabes filter 
const tabs = document.querySelectorAll(".tab")

tabs.forEach(tab=>{

tab.addEventListener("click",async ()=>{

tabs.forEach(t=>t.classList.remove("active"))
tab.classList.add("active")

const status = tab.dataset.status

const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")

const data = await res.json()

let issues = data.data

if(status!=="all"){
issues = issues.filter(issue=>issue.status===status)
}

displayIssues(issues)

})

})
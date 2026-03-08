
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



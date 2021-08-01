const ghosts = [{
    name: "Banshee",
    evidence: ["emf5", "fingerprints", "freezing"],
    notes: "?"
},
{
    name: "Demon",
    evidence: ["freezing", "writing", "spiritbox"],
    notes: "?"
},
{
    name: "Jinn",
    evidence: ["emf5", "orbs", "spiritbox"],
    notes: "?"
},
{
    name: "Mare",
    evidence: ["freezing", "orbs", "spiritbox"],
    notes: "?"
},
{
    name: "Oni",
    evidence: ["emf5", "writing", "spiritbox"],
    notes: "?"
},
{
    name: "Phantom",
    evidence: ["emf5", "freezing", "orbs"],
    notes: "?"
},
{
    name: "Poltergeist",
    evidence: ["fingerprints", "orbs", "spiritbox"],
    notes: "?"
},
{
    name: "Revenant",
    evidence: ["emf5", "fingerprints", "writing"],
    notes: "?"
},
{
    name: "Shade",
    evidence: ["emf5", "orbs", "writing"],
    notes: "?"
},
{
    name: "Spirit",
    evidence: ["fingerprints", "writing", "spiritbox"],
    notes: "?"
},
{
    name: "Wraith",
    evidence: ["fingerprints", "freezing", "spiritbox"],
    notes: "?"
},
{
    name: "Yurei",
    evidence: ["freezing", "orbs", "writing"],
    notes: "?"
},
{
    name: "Yokai",
    evidence: ["orbs", "writing", "spiritbox"],
    notes: "?"
},
{
    name: "Hantu",
    evidence: ["fingerprints", "orbs", "writing"],
    notes: "?"
}]

function clearList() {
    document.getElementById("table-inside").innerHTML = "";
}

function formatEvidence(arr) {
    let out = ""
    function addElement(string) {
        if (out == "") {
            out = string
        } else {
            out = out + `, ${string}`
        }
    }
    if (arr.includes("emf5")) addElement("EMF 5");
    if (arr.includes("fingerprints")) addElement("Fingerprints");
    if (arr.includes("freezing")) addElement("Freezing Temperatures");
    if (arr.includes("orbs")) addElement("Ghost Orbs");
    if (arr.includes("writing")) addElement("Ghost Writing");
    if (arr.includes("spiritbox")) addElement("Spirit Box");

    return out;
}

function deleteRow(element) {
    element.remove();
}

function submit() {
    let selectedEvidence = [];

    if (document.getElementById("emf5").checked) selectedEvidence.push("emf5");
    if (document.getElementById("fingerprints").checked) selectedEvidence.push("fingerprints");
    if (document.getElementById("freezing").checked) selectedEvidence.push("freezing");
    if (document.getElementById("orbs").checked) selectedEvidence.push("orbs");
    if (document.getElementById("writing").checked) selectedEvidence.push("writing");
    if (document.getElementById("spiritbox").checked) selectedEvidence.push("spiritbox");

    console.log(selectedEvidence)

    document.getElementById("table-inside").innerHTML = "";
    ghosts.forEach(ghost => {
        let invalid = false;
        selectedEvidence.forEach(evidence => {
            if (!ghost.evidence.includes(evidence)) {
                invalid = true;
            };
        })
        if (invalid) return;
        document.getElementById("table-inside").innerHTML = document.getElementById("table-inside").innerHTML +
            `<tr id="${ghost.name}"><td><i class="fas fa-trash-alt" onClick="deleteRow(${ghost.name})"></i></td><td>${ghost.name}</td><td>${formatEvidence(ghost.evidence)}</td><td>${ghost.notes}</td></tr>`;
    })
}

document.getElementById("check").addEventListener("click", submit);
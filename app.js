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
},]

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
            `<tr><td>${ghost.name}</td><td>${formatEvidence(ghost.evidence)}</td><td>${ghost.notes}</td></tr>`;
    })
}

document.getElementById("check").addEventListener("click", submit);
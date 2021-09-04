const ghosts = [{
    name: "Banshee",
    evidence: ["dots", "orbs", "fingerprints"],
    notes: "?",
    strength: "A Banshee will always target the same player during hunts until it kills them.",
    weakness: "A Banshee will fear the Crucifix, boosting the Hunt-stopping range from 3m to 5m.",
    link: "https://phasmophobia.fandom.com/wiki/Banshee"
},
{
    name: "Demon",
    evidence: ["writing", "fingerprints", "freezing"],
    notes: "?",
    strength: "Demons are the most aggressive ghosts and will begin Hunts more often.",
    weakness: "Asking a Demon successful questions on the Ouija Board won't lower the user's sanity.",
    link: "https://phasmophobia.fandom.com/wiki/Demon"
},
{
    name: "Goryo",
    evidence: ["dots", "emf5", "fingerprints"],
    notes: "?",
    strength: "Goryos will usually only show itself on camera when there are no people nearby.",
    weakness: "Goryos are rarely seen far from their place of death",
    link: "https://phasmophobia.fandom.com/wiki/Goryo"
},
{
    name: "Hantu",
    evidence: ["orbs", "fingerprints", "freezing"],
    notes: "?",
    strength: "Hantu moves faster in colder areas (about 1.8m/s)",
    weakness: "Hantu moves slower in warmer areas (about 1 m/s)",
    link: "https://phasmophobia.fandom.com/wiki/Hantu"
},
{
    name: "Jinn",
    evidence: ["emf5", "fingerprints", "freezing"],
    notes: "?",
    strength: "A Jinn will travel at a faster speed if its victim is far away.",
    weakness: "Turning off the location's power source will prevent the Jinn from using its ability.",
    link: "https://phasmophobia.fandom.com/wiki/Jinn"
},
{
    name: "Mare",
    evidence: ["writing", "orbs", "spiritbox"],
    notes: "?",
    strength: "Increased chance to attack in the dark. As such, it will do what it can to achieve this, such as turning off lights and tripping the fuse box.",
    weakness: "Turning the lights on will lower its chance to attack.",
    link: "https://phasmophobia.fandom.com/wiki/Mare"
},
{
    name: "Myling",
    evidence: ["writing", "emf5", "fingerprints"],
    notes: "?",
    strength: "A Myling is known to be quieter when hunting",
    weakness: "Mylings more frequently make paranormal sounds",
    link: "https://phasmophobia.fandom.com/wiki/Myling"
},
{
    name: "Oni",
    evidence: ["dots", "emf5", "freezing"],
    notes: "?",
    strength: "Onis are more active when people are nearby and have been seen moving objects at great speed.",
    weakness: "Being more active will make the Oni easier to find and identify.",
    link: "https://phasmophobia.fandom.com/wiki/Oni"
},
{
    name: "Phantom",
    evidence: ["dots", "fingerprints", "spiritbox"],
    notes: "?",
    strength: "Looking at a Phantom will considerably drop your Sanity. This refers to any visible manifestations of the Phantom, including during a Hunt.",
    weakness: "Taking a photo of the Phantom will make it temporarily disappear. This, however, will not stop a Hunt.",
    link: "https://phasmophobia.fandom.com/wiki/Phantom"
},
{
    name: "Poltergeist",
    evidence: ["writing", "fingerprints", "spiritbox"],
    notes: "?",
    strength: "A Poltergeist is capable of influencing more objects at once than any other Ghosts, and is capable of shutting multiple doors at once.",
    weakness: "A Poltergeist is almost ineffective in an empty room.",
    link: "https://phasmophobia.fandom.com/wiki/Poltergeist"
},
{
    name: "Revenant",
    evidence: ["writing", "orbs", "freezing"],
    notes: "?",
    strength: "A Revenant will travel at a significantly faster (2x) speed when hunting a victim. Additionally, the Revenant can freely switch whoever it is targeting during a Hunt.",
    weakness: "Hiding from the Revenant will cause it to move at a significantly reduced (0.5x) speed.",
    link: "https://phasmophobia.fandom.com/wiki/Revenant"
},
{
    name: "Shade",
    evidence: ["writing", "emf5", "freezing"],
    notes: "?",
    strength: "As a shy ghost, a Shade will rarely perform actions in the presence of two or more people, making it harder to detect.",
    weakness: "Conversely, a Shade will rarely start a Hunt when players are grouped together.",
    link: "https://phasmophobia.fandom.com/wiki/Shade"
},
{
    name: "Spirit",
    evidence: ["writing", "emf5", "spiritbox"],
    notes: "?",
    strength: "The spirit has no discernible strengths, however it is known to increase its hunting as your sanity drops.",
    weakness: "Using Smudge Sticks on a Spirit will stop it attacking for 180 seconds instead of 90.",
    link: "https://phasmophobia.fandom.com/wiki/Spirit"
},
{
    name: "Wraith",
    evidence: ["dots", "emf5", "spiritbox"],
    notes: "?",
    strength: "Wraiths almost never touch the ground (when hunting, their model \"floats\" instead of actually walking, except for the crawling baby/lady models which still move their limbs). Because of this, footprint sounds from a Wraith will be rare to non-existent, and stepping in Salt will be less likely.",
    weakness: "Wraiths have a toxic reaction to Salt. If a Wraith comes into contact with a pile of salt, Ghost Activity will increase. This is especially strange considering the fact that they barely ever touch the ground.",
    link: "https://phasmophobia.fandom.com/wiki/Wraith"
},
{
    name: "Yokai",
    evidence: ["dots", "orbs", "spiritbox"],
    notes: "?",
    strength: "Talking near a Yokai will anger it and increase its chance of attacking.",
    weakness: "While hunting, a Yokai can only hear voices close to it.",
    link: "https://phasmophobia.fandom.com/wiki/Yokai"
},
{
    name: "Yurei",
    evidence: ["dots", "orbs", "freezing"],
    notes: "?",
    strength: "Yurei have been known to have a stronger effect on people's Sanity during a manifestation.",
    weakness: "Using Smudge Sticks on the Yurei will cause it to not wander around the location for ~90 seconds.",
    link: "https://phasmophobia.fandom.com/wiki/Yurei"
}
]

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
    if (arr.includes("dots")) addElement("D.O.T.S Projector");
    if (arr.includes("writing")) addElement("Ghost Writing");
    if (arr.includes("emf5")) addElement("EMF 5");
    if (arr.includes("orbs")) addElement("Ghost Orbs");
    if (arr.includes("fingerprints")) addElement("Fingerprints");
    if (arr.includes("freezing")) addElement("Freezing Temperatures");
    if (arr.includes("spiritbox")) addElement("Spirit Box");

    return out;
}

function deleteRow(element) {
    element.remove();
}

function submit() {
    let selectedEvidence = [];

    if (document.getElementById("dots").checked) selectedEvidence.push("dots");
    if (document.getElementById("writing").checked) selectedEvidence.push("writing");
    if (document.getElementById("emf5").checked) selectedEvidence.push("emf5");
    if (document.getElementById("orbs").checked) selectedEvidence.push("orbs");
    if (document.getElementById("fingerprints").checked) selectedEvidence.push("fingerprints");
    if (document.getElementById("freezing").checked) selectedEvidence.push("freezing");
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
            `<tr id="${ghost.name}"><td><i class="fas fa-trash-alt" onClick="deleteRow(${ghost.name})"></i></td><td><a href="${ghost.link}">${ghost.name}</a></td><td>${formatEvidence(ghost.evidence)}</td><td>${ghost.strength}</td><td>${ghost.weakness}</td><td>${ghost.notes}</td></tr>`;
    })
}

document.getElementById("check").addEventListener("click", submit);
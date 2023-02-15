const displayDirectory = document.querySelector(".directory");
const memberUrl = "../chamber/data/members.json";

async function getMembershipData(){
    const response = await fetch(memberUrl);
    const data = await response.json();
    console.log(data);
    displayBusinessCards(data.membership);

}
getMembershipData();

const displayBusinessCards = (membership)=>{
    membership.forEach((member) =>{
        let card = document.createElement("section");
        let name = document.createElement("h2"); 
        let image = document.createElement("img");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let webSite = document.createElement("a")
        let membershipLevel = document.createElement("p");

        name.textContent = `${member.name}`;
        image.setAttribute("src", `${member.image}`);
        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;
        webSite.href= `${member.website}`;
        let siteTextLink = document.createTextNode(`${member.websiteLink}`);
        webSite.appendChild(siteTextLink);
        webSite.title = `${member.websiteLink}`;
        webSite.target ="blank";
        membershipLevel.textContent = `Membership Level: ${member.membership}`;

        
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(membershipLevel);
        card.appendChild(phone);
        card.appendChild(webSite);

        card.appendChild(address);
        displayDirectory.appendChild(card);
    })
}
// -------------------Silver and Gold member free advertisement


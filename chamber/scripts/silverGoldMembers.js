const silverGoldMemberUrl = "../chamber/data/members.json";
let advertise = document.querySelector(".advertise");

async function memberApiFetch(){
    try {
      const response = await fetch(silverGoldMemberUrl);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        silverGoldMembershipDisplay(data);
      } else {
          throw Error(await response.text());
      }
      } catch (error) {
        advertise.innerHTML = " API did not load. ";
      } 
  }
  memberApiFetch();

  function silverGoldMembershipDisplay(data){
  
    for (member in data.membership){
        if (data.membership[member].membership == "Silver" ||data.membership[member].membership == "Gold" ){
            let name = document.createElement("h2"); 
            let image = document.createElement("img");
            let address = document.createElement("p");
            let phone = document.createElement("p");
            let webSite = document.createElement("a")
            let membershipLevel = document.createElement("p");
            let advertiseBlock = document.createElement("div");

            name.textContent = data.membership[member].name;
            image.setAttribute("src", `${data.membership[member].image}`);
            address.textContent = `${data.membership[member].address}`;
            phone.textContent = `${data.membership[member].phone}`;
            webSite.href= `${data.membership[member].website}`;
            let siteTextLink = document.createTextNode(`${data.membership[member].websiteLink}`);
            webSite.appendChild(siteTextLink);
            webSite.title = `${data.membership[member].websiteLink}`;
            webSite.target ="blank";

            advertiseBlock.appendChild(name);
            advertiseBlock.appendChild(phone);
            advertiseBlock.appendChild(webSite);
            advertiseBlock.appendChild(address);

            advertise.appendChild(advertiseBlock);
        }
    }

  }
        
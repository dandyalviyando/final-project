let fetchAll = async () => {
    const url = "https://restcountries.com/v3.1/all";
    const response = await fetch(url, {
        method: "GET"
    });

    const json = await response.json();

    // allData = json.lambang;

    console.log(json);

    return json;
}

let displayResult = async () => {

    document.getElementById("btn-fetch").textContent = 'Fetch...';

    const data = await fetchAll();

    document.getElementById("header").insertAdjacentHTML(
        'afterend',
        `<div id="cards" class="pt-5 pb-5">
      
        </div>`
    )

    data.forEach((res) => {
        document.getElementById("cards").insertAdjacentHTML(
            'beforeend',
            `<div class="card pt-5 pl-1 pr-1 m-3" style="width: 18rem;">
                <img class="card-img-top" src=${res.flags.svg} alt="${res.name.common}">
                <div class="card-body">
                    <h5 class="card-title mt-2 mb-2">${res.name.common}</h5>
                </div>
            </div>`
        );
    })

    window.scrollBy(0, window.innerHeight);

}
$("#searchForm").submit(e => {
    const searchedValue = $("#searchText").val()
    fetch(`https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=${searchedValue}&k=367341-leopoldo-FIFIN9XQ`)
    .then(response => response.json())
    .then(json => {

        //I will convert from json to html here inside of this block
        const bodyData = $("#bodyData");
        const data = json.Similar.Results;

        bodyData.html(data.map(obj => `<tr><td>${obj.Name}</td><td>${obj.Type}</td></tr>`).reduce((acc,item) =>
            acc + item, ""
        ))


        console.log(data);
    })
})



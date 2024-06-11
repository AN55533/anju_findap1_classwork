async function fetchData(url) {
    try{
        const response = await fetch(url);
        const result =  await response.json();
        console.log(result.studies);
    } catch(error){
        console.log(error);
    }
}

fetchData("https://osdr.nasa.gov/osdr/data/osd/files/87.1");
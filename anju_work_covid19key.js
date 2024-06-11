async function fetchResource(url){
    try{
        const responce=await fetch(url);
        const result=await responce.json();
        console.log(result);
        
    }catch(error){
    
    console.error(error);
    }finally{
        console.log("operation finished")
    }
    }
    fetchResource("https://data.covid19india.org/v4/min/data.min.json");
    
    
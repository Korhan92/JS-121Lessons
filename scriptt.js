const url = "https://reqres.in/api/users";
const jsontest = "http://time.jsontest.com";
const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";
const placeholder = "https://jsonplaceholder.typicode.com/users";
const uri ="http://httpstat.us/200";

const xhr = new XMLHttpRequest();
xhr.responseType = "json";
//console.log(xhr);
xhr.open("GET", jsontest)
xhr.send();

xhr.onreadystatechange = () => {
    // birinci if kontrol yöntemi
    if(xhr.readyState === 4 && xhr.status === 200){
        //console.log(xhr.response);
        //useData(xhr.response)
    }
    
    // ikinci if kontrol yöntemi
    if(xhr.readyState === XMLHttpRequest.DONE){
        // console.log(XMLHttpRequest.DONE); // ==> 4
        // let result = JSON.parse(xhr.response);  // eğer data json olarak tanımlanmamış ise PaRSE yaparız.
        // console.log(result);
    }
}

const data = { id : 202, firstname : "ali"};
const jsonData = JSON.stringify(data);

const xhr2 = new XMLHttpRequest();
xhr2.responseType = "json";
xhr2.open("POST", jsontest);
xhr2.send(jsonData)

xhr2.onreadystatechange = () => {
    if(xhr2.readyState === 4){
        //console.log(xhr2.response);
    }
}


async function getData(url) {
    let response = await fetch(url);
    //console.log(response)
    let resData = await response.json();
    //useData(resData);
}
getData(jsontest);

async function getDataCatch(url) {
    try {
        let response = await fetch(url);
        //console.log(response)
        let resData = await response.json();
        useData(resData);
    } catch (error) {
        console.log(error)
    }
}
getDataCatch(url);


//const data = { id : 202, firstname : "ali"};
//const jsonData = JSON.stringify(data);

async function sendDataCatch(url) {
    let requestObj = {
        method: "POST",
        body: jsonData,
    }
        let response = await fetch(url, requestObj);
        console.log(response)
        if(response.ok){
            let resData = await response.json();
            useData(resData);
        }
}
sendDataCatch(placeholder);
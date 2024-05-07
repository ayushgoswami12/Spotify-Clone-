console.log("spotify clone ")

async function getSongs() {
    let a = await fetch("http://127.0.0.1:5501/music/");
    let response = await a.text();  // Add 'await' here
    console.log(response);  // or do something else with the response
}


getSongs()
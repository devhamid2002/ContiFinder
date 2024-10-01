import axios from "axios";

const Clint = axios.create({
    baseURL : "https://api.duckduckgo.com/",
});

export async function getContinent(){
    const {data} = await Clint("/?callback=&format=json&no_html=&no_redirect=&skip_disambig=&q=asia")
    return data
}
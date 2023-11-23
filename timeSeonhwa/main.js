const API_KEY = '4e7fed6fa1ef4406bf9256953ee3fd49';

const getLatestNews = ()=> {
    const url = new URL("https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}");
    const response = fetch(url);
}
getLatestNews();

console.log(1);
setTimeout(() => console.log(2, 5000));
console.log(3);

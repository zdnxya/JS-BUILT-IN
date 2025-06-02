let url = "user?tab=repositories";

console.info(url)

const encodeUrl = encodeURIComponent(url);
console.info(encodeUrl)

const encodeBase64 = btoa(url)
console.info(encodeBase64)

const decodeBase64 = atob(encodeBase64)
console.info(decodeBase64)
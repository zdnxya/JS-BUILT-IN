let user = {
    name : "jamal",
    age : 18,
    address : {
        country : "Indonesia",
        city : "Jekardah"
    },
    hobby : [
        "code", "chess", "music"
    ]
};

const json = JSON.stringify(user);
console.info(json)

const jsonObj = JSON.parse(json);
console.info(jsonObj)
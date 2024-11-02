import localforage from "localforage";

async function setCache(name, object) {
    try {
        await localforage.setItem(name, object);
        console.log("Cache saved");
    } catch (error) {
        console.log(`There was an error saving the cache: ${error}`);
    }
}


async function getCache(name) {
    // This clears the cache, only for debug purposes
    // localforage.clear()
    try {
        const cache = await localforage.getItem(name);

        if (!cache) { //In the given case that the cache is empty
            console.log("Cache is empty");
            return null;
        }
        console.log("Cache retrieved");
        return cache
    } catch (error) {
        console.log(`There was an error getting the cache: ${error}`);
    }
}

export { setCache, getCache }

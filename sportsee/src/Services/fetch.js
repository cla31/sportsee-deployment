/**
 * It fetches data from a server and returns it
 * @param {String} url - The url of datas
 * @returns {Promise}
 */

export const getDatas = async(url) => {
    try {
        const response = await fetch(url)
        const fetchDatas = await response.json()
            // console.log("fetchDatas", fetchDatas.data)
        return fetchDatas.data

    } catch (erreur) {
        console.log(erreur)
        return erreur;
    }
}
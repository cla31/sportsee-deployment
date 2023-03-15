import { getDatas } from './fetch'
import Activity from './Utils/Activity'
import AverageSessions from './Utils/AverageSessions'
import User from './Utils/User'
import Performance from './Utils/Performance'

/**
 * It takes a user id, gets some data from an API or mocked data folder, formats it, and returns it.
 * @param userId - the id of the user
 * @returns An array of objects with user datas
 */

//Lorsque les données mockées sont sur false et que le serveur est éteint
//l'utilisateur est renvoyé vers une page erreurs.
//Lorsque mockDatas = true, la navigation renvoie les données mockées
const mockDatas = true


// export const userDatas = async(userId) => {
//         let url = `http://localhost:3000/user/${userId}`
//         if (mockDatas) {
//             url = '/MockDatas/userDatas.json'
//         }
//         const allUserDatas = await getDatas(url)
//         const userInfos = new User(allUserDatas)
//             // console.log("userInfos", userInfos)
//         return userInfos
//     }
//********************************************************************** */
//********************************************************************** */
//********************************************************************** */
//********************************************************************** */
//********************************************************************** */

export const userDatas = async(userId) => {
    let url = '';
    if (mockDatas) {
        url = '/MockDatas/userDatas.json'
    } else {
        url = `http://localhost:3000/user/${userId}`
            // console.log("id", id)
    }
    try {
        const allUserDatas = await getDatas(url)
        const userInfos = new User(allUserDatas)
        console.log("userInfos", userInfos)
        return userInfos

    } catch (erreur) {
        console.log(erreur)
        return erreur;

    }
}




/**
 * It takes a user id, gets some data from an API or mocked data folder, formats it, and returns it.
 * @param id - the id of the user
 * @returns An array of objects with user activities
 */
// export const userActivity = async(userId) => {
//         let url = `http://localhost:3000/user/${userId}/activity`
//         if (mockDatas) {
//             console.log("id", userId)
//             url = '/MockDatas/userActivities.json'
//         }
//         const allUserActivities = await getDatas(url)
//         console.log("££££££££££ Ce qui arrive dans l'objet Activity", allUserActivities)
//         const userActivityInfos = new Activity(allUserActivities)
//             // console.log("userActivityInfos", userActivityInfos)
//         return userActivityInfos
//     }
//********************************************************************** */
//********************************************************************** */
//********************************************************************** */
//********************************************************************** */
//********************************************************************** */

export const userActivity = async(userId) => {
    let url = '';
    if (mockDatas) {
        url = '/MockDatas/userActivities.json'
    } else {
        url = `http://localhost:3000/user/${userId}/activity`
            // console.log("id", id)
    }
    const allUserActivities = await getDatas(url)
        // console.log("££££££££££ Ce qui arrive dans l'objet Activity", allUserActivities)
    const userActivityInfos = new Activity(allUserActivities)
        // console.log("userActivityInfos", userActivityInfos)
    return userActivityInfos
}

/**
 * It takes a user id, gets some data from an API or mocked data folder, formats it, and returns it.
 * @param userId - the id of the user
 * @returns An array of objects with user averages sessions
 */

// export const userAverageSessions = async(userId) => {
//         let url = `http://localhost:3000/user/${userId}/average-sessions`
//         if (mockDatas) {
//             url = '/MockDatas/userAverageSession.json'
//             console.log("id", userId)
//         }
//         const allUserAverageSessions = await getDatas(url)
//             // console.log("+++++++++++", allUserAverageSessions)
//         const userAverageSessionsInfos = new AverageSessions(allUserAverageSessions)
//             // console.log("userAverageSessionsInfos", userAverageSessionsInfos)
//         return userAverageSessionsInfos
//     }
//********************************************************************** */
//********************************************************************** */
//********************************************************************** */
//********************************************************************** */
//********************************************************************** */

export const userAverageSessions = async(userId) => {
    let url = '';
    if (mockDatas) {
        url = '/MockDatas/userAverageSession.json'
    } else {
        url = `http://localhost:3000/user/${userId}/average-sessions`
            // console.log("id", id)
    }
    const allUserAverageSessions = await getDatas(url)
        // console.log("+++++++++++", allUserAverageSessions)
    const userAverageSessionsInfos = new AverageSessions(allUserAverageSessions)
        // console.log("userAverageSessionsInfos", userAverageSessionsInfos)
    return userAverageSessionsInfos
}

/**
 * It takes a user id, gets some data from an API or mocked data folder, formats it, and returns it.
 * @param userId - the id of the user
 * @returns An array of objects with user performances
 */
// export const userPerformance = async(userId) => {
//         let url = `http://localhost:3000/user/${userId}/performance`
//         if (mockDatas) {
//             // console.log("id", userId)
//             url = '/MockDatas/userPerformances.json'
//         }
//         const allUserPerformances = await getDatas(url)
//             // console.log("*************", allUserPerformances)
//         const userPerformancesInfos = new Performance(allUserPerformances)
//             // console.log("allUserPerformances", userPerformancesInfos)
//         return userPerformancesInfos
//     }
//********************************************************************** */
//********************************************************************** */
//********************************************************************** */
//********************************************************************** */
//********************************************************************** */
export const userPerformance = async(userId) => {
    let url = '';
    if (mockDatas) {
        url = '/MockDatas/userPerformances.json'
    } else {
        url = `http://localhost:3000/user/${userId}/performance`
            // console.log("id", userId)
    }
    const allUserPerformances = await getDatas(url)
        // console.log("*************", allUserPerformances)
    const userPerformancesInfos = new Performance(allUserPerformances)
        // console.log("allUserPerformances", userPerformancesInfos)
    return userPerformancesInfos
}
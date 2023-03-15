/**
 * @class
 * @classdesc Class datas user formatting
 */
export default class User {

    constructor(data) {
        /**
         * The function takes in an object, and then assigns the values of the object to the properties of
         * the class.
         * @param {Object} datas - user datas
         */
        this.id = data.id
            // console.log("id %%%%%%%%%%%%", this.id)
        this.userFirstName = data.userInfos.firstName
        this.userLastName = data.userInfos.lastName
        this.userAge = data.userInfos.age
        this.todayScore = (data.todayScore || data.score) * 100
        this.calorieCount = data.keyData.calorieCount
        this.proteinCount = data.keyData.proteinCount
        this.carbohydrateCount = data.keyData.carbohydrateCount
        this.lipidCount = data.keyData.lipidCount

    }

}
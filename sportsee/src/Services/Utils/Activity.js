/**
 * @class
 * @classdesc data formatting in class of user activities
 */

export default class Activity {
    /**
     * The function takes in an object, and then assigns the values of the object to the properties of
     * the class.
     * @param {Object} datas - user activities datas
     */
    constructor(data) {
        this.id = data.userId
            // D'abord je récupère un tableau de dates, que je transforme en chiffre grâce à l'index, puis les chiffres en string
        this.sessionsDays = data.sessions.map(((elmt, index) => elmt.day = (index + 1).toString()))
            // automatiquement, les jours sont remplacés par les chiffres
        this.allDatasSessions = data.sessions

    }

}
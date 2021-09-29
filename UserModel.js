class UserModel {

    firstname;
    lastname;
    cellphone;
    image;

    constructor() {
        
     }

    setFirstname(firstname) {
        this.firstname = firstname;
    }

    setLastname(lastname) {
        this.lastname = lastname;
    }

    setCellphone(cellphone) {
        this.cellphone = cellphone;
    }

    setImage(image) {
        this.image = image;
    }

}

const user = new UserModel();
export default user;
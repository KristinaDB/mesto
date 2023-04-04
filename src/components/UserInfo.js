export default class UserInfo{
    constructor(profileName, profileJob) {
        this._profileName = profileName;
        this._profileJob = profileJob;
    }

    getUserInfo(){
        const userInfo = {
            name: this._profileName.textContent,
            job: this._profileJob.textContent
        }
        return userInfo;
    }

     setUserInfo(userInfo) {
        this._profileName.textContent = userInfo.userName;
        this._profileJob.textContent = userInfo.userJob;
        }
    }



import ApiBase from './ApiBase'

export default class UserService extends ApiBase {

    //登陆
    async login(username, password) {

        const url = '/user/login'
        let data = {username, password}
        const result = await super.request(url, data)

        //保存到localStorage
        if (result.code == 200) {
            this.setCache('user_info', JSON.stringify(result.data))
        }

        return result
    }

    //退出
    async exit() {
        this.setCache('user_info', '{}')
    }

}

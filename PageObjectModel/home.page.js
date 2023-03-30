class HomePage {
    constructor(page) {
        this.page = page
        this.getStarted = page.locator('#get-started')
        this.allPrimaryList = page.locator('#primary-menu li[id*=menu-item-]')
    }

    async navToAbout() {
        await this.page.goto('https://practice.automationbro.com/about/')
    }

    async navToHome() {
        await this.page.goto('https://practice.automationbro.com')
    }
}
export default HomePage
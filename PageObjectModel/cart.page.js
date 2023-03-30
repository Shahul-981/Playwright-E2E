class CartPage {
    constructor(page) {
        this.Page = page
        this.uploadPath = 'input#upfile_1'
        this.cartImage = page.locator('.header-action-list a[title="View your shopping cart"]')
        this.returnToShopBtn = page.locator('.return-to-shop')
        this.uploadBtn = page.locator('#upload_1')
        this.successDiv = page.locator('.file_messageblock_fileheader_label')
    }
    async navToHome() {
        await this.Page.goto('https://practice.automationbro.com')
    }

    async uploadFile(getFilePath) {
        await this.Page.setInputFiles(this.uploadPath , getFilePath);
        //upload file
        await this.uploadBtn.waitFor();
        await this.uploadBtn.click();
    }
}
export default CartPage
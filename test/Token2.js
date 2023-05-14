const { expect } = require("chai");

describe("Transactions", function () {
  it("Should transfer tokens between accounts", async function () {
    // アカウントを3つ用意。
    const [owner, addr1, addr2] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("Token");
    const hardhatToken = await Token.deploy();

    // transfer：誰かに送るためのメソッド。
    // ownerがaddr1.addressに対して50トークン送信している。
    await hardhatToken.transfer(addr1.address, 50);

    // addr1.addressのトークンの値が50かどうかを確認している。
    expect(await hardhatToken.balanceOf(addr1.address)).to.equal(50);

    // 普段のコントラクトの実行はデフォルトで、signerのアカウントリストの一番最初でやるようになっている（今回の場合はowner）。
    // 違う人がコントラクトを実行することもある。そんな時に.connect(addr1)を使う。
    // .connect(addr1)：connectメソッドを使用してadd1アカウントに接続。
    await hardhatToken.connect(addr1).transfer(addr2.address, 50);

    // addr2.addressに50トークンあるか確認している。
    expect(await hardhatToken.balanceOf(addr2.address)).to.equal(50);
  });
});

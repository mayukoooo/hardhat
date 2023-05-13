const { expect } = require("chai");

describe("Token contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {

    // Signers：イーサリアムのアカウント（群）
    // Hardhatのテストは「Hardhat Network」で行われており、ここにはたくさんのアカウントのリストがある。その中のリストの一番最初を持ってきている。
    // ethersはグローバルで使えるようになっているので、expectのようにrequireはしなくて良い（しても良い）。
    const [owner] = await ethers.getSigners();

    // 「Token」というコントラクトを持ってきて、左の「Token」に入れる。
    const Token = await ethers.getContractFactory("Token");

    // 上で取得したコントラクトをデプロイし、結果を「hardhatToken」に入れる。
    const hardhatToken = await Token.deploy();

    // owner.address：コントラクトの所有者のアドレス
    // balanceOf：owner.addressさんが持っているトークンの量
    // つまり、コントラクトの所有者が持っているトークンの量を「ownerBalance」に入れている
    const ownerBalance = await hardhatToken.balanceOf(owner.address);

    // totalSupply：全供給量
    // つまり、全供給量と所有者が持っているトークンの量がイコールかどうかを確かめている（自分のトークンを誰にも渡していないので、当然イコールになる）
    // expectは値が等しいかどうかを確認するもので、「マッチャー」と呼ばれている。これを提供しているのが1行目の「Chai」。
    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  });
});

- Hardhatには、開発用に設計されたローカルEthereumネットワークであるHardhat Networkが組み込まれている。これにより、コントラクトのデプロイ、テストの実行、コードのデバッグを、すべてローカルマシンの範囲内で行うことができる。

- npx hardhat test を実行すると、コントラクトが前回のテスト実行時から変更されている場合、自動的にコンパイルされる。
  - => テストをする時には、必ず最新状態のコントラクトでテストをしているということが担保されている。

- Hardhat Network 上で console.log()を行うにはそのためのインポートが必要。
  - import "hardhat/console.sol";

   - Ethereumの本番環境は「mainnet」と呼ばれる。

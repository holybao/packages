'use strict';
/**
 * This package contains deployed contract addresses, ABIs, and Typechain types
 * for the Dark Forest game.
 *
 * ## Installation
 *
 * You can install this package using [`npm`](https://www.npmjs.com) or
 * [`yarn`](https://classic.yarnpkg.com/lang/en/) by running:
 *
 * ```bash
 * npm install --save @darkforest_eth/contracts
 * ```
 * ```bash
 * yarn add @darkforest_eth/contracts
 * ```
 *
 * When using this in a plugin, you might want to load it with [skypack](https://www.skypack.dev)
 *
 * ```js
 * import * as contracts from 'http://cdn.skypack.dev/@darkforest_eth/contracts'
 * ```
 *
 * ## Typechain
 *
 * The Typechain types can be found in the `typechain` directory.
 *
 * ## ABIs
 *
 * The contract ABIs can be found in the `abis` directory.
 *
 * @packageDocumentation
 */
Object.defineProperty(exports, '__esModule', { value: true });
exports.INIT_ADDRESS =
  exports.CONTRACT_ADDRESS =
  exports.START_BLOCK =
  exports.NETWORK_ID =
  exports.NETWORK =
    void 0;
/**
 * The name of the network where these contracts are deployed.
 */
exports.NETWORK = 'focg';
/**
 * The id of the network where these contracts are deployed.
 */
exports.NETWORK_ID = 4444;
/**
 * The block in which the DarkForest contract was initialized.
 */
exports.START_BLOCK = 8887486;
/**
 * The address for the DarkForest contract.
 */
exports.CONTRACT_ADDRESS = '0x802dC64271B985316d428E8D2891545008ff4B62';
/**
 * The address for the initalizer contract. Useful for lobbies.
 */
exports.INIT_ADDRESS = '0x53DCfbb1e8Fb0A39b06b2EDF54BAdFE4b8f586e1';

import Image from 'next/image';
import Link from "fumadocs-core/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-fd-card py-12 text-muted-foreground">
      <div className="container flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          <div className="flex flex-col gap-2 min-w-[200px]">
            <div className="flex items-center gap-2">
              <Image
                src="/logo-mesh/black/logo-mesh-vector.svg"
                width={40}
                height={40}
                alt="Mesh Logo"
                className="dark:invert"
              />
              <span className="text-xl font-semibold text-foreground">Mesh</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Mesh is an open-source library to build Web3 applications.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-10 gap-y-20">
          {/* Wallets */}
          <div className='flex flex-col gap-3 [&>a]:hover:underline'>
            <Link href="/apis/wallets" className='font-bold'>WALLETS</Link>
            <Link href="/apis/wallets/browserwallet">Browser Wallet</Link>
            <Link href="/apis/wallets/meshwallet">Mesh Wallet</Link>
          </div>

          {/* Tx Buolder */}
          <div className='flex flex-col gap-3 [&>a]:hover:underline'>
            <Link href="/apis/txbuilder" className='font-bold'>TRANSACTION BUILDER</Link>
            <Link href="/apis/txbuilder/basics">Transaction Basics</Link>
            <Link href="/apis/txbuilder/minting">Mint and Burn Assets</Link>
            <Link href="/apis/txbuilder/smart-contracts">Smart Contracts</Link>
            <Link href="/apis/txbuilder/staking">Staking Transactions</Link>
            <Link href="/apis/txbuilder/governance">Governance Transactions</Link>
          </div>

          {/* Transaction Parser */}
          <div className='flex flex-col gap-3 [&>a]:hover:underline'>
            <Link href="/apis/txparser" className='font-bold'>TRANSACTION PARSER</Link>
            <Link href="/apis/txparser/basics">Parser Basics</Link>
            <Link href="/apis/txparser/txtester">Unit Testing Transaction</Link>
          </div>

          {/* Providers */}
          <div className='flex flex-col gap-3 [&>a]:hover:underline'>
            <Link href="/providers" className='font-bold'>PROVIDERS</Link>
            <Link href="/providers/blockfrost">Blockfrost Provider</Link>
            <Link href="/providers/hydra">Hydra Provider (beta)</Link>
            <Link href="/providers/koios">Koios Provider</Link>
            <Link href="/providers/maestro">Maestro Provider</Link>
            <Link href="/providers/ogmios">Ogmios Provider</Link>
            <Link href="/providers/utxorpc">UTxORPC Provider</Link>
            <Link href="/providers/yaci">Yaci Provider</Link>
            <Link href="/providers/offline-fetcher">Offline Fetcher</Link>
            <Link href="/providers/offline-evaluator">Offline Evaluator</Link>
          </div>

          {/* Utilities */}
          <div className='flex flex-col gap-3 [&>a]:hover:underline'>
            <Link href="/apis/utilities" className='font-bold'>UTILITIES</Link>
            <Link href="/apis/utilities/serializers">Serializers</Link>
            <Link href="/apis/utilities/deserializers">Deserializers</Link>
            <Link href="/apis/utilities/resolvers">Resolvers</Link>
            <Link href="/apis/data">Data</Link>
            <Link href="/apis/utilities/blueprints">Blueprints</Link>
          </div>

          {/* React components */}
          <div className='flex flex-col gap-3 [&>a]:hover:underline'>
            <Link href="/react" className='font-bold'>REACT COMPONENTS</Link>
            <Link href="/react/getting-started">Getting Started with React</Link>
            <Link href="/react/ui-components">UI Components</Link>
            <Link href="/react/wallet-hooks">Wallet Hooks</Link>
          </div>

          {/* Svelte components */}
          <div className='flex flex-col gap-3 [&>a]:hover:underline'>
            <Link href="/svelte" className='font-bold'>SVELTE COMPONENTS</Link>
            <Link href="/svelte/getting-started">Getting Started with Svelte</Link>
            <Link href="/svelte/ui-components">UI Components</Link>
          </div>

          {/* Smart Contract Library */}
          <div className='flex flex-col gap-3 [&>a]:hover:underline'>
            <Link href="/smart-contracts" className='font-bold'>SMART CONTRACTS LIB</Link>
            <Link href="/smart-contracts/content-ownership">Content Ownership</Link>
            <Link href="/smart-contracts/escrow">Escrow</Link>
            <Link href="/smart-contracts/giftcard">Giftcard</Link>
            <Link href="/smart-contracts/hello-world">Hello World</Link>
            <Link href="/smart-contracts/marketplace">MarketPlace</Link>
            <Link href="/smart-contracts/plutus-nft">NFT Minting Machine</Link>
            <Link href="/smart-contracts/payment-splitter">Payment Splitter</Link>
            <Link href="/smart-contracts/swap">Swap</Link>
            <Link href="/smart-contracts/vesting">Vesting</Link>
          </div>

          {/* Aiken */}
          <div className='flex flex-col gap-3 [&>a]:hover:underline'>
            <Link href="/aiken" className='font-bold'>AIKEN</Link>
            <Link href="/aiken/getting-started">Getting Started</Link>
            <Link href="/aiken/first-script">Writing a Smart Contract</Link>
            <Link href="/aiken/transactions">Build Transactions</Link>
            <Link href="/smart-contracts">Smart Contracts Library</Link>
          </div>

          {/* Hydra */}
          <div className='flex flex-col gap-3 [&>a]:hover:underline'>
            <Link href="/hydra" className='font-bold'>HYDRA</Link>
            <Link href="/providers/hydra">Hydra Provider (beta)</Link>
            <Link href="/hydra/tutorial">End-to-end Hydra Tutorial</Link>
          </div>

          {/* Yaci */}
          <div className='flex flex-col gap-3 [&>a]:hover:underline'>
            <Link href="/yaci" className='font-bold'>YACI</Link>
            <Link href="/yaci/getting-started">Getting Started</Link>
            <Link href="https://cloud.meshjs.dev/yaci">Hosted Yaci Devnet</Link>
            <Link href="/yaci/transactions">Build Transactions</Link>
            <Link href="/providers/yaci">Yaci Provider</Link>
          </div>

          {/* Midnight */}
          <div className='flex flex-col gap-3 [&>a]:hover:underline'>
            <Link href="https://midnight.meshjs.dev/en" className='font-bold'>MIDNIGHT</Link>
            <Link href="https://midnight.meshjs.dev/en">Midnight</Link>
          </div>

          {/* WAAS */}
          <div className='flex flex-col gap-3 [&>a]:hover:underline'>
            <Link href="https://utxos.dev/" className='font-bold'>WALLET AS A SERVICE</Link>
            <Link href="https://utxos.dev/">Wallet as a Service</Link>
          </div>

          {/* Solutions */}
          <div className='flex flex-col gap-3 [&>a]:hover:underline'>
            <Link href="/solutions" className='font-bold'>SOLUTIONS</Link>
            <Link href="https://utxos.dev/">Web3 Services</Link>
            <Link href="/smart-contracts">Smart Contracts Library</Link>
            <Link href="https://multisig.meshjs.dev/">Multisig platform</Link>
            <Link href="https://cloud.meshjs.dev/cquisitor">Cquisitor</Link>
          </div>

          {/* Resources */}
          <div className='flex flex-col gap-3 [&>a]:hover:underline'>
            <Link href="/resources" className='font-bold'>RESOURCES</Link>
            <Link href="/guides">Guides</Link>
            <Link href="https://docs.meshjs.dev/">Documentation</Link>
            <Link href="https://github.com/MeshJS/examples">Examples</Link>
            <Link href="https://pbl.meshjs.dev">Project Based Learning</Link>
          </div>

          {/* Guides */}
          <div className='flex flex-col gap-3 [&>a]:hover:underline'>
            <Link href="/guides" className='font-bold'>GUIDES</Link>
            <Link href="/guides/nextjs">Develop your first Web3 App</Link>
            <Link href="/guides/minting-on-nodejs">Minting Application</Link>
            <Link href="/guides/multisig-minting">Multi-Signatures Transaction</Link>
            <Link href="/guides/prove-wallet-ownership">Prove Wallet Ownership</Link>
            <Link href="/guides/custom-provider">Implement Custom Provider</Link>
            <Link href="/guides/smart-contract-transactions">Smart Contract Transactions</Link>
            <Link href="/guides/aiken">Aiken Hello World</Link>
            <Link href="/guides/standalone">Executing a standalone script</Link>
            <Link href="/guides/vesting">Vesting Script End-to-End</Link>
            <Link href="/guides/node-specific-imports">Resolve Node-Specific Imports Errors</Link>
            <Link href="/guides/nft-collection">Mint an NFT Collection</Link>
          </div>

          {/* About Mesh */}
          <div className='flex flex-col gap-3 [&>a]:hover:underline'>
            <div className='font-bold'>ABOUT MESH</div>
            <Link href="/about">About us</Link>
            <Link href="https://gov.meshjs.dev/">Governance</Link>
            <Link href="/about/catalyst">Project Catalyst</Link>
            <Link href="/about/support-us">Support Us</Link>
            <Link href="/about/branding">Branding</Link>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm">
          <p>
            &copy; 2025 Mesh.{' '}
            <Link
              href="https://github.com/MeshJS/mesh/blob/main/LICENSE.md"
              className="underline hover:text-foreground transition-colors"
            >
              Apache-2.0 license.
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
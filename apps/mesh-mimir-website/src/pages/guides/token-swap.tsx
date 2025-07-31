import { NextPage } from "next";
import ContentLayout from "../../components/ContentLayout";
import ContentSection from "../../components/ContentSection";

const TokenSwapPage: NextPage = () => {
  return (
    <ContentLayout>
      <ContentSection>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-text-primary mb-8">
            Building a Token Swapper
          </h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-text-secondary text-lg mb-8">
              Create a decentralized token exchange on Cardano using MeshJS.
              Learn to implement AMM (Automated Market Maker) logic, liquidity
              pools, and token swapping functionality.
            </p>

            <div className="grid gap-8 mt-12">
              {/* Prerequisites */}
              <div className="bg-surface-elevated border border-border rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Prerequisites
                </h2>
                <div className="space-y-4 text-text-secondary">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>Understanding of Cardano native tokens</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>Basic smart contract concepts</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>MeshJS transaction building</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>Test tokens for development</div>
                  </div>
                </div>
              </div>

              {/* Architecture Overview */}
              <div className="bg-surface-elevated border border-border rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Architecture Overview
                </h2>
                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-surface text-sm font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="text-text-primary font-semibold mb-1">
                        Liquidity Pools
                      </h4>
                      <p className="text-text-secondary">
                        Smart contracts holding token pairs for trading
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-surface text-sm font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="text-text-primary font-semibold mb-1">
                        AMM Algorithm
                      </h4>
                      <p className="text-text-secondary">
                        Constant product formula (x * y = k)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-surface text-sm font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="text-text-primary font-semibold mb-1">
                        Price Oracle
                      </h4>
                      <p className="text-text-secondary">
                        Real-time price feeds for accurate swaps
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-surface text-sm font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="text-text-primary font-semibold mb-1">
                        Slippage Protection
                      </h4>
                      <p className="text-text-secondary">
                        Prevent excessive price impact
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Implementation Steps */}
              <div className="bg-surface-elevated border border-border rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Implementation Steps
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      Step 1: Setup Project
                    </h3>
                    <p className="text-text-secondary mb-3">
                      Initialize your token swapper project with MeshJS and
                      Plutus dependencies.
                    </p>
                    <div className="bg-surface border border-border rounded p-3 font-mono text-sm">
                      <div className="text-text-secondary">
                        npm create meshjs-token-swap
                      </div>
                      <div className="text-text-secondary">cd token-swap</div>
                      <div className="text-text-secondary">
                        npm install @meshjs/core
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      Step 2: Create Pool Contract
                    </h3>
                    <p className="text-text-secondary mb-3">
                      Deploy the liquidity pool smart contract.
                    </p>
                    <div className="bg-surface border border-border rounded p-3 font-mono text-sm">
                      <div className="text-text-secondary">
                        const poolContract = new MeshPoolContract()
                      </div>
                      <div className="text-text-secondary">
                        .setTokenA(tokenA)
                      </div>
                      <div className="text-text-secondary">
                        .setTokenB(tokenB)
                      </div>
                      <div className="text-text-secondary">.deploy();</div>
                    </div>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      Step 3: Add Liquidity
                    </h3>
                    <p className="text-text-secondary mb-3">
                      Provide initial liquidity to the pool.
                    </p>
                    <div className="bg-surface border border-border rounded p-3 font-mono text-sm">
                      <div className="text-text-secondary">
                        const txBuilder = new MeshTxBuilder()
                      </div>
                      <div className="text-text-secondary">
                        .sendAssets(poolAddress, [tokenA, tokenB])
                      </div>
                      <div className="text-text-secondary">
                        .mintLP(lpToken, amount);
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      Step 4: Implement Swap Logic
                    </h3>
                    <p className="text-text-secondary mb-3">
                      Build the token swapping functionality with price
                      calculation.
                    </p>
                    <div className="bg-surface border border-border rounded p-3 font-mono text-sm">
                      <div className="text-text-secondary">
                        const swapAmount = calculateSwapAmount(
                      </div>
                      <div className="text-text-secondary ml-4">
                        inputAmount, poolReserves
                      </div>
                      <div className="text-text-secondary">);</div>
                      <div className="text-text-secondary">
                        const tx = buildSwapTransaction(swapAmount);
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="bg-surface-elevated border border-border rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Key Features
                </h2>
                <div className="grid gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-text-secondary">
                      Automated price discovery
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-text-secondary">
                      Liquidity provision rewards
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-text-secondary">
                      Slippage protection
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-text-secondary">
                      Multi-token support
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-text-secondary">
                      Gas optimization
                    </span>
                  </div>
                </div>
              </div>

              {/* Security Considerations */}
              <div className="bg-surface-elevated border border-border rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Security Considerations
                </h2>
                <div className="space-y-4 text-text-secondary">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-text-primary">
                        Reentrancy Protection
                      </strong>{" "}
                      - Prevent recursive calls
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-text-primary">
                        Price Manipulation
                      </strong>{" "}
                      - Implement oracle security
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-text-primary">
                        Slippage Limits
                      </strong>{" "}
                      - Protect against MEV attacks
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-text-primary">
                        Access Control
                      </strong>{" "}
                      - Restrict admin functions
                    </div>
                  </div>
                </div>
              </div>

              {/* Testing Strategy */}
              <div className="bg-surface-elevated border border-border rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Testing Strategy
                </h2>
                <div className="space-y-4 text-text-secondary">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>Unit tests for price calculation functions</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>Integration tests for swap transactions</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>Stress tests with high volume scenarios</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>Security audit of smart contract code</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-primary/10 border border-primary/30 rounded-xl">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Ready to Swap?
              </h3>
              <p className="text-text-secondary mb-4">
                Start with a simple token swap implementation and gradually add
                advanced features like liquidity pools and yield farming.
              </p>
              <div className="flex gap-4">
                <button className="bg-primary hover:bg-primary-hover text-surface px-4 py-2 rounded-lg transition-colors">
                  Start Building
                </button>
                <button className="border border-primary text-primary hover:bg-primary/10 px-4 py-2 rounded-lg transition-colors">
                  View Examples
                </button>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
    </ContentLayout>
  );
};

export default TokenSwapPage;

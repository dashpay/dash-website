---
author: tungfa
layout: post
image: "bitcoinrejectsNov12.jpg"
title: "As Bitcoin Rejects 2MB Blocks, Dash Prepares to Implement Them"
original-author: David Dinkins 
original-link: https://cointelegraph.com/news/as-bitcoin-rejects-2mb-blocks-dash-prepares-to-implement-them
---

In early 2016, the [masternodes](https://cointelegraph.com/news/the-rise-of-masternodes-might-soon-be-followed-by-the-creation-of-servicenodes) that comprise [Dash's governance system](https://cointelegraph.com/news/pr-decentralized-how-dash-succeeded-in-dao-powered-public-outreach) voted overwhelmingly [to upgrade to 2MB blocks](https://www.dashcentral.org/p/2mb-blocksize), with 99 percent of the network in favor. Many in the cryptocurrency world saw this as a simple attention-getting gimmick, as Dash's development priorities became focused elsewhere. However, with the recent release of Dash version 12.2, it looks like larger blocks will be implemented soon.

The version 12.2 upgrade is one step on the way to [Dash Evolution](https://cointelegraph.com/news/dash-payment-platform-evolution-aims-to-undercut-paypal-venmo-from-2018-altcoins-roadmap), the currency's plan [to make](https://www.dash.org/) "digital [currencies] be so easy to use your Grandma would use them." Core developer UdjinM6 [wrote of the recent update](https://www.dash.org/forum/threads/version-12-2-release.17807/):

> The most notable changes are:
>
> -   DIP0001 implementation (which is a 2MB block upgrade);
> -   Transaction fee reduction 10x (activates via DIP0001 activation);
> -   InstantSend vulnerability fix (activates via DIP0001 lock in);
> -   PrivateSend improvement which should allow user to have mixed funds available much faster;
> -   Various RPC changes;
> -   Lots of backports from Bitcoin Core and refactoring of our own legacy code which should improve performance and make code more reliable and easier to review;
> -   Experimental HD wallet with BIP39/BIP44 support.

Not needed yet
--------------

Of course, larger blocks aren't needed yet, as the currency does not process enough transactions to fill its current blocks. However, this blocksize increase follows the on-chain scaling plan announced by founder Evan Duffield earlier this year. [Duffield announced](https://medium.com/@eduffield222/how-to-enabling-on-chain-scaling-2ffab5997f8b) that through the use of custom hardware, Dash will create a network that can scale to large numbers of transactions by using big blocks.

Duffield wrote:

> Many projects in the space believe that on-chain scaling is impossible. That's simply because they haven't explored alternative P2P architectures for higher performance. We intend to show just how far an incentivized second tier [masternode] architecture can take a project like Dash.

Bitcoin's path...and Ethereum's too
-----------------------------------

Bitcoin, of course, has chosen to follow a different path. With the planned SegWit2x upgrade [officially dead](https://cointelegraph.com/news/segwit2x-is-dead-long-live-bitcoin-price-hits-all-time-high-as-hard-fork-canceled), the currency is now firmly on the path of off-chain scaling through the lightning network or similar solutions. The [lightning network](https://cointelegraph.com/tags/lightning-network) is intended to work by moving transactions off-chain onto "payment channels" and then "settling" the result to the Bitcoin Blockchain periodically.

For instance, if Bob pays Alice one BTC, then he later pays her two BTC, and finally sends her 1.5 BTC, that's three separate transactions that need to be recorded to the Blockchain. With lightning network, however, only the net transaction would need to be posted to the Blockchain once the payment channel was closed. In this case, only one transaction would be posted for a total of 4.5 BTC sent from Bob to Alice.

Critics have asked how often payment channels will really be used, but until the network is deployed, it's impossible to say. Others suggest that moving transactions off-chain [damages the decentralized and immutable nature](https://cointelegraph.com/news/lightning-network-will-be-highly-centralized-gavin-andresen) of Bitcoin. Supporters point out that transactions happen off-chain all the time, for instance on exchanges. No Bitcoin exchange posts a separate transaction to the Blockchain every time funds are moved internally. Only the final result is posted, once a user withdraws funds.

Number two cryptocurrency Ethereum isn't just sitting on the sidelines, either. The currency plans to implement the "[Raiden Network](https://cointelegraph.com/news/raiden-project-sets-milestone-for-ethereums-scaling-solution)" which will utilize payment channels similar to Bitcoin's proposed lightning network.

Forks welcome
-------------

While Bitcoin assiduously avoids hard forks whenever possible, Dash welcomes them. The key to [Dash's upgrade strategy is the "spork"](https://cointelegraph.com/news/dashs-past-and-future-an-editorial) a mechanism that allows portions of the upgrade to be "turned off" if there is a problem on the network. An example is something called "enforcement." The Dash network normally requires miners to share the block reward with masternodes; miners who attempt to keep the entire reward to themselves will find their blocks rejected by the network.

However, during an upgrade, enforcement can (and usually is) be turned off. This allows both miners and masternodes a reasonable amount of time to upgrade their software while eliminating the risk of uncontrollable forking caused by one part of the network rejecting the other part.

Best path uncertain
-------------------

It remains to be seen whether Bitcoin, Ethereum or Dash will be successful in solving the scalability problem. Both the "payment channels" and "really big blocks" scaling methods have their critics, and neither has been thoroughly vetted yet. It's possible that another solution might emerge in the interim, or that both solutions could be workable.

The one thing that's certain, however, is that for digital currency to become a real force in the world, tens of thousands of people will need to be able to transact all at the same time. A successful mainstream cryptocurrency must be able to [scale to Visa's level](https://cointelegraph.com/news/how-sharding-based-blockchains-could-handle-more-transactions-than-visa) or beyond.

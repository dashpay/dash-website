---
author: tungfa
layout: post
image: "udjinNov20th.jpg"
title: "12.2 update info"
original-author: UdjinM6
original-link: https://www.dash.org/forum/threads/version-12-2-release.17807/page-6#post-147647
---
FYI:

1\. MN upgrade progress

Code:

Total: 4715 (PS Compatible: 4095 / Enabled: 4295 / Qualify: 2064)

i.e. ~86% of all nodes or ~95% of active nodes are upgraded now.

2\. It's almost 2 weeks since the 12.2 release and almost every active 12.1 masternode which was started more than 1 week ago was paid (see <https://www.dashninja.pl/masternodes.html?mnregexp=70206>, sort by "Last paid"), there are like 2 or 3 masternodes left to be paid and then the cycle is done.

3\. Given the signaling for DIP0001 we have ~85-90% of the mining power upgraded to 12.2, miners on 12.1 have increased orphan rate due to inconsistency of winners list there (unlike for 12.2), so they have an incentive to upgrade ASAP too.

With all this in mind, please be aware that we are going to activate SPORK_10_MASTERNODE_PAY_UPDATED_NODES in few coming days. Note, that you are not going to be paid (as a MN) and you will most likely mine invalid/orphan blocks all the time (as a pool) if you are still going to run 12.1 after this spork is ON. Don't wait for this to happen, update to 12.2 NOW!

A small note for masternoders who updated to 12.2: as I already noted above <https://www.dash.org/forum/threads/version-12-2-release.17807/page-5#post-146784> and as you can see on dashninja - there are quite a few 12.2 masternodes running on 70206 protocol. If your masternode is in this list - you have to re-activate it and make sure it's on 70208 protocol or it will NOT be paid otherwise.

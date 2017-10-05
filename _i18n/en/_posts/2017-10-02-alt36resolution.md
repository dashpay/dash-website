---
author: tungfa
layout: post
image: "alt36resolution.jpg"
title: "Alt36 Proposal Issue &amp; Resolution"
original-author: Ryan Taylor
original-link: https://www.dash.org/forum/threads/alt36-proposal-issue-resolution.17131/
---

During the finalization process for the October 3rd budget cycle, we discovered that the two proposals submitted by AltThirtySix will not be paid, despite garnering a net 21% and 18% of the masternode votes. The cause of the issue is that coinbase transactions (which pay the proposals) cannot support multi-signature addresses, and the payment address specified by the proposal owner was a multi-signature address.

How will this affect the superblock on October 3rd?

The only proposals that will be affected are the two proposals submitted by AltThirtySix.
<https://www.dashcentral.org/p/Proposal-36DashSponsorships>
<https://www.dashcentral.org/p/Proposal-36-DashATM>

All other proposals, including the proposal from AltThirtySix's partner CannTrade, are unaffected. Sentinel checks each proposal is valid at the time the superblock is created, so the only effect will be the superblock will exclude the invalid proposals.

How was an invalid proposal submitted?

No indication is provided to the user on either DashCental or the Dash website proposal tools that multi-signature addresses are not supported. In addition, there is no validation check on either website, nor in the Dash Core software preventing a user from submitting an invalid proposal with a multi-signature address. Dash Core is actually designed to treat governance objects neutrally (e.g., no filtering or "judgement" of the objects, which is handled by the Sentinel layer). AltThirtySix had no way of knowing that the proposals would be treated as invalid by the system.

The issue was first discovered this morning, when our software engineers were checking the superblock voting and discovered the two proposals were missing from the list and began diagnosing the cause.

Proposed resolution

We have communicated the issue to AltThirtySix, and they are aware that the proposals will not pay out as expected. We would like to propose the following resolution to AltThirtySix and the masternode owners that voted for the proposal.

First, we would like AltThirtySix to submit a proposal for the November budget for the same sum as the two invalid proposals, with the Dash Core Group's business development address as the payout address. As soon as the proposal is passing, Dash Core Group will release the requested funding to AltThirtySix. Dash Core Group will recuperate its funds at the time of the November superblock.

This solution ensures minimal delay for AltThirtySix obtaining the counted-on funding to host their launch event on October 14th. I assume the high support level these proposals received will lead to them passing swiftly, so it should not have a dramatic impact on executing their plans.

In terms of preventing this issue from happening in the future, we are taking several steps.
1) We will update the proposal creating website to recognize multi-signature addresses and prevent their use
2) We will incorporate fix in the Dash Core wallet starting with version 12.3 (a ticket has already been submitted for this fix), which could be either enabling multi-signature addresses, or preventing proposals attempting to use them from being created
3) We are notifying DashCentral of the issue as well, to see if they can include warnings to users submitting a ticket

Also, in Evolution, masternode quorums validate the public user data, then core validates the header, so this issue will be avoided altogether in the future.

If you have questions, please post them here and we will reply periodically.

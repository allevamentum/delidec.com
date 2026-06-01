/* ==========================================================================
   DELIDEC — Research publications
   Embedded content module. Exposes window.DLD_RESEARCH = { chairs, articles }.
   One standing program per chair: the decision-making challenges each board
   seat is built to navigate. Published on a daily cadence from 20 May 2026
   (one paper per day, rotating across the eight chairs).
   Loaded before the page scripts; consumed by the Research view + reader.
   ========================================================================== */
(function () {
  'use strict';

  /* chairs, in publication-rotation order */
  var CH = [
    { k: 'coo',  role: 'COO',  name: 'The Operator on Watch',  lens: 'Orchestration Layer', cc: '--a-coo' },
    { k: 'cfo',  role: 'CFO',  name: 'The Vault Keeper',       lens: 'Financial Lens',       cc: '--a-cfo' },
    { k: 'cmo',  role: 'CMO',  name: 'The Narrative Architect', lens: 'Market Lens',         cc: '--a-cmo' },
    { k: 'clo',  role: 'CLO',  name: 'The Shield Bearer',      lens: 'Legal Lens',           cc: '--a-clo' },
    { k: 'cto',  role: 'CTO',  name: 'The Systems Architect',  lens: 'Technology Lens',      cc: '--a-cto' },
    { k: 'cso',  role: 'CSO',  name: 'The Long Game',          lens: 'Strategy Lens',        cc: '--a-cso' },
    { k: 'cpo',  role: 'CPO',  name: 'The Vision Setter',      lens: 'Product Lens',         cc: '--a-cpo' },
    { k: 'chro', role: 'CHRO', name: 'The People Architect',   lens: 'People Lens',          cc: '--a-chro' }
  ];

  /* Each chair: 8 papers as { t: title, a: abstract, b: full body HTML (optional) }.
     The first paper of every chair ships with a full body; the remaining seven
     publish a substantive abstract while the full text is in preparation. */
  var S = {
    /* ---------------------------------------------------------------- COO */
    coo: [
      {
        t: 'The Synthesis Problem: Aggregating Dissent Without Averaging It Away',
        a: 'Eight expert views rarely agree. The operator’s hardest task is not collecting perspectives but combining them into one path without quietly averaging the disagreement into mush. This paper formalizes the synthesis problem, shows why naive aggregation destroys information, and argues for a method that carries dissent as a first-class output.',
        b: '<h4>Why averaging fails</h4>' +
           '<p>The instinct when eight experts disagree is to find the middle: average the price targets, split the difference on timing, soften the strongest claim until no one objects. This feels balanced. It is, in fact, the most reliable way to destroy the information the panel was convened to produce.</p>' +
           '<p>Disagreement among competent experts is rarely random noise around a shared truth. More often it encodes a real conflict between objectives — the CFO protecting runway, the CMO protecting momentum — or a genuine uncertainty about the world. Averaging treats both as error to be smoothed away. The result is a recommendation no expert would have made and no one will defend when it fails.</p>' +
           '<h4>Dissent is signal, not noise</h4>' +
           '<p>A well-run council treats a strong minority view as a leading indicator, not an inconvenience. The single dissent on a capital decision is frequently the one perspective pricing a risk the majority has discounted. The operator’s job is not to suppress that voice into the consensus but to surface it, name the condition under which it becomes decisive, and carry it forward on the record.</p>' +
           '<h4>A protocol for synthesis</h4>' +
           '<p>Synthesis that preserves information follows a sequence. First, collect positions independently, before exposure to one another, so early confidence does not anchor the group. Second, separate disagreements about facts from disagreements about values: the former can be resolved with evidence; the latter must be decided by the accountable human. Third, write a single recommended path — but attach the dissent, the confidence band, and the conditions that would reverse the call.</p>' +
           '<p>The output is not a compromise. It is a clear decision plus an honest map of where it might be wrong.</p>' +
           '<h4>Implications for the operating review</h4>' +
           '<p>An operating review built on this protocol looks different from the usual march through green dashboards. It spends its time where the experts diverge, because that is where the information is. It rewards the person who registers a dissent that later proves correct, because that is how calibration improves. And it produces a record that — win or lose — lets the organization learn why a decision was made, not merely what was decided.</p>'
      },
      { t: 'Sequencing Under Constraint: Ordering Irreversible Moves', a: 'When moves are irreversible and resources finite, the order of decisions matters as much as their content. We examine how operators sequence commitments to preserve optionality, and why the most reversible decision should usually go first.', b: '' },
      { t: 'The Coordination Tax: Why Cross-Functional Decisions Decay', a: 'Every handoff between functions loses information and adds delay. This paper measures the coordination tax on cross-functional decisions and proposes structures that reduce it without centralizing authority.', b: '' },
      { t: 'Throughput versus Optionality: The Operating Cadence Trade-off', a: 'A faster decision cadence raises throughput but consumes the slack that future options require. We model the trade-off and identify the cadence at which an organization maximizes decision quality rather than decision volume.', b: '' },
      { t: 'Escalation Design: When a Decision Should Leave the Room', a: 'Not every decision belongs to the people in the room. We study escalation triggers — confidence, reversibility, blast radius — and design a rule set that routes the right decisions upward or to a human without creating bottlenecks.', b: '' },
      { t: 'The Metrics That Mislead: Goodhart’s Law in the Operating Review', a: 'When a measure becomes a target, it stops measuring. We catalog how operating metrics corrupt under pressure and offer a discipline for choosing indicators that resist gaming.', b: '' },
      { t: 'Slack as Strategy: Designing Buffers for Decision Quality', a: 'Fully utilized systems cannot absorb shocks or seize options. We argue that deliberate slack — in time, capital, and attention — is not waste but the precondition for good decisions under uncertainty.', b: '' },
      { t: 'Post-Decision Audits: Closing the Operating Loop', a: 'Organizations decide constantly and learn rarely. This paper designs a lightweight post-decision audit that separates process quality from outcome luck, and feeds calibrated lessons back into the next decision.', b: '' }
    ],
    /* ---------------------------------------------------------------- CFO */
    cfo: [
      {
        t: 'Capital Allocation Under Deep Uncertainty: Options, Not Forecasts',
        a: 'Forecasts fail hardest exactly when capital allocation matters most. This paper reframes the CFO’s core decision as the purchase and exercise of real options — showing how to fund learning, stage commitments, and price the right to wait.',
        b: '<h4>The forecast trap</h4>' +
           '<p>Capital allocation is usually presented as a forecasting problem: project the cash flows, discount them, fund the highest number. The trouble is that the decisions where allocation matters most — a new market, a platform rebuild, a first sales team — are exactly the ones where forecasts are least reliable. The model’s precision is real; its accuracy is imaginary. Acting on it converts deep uncertainty into false confidence.</p>' +
           '<h4>Capital as a portfolio of options</h4>' +
           '<p>A more honest frame treats each allocation as the purchase of an option, not the prepayment of an outcome. Funding a pilot does not buy a market; it buys the right — not the obligation — to invest further if the pilot resolves uncertainty favorably. Valued this way, the question shifts from “what will this return?” to “what will this teach, and what will it cost to keep the option open?”</p>' +
           '<h4>Staging and the value of waiting</h4>' +
           '<p>Options logic prescribes staging. Release capital in tranches tied to milestones that retire specific risks. Pay for information before paying for scale. And price the value of waiting explicitly: in a volatile environment, the right to decide later — once a key uncertainty resolves — often exceeds the value of committing now. A disciplined CFO will sometimes recommend deferral not as indecision but as the higher-value choice.</p>' +
           '<h4>What this changes at the board table</h4>' +
           '<p>Boards trained on point forecasts ask for the number. A CFO operating on options thinking reframes the conversation around the decision structure: which risks each tranche retires, what evidence would justify the next commitment, and what would trigger a stop. The deliverable is not a more confident forecast. It is a sequence of smaller, reversible commitments that let the firm learn its way to a large position without betting the company on a spreadsheet.</p>'
      },
      { t: 'The Runway Illusion: Why Cash-Out Dates Distort Judgment', a: 'A single cash-out date compresses a complex risk surface into one number that warps every decision around it. We show how runway framing induces predictable errors and propose a richer liquidity dashboard for the board.', b: '' },
      { t: 'Unit Economics Before Scale: The Discipline of Contribution Margin', a: 'Scaling a negative contribution margin multiplies losses. We make the case for resolving unit economics before growth capital, and define the margin thresholds that justify acceleration.', b: '' },
      { t: 'Dilution, Control, and the Real Cost of a SAFE', a: 'Convertible instruments defer price but not consequence. This paper computes the true, fully-diluted cost of common early-stage structures and the governance rights quietly traded away with them.', b: '' },
      { t: 'Scenario Planning versus Point Forecasts in Board Finance', a: 'A point forecast is a confident way to be wrong. We contrast scenario planning with single-path budgeting and show how banded outcomes improve board decisions under volatility.', b: '' },
      { t: 'The Hurdle-Rate Fallacy in Early-Stage Investment', a: 'Applying a fixed hurdle rate to uncertain early bets misprices both risk and learning. We examine when discounted-cash-flow logic breaks down and what should replace it.', b: '' },
      { t: 'Working Capital as a Strategic Lever', a: 'Cash trapped in the operating cycle is strategy forgone. This paper treats working-capital terms as a deliberate lever for funding growth without dilution.', b: '' },
      { t: 'Reading Risk: Confidence Intervals the Board Will Actually Use', a: 'Boards reward precision and punish honesty about uncertainty. We propose a way to present financial risk — intervals, not points — that decision-makers will actually act on.', b: '' }
    ],
    /* ---------------------------------------------------------------- CMO */
    cmo: [
      {
        t: 'Positioning Under Category Ambiguity: Deciding What You Are',
        a: 'Before a market can value a product it must file it under a category. When the category does not yet exist, positioning becomes the highest-leverage and riskiest marketing decision. This paper offers a framework for choosing a frame of reference under ambiguity.',
        b: '<h4>Positioning is a decision, not a description</h4>' +
           '<p>Positioning is often mistaken for a writing exercise — the search for the right words on the homepage. It is better understood as a decision: the choice of which mental category a customer will use to make sense of the product. That category determines the competitors they compare you to, the price they expect, and the problems they assume you solve. Choose it well and the product explains itself; choose it badly and no amount of copy recovers.</p>' +
           '<h4>The cost of the wrong category</h4>' +
           '<p>When a product is genuinely new, the default categories are all slightly wrong. File a multi-agent decision system under “chatbot” and buyers expect a toy; file it under “consulting” and they expect a person. Each frame imports expectations the product cannot meet and suppresses the value it actually delivers. The wrong category is not a missed nuance — it is a systematic mispricing of the entire offering.</p>' +
           '<h4>Choosing a frame of reference</h4>' +
           '<p>The decision turns on a trade-off. An existing category is instantly understood but anchors value to incumbents. A new category escapes that anchor but must be taught, at real expense, before it can be sold. The practical question is whether the product’s advantage is large enough, and the buyer’s pain acute enough, to justify the cost of education. Most products should borrow an adjacent category and bend it; only a few have earned the right to create one.</p>' +
           '<h4>Earning the right to a new category</h4>' +
           '<p>Creating a category is the most expensive marketing decision a company can make, and the most defensible when it works. It requires a point of view the market does not yet hold, sustained investment to establish it, and proof that the new frame produces outcomes the old one cannot. The CMO’s job is to decide honestly whether the company has those three things — and to refuse the vanity of a new category when it does not.</p>'
      },
      { t: 'The Attribution Trap: Deciding Spend Without Clean Signal', a: 'Marketing attribution promises a causality it cannot deliver. We dissect the attribution trap and propose decision rules for allocating spend when the signal is irreducibly noisy.', b: '' },
      { t: 'Brand versus Performance: Allocating the Marketing Dollar Over Time', a: 'Performance marketing pays today; brand pays later and compounds. We model the intertemporal trade-off and the conditions under which short-term ROI maximization destroys long-term value.', b: '' },
      { t: 'Pricing as Positioning: The Decision Customers Read First', a: 'Price is the loudest signal a brand sends. This paper treats pricing as a positioning decision rather than a finance one, and examines how it sets expectations before any message lands.', b: '' },
      { t: 'Timing the Market Entry: Too Early, Too Late, or Now', a: 'Most pioneers do not win; most laggards do not either. We study entry timing as a decision under category maturity and identify the signals that distinguish “too early” from “now.”', b: '' },
      { t: 'The Segmentation Decision: Who You Choose Not to Serve', a: 'Segmentation is a refusal disguised as a targeting exercise. We argue that the decisive act is choosing whom to exclude, and show how diffuse targeting erodes positioning.', b: '' },
      { t: 'Demand Sensing versus Demand Creation', a: 'Capturing existing demand and manufacturing new demand require opposite playbooks and budgets. We help the CMO decide which game they are actually playing.', b: '' },
      { t: 'Narrative Risk: When the Story Outruns the Product', a: 'A story that promises more than the product delivers borrows trust it must later repay with interest. This paper defines narrative risk and the governance that keeps marketing honest.', b: '' }
    ],
    /* ---------------------------------------------------------------- CLO */
    clo: [
      {
        t: 'Saying Yes Safely: The Chief Legal Officer’s Real Decision Problem',
        a: 'The modern CLO is not paid to say no but to find the safe path to yes. This paper reframes legal counsel as a decision-enabling function, formalizes the trade-off between risk and velocity, and defines when a question must escalate to human judgment.',
        b: '<h4>From gatekeeper to enabler</h4>' +
           '<p>The caricature of the chief legal officer is the executive who says no. The effective CLO does the opposite: they are paid to find the safe path to yes. Almost any decision the business wants to make can be structured, conditioned, or sequenced to bring its legal risk within tolerance. The work is not blocking the decision but engineering the version of it that survives contact with regulators, counterparties, and courts.</p>' +
           '<h4>Pricing legal risk</h4>' +
           '<p>To enable a decision, legal risk has to be priced rather than merely flagged. That means estimating both the probability that a risk materializes and the magnitude if it does, then comparing that expected cost against the value of moving. A low-probability, low-severity risk should rarely stop a high-value decision. A low-probability but catastrophic risk — a bet-the-company exposure — should, even when the odds look comfortable. Treating all risks as equally disqualifying is its own failure of counsel.</p>' +
           '<h4>The escalation threshold</h4>' +
           '<p>Some questions exceed what any advisor should answer alone. When the law is genuinely ambiguous, the stakes are severe, or confidence is low, the correct output is not an opinion but an escalation — to senior human counsel, to the board, to outside specialists. Designing that threshold in advance, rather than improvising it under pressure, is what separates reliable counsel from confident error.</p>' +
           '<h4>Why this matters for automated counsel</h4>' +
           '<p>These principles become sharper when the counsel is partly automated. A system that offers legal analysis must be built to price risk rather than reflexively refuse, and — critically — to know the boundary of its own competence. The most important feature of an AI advisor is not the answers it gives but the questions it declines to answer, routing them to a human instead. Saying yes safely includes knowing when not to say anything at all.</p>'
      },
      { t: 'Regulatory Ambiguity and the Cost of Waiting for Clarity', a: 'Waiting for regulatory certainty is itself a decision with a price. We analyze how firms should act under ambiguous rules, and when first-mover legal risk is worth bearing.', b: '' },
      { t: 'Contractual Risk Allocation: Who Bears the Unknown', a: 'A contract is a machine for assigning unknown future risks today. This paper examines indemnities, caps, and warranties as decision variables and the negotiation dynamics that govern them.', b: '' },
      { t: 'The Escalation Threshold: When AI Counsel Must Defer to a Human', a: 'Automated legal analysis is useful until it is dangerous. We define the confidence and consequence thresholds below which an AI advisor must escalate to licensed human counsel rather than answer.', b: '' },
      { t: 'Privacy by Design as a Decision Constraint', a: 'Under GDPR and the EU AI Act, privacy is not a feature added late but a constraint that shapes early decisions. We show how to treat data-protection requirements as design inputs, not compliance afterthoughts.', b: '' },
      { t: 'Intellectual Property Strategy: Build, License, or Litigate', a: 'IP is a decision portfolio, not a legal formality. This paper compares building, licensing, and litigating as strategic options and the conditions that favor each.', b: '' },
      { t: 'Compliance Debt: The Hidden Liability on the Balance Sheet', a: 'Deferred compliance accrues interest like any debt. We define compliance debt, show how it compounds silently, and propose a discipline for when to pay it down.', b: '' },
      { t: 'Governing Documents as Decision Infrastructure', a: 'Charters, bylaws, and board resolutions are the operating system for corporate decisions. This paper treats governing documents as infrastructure that either enables or obstructs good decisions.', b: '' }
    ],
    /* ---------------------------------------------------------------- CTO */
    cto: [
      {
        t: 'Build, Buy, or Borrow: The Architecture Decision That Compounds',
        a: 'Few decisions compound like architecture. The choice to build, buy, or borrow a capability sets the cost structure and option space for years. This paper offers a decision framework that weighs reversibility, strategic distinctiveness, and total cost over time.',
        b: '<h4>Why architecture compounds</h4>' +
           '<p>Most decisions are paid for once. Architecture is paid for continuously. The choice of how a core capability is built — in-house, purchased, or assembled from someone else’s components — sets the cost of every feature that follows, the speed at which the team can move, and the range of futures that remain reachable. Small early advantages compound into large structural ones; small early mistakes compound into debt that constrains the company for years.</p>' +
           '<h4>The three options and their hidden costs</h4>' +
           '<p>Building maximizes control and distinctiveness at the cost of time and ongoing maintenance. Buying maximizes speed at the cost of dependence on a vendor’s roadmap and pricing. Borrowing — open source or a platform API — splits the difference but inherits the provider’s constraints and risks. Each option carries a cost that does not appear on the initial invoice: maintenance for build, lock-in for buy, fragility for borrow. The decision fails most often because these hidden costs are discovered late.</p>' +
           '<h4>Reversibility and the strategic core</h4>' +
           '<p>Two questions discipline the choice. First, is this capability part of the strategic core — the thing the company must be distinctively excellent at — or is it undifferentiated plumbing? Build the core; buy or borrow the rest. Second, how reversible is the decision? A capability that is cheap to swap out later can be acquired quickly and revisited; one that will be load-bearing and expensive to replace deserves deliberation up front.</p>' +
           '<h4>A decision rule</h4>' +
           '<p>The synthesis is a simple rule with hard judgment inside it: build what is both core and durable, buy what is neither, and borrow what is non-core but fast-moving — while keeping the interface clean enough that any borrowed or bought component can later be replaced. The goal is not to make the perfect choice today but to avoid foreclosing the choices the company will need tomorrow.</p>'
      },
      { t: 'Technical Debt as a Deliberate Decision, Not an Accident', a: 'Technical debt is often incurred unconsciously and repaid involuntarily. We argue for treating it as a deliberate financing decision with an explicit interest rate and repayment plan.', b: '' },
      { t: 'The Reversibility Map: One-Way versus Two-Way Technology Doors', a: 'Some technical choices are cheap to reverse; others are nearly permanent. This paper builds a reversibility map that tells teams which decisions deserve deliberation and which deserve speed.', b: '' },
      { t: 'Security Posture as a Product Decision', a: 'Security is usually framed as risk reduction; we frame it as a product decision that shapes trust, sales, and architecture. The paper connects posture choices to commercial outcomes.', b: '' },
      { t: 'Model Concentration Risk: Designing for Provider Dependence', a: 'Building on a single model provider is a strength for capability and a concentration risk for procurement. We examine how to design for provider dependence honestly, including fallback posture.', b: '' },
      { t: 'Scaling Before Fit: The Premature-Optimization Decision', a: 'Engineering for scale before demand exists trades present velocity for hypothetical load. We identify the signals that justify investing in scale and the cost of doing so too early.', b: '' },
      { t: 'Platform versus Point Solution: The Extensibility Bet', a: 'Building a platform is a bet that future use cases justify present generality. This paper frames extensibility as an option priced in complexity, and asks when the bet pays.', b: '' },
      { t: 'Latency, Cost, Quality: The Inference Trilemma', a: 'In AI systems, latency, cost, and output quality trade against one another. We formalize the inference trilemma and the product decisions that set the operating point.', b: '' }
    ],
    /* ---------------------------------------------------------------- CSO */
    cso: [
      {
        t: 'The Five-Year Arc: Committing Under Irreducible Uncertainty',
        a: 'Strategy demands commitment to a multi-year arc precisely where the future is least knowable. This paper reconciles the need for direction with the need for adaptability, treating strategy as a set of staged, revisable commitments rather than a fixed plan.',
        b: '<h4>The commitment paradox</h4>' +
           '<p>Strategy asks for commitment to a direction that will play out over years, in an environment that cannot be forecast over months. This is the central paradox of the strategist’s role: commit too firmly and the plan shatters on contact with reality; commit too loosely and the organization drifts, hedging every bet until none pays off. Neither rigidity nor pure flexibility is a strategy.</p>' +
           '<h4>Direction without rigidity</h4>' +
           '<p>The resolution is to separate the arc from the steps. The arc — the thesis about where value is moving and why this company is positioned to capture it — should be stable enough to align thousands of small decisions. The steps toward it should be treated as revisable. A good five-year strategy is therefore not a five-year plan; it is a durable direction plus an explicit acknowledgment of what is still unknown and will be decided later.</p>' +
           '<h4>Designing revisable commitments</h4>' +
           '<p>Commitments can be engineered to be load-bearing yet revisable. Each major move should name the belief it depends on, the evidence that would confirm or refute that belief, and the point at which the company would change course. This converts strategy from a single irreversible bet into a sequence of staged commitments, each of which buys both progress and information. The arc holds; the path adapts.</p>' +
           '<h4>Communicating an arc that may bend</h4>' +
           '<p>The hardest part is communication. Markets, employees, and boards crave certainty, and a leader who says “this is our direction, and here is what would make us change it” risks sounding unsure. But the alternative — projecting false certainty and then reversing without explanation — destroys more credibility than honesty ever does. The strategist’s task is to make adaptability legible as discipline rather than doubt.</p>'
      },
      { t: 'Competitive Cartography: Mapping Moves You Cannot See', a: 'Competitors act on private information and reveal it late. This paper develops competitive cartography — a discipline for mapping likely moves under incomplete information and updating as signals arrive.', b: '' },
      { t: 'The Off-Ramp Discipline: Designing Reversible Strategy', a: 'Good strategy names its own exit conditions in advance. We argue for pre-committing off-ramps so that abandoning a failing path is a planned decision, not an emotional one.', b: '' },
      { t: 'Portfolio Logic: Concentration versus Diversification of Bets', a: 'A firm’s strategic bets form a portfolio whose risk depends on correlation, not count. This paper applies portfolio logic to strategy and the discipline of concentrating where conviction is highest.', b: '' },
      { t: 'The Adjacent Possible: Sequencing Market Expansion', a: 'Expansion succeeds when each new market is reachable from the last. We use the idea of the adjacent possible to sequence expansion decisions and avoid leaps that strand capability.', b: '' },
      { t: 'Strategic Patience versus First-Mover Advantage', a: 'First movers educate the market; fast followers monetize it. This paper examines when patience beats speed and how to tell which advantage a given market actually rewards.', b: '' },
      { t: 'ESG as Strategy, Not Compliance', a: 'Treated as compliance, ESG is a cost; treated as strategy, it is a source of advantage and risk reduction. We separate the two framings and their decision implications.', b: '' },
      { t: 'The Narrative–Numbers Gap in Strategic Planning', a: 'Strategy lives in narrative; budgets live in numbers; the gap between them is where plans fail. This paper proposes a method for keeping story and spreadsheet honest to each other.', b: '' }
    ],
    /* ---------------------------------------------------------------- CPO */
    cpo: [
      {
        t: 'Prioritization Under Scarcity: The Roadmap as a Series of Refusals',
        a: 'A roadmap is defined by what it excludes. This paper reframes product prioritization as the disciplined practice of refusal, examines the forces that inflate roadmaps, and offers a method for deciding what not to build.',
        b: '<h4>The roadmap is a refusal list</h4>' +
           '<p>Every item on a product roadmap is visible; the decisions that matter are invisible, sitting in the far larger set of things the team chose not to build. A roadmap is, properly understood, a refusal list with a few exceptions written at the top. Teams that grasp this manage their roadmap as a portfolio of deliberate noes; teams that do not accumulate yeses until focus dissolves.</p>' +
           '<h4>Why roadmaps inflate</h4>' +
           '<p>Roadmaps inflate under predictable pressure. Every stakeholder has a request, every request has a plausible case, and saying yes is socially cheaper than saying no. Sales wants the feature that closes this quarter; a large customer wants the customization; an executive has a conviction. Absent a discipline, the roadmap becomes a negotiated truce among the loudest voices rather than an expression of strategy.</p>' +
           '<h4>A prioritization discipline</h4>' +
           '<p>A workable discipline forces comparison against a fixed budget. If everything cannot be built — and it cannot — then each candidate must win its place against the others, not merely clear the bar of “good idea.” That requires a shared measure of value tied to the product’s one critical metric, an honest estimate of cost, and the willingness to rank ruthlessly. The output is not a list of what is worth doing; it is a list of what is worth doing first, at the explicit expense of the rest.</p>' +
           '<h4>Defending the no</h4>' +
           '<p>The decision is only as good as its defense. A refusal that cannot be explained will be relitigated until it reverses. The product leader’s job is to make the reasoning legible — why this, why not that, and what would have to change for the answer to change — so that the no holds, and the team’s scarce capacity stays pointed at the few things that compound.</p>'
      },
      { t: 'Discovery versus Delivery: Deciding What to Learn Before You Build', a: 'Building the wrong thing efficiently is the costliest outcome in product. We frame discovery as a decision about what to learn before committing to delivery, and how much learning is enough.', b: '' },
      { t: 'The Metrics Hierarchy: Choosing the One Number That Matters', a: 'Optimizing many metrics optimizes none. This paper builds a metrics hierarchy that subordinates vanity and proxy measures to the single number a product team should move.', b: '' },
      { t: 'Build Order and Compounding Value', a: 'The sequence in which features ship determines how value compounds. We examine build-order decisions and why the most valuable feature is rarely the right one to build first.', b: '' },
      { t: 'The Sunsetting Decision: Killing Features That Still Have Users', a: 'Every feature retained is a tax on every future decision. This paper studies when and how to sunset features that still have users but no longer earn their complexity.', b: '' },
      { t: 'Experimentation Ethics and the Limits of A/B Testing', a: 'A/B testing optimizes what it can measure and ignores what it cannot. We examine the ethical and epistemic limits of experimentation as a decision method.', b: '' },
      { t: 'Platform Risk: Building on Someone Else’s Roadmap', a: 'Building atop another company’s platform borrows its capabilities and inherits its decisions. This paper frames platform dependence as a strategic risk to be priced, not assumed away.', b: '' },
      { t: 'The Feedback Paradox: Listening to Users Without Following Them Off a Cliff', a: 'Users describe problems well and solutions poorly. We resolve the feedback paradox: how to take customer input seriously without outsourcing product judgment to it.', b: '' }
    ],
    /* --------------------------------------------------------------- CHRO */
    chro: [
      {
        t: 'The Headcount Decision: Hiring as the Most Expensive Bet',
        a: 'A hire is a large, illiquid, hard-to-reverse investment, yet it is often the least rigorously analyzed decision a company makes. This paper treats headcount as capital allocation, examines the asymmetric cost of hiring errors, and proposes a discipline for the decision to add a person.',
        b: '<h4>Hiring is capital allocation</h4>' +
           '<p>A hire is one of the largest and least reversible investments a company makes: a multi-year financial commitment, an illiquid asset that can resign, and a decision whose consequences ripple through a team’s culture and output. Yet it is routinely made with less rigor than a software purchase. Treating headcount as capital allocation — subject to the same discipline as any major investment — is the first move toward better people decisions.</p>' +
           '<h4>The asymmetry of hiring errors</h4>' +
           '<p>The two errors are not symmetric. A false negative — passing on someone who would have excelled — costs an opportunity. A false positive — hiring someone who does not work out — costs salary, severance, the time of everyone who managed and reviewed them, the opportunity cost of the role sitting wrongly filled, and the morale of a team that watched it happen. Because the downside of a bad hire so exceeds the downside of a slow one, the default should favor precision over speed.</p>' +
           '<h4>Sequencing roles against need</h4>' +
           '<p>Headcount decisions are also a sequencing problem. The right role hired a year too early burns runway on capacity the company cannot yet use; the right role a quarter too late becomes the bottleneck that caps growth. Mapping which role unlocks the most constrained part of the business — and hiring against that constraint rather than against a generic growth plan — is where the people function earns its seat in strategy.</p>' +
           '<h4>Designing the decision</h4>' +
           '<p>A disciplined hiring decision names the specific outcome the role must produce, defines in advance what evidence would predict success, and forces the comparison between adding a person, redesigning the work, or deferring. The aim is not bureaucratic process for its own sake but to bring to the most expensive recurring decision the company makes the same honesty it brings to spending money — because that is exactly what it is.</p>'
      },
      { t: 'Compensation as a Signal, Not a Cost', a: 'Compensation is read by employees as a statement of value, not merely received as income. This paper examines pay decisions as signaling and the failures that follow from treating them as cost minimization.', b: '' },
      { t: 'Culture Under Scale: Deciding What Not to Change', a: 'Growth forces a choice about which cultural elements to preserve and which to let evolve. We frame culture under scale as a deliberate decision rather than a passive drift.', b: '' },
      { t: 'The Performance-Distribution Problem', a: 'Forced rankings and uniform raises both misallocate against real performance distributions. This paper examines how to make differentiated performance decisions that are fair and defensible.', b: '' },
      { t: 'Building versus Buying Talent: Develop or Acquire', a: 'Every capability gap can be developed internally or acquired externally, at different costs and time horizons. We frame the build-versus-buy decision for talent and its long-run consequences.', b: '' },
      { t: 'Organizational Design as Decision Architecture', a: 'Org charts are not reporting diagrams; they are decisions about who decides what. This paper treats organizational design as decision architecture and its effect on speed and accountability.', b: '' },
      { t: 'Retention Economics: The True Cost of Attrition', a: 'Attrition’s visible cost — replacement — is dwarfed by its invisible cost: lost context and momentum. We model retention economics to inform where retention investment actually pays.', b: '' },
      { t: 'Leadership Succession Under Uncertainty', a: 'Succession decisions are made rarely, under pressure, and with incomplete information. This paper offers a framework for planning leadership transitions before they become urgent.', b: '' }
    ]
  };

  /* ---- build the flat, dated article list (daily cadence from 20 May 2026) ---- */
  var BASE = Date.UTC(2026, 4, 20); /* months are 0-indexed: 4 = May */
  function dateLabel(offsetDays) {
    var d = new Date(BASE + offsetDays * 86400000);
    return d.toLocaleDateString('en-GB', { timeZone: 'UTC', day: 'numeric', month: 'short', year: 'numeric' });
  }

  var articles = [];
  for (var ai = 0; ai < 8; ai++) {
    for (var ci = 0; ci < CH.length; ci++) {
      var ch = CH[ci];
      var sp = (S[ch.k] || [])[ai];
      if (!sp) continue;
      var n = ai * CH.length + ci; /* global publication order → date offset */
      articles.push({
        id: 'art-' + ch.k + '-' + (ai + 1),
        ck: ch.k, role: ch.role, name: ch.name, lens: ch.lens, cc: ch.cc,
        idx: ai + 1, n: n,
        date: dateLabel(n),
        title: sp.t,
        abstract: sp.a,
        body: sp.b || null
      });
    }
  }

  window.DLD_RESEARCH = { chairs: CH, articles: articles };
})();

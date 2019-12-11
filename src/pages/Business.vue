<template>
  <Layout>
    <PageTitleBar :title=title></PageTitleBar>

    <section class="container mx-auto flex items-center" id="seniorDebtFinance" data-aos="fade-left" data-aos-duration="750" data-aos-delay="250">
      <div class="w-full lg:w-1/2 px-8 py-16 text-gc-dark-grey">
        <h3 class="text-gc-red capitalize font-bold font-display text-3xl mb-4 relative title-underline">Senior Debt Finance</h3>
        <p class="mb-4">These transactions are generally funded via our strong partner channels. They reflect our ability to:</p>
        <ul>
          <li class="py-2 px-8"><font-awesome :icon="['fas', 'chevron-circle-right']" class="text-gc-yellow mr-2"/> Act quickly, often having evaluated, structured, documented and funded transactions within a few weeks, whilst not compromising security, risk or due diligence requirements</li>
          <li class="py-2 px-8"><font-awesome :icon="['fas', 'chevron-circle-right']" class="text-gc-yellow mr-2"/> Provide debt facilities, including senior construction facilities, beyond traditional senior gearing levels</li>
          <li class="py-2 px-8"><font-awesome :icon="['fas', 'chevron-circle-right']" class="text-gc-yellow mr-2"/> Understand, evaluate, assess and mitigate risks and exit opportunities outside of traditional banking paradigms</li>
          <li class="py-2 px-8"><font-awesome :icon="['fas', 'chevron-circle-right']" class="text-gc-yellow mr-2"/> Structure transactions incorporating collateral security and other credit enhancing mechanisms, enabling them to proceed where others were unable to do so</li>
        </ul>
      </div>
      <g-image class="hidden lg:block lg:w-1/2" src="~/assets/images/sdf.jpg" width="550" height="550" fit="cover" quality="100" />
    </section>

    <section class="container mx-auto flex flex-row-reverse bg-gc-lighter-grey items-center" id="mezzanineFinance" data-aos="fade-right" data-aos-duration="750" data-aos-delay="250">
      <div class="w-full lg:w-1/2 px-8 py-16 text-gc-dark-grey">
        <h3 class="text-gc-red capitalize font-bold font-display text-3xl mb-4 relative title-underline">Mezzanine Finance</h3>
        <p class="mb-4">We provide mezzanine funding for development and investment assets. The funding is generally:</p>
        <ul>
          <li class="py-2 px-8"><font-awesome :icon="['fas', 'chevron-circle-right']" class="text-gc-yellow mr-2"/> Short-to-medium term in nature, with clearly defined exits;</li>
          <li class="py-2 px-8"><font-awesome :icon="['fas', 'chevron-circle-right']" class="text-gc-yellow mr-2"/> Supported by registered mortgages and personal and corporate guarantees;</li>
          <li class="py-2 px-8"><font-awesome :icon="['fas', 'chevron-circle-right']" class="text-gc-yellow mr-2"/> Well secured by property assets; and</li>
          <li class="py-2 px-8"><font-awesome :icon="['fas', 'chevron-circle-right']" class="text-gc-yellow mr-2"/> In partnership with high quality, experienced and capable counter-parties, builders and consultants.</li>
        </ul>
      </div>
      <g-image class="hidden lg:block lg:w-1/2" src="~/assets/images/mf.jpg" width="550" height="550" fit="cover" quality="100"/>
    </section>

    <section class="container mx-auto flex bg-gc-yellow-lighter items-center" id="developmentSales" data-aos="fade-left" data-aos-duration="750" data-aos-delay="250">
      <div class="w-full lg:w-1/2 px-8 py-16 text-gc-dark-grey">
        <h3 class="text-gc-red capitalize font-bold font-display text-3xl mb-4 relative title-underline">Development Sales</h3>
        <p class="mb-4">We provide consulting services for Property Developers and other asset holders who wish to leverage our broad network of developers seeking to sell and acquire new sites both with plans & permits, as well as sites with no permits.</p>
        <p class="mb-4">Grange Capital has their finger on the pulse of most developers across Victoria and Australia, and can assist with positioning assets for sale in front of such developers that traditional real estate agents cannot access.</p>
      </div>
      <g-image class="hidden lg:block lg:w-1/2" src="~/assets/images/ds.jpg" width="550" height="550" fit="cover" quality="100" />
    </section>

    <section class="container mx-auto px-4 flex" id="grangeCapitalInvestmentFund" data-aos="slide-up" data-aos-duration="750" data-aos-delay="250">
      <div class="w-full py-16 text-gc-dark-grey">
        <h3 class="text-gc-red capitalize font-bold font-display text-3xl mb-4 relative title-underline">Grange Capital Investment Fund</h3>
        <p class="mb-4">The Grange Capital Investment Fund (GCIF) is an investment vehicle that co-invests with the Shareholders, Directors and Management of Grange via our strategic partner Bass Capital.</p>
        <h4 class="text-gc-red capitalize font-bold font-display text-2xl mb-4 relative subtitle-underline">Key Features</h4>
        <div class="flex flex-col md:flex-row mb-4">
          <div class="w-full md:w-1/2">
            <ul class="mb-4">
              <li class="mb-4 pb-2 mx-6 border-b border-gc-grey"><font-awesome :icon="['fas', 'chevron-circle-right']" class="text-gc-yellow mr-2"/>High yield investment (target 10% to 15% p.a. on deployed funds)</li>
              <li class="mb-4 pb-2 mx-6 border-b border-gc-grey"><font-awesome :icon="['fas', 'chevron-circle-right']" class="text-gc-yellow mr-2"/>Smooth and stable investment experience, generally uncorrelated to volatile and uncertain financial markets</li>
              <li class="mb-4 pb-2 mx-6 border-b lg:border-none border-gc-grey"><font-awesome :icon="['fas', 'chevron-circle-right']" class="text-gc-yellow mr-2"/>Project based investment so you can have full control of what you are lending to</li>
            </ul>    
          </div>
          <div class="w-full md:w-1/2">
            <ul class="mb-4">
              <li class="mb-4 pb-2 mx-6 border-b border-gc-grey"><font-awesome :icon="['fas', 'chevron-circle-right']" class="text-gc-yellow mr-2"/> Co-investment with Grange Capital’s & Bass Capital’s balance sheet, shareholders, executives and management</li>
              <li class="mb-4 pb-2 mx-6 border-b border-gc-grey"><font-awesome :icon="['fas', 'chevron-circle-right']" class="text-gc-yellow mr-2"/> All investment administration managed by Bass Capital</li>
              <li class="mb-4 pb-2 mx-6"><font-awesome :icon="['fas', 'chevron-circle-right']" class="text-gc-yellow mr-2"/> Priority access to direct co-investment opportunities where capacity is available</li>
            </ul>
          </div>
        </div>
        <div class="mb-8">
          <p class="mb-4">We specialise in identifying, structuring and managing specialised and proprietary credit investments. Our investment approach focuses on providing credit solutions to mid-sized companies and real estate   transactions operating in Australasia.</p>
          <p class="mb-4">By leveraging our trusted network of professional advisors and local industry experts, we are able to gain critical industry and asset insights and identify a better class of investment opportunity. We   primarily invest in fundamentally sound businesses and assets that exhibit solid collateral and managerial characteristics.</p>
          <p class="mb-4">Our tactical approach to investment selection enables us to operate beyond ‘approved sector’ limitations and we are able to generate attractive risk-adjusted returns by focusing on less crowded mid-market  transactions. Our thorough and disciplined investment process which centres on fundamental credit analysis and the ‘Four C’s of lending’ (Character, Collateral, Cashflow and Conditions), ensures that our investments are  optimally priced. And our significant network of private and institutional investors situated both locally and abroad enables us to provide fast, comprehensive credit solutions to borrowers in need.</p>
        </div>
        <h4 class="mb-4 text-gc-red font-display text-2xl font-bold relative subtitle-underline">Investment Principles</h4>
        <p class="mb-4">Our approach to lending our investments exhibit the following characteristics:</p>
	      <ul class="gc-principles" id="principle-list">
	        <li class="m-0 px-3 py-6 gc-principle">
	      	  <h4 class="font-display text-gc-red capitalize font-bold text-xl mb-4 px-2"><font-awesome :icon="['fas', 'piggy-bank']" size="2x" class="text-gc-yellow mr-2"/>Capital Preservation</h4>
        		<ul class="" id="cp-list">
	      	    <li class="py-1 px-8"><font-awesome :icon="['fas', 'chevron-right']" class="text-gc-dark-grey mr-2"/>Highly selective investment criteria</li>
	      	    <li class="py-1 px-8"><font-awesome :icon="['fas', 'chevron-right']" class="text-gc-dark-grey mr-2"/>Preference for credit investments with true senior debt features</li>
        		  <li class="py-1 px-8"><font-awesome :icon="['fas', 'chevron-right']" class="text-gc-dark-grey mr-2"/>Credit protection provisions (e.g. covenants, asset security, hard maturities) as standard in each investment</li>
	      	    <li class="py-1 px-8"><font-awesome :icon="['fas', 'chevron-right']" class="text-gc-dark-grey mr-2"/>Clearly defined multiple exit strategies and multiple lender enforcement strategies</li>
	      	  </ul>
	        </li>
	        <li class="m-0 px-3 py-6 gc-principle">
	      	  <h4 class="font-display text-gc-red capitalize font-bold text-xl mb-4 px-2"><font-awesome :icon="['fas', 'puzzle-piece']" size="2x" class="text-gc-yellow mr-2"/>Tactical and Diversified</h4>
	      	  <ul class="" id="td-list">
	      	    <li class="py-1 px-8"><font-awesome :icon="['fas', 'chevron-right']" class="text-gc-dark-grey mr-2"/>Dynamic sector analysis ensures we are not constrained by ‘approved sector’ mandates</li>
	      	    <li class="py-1 px-8"><font-awesome :icon="['fas', 'chevron-right']" class="text-gc-dark-grey mr-2"/>Preference for growth sector investments, but event driven risk and special situations can be considered</li>
	      	    <li class="py-1 px-8"><font-awesome :icon="['fas', 'chevron-right']" class="text-gc-dark-grey mr-2"/>Sector and borrower diversity</li>
	      	    <li class="py-1 px-8"><font-awesome :icon="['fas', 'chevron-right']" class="text-gc-dark-grey mr-2"/>Mid-market lending supported by our unique origination network</li>
	      	  </ul>
	        </li>
	        <li class="m-0 px-3 py-6 gc-principle">
	      	  <h4 class="font-display text-gc-red capitalize font-bold text-xl mb-4 px-2"><font-awesome :icon="['fas', 'search']" size="2x" class="text-gc-yellow mr-2"/>Deep Due Diligence</h4>
	      	  <ul class="" id="dd-list">
	      	    <li class="py-1 px-8"><font-awesome :icon="['fas', 'chevron-right']" class="text-gc-dark-grey mr-2"/>Deep review of market industry dynamics and positioning within that market</li>
	      	    <li class="py-1 px-8"><font-awesome :icon="['fas', 'chevron-right']" class="text-gc-dark-grey mr-2"/>Fundamental credit analysis of each opportunity</li>
	      	    <li class="py-1 px-8"><font-awesome :icon="['fas', 'chevron-right']" class="text-gc-dark-grey mr-2"/>Rigorous review and negotiation of loan documentation</li>
	      	  </ul>
	        </li>
	        <li class="m-0 px-3 py-6 gc-principle">
	        	<h4 class="font-display text-gc-red capitalize font-bold text-xl mb-4 px-2"><font-awesome :icon="['fas', 'trophy']" size="2x" class="text-gc-yellow mr-2"/>Managerial Excellence</h4>
        		<ul class="" id="me-list">
	        	  <li class="py-1 px-8"><font-awesome :icon="['fas', 'chevron-right']" class="text-gc-dark-grey mr-2"/>Partners with significant global mid-market lending expertise</li>
	      	    <li class="py-1 px-8"><font-awesome :icon="['fas', 'chevron-right']" class="text-gc-dark-grey mr-2"/>Substantial local industry and market know-how</li>
	      	    <li class="py-1 px-8"><font-awesome :icon="['fas', 'chevron-right']" class="text-gc-dark-grey mr-2"/>Broad network of highly experienced support professionals</li>
        		  <li class="py-1 px-8"><font-awesome :icon="['fas', 'chevron-right']" class="text-gc-dark-grey mr-2"/>Active management through to realisation</li>
	        	</ul>
	        </li>
	      </ul>
      </div>
    </section>

    <section class="container mx-auto flex flex-row-reverse bg-gc-lighter-grey items-center" id="gcImfDevelopmentFund" data-aos="slide-right" data-aos-duration="750" data-aos-delay="250">
      <div class="w-full lg:w-1/2 px-8 py-16 text-gc-dark-grey">
        <h3 class="text-gc-red capitalize font-bold font-display text-3xl mb-4 relative title-underline">Grange Capital IMF Development Fund</h3>
        <p class="mb-4">Grange Capital maintains a mandate with a leading European IMF fund for deployment of investment in altruistic, farming, housing and other projects that benefit the community. The minimum loan size is 40 Million Euro for access to this fund and other criteria apply specific to IMF regulation.</p>
      </div>
      <g-image class="hidden lg:block lg:w-1/2" src="~/assets/images/imfdf.jpg" width="550" height="550" fit="cover" quality="100" />
    </section>


    <section class="container mx-auto px-4 py-20" id="gTelecom" data-aos="fade-up-left" data-aos-duration="750" data-aos-delay="250">
      <h3 class="text-gc-red capitalize font-bold font-display text-3xl mb-4 relative title-underline">Grange Telecom</h3>
      <div data-aos="flip-up" data-aos-duration="1000" data-aos-delay="500">
        <h4 class="text-gc-red capitalize font-bold font-display text-xl mb-4 relative subtitle-underline">New Generation Ultra-Fast Network Solutions</h4>
        <p class="mb-4 text-gray-800"><span class="font-bold text-gc-yellow">Gtelecom</span> was founded in 1999. Ever since its inception it has been serving communities with value for money, reliable network and high speed broadband. <span class="font-bold text-gc-yellow">Gtelecom</span> is a licensed telecommunications network carrier, focusing on providing the latest technology at cost effective prices. Without compromising on quality or service.</p>
      </div>
      <div data-aos="flip-up" data-aos-duration="1000" data-aos-delay="500">
        <h4 class="text-gc-red capitalize font-bold font-display text-xl mb-4 relative subtitle-underline">Why Work With G Telecom</h4>
        <p class="mb-4 text-gray-800">As a developer, you’re at the heart of the projects that are shaping our country, so the decisions you make regarding telecommunications are vital.</p>
        <p class="mb-4 text-gray-800">With <span class="font-bold text-gc-yellow">Gtelecom</span> you can offer your customers the widest selection of communications providers and services possible. The <span class="font-bold text-gc-yellow">Gtelecom</span> network is maintained by skilled field engineers working nationwide.</p>
        <p class="mb-4 text-gray-800">But it’s not just the quality, reliability and reach of the network that makes it the obvious choice. <span class="font-bold text-gc-yellow">Gtelecom</span> believes it vital to share in depth knowledge of the products and services that people will use and an understanding of the wired data network that should be installed during construction. <span class="font-bold text-gc-yellow">Gtelecom</span> will assist you in delighting your customers by delivering a home/office that is ready to receive and consume the growing range of connected services over multiple devices.</p>
        <p class="mb-4 text-gray-800">As a developer, every decision you make is important – or it could result to wasting time and money. We’ll guide and support you on every step of the way. Together we can plan, design and build a network that gives your customers access to the very latest services offered by the widest range of communications providers.</p>
      </div>
    </section>

  </Layout>
</template>

<script>
import PageTitleBar from '~/components/PageTitleBar.vue'

export default {
  metaInfo: {
    title: 'Our Business'
  },
  components: {
    PageTitleBar
  },
  data () {
    return {
      title: 'Our Business'
    }
  }
}
</script>

<style>
.gc-principles {
display: grid;
grid-template-columns: 1fr 1fr;
list-style-type: none;
padding: 0;
margin: 0;
}

@media screen and (max-width: 990px) {
.gc-principles {
  grid-template-columns: 1fr;
}
}

@media screen and (max-width: 990px) {
  .gc-principle:nth-child(odd) {
    background-color: #c4993715;
  }
  .gc-principle:nth-child(even) {
    background-color: #00000015;
  }
}

@media screen and (min-width: 991px) {
  .gc-principle:nth-child(3n+1) {
    background-color: #00000015;
  }
  .gc-principle:nth-child(2), .gc-principle:nth-child(3) {
    background-color: #c4993715;
  }
}


</style>


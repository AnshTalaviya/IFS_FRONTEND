import { ArrowForwardOutlined, KeyboardArrowDownOutlined, KeyboardArrowUpOutlined, TaskAltOutlined } from '@mui/icons-material';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const plans = [
    {
        title: 'Quarterly Compounding',
        title2: 'Plan Overview',
        title3: 'Key Benefits',
        title4: 'Eligibility',
        title5: 'Investment Process',
        title6: 'Frequently Asked Questions',
        popular: true,
        que: "How is the quarterly interest calculated?",
        que2: "Can I withdraw my investment before the term ends?",
        que3: "Is there a maximum investment limit?",
        description: 'Our flagship plan with 6% quarterly returns through compounding interest.',
        description2: 'The Quarterly Compounding Plan is our flagship investment solution designed to maximize your returns through the power of compound interest. With a competitive 6% quarterly interest rate, your investment grows exponentially over time.',
        description3: 'The 6% quarterly interest is calculated on the principal amount plus any accumulated interest from previous quarters, creating a compounding effect.',
        description4: 'Yes, early withdrawals are possible after the minimum lock-in period of 3 months, subject to a nominal early withdrawal fee.',
        description5: 'The maximum investment amount is ₹10,00,000 (10 lakhs) per individual investor.',
        features: [
            '6% quarterly compounding returns',
            'Up to 26.25% annual returns',
            'Minimum investment: ₹10,000',
            'Quarterly profit distribution',
            'Reinvestment options available',
        ],
        features2: [
            "Higher returns through compounding",
            "Quarterly profit payouts",
            "Flexible investment duration",
            "No hidden fees or charges",
            "Transparent profit calculation",
        ],
        features3: [
            "Indian residents aged 18 years and above",
            "Valid PAN card and address proof",
            "Active bank account for transactions",
        ],
        features4: [
            "Register and complete KYC verification",
            "Choose your investment amount(min ₹10,000)",
            "Select investment duration(min 3 months)",
            "Make payment through secure gateway",
            "Track your investment growth in dashboard",
        ],
        color: 'bg-white',
        buttonColor: 'bg-teal-900',
        featuresColor: 'text-teal-900',
    },
    {
        title: 'Tree Family Plan',
        title2: 'Plan Overview',
        title3: 'Key Benefits',
        title4: 'Eligibility',
        title5: 'Investment Process',
        title6: 'Frequently Asked Questions',
        popular: true,
        que: "How is the profit distributed among family members?",
        que2: "Can I change my nominated family members?",
        que3: "Do family members need to create their own accounts?",
        description: 'Benefit your family with our unique profit distribution system.',
        description2: 'The Tree Family Plan is our innovative investment solution that allows you to share your investment returns with your family members. This plan follows the same quarterly compounding model but distributes the profits among your designated family members.',
        description3: '70% of the profit goes to the primary investor (Mukhiya), while 30% is distributed equally among the nominated family members (up to 5 members).',
        description4: 'Yes, you can update your nominated family members once every quarter through your dashboard.',
        description5: "No, family members don't need separate accounts. Their details are managed through the primary investor's account.",
        features: [
            '70% profits to main investor',
            '30% to family or dependents',
            'Up to 5 family members',
            'Collective financial growth',
            'Secure generational wealth',
        ],
        features2: [
            "Create financial security for your family",
            "Distribute wealth efficiently",
            "Tax-efficient profit sharing",
            "Teach financial responsibility to family members",
            "Build generational wealth",
        ],
        features3: [
            "Indian residents aged 18 years and above",
            "Valid PAN card and address proof",
            "Active bank account for transactions",
            "Up to 5 family members can be nominated",
        ],
        features4: [
            "Register and complete KYC verification",
            "Add family members with their details",
            "Choose your investment amount(min ₹10,000)",
            "Select investment duration(min 3 months)",
            "Make payment through secure gateway",
            "Track your family's investment growth in dashboard",
        ],
        color: 'bg-white',
        buttonColor: 'bg-yellow-600',
        featuresColor: 'text-yellow-600',
    },
    {
        title: 'Systematic Investment Plan',
        title2: 'Plan Overview',
        title3: 'Key Benefits',
        title4: 'Eligibility',
        title5: 'Investment Process',
        title6: 'Frequently Asked Questions',
        popular: true,
        que: "Can I change my SIP amount after starting?",
        que2: "What happens if I miss a SIP payment?",
        que3: "Is there a lock-in period for SIP investments?",
        description: 'A structured approach to long-term wealth creation with fixed returns.',
        description2: 'The Systematic Investment Plan (SIP) is designed for investors who prefer a disciplined approach to wealth creation. This plan allows you to invest a fixed amount regularly (monthly or quarterly) and benefit from the power of compounding over time.',
        description3: 'Yes, you can increase or decrease your SIP amount with a 30-day notice period.',
        description4: 'If you miss a payment, your SIP continues with the next scheduled payment. However, consistent missed payments may affect your overall returns.',
        description5: 'Yes, there is a minimum lock-in period of 6 months for SIP investments.',
        features: [
            'Risk-free investment',
            'Fixed return ratio',
            'Monthly investment options',
            'Flexible investment amounts',
            'Long-term wealth creation',
        ],
        features2: [
            "Disciplined investment approach",
            "Rupee cost averaging",
            "Lower investment entry point (₹5,000)",
            "Flexibility to increase investment amount",
            "Ideal for long-term financial goals",
        ],
        features3: [
            "Indian residents aged 18 years and above",
            "Valid PAN card and address proof",
            "Active bank account for auto-debit",
        ],
        features4: [
            "Register and complete KYC verification",
            "Set up your SIP amount(min ₹5,000)",
            "Choose frequency(monthly or quarterly)",
            "Set up auto - debit mandate",
            "Track your SIP growth in dashboard",
        ],
        color: 'bg-white',
        buttonColor: 'bg-teal-900',
        featuresColor: 'text-teal-900',
    },
];

function InvestmentPlans() {

    const [activeIndex, setActiveIndex] = useState(0); // default: first card

    return (
        <>
            <div className="max-w-4xl mx-auto">
                {/* Tab Titles */}
                <div className="flex justify-center gap-4 mb-6 flex-wrap">
                    {plans.map((plan, idx) => (
                        <button
                            key={idx}
                            className={`px-4 py-2 rounded font-semibold transition-all duration-200 border 
                            ${idx === activeIndex ? `${plan.buttonColor} text-white` : 'border-gray-300 text-gray-700 bg-white'}
                        `}
                            onClick={() => setActiveIndex(idx)}
                        >
                            {plan.title}
                        </button>
                    ))}
                </div>


                {/* Only Active Card */}
                <div className="transition-all duration-300">
                    <div
                        className={`rounded-xl shadow-md px-6 pt-8 pb-6 ${plans[activeIndex].color} relative transition-transform hover:shadow-2xl hover:scale-[1.025]`}
                        style={{ border: '1.5px solid #e0e7ef' }}
                    >
                        <div className={`absolute top-0 left-0 w-full h-2 ${plans[activeIndex].buttonColor} rounded-t-xl`}></div>

                        <span className="bg-yellow-500 text-white text-xs absolute top-3 right-2 px-3 py-1 rounded-full shadow font-bold tracking-wide border border-yellow-400">
                            <span className="drop-shadow">POPULAR</span>
                        </span>

                        <h3 className={`${plans[activeIndex].featuresColor} text-2xl font-bold mb-4`}>{plans[activeIndex].title}</h3>
                        <p className="text-gray-700 mb-6">{plans[activeIndex].description}</p>

                        {/* Features */}
                        <ul className="text-gray-700 space-y-3 mb-8">
                            {plans[activeIndex].features.map((feat, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <TaskAltOutlined className={`${plans[activeIndex].featuresColor}`} /> <span>{feat}</span>
                                </li>
                            ))}
                        </ul>

                        <hr className='my-6' />

                        <div>
                            <h3 className={"text - lg font-bold mb-4"}>{plans[activeIndex].title2}</h3>
                        <p className="text-gray-700 mb-6 text-base">{plans[activeIndex].description2}</p>
                    </div>
                    <div className="text-sm text-dark mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <h3 className={"text - lg font-bold mb-4"}>{plans[activeIndex].title3}</h3>
                        <ul className="text-gray-700 space-y-3 mb-8">
                            {plans[activeIndex].features2.map((feat, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <TaskAltOutlined className={`${plans[activeIndex].featuresColor} text-base`} /> <span className='text-base'>{feat}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className={"text - lg font-bold mb-4"}>{plans[activeIndex].title4}</h3>
                    <ul className="text-gray-700 space-y-3 mb-8">
                        {plans[activeIndex].features3.map((feat, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <TaskAltOutlined className={`${plans[activeIndex].featuresColor} text-base`} /> <span className='text-base'>{feat}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className={"text - lg font-bold mb-4"}>{plans[activeIndex].title5}</h3>
                <ul className="text-gray-700 space-y-3 mb-8">
                    {plans[activeIndex].features4.map((feat, i) => (
                        <li key={i} className="flex items-center gap-3">
                            <span className="flex items-center justify-center bg-gray-100 text-black font-bold rounded-full w-7 h-7 text-base shadow">{i + 1}.</span>
                            <span className='text-base'>{feat}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className={"text - lg font-bold mb-6"}>{plans[activeIndex].title6}</h3>
                <p className="text-dark mb-2 text-base font-semibold">{plans[activeIndex].que}</p>
                <p className="text-gray-700 mb-4 text-base">{plans[activeIndex].description3}</p>
                <p className="text-dark mb-2 text-base font-semibold">{plans[activeIndex].que2}</p>
                <p className="text-gray-700 mb-4 text-base">{plans[activeIndex].description4}</p>
                <p className="text-dark mb-2 text-base font-semibold">{plans[activeIndex].que3}</p>
                <p className="text-gray-700 mb-4 text-base">{plans[activeIndex].description5}</p>
            </div >
        </div >

            <div className='flex flex-col items-center'>
                <button
                    className={`${plans[activeIndex].buttonColor} text-white mt-3 px-4 py-2 rounded w-3/4 font-semibold shadow transition-all duration-200 hover:${plans[activeIndex].buttonhover} hover:scale-105`}
                >
                    Start Investing <ArrowForwardOutlined />
                </button>
            </div>
                    </div >

                </div >
            </div >

        <section className='py-16'>
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-6">
                    Calculate Your Returns
                </h2>
                <p className="text-gray-600 mb-8">
                    Use our investment calculator to see how your money can grow with MSV Infotech's quarterly compounding model.
                </p>
                <Link
                    to="/calculator"
                    onClick={() => setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50)} // small delay to ensure page is ready
                    className="border hover:scale-105 hover:bg-teal-800 px-6 py-2 rounded-md font-semibold bg-teal-900 text-white transition inline-flex items-center justify-center gap-2"
                >
                    Try Our Calculator
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </section>
        </>

    );

}

export default InvestmentPlans
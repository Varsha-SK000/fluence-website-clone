// import React from "react";

// export default function BuildSection() {
//     return (
//         <section className="py-[100px] bg-white">
//             <div className="max-w-[1100px] mx-auto px-6">

//                 {/* HEADER */}
//                 <div className="text-center mb-[60px]">
//                     <span
//                         className="inline-flex items-center px-4 py-1 rounded-full border shadow-sm"
//                         style={{
//                             color: "rgb(27, 12, 37)",
//                             borderColor: "rgb(213, 136, 251)", // matches framer purple-ish border
//                             backgroundColor: "white",
//                             lineHeight: "1",
//                             fontWeight: 500,
//                             fontSize: "13px",
//                         }}
//                     >
//                         Business & Solution
//                     </span>

//                     <h2 className="text-[42px] font-bold mt-4">
//                         Build, Deploy and Scale AI Workforce
//                     </h2>

//                     <p className="text-gray-500 mt-4 max-w-[520px] mx-auto">
//                         Fluence AI helps automate workflows and scale operations.
//                     </p>
//                 </div>

//                 {/* 🧠 TRUE 2x2 GRID */}
//                 <div className="grid grid-cols-2 grid-rows-2 gap-5">

//                     {/* 🟣 CARD 1 (2:1 HERO TALL) */}
//                     <div className="rounded-2xl overflow-hidden border shadow-sm flex flex-col">

//                         <div className="h-[320px] flex items-center justify-center bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-500">

//                             {/* YOUR CONTENT BOX */}
//                             <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-4 w-[220px] flex items-center justify-center">

//                                 <img
//                                     src="https://framerusercontent.com/images/qGFZyeulSY1zsGefM4aAo6C78.png?width=678&height=501"
//                                     alt="adaptive"
//                                     className="w-full h-auto object-contain rounded-lg"
//                                 />

//                             </div>

//                         </div>

//                         <div className="p-5">
//                             <h3 className="font-bold">Adaptive Learning</h3>
//                             <p className="text-gray-500 text-sm">
//                                 AI evolves with your data.
//                             </p>
//                         </div>

//                     </div>

//                     {/* 🟦 CARD 2 (3:1 WIDE FEEL) */}
//                     <div className="rounded-2xl overflow-hidden border shadow-sm flex flex-col">

//                         <div className="h-[320px] flex items-center justify-center bg-gradient-to-br from-fuchsia-500 via-purple-600 to-indigo-700">

//                             {/* IMAGE CARD */}
//                             <div className="bg-white rounded-xl p-4 w-[260px] shadow flex items-center justify-center">

//                                 <img
//                                     src="https://framerusercontent.com/images/L9fccHnZ9UNo9nSWJ1myp0Q0.png?scale-down-to=1024&width=1260&height=668"
//                                     className="w-full h-auto object-contain"
//                                     alt="analytics"
//                                 />

//                             </div>

//                         </div>

//                         <div className="p-5">
//                             <h3 className="font-bold">Smart Automation</h3>
//                             <p className="text-gray-500 text-sm">
//                                 AI workflows simplify operations.
//                             </p>
//                         </div>

//                     </div>

//                     {/* 🟪 CARD 3 (3:1 EMAIL STYLE) */}
//                     <div className="rounded-2xl overflow-hidden border shadow-sm flex flex-col">

//                         <div className="h-[320px] relative bg-gradient-to-br from-purple-500 via-pink-500 to-fuchsia-600 p-5">

//                             <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 text-white text-xs">
//                                 From: agent@flentic.ai <br />
//                                 To: julia@growthco.com <br />
//                                 Subject: AI Outreach
//                             </div>

//                             <div className="absolute bottom-5 left-5 bg-white rounded-lg px-3 py-2 text-xs shadow">
//                                 Schedule Call
//                             </div>

//                         </div>

//                         <div className="p-5">
//                             <h3 className="font-bold">Outbound Outreach</h3>
//                             <p className="text-gray-500 text-sm">
//                                 AI-driven personalized campaigns.
//                             </p>
//                         </div>

//                     </div>

//                     {/* 🟡 CARD 4 (2:1 IMAGE HERO) */}
//                     <div className="rounded-2xl overflow-hidden border shadow-sm flex flex-col">

//                         <div className="h-[320px]">
//                             <img
//                                 src="https://framerusercontent.com/images/fWv8t6fM6yzVYNiHLxm6JJ0QQ.png"
//                                 className="w-full h-full object-cover"
//                                 alt="analytics"
//                             />
//                         </div>

//                         <div className="p-5">
//                             <h3 className="font-bold">Predictive Analytics</h3>
//                             <p className="text-gray-500 text-sm">
//                                 Forecast trends with AI models.
//                             </p>
//                         </div>

//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// }

import React from "react";

const features = [
    {
        title: "Adaptive Learning",
        description: "AI evolves with your data.",
        image:
            "https://framerusercontent.com/images/qGFZyeulSY1zsGefM4aAo6C78.png?width=678&height=501"
    },
    {
        title: "Smart Automation",
        description: "AI workflows simplify operations.",
        image:
            "https://framerusercontent.com/images/L9fccHnZ9UNo9nSWJ1myp0Q0.png?scale-down-to=1024&width=1260&height=698",
    },
    {
        title: "Outbound Outreach",
        description: "AI-driven personalized campaigns.",
        image:
            "https://framerusercontent.com/images/L9fccHnZ9UNo9nSWJ1myp0Q0.png?scale-down-to=1024&width=1260&height=668"
    },
    {
        title: "Predictive Analytics",
        description: "Forecast trends with AI models.",
        image:
            "https://framerusercontent.com/images/fWv8t6fM6yzVYNiHLxm6JJ0QQ.png?width=561&height=501",
    },
];

export default function BuildSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">

                {/* HEADER (same style as Features) */}
                <div className="text-center mb-16">
                    <span
                        className="inline-flex items-center px-4 py-1 rounded-full border shadow-sm"
                        style={{
                            color: "rgb(27, 12, 37)",
                            borderColor: "rgb(213, 136, 251)",
                            backgroundColor: "white",
                            fontWeight: 500,
                            fontSize: "13px",
                        }}
                    >
                        Business & Solution
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold text-black mt-4">
                        Build, Deploy and Scale AI Workforce
                    </h2>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
                        Fluence AI helps automate workflows and scale operations.
                    </p>
                </div>

                {/* SAME GRID AS FEATURES */}
                <div className="grid md:grid-cols-2 gap-12">

                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg overflow-hidden"
                        >

                            {/* IMAGE (same as Features) */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-64 object-cover"
                            />

                            {/* TEXT */}
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-black mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600">
                                    {item.description}
                                </p>
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
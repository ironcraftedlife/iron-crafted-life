const productData = [
            { 
                name: "Fish Oil", img: "images/fishoilimage.jpg", buy: "https://amzn.to/495aic2", category: "supplements",
                what: "A supplement rich in EPA and DHA fatty acids.",
                benefits: "Heart health, reduces inflammation, supports brain function, improves triglycerides.",
                dosage: "1000–3000 mg EPA + DHA/day.",
                sources: "Salmon, sardines, mackerel, anchovies.",
                when: "With meals.",
                practices: "Choose high EPA+DHA content and store in the fridge.",
                deficiency: "Dry skin, joint inflammation, brain fog."
            },
            { 
                name: "Vitamin D3", img: "images/vitamind3.jpg", buy: "https://amzn.to/49rUUFC", category: "supplements",
                what: "A fat-soluble vitamin acting like a hormone regulating calcium and immune function.",
                benefits: "Bone health, immune support, hormone balance, mood improvement.",
                dosage: "1000–2000 IU/day general; 3000–5000 IU/day if deficient.",
                sources: "Sunlight exposure, fatty fish, egg yolks, fortified milk.",
                when: "Morning or lunch with fat.",
                practices: "Combine with Vitamin K2.",
                deficiency: "Fatigue, weak bones, depression, frequent illness."
            },
            { 
                name: "Zinc", img: "images/zinc.jpg", buy: "https://amzn.to/44V2KWK", category: "supplements",
                what: "A trace mineral essential for immune function, hormone production, and wound healing.",
                benefits: "Boosts immune system, supports testosterone production, improves skin health.",
                dosage: "Supplements typically 15–30 mg/day.",
                sources: "Oysters, red meat, pumpkin seeds, chickpeas, cashews.",
                when: "Morning or afternoon with food.",
                practices: "Avoid exceeding 40 mg/day long term. Take away from calcium or iron.",
                deficiency: "Frequent infections, hair loss, loss of taste or smell, slow wound healing."
            },
            { 
                name: "Magnesium", img: "images/magnesium.jpg", buy: "https://amzn.to/4btTY4D", category: "supplements",
                what: "An essential mineral involved in 300+ biochemical reactions.",
                benefits: "Improves sleep, reduces muscle cramps, supports heart health, helps manage stress.",
                dosage: "Men: 400–420 mg/day, Women: 310–320 mg/day.",
                sources: "Pumpkin seeds, almonds, spinach, dark chocolate, avocados.",
                when: "Night before bed.",
                practices: "Take with food if stomach is sensitive. Avoid taking with high-dose calcium.",
                deficiency: "Muscle cramps, poor sleep, anxiety, fatigue, irregular heartbeat."
            },
            { 
                name: "Vitamin B12", img: "images/vitaminb12.jpg", buy: "https://amzn.to/4snSj86", category: "supplements",
                what: "A water-soluble vitamin essential for nerve function and red blood cell formation.",
                benefits: "Prevents anemia, supports brain function, improves energy metabolism.",
                dosage: "2.4 mcg/day (supplements often 500–1000 mcg).",
                sources: "Meat, eggs, dairy, fish.",
                when: "Morning.",
                practices: "Sublingual tablets absorb well; important for vegetarians.",
                deficiency: "Fatigue, tingling in hands/feet, brain fog, pale skin."
            },
            { 
                name: "Collagen", img: "images/collagen.jpg", buy: "https://amzn.to/3NiXiaH", category: "supplements",
                what: "The most abundant protein in the body supporting connective tissue.",
                benefits: "Improves skin elasticity, reduces joint pain, strengthens hair and nails.",
                dosage: "5–10 g/day.",
                sources: "Bone broth, chicken skin, fish skin.",
                when: "Morning or post-workout.",
                practices: "Take with Vitamin C for better absorption. Hydrolyzed peptides absorb best.",
                deficiency: "Joint pain, wrinkling skin, weak nails, slow injury recovery."
            },
            { 
                name: "Multivitamin", img: "images/multivit.jpg", buy: "https://amzn.to/3Ym3fWj", category: "supplements",
                what: "A powerful antioxidant supporting immunity and collagen production.",
                benefits: "Boosts immune function, improves skin, enhances iron absorption.",
                dosage: "75–90 mg/day (supplement range 500–1000 mg).",
                sources: "Oranges, amla, kiwi, bell peppers, strawberries.",
                when: "Morning or afternoon.",
                practices: "Split doses if above 500 mg.",
                deficiency: "Weak immunity, bleeding gums, slow wound healing, fatigue."
            },
            { 
                name: "D3 + K2", img: "images/vitamind3.jpg", buy: "https://amzn.to/4bI3Ngt", category: "supplements",
                what: "Vitamin K directs calcium into bones instead of arteries.",
                benefits: "Bone strength, cardiovascular health, works with Vitamin D3.",
                dosage: "90–120 mcg/day.",
                sources: "Natto, kale, spinach, cheese.",
                when: "With meals containing fat.",
                practices: "Combine with Vitamin D3.",
                deficiency: "Easy bruising, bleeding gums, weak bones."
            },
            { 
                name: "F Gear Platoon 46L", img: "images/fgearbagimage.jpg", buy: "https://amzn.to/4bcXHou", category: "accessories",
                what: "High capacity gear storage.",
                benefits: "Organized storage for gym and travel.",
                dosage: "N/A",
                sources: "N/A",
                when: "Daily use.",
                practices: "Use compression straps.",
                deficiency: "N/A"
            },

            // ── NEW FRIDO PRODUCTS ──────────────────────────────────────────
            {
                name: "Frido Posture Corrector",
                img: "images/frido-posture-corrector.webp",
                buy: "https://myfrido.com/products/frido-orthotics-posture-corrector?variant=50903178641689",
                category: "accessories",
                what: "A slim, lightweight (115g) posture corrector that gently pulls your shoulders back into proper alignment. Invisible under regular clothing.",
                benefits: "Corrects slouching, trains muscles to maintain proper posture, reduces upper back and shoulder discomfort, helps prevent early signs of kyphosis. Use code ANMOLWA for an additional 15% discount.",
                dosage: "Start with 15–20 min/day, gradually increase to 1–2 hours/day as tolerated.",
                sources: "N/A",
                when: "During work, commuting, studying, or any prolonged sitting. Wear over thin base clothing.",
                practices: "Do not wear directly on bare skin. Consistent daily use over 2–3 weeks leads to lasting posture improvements. Available in S, M, L — measure chest to find your size.",
                deficiency: "Poor posture signs: rounded shoulders, forward head, upper back tightness, frequent neck/shoulder pain."
            },
            {
                name: "Frido x HRX Barefoot Sock Shoe Pro",
                img: "images/frido-sock-shoe.webp",
                buy: "https://myfrido.com/products/frido-x-hrx-barefoot-sock-shoe-pro?variant=51641403670809",
                category: "accessories",
                what: "A zero-drop barefoot sock shoe with a wide toe box, split-toe design, and 3mm GripFlex rubber sole. Collaboration with HRX.",
                benefits: "Encourages natural foot movement, improves balance and stability, reduces strain on knees, hips, and lower back. Lightweight and foldable for travel. Use code ANMOLWA for an additional 15% discount.",
                dosage: "N/A",
                sources: "N/A",
                when: "Workouts, walking, gym sessions, office, or home use. Ideal for short runs and warm-ups — not for long-distance road running.",
                practices: "Hand wash with cold water and mild detergent. Air dry in shade. Expect ~600 km lifespan on non-abrasive surfaces. Black granules from the sole initially are normal.",
                deficiency: "Weak foot arches, poor balance, knee/hip misalignment, and foot fatigue can result from years of wearing overly cushioned or narrow-toed shoes."
            },
            {
                name: "Frido Cloud Comfort Slippers",
                img: "images/frido-slippers.webp",
                buy: "https://myfrido.com/products/frido-cloud-comfort-arch-support-slippers?variant=51352664703257",
                category: "accessories",
                what: "Arch support slippers with EVA foam cushioning, anti-skid rubber herringbone sole, and thermal insulation. Minimal, versatile design for daily wear.",
                benefits: "Relieves foot pain and fatigue, supports natural foot alignment, reduces stress on knees/hips/back, prevents slipping on wet floors, noise-free walking. Use code ANMOLWA for an additional 15% discount.",
                dosage: "N/A",
                sources: "N/A",
                when: "Daily indoor use at home, during travel, or casual outings.",
                practices: "Wipe with a soft damp cloth to clean. Air dry naturally. If you have wide feet, size up for best comfort. Available in sizes 3–12 UK.",
                deficiency: "Flat feet, arch pain, heel strain, and poor posture can worsen without proper footwear support."
            },
            {
                name: "Frido Ultimate Car Comfort Bundle",
                img: "images/frido-car-bundle.webp",
                buy: "https://myfrido.com/products/ultimate-car-comfort-bundle?variant=50107509637401",
                category: "accessories",
                what: "A 3-piece car comfort bundle: Ultimate Car Neck Rest Pillow, Ultimate Car Back Rest Pillow, and Ultimate Car Wedge Seat Cushion — designed for long drives and daily commutes.",
                benefits: "Prevents neck aches, keeps back upright and supported, eases hip pressure, reduces overall body fatigue during long drives. Use code ANMOLWA for an additional 15% discount.",
                dosage: "N/A",
                sources: "N/A",
                when: "Any car ride — daily commutes, road trips, or long-distance travel.",
                practices: "Position neck pillow at cervical spine level, back rest against lumbar region, and wedge cushion flat on the seat for full postural support.",
                deficiency: "Poor car ergonomics leads to chronic neck stiffness, lower back pain, hip tightness, and fatigue — especially for frequent drivers."
            },
            {
                name: "Frido Knee Support Wrap",
                img: "images/frido-knee-wrap.webp",
                buy: "https://myfrido.com/products/frido-orthotics-knee-support-wrap",
                category: "accessories",
                what: "An open-patella knee wrap with metal side stabilizers, adjustable compression strap, and breathable mesh fabric. Universal fit — works on both left and right knee.",
                benefits: "Reduces kneecap pressure, stabilizes the joint, prevents ligament strain, improves comfort while walking or exercising. Fits over or under clothing discreetly. Use code ANMOLWA for an additional 15% discount.",
                dosage: "N/A",
                sources: "N/A",
                when: "During workouts, sports, walking, climbing stairs, or everyday use if you have knee discomfort. Suitable for post-injury recovery and older adults with weak knees.",
                practices: "Tighten or loosen the compression strap based on activity level. Hand wash in cold water, air dry flat. Available in M, L, XL, XXL.",
                deficiency: "Weak or unsupported knees can lead to increased risk of ligament injury, chronic pain, poor stability during exercise, and difficulty with daily movement."
            }
        ];

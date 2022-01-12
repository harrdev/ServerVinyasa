const Asana = require('../app/models/asana')
const mongoose = require('mongoose')
const mongooseBaseName = 'asanas'
mongoose.connect(`mongodb://127.0.0.1:27017/${mongooseBaseName}-development`)

const asanas = [
    new Asana({
        englishName: "Wheel Pose",
        sanskritName: "Urdhva Dhanurasana",
        description: "Good relief for back pain, helps stretch the lungs and chest, and strengthens the legs, abdomen, buttocks, arms, and wrists. Helps improve blood circulation to the entire body.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/51.Wheel-pose-Urdhva-Dhanurasana-dec21.jpg",
        difficulty: "intermediate"
    }),
    new Asana({
        englishName: "Wild Thing",
        sanskritName: "Camatkarasana",
        description: "Opens up chest, lung, and shoulder areas as well as the front of legs and hip flexors. Also builds strength in the shoulders and upper back.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/31.Wild-thing-pose-Camatkarasana-dec21.jpg",
        difficulty: "beginner"
    }),
    new Asana({
        englishName: "Warrior Three",
        sanskritName: "Virabhadrasana Three",
        description: "The Warrior III pose helps open the chest and hips and helps stretch and strengthen the groin, thighs, calves, and ankles.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/44.Warrior-III-pose-Virabhadrasana-III-dec21.jpg",
        difficulty: "intermediate"
    }),
    new Asana({
        englishName: "Warrior Two",
        sanskritName: "Virabhadrasana Two",
        description: "Helps to strengthen the shoulders, arms, and back, stretches, and strengthens the thighs, calves, and ankles. Calms the mind, helps promote balance, and improves respiration and circulation.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/43.Warrior-II-Pose-Virabhadrasana-II-dec21.jpg",
        difficulty: "intermediate"
    }),
    new Asana({
        englishName: "Warrior One",
        sanskritName: "Virabhadrasana One",
        description: "Helps to strengthen the shoulders, arms, and back, stretches and strengthens the thighs, calves, and ankles, opens the chest and hips, and gently stretches the shoulders, navel, and neck.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/38.Warrior-1-pose-Virabhadrasana-I-dec21.jpg",
        difficulty: "intermediate"
    }),
    new Asana({
        englishName: "Upward-Facing Dog",
        sanskritName: "Urdhva Mukha Svsnssana",
        description: "Like the Cobra or Sphinx Pose, Upward-facing Dog Pose lengthens the abdominal muscles, strengthens the spine, and firms the buttocks while stretching and opening the chest, lungs, and shoulders. Upward-facing Dog is slightly more challenging, however, because unlike the Cobra or Sphinx pose, you actually lift your pelvic bones into the air. It is the 9th pose in the Sun Salutation.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/29.Upward-facing-dog-Urdhva-Mukha-Svanasana-dec21.jpg",
        difficulty: "beginner"
    }),
    new Asana({
        englishName: "Triangle Pose",
        sanskritName: "Trikonasana",
        description: "The Triangle Pose is one of the most basic yoga poses that offers dozens of variations. In fact, no two sources often agree on the proper way to do a Triangle Pose or its many variations. Triangle Pose strengthens the ankles, legs, thighs, and feet as well as the core.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/Triangle-pose-Trikonasana-dec21.jpg",
        difficulty: "beginner"
    }),
    new Asana({
        englishName: "Tree Pose",
        sanskritName: "Vrksasana",
        description: "The tree pose helps to improve balance and increase concentration and focus. It can help open the hips and increase strength in the calves, ankles, thighs, and spine. It can also help reduce flat feet and provide relief from sciatica as well as lengthening the spine.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/55.Tree-pose-Vrksasana-dec21.jpg",
        difficulty: "intermediate"
    }),
    new Asana({
        englishName: "Side Splits",
        sanskritName: "Upavistha Konasana",
        description: "The side splits pose helps relax and calm the brain. It can help strengthen the spinal cord and improve sciatica. The side splits also activates core muscles",
        imageUrl: "https://image.freepik.com/free-photo/woman-doing-side-split_23-2148258923.jpg",
        difficulty: "intermediate"
    }),
    new Asana({
        englishName: "Crescent Moon Pose",
        sanskritName: "Ashta Chandrasana",
        description: "The crescent moon pose helps stretch the hips and shoulders. It helps muscle endurance and opens the chest up. Crescent moon also helps stimulate mental focus and relieves symptoms of sciatica",
        imageUrl: "data:image/jpeg;base64,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",
        difficulty: "beginner"
    }),
    new Asana({
        englishName: "Standing Forward Bend",
        sanskritName: "Uttanasana",
        description: "The third pose in a basic Sun Salutation, the Standing Forward Bend stretches the hamstrings and calves while strengthening the thighs, can also stimulate the liver and kidneys, which can help improve digestion.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/Standing-forward-bend-yoga-pose-dec21.jpg",
        difficulty: "beginner"
    }),
    new Asana({
        englishName: "Garland Pose (Squat)",
        sanskritName: "Malasana",
        description: "Strengthens the ankles, groin, and back torso while toning the abdomen.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/25.Garland-pose-Malasana-dec21.jpg",
        difficulty: "beginner"
    }),
    new Asana({
        englishName: "Monkey Pose (Splits)",
        sanskritName: "Hanumanasana",
        description: "Strengthens muscles in the thighs, hamstrings, groin area, and pelvic floor. Stretches the chest, thighs, arms, shoulders, and back. Increases energy and positive thoughts and activates the thymus gland. Increases overall flexibility.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/42.Monkey-pose-Hanumanasana-dec21.jpg",
        difficulty: "intermediate"
    }),
    new Asana({
        englishName: "Feathered Peacock Pose",
        sanskritName: "Pincha Mayurasana",
        description: "Opens the back and shoulders, increases balance, proprioception, and overall blood circulation. Strengthens the arms, core, back, and shoulders while stretching the neck, thorax, navel, and shoulders.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/83.Feathered-peacock-stand-pose-Pincha-Mayurasana-dec21.jpg",
        difficulty: "advanced"
    }),
    new Asana({
        englishName: "Scorpion Pose",
        sanskritName: "Vrschikasana",
        description: "Increases focus and concentration. Strengthens the thighs, legs, forearms, and shoulders as well as the vertebral column, torso, back, and legs. Stretches the chest, hip flexors, and shoulders stimulate and tone abdominal muscles, and improves flexibility to the entire body.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/84.Scorpion-pose-Vrschikasana-dec21.jpg",
        difficulty: "advanced"
    }),
    new Asana({
        englishName: "Firefly Pose",
        sanskritName: "Tittibhasana",
        description: "Stretches the back, torso, and inner groin area. Strengthens the wrists and arms, tones the belly, and improves balance and concentration.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/85.Firefly-pose-Tittibhasana-dec21.jpg",
        difficulty: "advanced"
    }),
    new Asana({
        englishName: "Bird of Paradise Pose",
        sanskritName: "Svarga Dvidasana",
        description: "Strengthens the thigh, leg, ankle, and knee. tones the legs and improves balance. Opens the hips and helps to open the hamstrings and groin.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/86.Bird-of-paradise-pose-Svarga-Dvidasana-dec21.jpg",
        difficulty: "advanced"
    }),
    new Asana({
        englishName: "Peacock Pose",
        sanskritName: "Mayurasana",
        description: "Stimulates the intestines, spleen, liver, pancreas, kidneys, and stomach. Tones up the abdominal portion of the body and strengthens the lungs, hands, legs, back torso, shoulders, forearms, wrists, elbows, and neck bones. Increases sexual vitality and energy and helps to reduce constipation, indigestion, and diabetes.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/87.Peacock-pose-Mayurasana-dec21.jpg",
        difficulty: "advanced"
    }),
    new Asana({
        englishName: "One-Legged King Pigeon Pose II",
        sanskritName: "Eka Pada Rajakapotasana II",
        description: "Strengthens the back and relieves back problems such as sciatica. Increases flexibility and stretches the thighs, groin, abdomen, chest, shoulders, and neck. Stimulates the abdominal organs and can help solve urinary disorders by increasing circulation to that region.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/88.One-Legged-King-Pigeon-Pose-II-dec21.jpg",
        difficulty: "advanced"
    }),
    new Asana({
        englishName: "Little Thunderbolt Pose",
        sanskritName: "Laghu Vajrasana",
        description: "Opens and widens the throat, quadriceps, and chest, stretches, and increases flexibility in the spine and back. Strengthens the chest, shoulders, and abdominal region. Tones the pelvic organs, limbs, and thighs.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/89.Little-thunderbolt-pose-Laghu-Vajrasana-dec21.jpg",
        difficulty: "advanced"
    }),
    new Asana({
        englishName: "One-Legged Crane Pose",
        sanskritName: "Eka pada bakasana",
        description: "Similar to the Eka Pada Koundiyanasana I the Eka Pada Bakasana also reduces fat in the abdomen, strengthens the shoulders, wrists, and arms, and improves overall body strength. It also requires intense concentration which helps to increase focus and build confidence. Do not try this pose until you have fully mastered the Crane Pose.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/93.One-legged-crane-pose-Eka-pada-bakasana-dec21.jpg",
        difficulty: "advanced"
    }),
    new Asana({
        englishName: "Upward-facing Two-Footed Staff Pose",
        sanskritName: "Dwi Pada Viparita Dandasana",
        description: "opens the chest, calms the body and mind, stretch the entire front body. Reduces fat in the abdominal area and can reduce uterine issues in women. It is particularly useful for keeping women’s anatomy healthy and gives them a good shape.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/95.Upward-facing-two-foot-staff-pose-Dwi-Pada-Viparita-Dandasana-dec21.jpg",
        difficulty: "advanced"
    }),
    new Asana({
        englishName: "Eight Angle Pose",
        sanskritName: "Astavakrasana",
        description: "Improves balance, tones thighs, and abdominals, strengthens the wrists, arms, shoulders, and upper back. Increases confidence",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/97.Eight-angle-pose-Astavakrasana-dec21.jpg",
        difficulty: "advanced"
    }),
    new Asana({
        englishName: "Sage Half Bound Lotus Pose",
        sanskritName: "Kasyapasana",
        description: "Builds overall body strength, increases balance and endurance, and opens hips.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/Sage-Half-Bound-Lotus-Pose-Kasyapasana-dec21.jpg",
        difficulty: "advanced"
    }),
    new Asana({
        englishName: "Shoulder Pressing Pose",
        sanskritName: "Bhujapidasana",
        description: "Strengthens the shoulders, abdomen, arms, and thighs. Improves balance and focus and can stimulate the thyroid and help reduce anxiety and stress.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/98.Shoulder-pressing-pose-Bhujapidasana-dec21.jpg",
        difficulty: "advanced"
    }),
    new Asana({
        englishName: "Boat Pose",
        sanskritName: "Paripurna Navasana",
        description: "The Full Boat Pose provides all the same benefits as Half Boat Pose, but requires greater core strength. When you have significantly mastered, the Half Boat Pose, you can move into Full Boat Pose",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/68.Boat-pose-Paripurna-Navasana-dec21.jpg",
        difficulty: "Intermediate"
    }),
    new Asana({
        englishName: "Half-Boat Pose",
        sanskritName: "Ardha Navasana",
        description: "Tones muscles and increases overall body strength. Improves balance, strengthens the spine, and increases confidence. Stimulates the Thyroid gland, which helps to regulate the menstrual cycle, and tones the kidneys which helps improve digestion.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/67.Low-boat-pose-Ardha-Navasana-dec21.jpg",
        difficulty: "Intermediate"
    }),
    new Asana({
        englishName: "Bow Pose",
        sanskritName: "Dhanurasana",
        description: "Stimulates the function of the kidney and liver and massages the abdominal organs, which can help relieve constipation. Strengthens and gives flexibility to the back muscles. Strengthens the ankles, thighs, groins, and chest and relieves back pain. Helps to shape the body and improves posture.Opens up the chest, neck, and shoulders and tones the leg and arm muscles.Improves core strength.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/50.Bow-Pose-Dhanurasana-dec21.jpg",
        difficulty: "Intermediate"
    }),
    new Asana({
        englishName: "Bridge Pose",
        sanskritName: "Sethu Bandha Sarvangasana",
        description: "Strengthens the back, buttocks, and hamstrings. Opens chest and hips and stretches the neck, spine, chest, and hips. Helps relieve back pain, improves digestion, and can help relieve headaches. Improves blood circulation and calms the brain and nervous system.Great beginning pose to help create spinal flexibility for more challenging backbend poses.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/24.Bridge-yoga-pose-Sethu-Bandha-Sarvangasana-dec21.jpg",
        difficulty: "Beginner"
    }),
    new Asana({
        englishName: "Butterfly Pose",
        sanskritName: "Baddha Konasana",
        description: "The bound angle pose helps improve flexibility in knees, groins, and the inner thigh. It is also beneficial for helping to relieve menstrual cramps and can help ease delivery for pregnant women. It also opens the chest, hips, and lower back.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvbyNJhakjGvI2vxqCrlKrxgavmk_mxzdKMA&usqp=CAU",
        difficulty: "beginner"
    }),
    new Asana({
        englishName: "Camel Pose",
        sanskritName: "Ustrasana",
        description: "Helps improve flexibility in the spine, which helps avoid lower back pain problems. This yoga asana opens and stretches the hips and chest, which also helps increase oxygen intake and strengthens the arms and thighs.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/80.Camel-Pose-Ustrasana-dec21.jpg",
        difficulty: "intermediate"
    }),
    new Asana({
        englishName: "Cat Pose",
        sanskritName: "Marjaryasana",
        description: "Both Cow Pose and Cat Pose are two of the simplest and easiest beginner yoga poses. Together, they provide an excellent spinal stretch, which can prevent back pain, help maintain good posture and create a healthy spine. They are a great part of an evening or morning routine to help loosen you up in the morning or relax you and prepare you for sleep at night.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/Cat-pose-Marjariasana-dec21.jpg",
        difficulty: "beginner"
    }),
    new Asana({
        englishName: "Cow Pose",
        sanskritName: "Bitilasana",
        description: "Work with Cat Pose and Table Pose to offer a complete spinal stretch.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/15.Cow-pose-Bitilasana-dec21.jpg",
        difficulty: "Beginner"
    }),
    new Asana({
        englishName: "Chair Pose",
        sanskritName: "Utkatasana",
        description: "Strengthens thighs and ankles, while toning shoulders, butt, hips, and back. Also stimulates the heart and diaphragm.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/Chair-pose-Utkatasana-yoga-pose-dec21.jpg",
        difficulty: "beginner"
    }),
    new Asana({
        englishName: "Child's Pose",
        sanskritName: "Balasana",
        description: "Gently stretches the lower back, hips, thighs, knees, and ankles; relaxes the spine, shoulders, and neck, and increases blood circulation to the head. This is one of many yoga asanas that is an excellent warm-up or a great way to relax in the evening before bed.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/21.Childs-pose-Balasana-dec21.jpg",
        difficulty: "beginner"
    }),
    new Asana({
        englishName: "Corpse",
        sanskritName: "Sivasana",
        description: "Practicing Corpse Pose before sleeping can promote deep, quality sleep.  Position yourself in bed using the same points of alignment and supports you use for Savasana on your mat. Spend several minutes in the pose relaxing your mind.",
        imageUrl: "https://yogapractice.com/wp-content/uploads/2020/07/Ultimate-Guide-to-Corpse-Pose-Savasana.jpg",
        difficulty: "beginner"
    }),
    new Asana({
        englishName: "Crescent Lunge",
        sanskritName: "Alanasana",
        description: "Crescent Lunge stretches the legs, groin, and hip flexors, while also opening the front torso, chest, and shoulders. It strengthens and tones the thighs, hips, and butt, while the balancing aspect helps to develop flexible stability.",
        imageUrl: "https://www.verywellfit.com/thmb/cuqqzKPU_jPOfDATLsFOClnlbiw=/2500x1667/filters:fill(FFDB5D,1)/Verywell-14-3566690-CrescentLunge-810-5c4b7d00c9e77c00014af99d.jpg",
        difficulty: "beginner"
    }),
    new Asana({
        englishName: "Crow Pose",
        sanskritName: "Bakasana",
        description: "Crow Pose and Crane Pose are often confused or thought of as being the same thing, but they are not. Crow Pose is the starter pose to moving into Crane Pose. Sometimes, newer practitioners may need to practice Crow Pose for some time before they can move into the more challenging Crane Pose.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/64.Crow-pose-Kakasana-dec21.jpg",
        difficulty: "intermediate"
    }),
    new Asana({
        englishName: "Dolphin Pose",
        sanskritName: "Ardha Pincha Mayurasana",
        description: "Calms the brain and helps relieve stress and mild depression. Stretches the shoulders, hamstrings, calves, and arches. Strengthens the arms and legs and helps prevent osteoporosis. Improves digestion and relieves headache, insomnia, back pain, and fatigue.Therapeutic for treating high blood pressure, asthma, flat feet, and sciatica",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/23.Dolphin-pose-Catur-Svanasana-dec21.jpg",
        difficulty: "beginner"
    }),
    new Asana({
        englishName: "Downward-Facing Dog",
        sanskritName: "Adho Mukha Svanasana",
        description: "Downward-facing dog is one of the most well-known yoga asanas, and for good reason. It is an incredibly versatile pose that provides an all-over stretch with arm, leg, and core strengthening. It is also an excellent transition between standing poses and floor poses and between various types of floor poses.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/26.Downward-facing-dog-Adho-Mukha-Svanasana-dec21.jpg",
        difficulty: "beginner"
    }),
    new Asana({
        englishName: "Eagle Pose",
        sanskritName: "Garudasana",
        description: "Strengthens the calves and Ankles, opens the back of the pelvis, creates space between shoulder blades. Improves balance and stretches the hips, ankles, shoulders, thigh, calves, and upper back. Helps alleviate sciatica, low backache, asthma, and rheumatism and improves concentration.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/56.Eagle-Pose-Garudasana-dec21.jpg",
        difficulty: "intermediate"
    }),
    new Asana({
        englishName: "Extended Hand to Toe",
        sanskritName: "Utthita Hasta Padangusthasana",
        description: "Strengthens the legs and ankles and improves the sense of balance.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/Extended-Hand-to-Big-Toe-Pose-Utthita-Hasta-Padangusthasana-dec22.jpg",
        difficulty: "intermediate"
    }),
    new Asana({
        englishName: "Extended Side Angle",
        sanskritName: "Utthita Parsvakonasana",
        description: "Stretches the thighs, knees, ankles, calves, groins, chest, and shoulders and strengthens the quadriceps and ankles. It also stimulates and tones the abdominal organs and lungs, which improves digestion, elimination, metabolism, and breathing capacity.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/Extended-side-angle-yoga-pose-Utthita-Parsvakonasana-dec21.jpg",
        difficulty: "beginner"
    }),
    new Asana({
        englishName: "Standing Forward Bend",
        sanskritName: "Uttanasana",
        description: "The third pose in a basic Sun Salutation, the Standing Forward Bend stretches the hamstrings and calves while strengthening the thighs, can also stimulate the liver and kidneys, which can help improve digestion.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/Standing-forward-bend-yoga-pose-dec21.jpg",
        difficulty: "beginner"
    }),
    new Asana({
        englishName: "Half-Moon Pose",
        sanskritName: "Ardha Chandrasana",
        description: "Improves posture and energizes the body. Expands the chest and shoulders and helps reduce mental stress. Helps improve digestion and is great for relieving menstrual pain, gastritis, fatigue, and anxiety. Reduces lower back pain and provides a good stretch for calves, spine, shoulders, chest, and groin.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/74.Half-moon-pose-Ardha-Chandrasana-dec21.jpg",
        difficulty: "intermediate"
    }),
    new Asana({
        englishName: "Handstand",
        sanskritName: "Adho Mukha Vrksasana",
        description: "Strengthens the arms, shoulders, and core muscles, improves balance and body stability, helps regulate blood circulation throughout the entire body, and can even help relieve depression, stress, and anxiety. Good for stretching the belly and stomach.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/79.Handstand-pose-Adho-Mukha-Vrksasana-dec21.jpg",
        difficulty: "intermediate"
    }),
    new Asana({
        englishName: "Low Lunge",
        sanskritName: "Anjaneyasana",
        description: "This pose stretches the hips, front of the leg, muscles around the knee, intercostal muscles, arms, neck, and chest. This pose strengthens the quadriceps, calves, hamstrings, shoulders, and arms. This asana also engages and strengthens the deep, inner core muscles, which are needed to create stability. The feet and ankles are also stretched and strengthened in the pose, due to the fact that they must support the body from right to left",
        imageUrl: "https://www.yogateket.com/image/original/DSC_9006.jpg",
        difficulty: "beginner"
    }),
    new Asana({
        englishName: "Pigeon Pose",
        sanskritName: "Supta Kapotasana",
        description: "Strengthens the back and relieves back problems such as sciatica. Increases flexibility and stretches the thighs, groins and psoas, abdomen, chest and shoulders, and neck. Opens the chest, hips, and shoulders, stimulates the abdominal organs, and can help solve urinary disorders by increasing circulation to that region.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/53.Pigeon-Pose-Eka-Pada-Rajakapotasana-dec21.jpg",
        difficulty: "beginner"
    }),
    new Asana({
        englishName: "King Pigeon Pose",
        sanskritName: "Eka Pada Rajakapotasana",
        description: "Strengthens the back and relieves back problems such as sciatica. Increases flexibility and stretches the thighs, groins and psoas, abdomen, chest and shoulders, and neck. Opens the chest, hips, and shoulders, stimulates the abdominal organs, and can help solve urinary disorders by increasing circulation to that region.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/54.One-Legged-King-Pigeon-Pose-Eka-Pada-Rajakapotasana-I-dec21.jpg",
        difficulty: "intermediate"
    }),
    new Asana({
        englishName: "Plank",
        sanskritName: "Phalakasana",
        description: "Plank pose is another of the most-used yoga poses and is often borrowed for use in other types of fitness regimens as well. It is a simple pose, but quite effective and can be beneficial for both beginning and advanced practitioners since the longer you hold the pose the more difficult it becomes.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/27.Plank-Pose-Kumbhakasana-dec21.jpg",
        difficulty: "beginner"
    }),
    new Asana({
        englishName: "Plow Pose",
        sanskritName: "Halasana",
        description: "Strengthens the abdominal muscles, helps to make the spinal cord strong and flexible, and stimulates reproductive organs. Also high beneficial for people with diabetes, since it normalizes blood-glucose levels and stimulates the internal organs.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/72.Plow-pose-Halasana-dec21.jpg",
        difficulty: "intermediate"
    }),
    new Asana({
        englishName: "Pyramid",
        sanskritName: "Parsvottanasana",
        description: "Pyramid Pose stretches the spine, shoulders, wrists, hips and hamstrings. It also strengthen the legs and improves posture.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ICRO5AbhnkbIVT_8X8czyhNTVqHDsF7Uow&usqp=CAU",
        difficulty: "beginner"
    }),
    new Asana({
        englishName: "Reverse Warrior",
        sanskritName: "Viparita Virabhadrasana",
        description: "Helps to strengthen the shoulders, arms, and back, opens the chest, stretches, and strengthens the thighs, calves, and ankles. Calms the mind, helps promote balance, and improves respiration and circulation.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/45.Reverse-Warrior-Pose-Viparita-Virabhadrasana-dec21.jpg",
        difficulty: "intermediate"
    }),
    new Asana({
        englishName: "Seated Forward Bend",
        sanskritName: "Paschimottanasana",
        description: "This pose stretches these areas and helps open up your hips. This stretch is excellent for runners who tend to have tight hamstrings. Like many yoga poses, it is also considered to be a calming pose.1 It is said that forward bends can help relieve stress and even improve your mood.",
        imageUrl: "https://47h07141n4wr3s4gyj49ii1d-wpengine.netdna-ssl.com/wp-content/uploads/2019/11/AdobeStock_193776776-e1572640128210.jpeg",
        difficulty: "beginner"
    }),
    new Asana({
        englishName: "Lotus Pose",
        sanskritName: "Padmasana",
        description: "The lotus pose is one of the most widely recognized yoga poses practiced by yogis. Experienced yogis will often assume the lotus pose for prayer and meditation, but less advanced students might find it uncomfortable for long periods. The lotus pose is thought to calm the brain, which is perhaps why it is used for prayer and meditation.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/61.Half-Lotus-pose-Padmasana-dec21.jpg",
        difficulty: "intermediate"
    }),
    new Asana({
        englishName: "Half Lord of the Fishes",
        sanskritName: "Ardha Matsyendrasana",
        description: "Stretches shoulders, hips, and back; increases circulation; tones abdomen; strengthens obliques.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/Half-lord-of-the-fishes-pose-Ardha-Matsyendrasana-dec21.jpg",
        difficulty: "beginner"
    }),
    new Asana({
        englishName: "Shoulder Stand",
        sanskritName: "Salamba Sarvangasana",
        description: "Tones legs and buttocks, stimulates the prostate glands, thyroid, and abdominal organs. Gently stretches the back, neck, spine, and shoulders. Helps regulate the metabolism and promotes good sleep. Also helps reduce fluid retention in the feet and legs.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/71.Supported-shoulder-stand-Salamba-Sarvangasana-dec21.jpg",
        difficulty: "intermediate"
    }),
    new Asana({
        englishName: "Side Plank",
        sanskritName: "Vasisthasana",
        description: "Improves balance and stretches and strengthens the wrist. Can also improve concentration and focus. Tones and strengthens the arms, abdomen, and legs.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/30.Side-plank-pose-Vasisthasana-dec21.jpg",
        difficulty: "beginner"
    }),
    new Asana({
        englishName: "Sphinx Pose",
        sanskritName: "Salamba Bhujangasana",
        description: "The Sphinx Pose is a modified version of the Cobra Pose (Bhujangasana). Like the Cobra pose, it lengthens the abdominal muscles, strengthens the spine, and firms the buttocks while stretching and opening the chest, lungs, and shoulders, but it distributes weight on the forearms rather than the wrist and creates a slightly less curve to the spine.",
        imageUrl: "https://www.yogabaron.com/wp-content/uploads/2018/12/18.Sphinx-pose-Salamba-Bhujangasana-dec21.jpg",
        difficulty: "beginner"
    }),
]

// Attempt to sort before seeding
// function compare( a, b ) {
//     if ( a.englishName < b.englishName ){
//       return -1;
//     }
//     if ( a.englishName > b.englishName ){
//       return 1;
//     }
//     return 0;
//   }
  
//   asanas.sort( compare );

let done = 0
for (let i = 0; i < asanas.length; i++) {
    asanas[i].save(function (err, result) {
        console.log("Looping through and saving", asanas[i], err)
        done++
        if (done === asanas.length) {
            exit()
        }
    })
}

function exit() {
    mongoose.disconnect()
}
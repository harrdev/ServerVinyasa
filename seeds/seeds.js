const Asana = require('../app/models/asana')
const mongoose = require('mongoose')
const mongooseBaseName = 'asanas'
mongoose.connect(`mongodb://127.0.0.1:27017/${mongooseBaseName}-development`)

const asanas = [
    new Asana({
        englishName: "Wheel",
        sanskritName: "Urdhva Dhanurasana",
        description: "Good relief for back pain, helps stretch the lungs and chest, and strengthens the legs, abdomen, buttocks, arms, and wrists. Helps improve blood circulation to the entire body.",
        imageUrl: "https://www.dropbox.com/s/kpa1bewuut3lm5q/wheel.svg?raw=1",
        difficulty: "intermediate"
    }),
    new Asana({
        englishName: "Wild Thing",
        sanskritName: "Camatkarasana",
        description: "Opens up chest, lung, and shoulder areas as well as the front of legs and hip flexors. Also builds strength in the shoulders and upper back.",
        imageUrl: "https://www.dropbox.com/s/d1dbdvo4l7xry4w/downdogflip.svg?raw=1",
        difficulty: "beginner"
    }),
    new Asana({
        englishName: "Warrior Three",
        sanskritName: "Virabhadrasana Three",
        description: "The Warrior III pose helps open the chest and hips and helps stretch and strengthen the groin, thighs, calves, and ankles.",
        imageUrl: "https://www.dropbox.com/s/lwgoky3z37ameif/warrior3.svg?raw=1",
        difficulty: "intermediate"
    }),
    new Asana({
        englishName: "Warrior Two",
        sanskritName: "Virabhadrasana Two",
        description: "Helps to strengthen the shoulders, arms, and back, stretches, and strengthens the thighs, calves, and ankles. Calms the mind, helps promote balance, and improves respiration and circulation.",
        imageUrl: "https://www.dropbox.com/s/rsb3mx41dfq4otl/warrior2.svg?raw=1",
        difficulty: "intermediate"
    }),
    new Asana({
        englishName: "Warrior One",
        sanskritName: "Virabhadrasana One",
        description: "Helps to strengthen the shoulders, arms, and back, stretches and strengthens the thighs, calves, and ankles, opens the chest and hips, and gently stretches the shoulders, navel, and neck.",
        imageUrl: "https://www.dropbox.com/s/j9fip5gm1o1l3fx/warrior1.svg?raw=1",
        difficulty: "intermediate"
    }),
    new Asana({
        englishName: "Upward-Facing Dog",
        sanskritName: "Urdhva Mukha Svsnssana",
        description: "Like the Cobra or Sphinx Pose, Upward-facing Dog Pose lengthens the abdominal muscles, strengthens the spine, and firms the buttocks while stretching and opening the chest, lungs, and shoulders. Upward-facing Dog is slightly more challenging, however, because unlike the Cobra or Sphinx pose, you actually lift your pelvic bones into the air. It is the 9th pose in the Sun Salutation.",
        imageUrl: "https://www.dropbox.com/s/vnfx1srlwt1583t/updog.svg?raw=1",
        difficulty: "beginner"
    }),
    new Asana({
        englishName: "Triangle",
        sanskritName: "Trikonasana",
        description: "The Triangle Pose is one of the most basic yoga poses that offers dozens of variations. In fact, no two sources often agree on the proper way to do a Triangle Pose or its many variations. Triangle Pose strengthens the ankles, legs, thighs, and feet as well as the core.",
        imageUrl: "https://www.dropbox.com/s/l41pfqjwmjoy5os/triangle.svg?raw=1",
        difficulty: "beginner"
    }),
    new Asana({
        englishName: "Tree",
        sanskritName: "Vrksasana",
        description: "The tree pose helps to improve balance and increase concentration and focus. It can help open the hips and increase strength in the calves, ankles, thighs, and spine. It can also help reduce flat feet and provide relief from sciatica as well as lengthening the spine.",
        imageUrl: "https://www.dropbox.com/s/mn2ktlihp12mtfa/tree.svg?raw=1",
        difficulty: "intermediate"
    }),
    new Asana({
        englishName: "Side Splits",
        sanskritName: "Upavistha Konasana",
        description: "The side splits pose helps relax and calm the brain. It can help strengthen the spinal cord and improve sciatica. The side splits also activates core muscles",
        imageUrl: "https://www.dropbox.com/s/6z51vzosovhx5w7/straddlesplit.svg?raw=1",
        difficulty: "intermediate"
    }),
    new Asana({
        englishName: "Crescent Moon",
        sanskritName: "Ashta Chandrasana",
        description: "The crescent moon pose helps stretch the hips and shoulders. It helps muscle endurance and opens the chest up. Crescent moon also helps stimulate mental focus and relieves symptoms of sciatica",
        imageUrl: "https://www.dropbox.com/s/9tv6z3qdcw2vg3a/standingstretch.svg?raw=1",
        difficulty: "beginner"
    }),
    new Asana({
        englishName: "Standing Forward Bend",
        sanskritName: "Uttanasana",
        description: "The third pose in a basic Sun Salutation, the Standing Forward Bend stretches the hamstrings and calves while strengthening the thighs, can also stimulate the liver and kidneys, which can help improve digestion.",
        imageUrl: "https://www.dropbox.com/s/u09snmhtposvaq0/standingforwardfold.svg?raw=1",
        difficulty: "beginner"
    }),
    new Asana({
        englishName: "Squat",
        sanskritName: "Malasana",
        description: "Strengthens the ankles, groin, and back torso while toning the abdomen.",
        imageUrl: "https://www.dropbox.com/s/ntrwtdlr6tdkdxz/squat.svg?raw=1",
        difficulty: "beginner"
    }),
    new Asana({
        englishName: "Monkey Pose",
        sanskritName: "Hanumanasana",
        description: "Strengthens muscles in the thighs, hamstrings, groin area, and pelvic floor. Stretches the chest, thighs, arms, shoulders, and back. Increases energy and positive thoughts and activates the thymus gland. Increases overall flexibility.",
        imageUrl: "https://www.dropbox.com/s/u8dxhc41hjfcxj6/splits.svg?raw=1",
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
        englishName: "Boat",
        sanskritName: "Paripurna Navasana",
        description: "The Full Boat Pose provides all the same benefits as Half Boat Pose, but requires greater core strength. When you have significantly mastered, the Half Boat Pose, you can move into Full Boat Pose",
        imageUrl: "https://www.dropbox.com/s/4m64ztxkj8a4dab/boatstraightlegs.svg?raw=1",
        difficulty: "Intermediate"
    }),
    new Asana({
        englishName: "Half-Boat",
        sanskritName: "Ardha Navasana",
        description: "Tones muscles and increases overall body strength. Improves balance, strengthens the spine, and increases confidence. Stimulates the Thyroid gland, which helps to regulate the menstrual cycle, and tones the kidneys which helps improve digestion.",
        imageUrl: "https://www.dropbox.com/s/1nx0r94msxjwvyp/boatbentlegs.svg?raw=1",
        difficulty: "Intermediate"
    }),
    new Asana({
        englishName: "Bow",
        sanskritName: "Dhanurasana",
        description: "Stimulates the function of the kidney and liver and massages the abdominal organs, which can help relieve constipation. Strengthens and gives flexibility to the back muscles. Strengthens the ankles, thighs, groins, and chest and relieves back pain. Helps to shape the body and improves posture.Opens up the chest, neck, and shoulders and tones the leg and arm muscles.Improves core strength.",
        imageUrl: "https://www.dropbox.com/s/wizj5kwxvez4c0a/bow.svg?raw=1",
        difficulty: "Intermediate"
    }),
    new Asana({
        englishName: "Bridge",
        sanskritName: "Setu Bandha Sarvangasana",
        description: "Strengthens the back, buttocks, and hamstrings. Opens chest and hips and stretches the neck, spine, chest, and hips. Helps relieve back pain, improves digestion, and can help relieve headaches. Improves blood circulation and calms the brain and nervous system.Great beginning pose to help create spinal flexibility for more challenging backbend poses.",
        imageUrl: "https://www.dropbox.com/s/f1w64ybg4sn8ejt/bridge.svg?raw=1",
        difficulty: "Beginner"
    }),
    new Asana({
        englishName: "Butterfly",
        sanskritName: "Baddha Konasana",
        description: "The bound angle pose helps improve flexibility in knees, groins, and the inner thigh. It is also beneficial for helping to relieve menstrual cramps and can help ease delivery for pregnant women. It also opens the chest, hips, and lower back.",
        imageUrl: "https://www.dropbox.com/s/3h2pts6xbn28dh7/butterfly%3F.svg?raw=1",
        difficulty: "beginner"
    }),
    new Asana({
        englishName: "Camel",
        sanskritName: "Ustrasana",
        description: "Helps improve flexibility in the spine, which helps avoid lower back pain problems. This yoga asana opens and stretches the hips and chest, which also helps increase oxygen intake and strengthens the arms and thighs.",
        imageUrl: "https://www.dropbox.com/s/o5gr4lngltsdg5r/camel.svg?raw=1",
        difficulty: "intermediate"
    }),
    new Asana({
        englishName: "Cat",
        sanskritName: "Marjaryasana",
        description: "Both Cow Pose and Cat Pose are two of the simplest and easiest beginner yoga poses. Together, they provide an excellent spinal stretch, which can prevent back pain, help maintain good posture and create a healthy spine. They are a great part of an evening or morning routine to help loosen you up in the morning or relax you and prepare you for sleep at night.",
        imageUrl: "https://www.dropbox.com/s/cginnz98of2jpgr/cat.svg?raw=1",
        difficulty: "beginner"
    }),
    new Asana({
        englishName: "Cow",
        sanskritName: "Bitilasana",
        description: "Work with Cat Pose and Table Pose to offer a complete spinal stretch.",
        imageUrl: "https://www.dropbox.com/s/neau4ceai1rskh6/cow.svg?raw=1",
        difficulty: "Beginner"
    }),
    new Asana({
        englishName: "Chair",
        sanskritName: "Utkatasana",
        description: "Strengthens thighs and ankles, while toning shoulders, butt, hips, and back. Also stimulates the heart and diaphragm.",
        imageUrl: "https://www.dropbox.com/s/9emlawz8vayk8bm/chair.svg?raw=1",
        difficulty: "beginner"
    }),
    new Asana({
        englishName: "Child's Pose",
        sanskritName: "Balasana",
        description: "Gently stretches the lower back, hips, thighs, knees, and ankles; relaxes the spine, shoulders, and neck, and increases blood circulation to the head. This is one of many yoga asanas that is an excellent warm-up or a great way to relax in the evening before bed.",
        imageUrl: "https://www.dropbox.com/s/ini3uwali0q5gxa/child.svg?raw=1",
        difficulty: "beginner"
    }),
    new Asana({
        englishName: "Corpse",
        sanskritName: "Sivasana",
        description: "Practicing Corpse Pose before sleeping can promote deep, quality sleep.  Position yourself in bed using the same points of alignment and supports you use for Savasana on your mat. Spend several minutes in the pose relaxing your mind.",
        imageUrl: "https://www.dropbox.com/s/eohyx2crvtjvaxb/sivasana.svg?raw=1",
        difficulty: "beginner"
    }),
    new Asana({
        englishName: "Crescent Lunge",
        sanskritName: "Alanasana",
        description: "Crescent Lunge stretches the legs, groin, and hip flexors, while also opening the front torso, chest, and shoulders. It strengthens and tones the thighs, hips, and butt, while the balancing aspect helps to develop flexible stability.",
        imageUrl: "https://www.dropbox.com/s/1oc1dqv8mfwo8uj/highlunge.svg?raw=1",
        difficulty: "beginner"
    }),
    new Asana({
        englishName: "Crow",
        sanskritName: "Bakasana",
        description: "Crow Pose and Crane Pose are often confused or thought of as being the same thing, but they are not. Crow Pose is the starter pose to moving into Crane Pose. Sometimes, newer practitioners may need to practice Crow Pose for some time before they can move into the more challenging Crane Pose.",
        imageUrl: "https://www.dropbox.com/s/ukaxoioh0uooswj/crow.svg?raw=1",
        difficulty: "intermediate"
    }),
    new Asana({
        englishName: "Dolphin",
        sanskritName: "Ardha Pincha Mayurasana",
        description: "Calms the brain and helps relieve stress and mild depression. Stretches the shoulders, hamstrings, calves, and arches. Strengthens the arms and legs and helps prevent osteoporosis. Improves digestion and relieves headache, insomnia, back pain, and fatigue.Therapeutic for treating high blood pressure, asthma, flat feet, and sciatica",
        imageUrl: "https://www.dropbox.com/s/px1foombb3v24se/dolphin.svg?raw=1",
        difficulty: "beginner"
    }),
    new Asana({
        englishName: "Downward-Facing Dog",
        sanskritName: "Adho Mukha Svanasana",
        description: "Downward-facing dog is one of the most well-known yoga asanas, and for good reason. It is an incredibly versatile pose that provides an all-over stretch with arm, leg, and core strengthening. It is also an excellent transition between standing poses and floor poses and between various types of floor poses.",
        imageUrl: "https://www.dropbox.com/s/75xa1bduu2u5y7d/downdog.svg?raw=1",
        difficulty: "beginner"
    }),
    new Asana({
        englishName: "Eagle",
        sanskritName: "Garudasana",
        description: "Strengthens the calves and Ankles, opens the back of the pelvis, creates space between shoulder blades. Improves balance and stretches the hips, ankles, shoulders, thigh, calves, and upper back. Helps alleviate sciatica, low backache, asthma, and rheumatism and improves concentration.",
        imageUrl: "https://www.dropbox.com/s/w05qgx7wyxva1y3/eagle.svg?raw=1",
        difficulty: "intermediate"
    }),
    new Asana({
        englishName: "Extended Hand to Toe",
        sanskritName: "Utthita Hasta Padangusthasana",
        description: "Strengthens the legs and ankles and improves the sense of balance.",
        imageUrl: "https://www.dropbox.com/s/0yk0z7f0a4ni37l/extendedhandtotoe.svg?raw=1",
        difficulty: "intermediate"
    }),
    new Asana({
        englishName: "Extended Side Angle",
        sanskritName: "Utthita Parsvakonasana",
        description: "Stretches the thighs, knees, ankles, calves, groins, chest, and shoulders and strengthens the quadriceps and ankles. It also stimulates and tones the abdominal organs and lungs, which improves digestion, elimination, metabolism, and breathing capacity.",
        imageUrl: "https://www.dropbox.com/s/yzynxmyb9o7eras/extendedsideangle.svg?raw=1",
        difficulty: "beginner"
    }),
    new Asana({
        englishName: "Forearm Stand",
        sanskritName: "Pincha Mayurasana",
        description: "Opens the back and shoulders, increases balance, proprioception, and overall blood circulation. Strengthens the arms, core, back, and shoulders while stretching the neck, thorax, navel, and shoulders.",
        imageUrl: "https://www.dropbox.com/s/kjlyju4m91qgoi6/forearmstand.svg?raw=1",
        difficulty: "advanced"
    }),
    new Asana({
        englishName: "Forward Bend with Shoulder Opener",
        sanskritName: "Uttanasana",
        description: "The third pose in a basic Sun Salutation, the Standing Forward Bend stretches the hamstrings and calves while strengthening the thighs, can also stimulate the liver and kidneys, which can help improve digestion.",
        imageUrl: "https://www.dropbox.com/s/sjqfq99pqpelv4v/forwardfoldshoulderstretch.svg?raw=1",
        difficulty: "beginner"
    }),
    new Asana({
        englishName: "Half-Moon",
        sanskritName: "Ardha Chandrasana",
        description: "Improves posture and energizes the body. Expands the chest and shoulders and helps reduce mental stress. Helps improve digestion and is great for relieving menstrual pain, gastritis, fatigue, and anxiety. Reduces lower back pain and provides a good stretch for calves, spine, shoulders, chest, and groin.",
        imageUrl: "https://www.dropbox.com/s/gpumf9eehr8wo9g/halfmoon.svg?raw=1",
        difficulty: "intermediate"
    }),
    new Asana({
        englishName: "Handstand",
        sanskritName: "Adho Mukha Vrksasana",
        description: "Strengthens the arms, shoulders, and core muscles, improves balance and body stability, helps regulate blood circulation throughout the entire body, and can even help relieve depression, stress, and anxiety. Good for stretching the belly and stomach.",
        imageUrl: "https://www.dropbox.com/s/p7pf5j0untktn9c/handstand.svg?raw=1",
        difficulty: "intermediate"
    }),
    new Asana({
        englishName: "Low Lunge",
        sanskritName: "Anjaneyasana",
        description: "This pose stretches the hips, front of the leg, muscles around the knee, intercostal muscles, arms, neck, and chest. This pose strengthens the quadriceps, calves, hamstrings, shoulders, and arms. This asana also engages and strengthens the deep, inner core muscles, which are needed to create stability. The feet and ankles are also stretched and strengthened in the pose, due to the fact that they must support the body from right to left",
        imageUrl: "https://www.dropbox.com/s/h0ehjaz1wa9xfu1/lowlunge.svg?raw=1",
        difficulty: "beginner"
    }),
    new Asana({
        englishName: "Pigeon",
        sanskritName: "Supta Kapotasana",
        description: "Strengthens the back and relieves back problems such as sciatica. Increases flexibility and stretches the thighs, groins and psoas, abdomen, chest and shoulders, and neck. Opens the chest, hips, and shoulders, stimulates the abdominal organs, and can help solve urinary disorders by increasing circulation to that region.",
        imageUrl: "https://www.dropbox.com/s/77peru289zm446u/pigeon.svg?raw=1",
        difficulty: "beginner"
    }),
    new Asana({
        englishName: "King Pigeon",
        sanskritName: "Eka Pada Rajakapotasana",
        description: "Strengthens the back and relieves back problems such as sciatica. Increases flexibility and stretches the thighs, groins and psoas, abdomen, chest and shoulders, and neck. Opens the chest, hips, and shoulders, stimulates the abdominal organs, and can help solve urinary disorders by increasing circulation to that region.",
        imageUrl: "https://www.dropbox.com/s/10usd0gcqgy6o53/kingpigeon.svg?raw=1"
        ,
        difficulty: "intermediate"
    }),
    new Asana({
        englishName: "Plank",
        sanskritName: "Phalakasana",
        description: "Plank pose is another of the most-used yoga poses and is often borrowed for use in other types of fitness regimens as well. It is a simple pose, but quite effective and can be beneficial for both beginning and advanced practitioners since the longer you hold the pose the more difficult it becomes.",
        imageUrl: "https://www.dropbox.com/s/jg6ge8zpaltx10f/plank.svg?raw=1",
        difficulty: "beginner"
    }),
    new Asana({
        englishName: "Plow",
        sanskritName: "Halasana",
        description: "Strengthens the abdominal muscles, helps to make the spinal cord strong and flexible, and stimulates reproductive organs. Also high beneficial for people with diabetes, since it normalizes blood-glucose levels and stimulates the internal organs.",
        imageUrl: "https://www.dropbox.com/s/zi9231wbajm6d2m/plow.svg?raw=1",
        difficulty: "intermediate"
    }),
    new Asana({
        englishName: "Pyramid",
        sanskritName: "Parsvottanasana",
        description: "Pyramid Pose stretches the spine, shoulders, wrists, hips and hamstrings. It also strengthen the legs and improves posture.",
        imageUrl: "https://www.dropbox.com/s/j7p2600bmf840e0/pyramid.svg?raw=1",
        difficulty: "beginner"
    }),
    new Asana({
        englishName: "Reverse Warrior",
        sanskritName: "Viparita Virabhadrasana",
        description: "Helps to strengthen the shoulders, arms, and back, opens the chest, stretches, and strengthens the thighs, calves, and ankles. Calms the mind, helps promote balance, and improves respiration and circulation.",
        imageUrl: "https://www.dropbox.com/s/q6yn6cb9fglo0wp/reverswarrior.svg?raw=1",
        difficulty: "intermediate"
    }),
    new Asana({
        englishName: "Seated Forward Bend",
        sanskritName: "Paschimottanasana",
        description: "This pose stretches these areas and helps open up your hips. This stretch is excellent for runners who tend to have tight hamstrings. Like many yoga poses, it is also considered to be a calming pose.1 It is said that forward bends can help relieve stress and even improve your mood.",
        imageUrl: "https://www.dropbox.com/s/ji0otecqx42by00/seatedforwardfold.svg?raw=1",
        difficulty: "beginner"
    }),
    new Asana({
        englishName: "Lotus",
        sanskritName: "Padmasana",
        description: "The lotus pose is one of the most widely recognized yoga poses practiced by yogis. Experienced yogis will often assume the lotus pose for prayer and meditation, but less advanced students might find it uncomfortable for long periods. The lotus pose is thought to calm the brain, which is perhaps why it is used for prayer and meditation.",
        imageUrl: "https://www.dropbox.com/s/0oylivjwzuj5fnp/seatedORlotus.svg?raw=1",
        difficulty: "intermediate"
    }),
    new Asana({
        englishName: "Half Lord of the Fishes",
        sanskritName: "Ardha Matsyendrasana",
        description: "Stretches shoulders, hips, and back; increases circulation; tones abdomen; strengthens obliques.",
        imageUrl: "https://www.dropbox.com/s/u9joi8lbntxumyh/seatedspinaltwist.svg?raw=1",
        difficulty: "beginner"
    }),
    new Asana({
        englishName: "Shoulder Stand",
        sanskritName: "Salamba Sarvangasana",
        description: "Tones legs and buttocks, stimulates the prostate glands, thyroid, and abdominal organs. Gently stretches the back, neck, spine, and shoulders. Helps regulate the metabolism and promotes good sleep. Also helps reduce fluid retention in the feet and legs.",
        imageUrl: "https://www.dropbox.com/s/tqj48exec3zub2u/shoulderstand.svg?raw=1",
        difficulty: "intermediate"
    }),
    new Asana({
        englishName: "Side Plank",
        sanskritName: "Vasisthasana",
        description: "Improves balance and stretches and strengthens the wrist. Can also improve concentration and focus. Tones and strengthens the arms, abdomen, and legs.",
        imageUrl: "https://www.dropbox.com/s/w35ciia4u570xj8/sideplank.svg?raw=1",
        difficulty: "beginner"
    }),
    new Asana({
        englishName: "Sphinx",
        sanskritName: "Salamba Bhujangasana",
        description: "The Sphinx Pose is a modified version of the Cobra Pose (Bhujangasana). Like the Cobra pose, it lengthens the abdominal muscles, strengthens the spine, and firms the buttocks while stretching and opening the chest, lungs, and shoulders, but it distributes weight on the forearms rather than the wrist and creates a slightly less curve to the spine.",
        imageUrl: "https://www.dropbox.com/s/cl8teqpf9yingwm/sphinx.svg?raw=1",
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
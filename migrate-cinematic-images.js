/**
 * Contentful Migration Script - Cinematic Images
 * 
 * This script creates a new 'cinematicImage' content type and populates it
 * with 20 cinematic images and their rich metadata.
 */
require('dotenv').config();
const contentfulManagement = require('contentful-management');

// Management API Token - needs to be provided
const MANAGEMENT_TOKEN = process.env.CONTENTFUL_MANAGEMENT_TOKEN;
const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const ENVIRONMENT_ID = 'master';

// All 20 cinematic images with complete metadata
const cinematicImages = [
  {
    title: "The Martian Epic",
    slug: "the-martian-epic",
    imageUrl: "https://a.lovart.ai/artifacts/agent/S3PmahyR889a8X64.png",
    dimensions: "1376 × 768",
    focusArea: { x: 0.70, y: 0.54, element: "Hand" },
    visualStyle: "Contemporary tech-centric, near-future ambiance blending professional workspace with high-tech innovation",
    cinematography: "Medium-wide frame, shallow depth of field, straight-on angle, subject sharply focused with discernible blurred background",
    colorPalette: "Cool blues from monitors, warm natural skin tones, reddish-brown desk lamp, red/black cables, white shirt, gray trousers",
    lighting: "Natural key light from large window (right side), cool blue artificial light from monitors (left side), dynamic interplay between natural and artificial sources",
    mood: "Contemplative, serious, intellectual. Deep thought/problem-solving atmosphere",
    composition: "Subject positioned right of center (rule of thirds), diagonal lean into foreground, wall of monitors balances left, expansive window provides depth",
    keyElements: "Multi-screen computer setup, blueprints, miniature solar panels, intricate wiring, large window with urban view",
    filmReference: "Techno-thriller/sci-fi drama aesthetic (Ex Machina, The Imitation Game, Blade Runner 2049 influence)",
    useCase: "Innovation, technology solutions, engineering projects, research development, problem-solving narratives",
    category: "Leadership/Authority"
  },
  {
    title: "Interstellar Cosmic Portrait",
    slug: "interstellar-cosmic-portrait",
    imageUrl: "https://a.lovart.ai/artifacts/agent/etW2c1qdKIWZS0VU.png",
    dimensions: "1376 × 768",
    focusArea: { x: 0.55, y: 0.59, element: "Shirt" },
    visualStyle: "Clean, sharp, contemporary, professional yet dramatic aesthetic",
    cinematography: "Medium shot (waist-up), eye-level angle, shallow depth of field, isolated subject with soft blurred background",
    colorPalette: "Cool blues (glass partitions, reflections), warm wood tones, bright sunlight, crisp white shirt, dark hair/trousers, high-contrast look",
    lighting: "Blend of natural and augmented sources. Strong natural light from right, fill light from front/left minimizes harsh shadows",
    mood: "Serious, confident, direct. Subtle intensity/challenge conveyed through steady gaze",
    composition: "Subject perfectly centered, vertical lines from glass/windows frame the figure, balance between cool-toned left and warm-toned right halves",
    keyElements: "Direct gaze, professional attire, blurred office background with modern architectural lines",
    filmReference: "Corporate drama/thriller aesthetic (Succession, Margin Call influence)",
    useCase: "Leadership profiles, executive presence, corporate narratives, character establishment in high-stakes environments",
    category: "Professional Presence"
  },
  {
    title: "LotR Epic Hero",
    slug: "lotr-epic-hero",
    imageUrl: "https://a.lovart.ai/artifacts/agent/UOUsNUlHJ5h9D9zu.png",
    dimensions: "1376 × 768",
    focusArea: { x: 0.70, y: 0.60, element: "Arm" },
    visualStyle: "Naturalistic, slightly dramatic, realistic portrayal with soft-focus outdoor setting",
    cinematography: "Medium shot, slightly right of center, eye-level angle, shallow depth of field creates significant bokeh, subject isolated as focal point",
    colorPalette: "Warm, earthy palette. Rich golden skin tones, crisp white shirt, deep gray trousers, muted greens/browns in blurred background",
    lighting: "Natural, directional side-lighting (golden/late afternoon sun). Rakes across right side, creating distinct highlights on hair/cheekbone/shirt folds. Shadows sculpt features, high-contrast cinematic appearance",
    mood: "Pensive, thoughtful, resolute. Quiet strength and introspection",
    composition: "Rule of thirds positioning, head near upper right intersection, subject occupies significant frame portion, blurred background provides negative space",
    keyElements: "Dark wavy hair, well-maintained beard, unbuttoned white linen shirt with rolled sleeves, dark trousers, indistinct rocky/vegetated outdoor environment",
    filmReference: "Character-driven drama/adventure film aesthetic (epic hero narrative)",
    useCase: "Character establishment, introspection moments, nature/self-discovery themes, quiet determination narratives",
    category: "Professional Presence"
  },
  {
    title: "In the Mood Romantic",
    slug: "in-the-mood-romantic",
    imageUrl: "https://a.lovart.ai/artifacts/agent/qdXMupa7G1iNutvU.png",
    dimensions: "1376 × 768",
    focusArea: { x: 0.92, y: 0.45, element: "Window" },
    visualStyle: "Naturalistic, cinematic, soft-focus treatment, intimate and immersive feel",
    cinematography: "Medium shot, man leaning against window, shallow depth of field, subject sharp/background blurred, slightly off-center right positioning",
    colorPalette: "Warm dominant palette (rich oranges/yellows from neon reflection), cool blue jeans, crisp white shirt, muted browns/deep earthy tones in interior",
    lighting: "Natural light from window (soft key light on face, subtle rim lighting), warm artificial light sources including neon sign, dynamic light/shadow interplay with reflections",
    mood: "Contemplative, introspective. Quiet reflection/observation amidst subdued activity. Peaceful solitude within urban setting",
    composition: "Carefully balanced. Vertical window frame lines subject, horizontal arm line creates visual anchor, blurred background figures provide context, neon reflection acts as bright visual anchor on right",
    keyElements: "Man gazing outward, window as literal/metaphorical barrier-portal, neon sign reflection, blurred streetlights, dimly lit interior with other patrons (cafe/bar setting)",
    filmReference: "Character-driven drama/independent film aesthetic (psychological realism and emotional depth focus)",
    useCase: "Introspection, urban solitude, contemplative moments, romantic or melancholic narratives, cafe/bar culture",
    category: "Introspection/Contemplation"
  },
  {
    title: "Jojo Rabbit Warm",
    slug: "jojo-rabbit-warm",
    imageUrl: "https://a.lovart.ai/artifacts/agent/E0CRAgdM8GMueSNt.png",
    dimensions: "1376 × 768",
    focusArea: { x: 0.30, y: 0.55, element: "Potted Plant" },
    visualStyle: "Realistic, intimate portrait with lived-in authenticity, candid yet carefully composed (documentary-style cinema)",
    cinematography: "Medium shot (upper body/expression), shallow depth of field isolates subject, eye-level angle fosters direct engagement",
    colorPalette: "Warm, earthy palette. Golden highlights from natural light, browns/beiges from furniture/books, vibrant greens from houseplants, contrasted by cool blue jeans and crisp white shirt",
    lighting: "Natural, soft, directional light from large left window. Gentle side-lighting sculpts features with subtle shadows/highlights, enhancing depth/realism. Window illumination of plants/table creates bright areas",
    mood: "Thoughtful, calm, inviting. Direct gaze, relaxed hand-on-chin posture, faint smile convey introspection and approachability",
    composition: "Subject positioned right of center (modified rule of thirds), creates balanced yet dynamic frame. Foreground (armchair), background (window, bookshelves, distant room) provide depth layers. Window/bookshelves frame subject naturally",
    keyElements: "Man with thoughtful expression, window and plants (natural light/organic life), bookshelves (intellectual/well-read personality), eclectic decor masks/faces (artistic interests)",
    filmReference: "Character-driven intimate drama with warm, authentic aesthetic",
    useCase: "Personal branding, intellectual/creative identity, home office/study environments, introspection and authenticity narratives",
    category: "Introspection/Contemplation"
  },
  {
    title: "E.T. Wonder",
    slug: "et-wonder",
    imageUrl: "https://a.lovart.ai/artifacts/agent/pN1IFD91zbpxchje.png",
    dimensions: "1376 × 768",
    focusArea: { x: 0.52, y: 0.73, element: "Arm" },
    visualStyle: "Polished, naturalistic with strong cinematic influence, soft focus, clean yet rich aesthetic",
    cinematography: "Shallow depth of field, medium close-up (waist-up framing), slight low-angle perspective (elevates subject), subtle Dutch angle adds dynamic tension. Pointing finger creates strong line of action",
    colorPalette: "Warm, inviting dominant colors (golden hues from artificial light source), contrasted with cooler, desaturated greens/darker tones in natural background",
    lighting: "Warm, soft key light from glowing object (lower right), casting golden glow on face/arm. Noticeable back/rim light from upper left (natural ambient light, perhaps late afternoon sun). Prominent blue-white lens flare (upper right) signifies strong bright light source",
    mood: "Curious engagement and warmth. Slight smile, direct gaze, pointing gesture suggest interaction/explanation/discovery/invitation",
    composition: "Subject positioned slightly off-center left (rule of thirds), leaving space for illuminated object. Pointing finger acts as leading line guiding eye to bright element. Sharp subject against blurred background",
    keyElements: "Man's expressive face and gesturing hand, glowing object (light source and point of interest), out-of-focus natural background (trees, shed), lens flare (cinematic feel)",
    filmReference: "Slice-of-life drama or character-driven independent film (human interaction, discovery, storytelling in natural setting)",
    useCase: "Moments of discovery, teaching/mentorship, shared wonder, casual conversation, personal connection narratives",
    category: "Discovery/Wonder"
  },
  {
    title: "Grandmaster Mastery",
    slug: "grandmaster-mastery",
    imageUrl: "https://a.lovart.ai/artifacts/agent/xl2hSyfz8M9xuMNS.png",
    dimensions: "1376 × 768",
    focusArea: { x: 0.65, y: 0.49, element: "Wooden Training Dummy" },
    visualStyle: "Realistic yet dramatically lit, utilizing natural light for depth/focus",
    cinematography: "Medium shot, subject slightly off-center left, shallow depth of field (man sharp, background slightly blurred), gaze/attention directed toward martial arts equipment on right",
    colorPalette: "Warm earth tones (browns of wood, muted greens from bonsai), cool blues (jeans), crisp white (shirt), strong golden highlights from natural light, deeper tones in shadows",
    lighting: "Strong, directional natural light from large window on right. High contrast, distinct shadows on man's left side, illuminated right side. Wooden dummies strongly highlighted on right, left room side (bonsai/scroll) softer/diffuse",
    mood: "Contemplative, focused, quietly intense. Expression suggests deep thought/readiness. Surrounding elements hint at discipline, training, mastery",
    composition: "Man positioned along left vertical third, looking into larger right space with dummies. Dummies act as strong vertical elements/leading lines. Light/shadow interplay creates diagonal lines across floor/equipment, enhancing dynamism",
    keyElements: "Man (modern attire contrasts with traditional Chinese decor), Wing Chun wooden dummies (Muk Yan Jong), bonsai, scroll, martial arts training environment",
    filmReference: "Martial arts drama/character-driven action film aesthetic (Ip Man, Kung Fu Hustle, The Grandmaster, John Wick influence)",
    useCase: "Discipline and mastery narratives, martial arts/training contexts, contemplation before action, traditional meets modern themes, expert/master positioning",
    category: "Discovery/Wonder"
  },
  {
    title: "Tenet Complex",
    slug: "tenet-complex",
    imageUrl: "https://a.lovart.ai/artifacts/agent/zZWh6WprjAPomdRs.png",
    dimensions: "1376 × 768",
    focusArea: { x: 0.52, y: 0.55, element: "Suit Jacket" },
    visualStyle: "Contemporary, professional, sophisticated, almost editorial aesthetic with striking visual effect",
    cinematography: "Medium shot, main subject prominent, glass/reflections create dynamic multi-layered visual. Eye-level angle fosters direct viewer connection. Soft focus background isolates subject",
    colorPalette: "Cool dominant tones (greys, blues, teals from building facade/reflections), contrasted by subject's dark suit/hair, crisp white shirt, warmer skin tones",
    lighting: "Natural, diffused light (likely overcast sky or filtered daylight), soft and even, minimizing harsh shadows, contributing to calm/contemplative atmosphere. Reflections show slight light intensity variations",
    mood: "Introspection and professionalism with hint of mystery/contemplation. Direct gaze juxtaposed with fragmented reflections suggests self-reflection within busy setting",
    composition: "Central figure slightly off-center (rule of thirds), vertical glass panels act as natural compositional dividers, creating triptych-like structure. Blurred background figure adds urban movement/scale sense",
    keyElements: "Male subject (business-casual suit), large glass panels (generating prominent reflections), blurred background figure, architectural geometry",
    filmReference: "Contemporary thriller/mystery aesthetic with sophisticated visual language",
    useCase: "Corporate identity, professional presence, introspection/self-reflection themes, mystery/complexity narratives, modern urban professional contexts",
    category: "Professional Presence"
  },
  {
    title: "Ida Minimalist",
    slug: "ida-minimalist",
    imageUrl: "https://a.lovart.ai/artifacts/agent/utBJ8O2QMNAagMWj.png",
    dimensions: "1376 × 768",
    focusArea: { x: 0.49, y: 0.62, element: "Cuff of Shirt" },
    visualStyle: "Sophisticated, high-contrast black and white, minimalist and elegant aesthetic",
    cinematography: "Medium full shot, subject on left third (rule of thirds), gaze directed out large window (introspection/implied narrative), relatively shallow depth of field (subject sharp, background subtly soft)",
    colorPalette: "Monochromatic (black and white). Deep blacks (suit jacket), crisp whites (shirt), varying grays (concrete wall, exterior through window). High contrast emphasizes textures/contours",
    lighting: "Strong natural light from large left window (dramatic key light). Side lighting sculpts face/figure, creating pronounced highlights/shadows adding depth/mood. Right frame (concrete wall) receives less direct light, darker grays, helps separate subject from background",
    mood: "Contemplative, solitary, quietly intense. Pensive expression and directed gaze suggest deep thought/waiting/observation. Air of sophistication and quiet drama",
    composition: "Balanced yet dynamic. Strong vertical lines (window frame, concrete wall) provide structure. Negative space of large textured concrete wall (right) balances subject presence (left), enhancing minimalist feel",
    keyElements: "Man elegantly dressed (dark suit jacket, white shirt with rolled sleeves, gray trousers), large window, brutalist concrete wall, strong profile definition",
    filmReference: "Sophisticated character-driven drama, modern noir, intellectual thriller aesthetic",
    useCase: "Minimalist design narratives, intellectual/contemplative positioning, sophisticated character establishment, modern noir aesthetics, solitary observation themes",
    category: "Introspection/Contemplation"
  },
  {
    title: "Black Adam Powerful",
    slug: "black-adam-powerful",
    imageUrl: "https://a.lovart.ai/artifacts/agent/RVBHb6UjOlr5Bdmg.png",
    dimensions: "1376 × 768",
    focusArea: { x: 0.73, y: 0.55, element: "Stone Wall" },
    visualStyle: "Contemporary, professional, leaning toward dramatic realism. Subtle grittiness from natural lighting/textured stone combined with polished subject attire/building glass",
    cinematography: "Medium shot (waist-up), eye-level angle, relatively shallow depth of field (subject isolated, architectural background recognizable)",
    colorPalette: "Cool greys (suit, stone walls), contrasted with warmth of skin tone/hair, bright white shirt. Sunlight introduces stark whites/subtle amber glow in lit areas, deep desaturated blues in shadows",
    lighting: "Strong, natural hard light (likely from large windows, visible left). Cuts diagonally across scene, creates dramatic contrasts. Pronounced rectangular shadow patterns on stone walls/floor. Subject partially backlit/side-lit, highlighting features/hair while leaving one face side in defined shadow",
    mood: "Serious, confident, perhaps intense/mysterious. Strong lighting/architectural setting contribute to significance/high-stakes sense",
    composition: "Subject centered, commanding attention. Strong vertical/horizontal lines from architecture frame him, anchoring composition. Diagonal shadows provide dynamic energy, leading eye across background. Direct gaze engages viewer",
    keyElements: "Male subject (dark grey suit, white shirt, hands in pockets), sophisticated textured stone walls, large glass windows allowing light, modern seating in background (upscale/corporate environment)",
    filmReference: "Character introduction in contemporary drama/thriller, powerful/complex protagonist establishment",
    useCase: "Power and authority positioning, executive/leadership presence, high-stakes decision moments, sophisticated corporate environments, strength/determination narratives",
    category: "Leadership/Authority"
  },
  {
    title: "Man of Steel Heroic",
    slug: "man-of-steel-heroic",
    imageUrl: "https://a.lovart.ai/artifacts/agent/EHYqcmQCZdnhLCX.png",
    dimensions: "1376 × 768",
    focusArea: { x: 0.67, y: 0.77, element: "Cuff of Shirt Sleeve" },
    visualStyle: "Modern, gritty, desaturated cinematic aesthetic. Focus on realism with emphasis on texture/natural light",
    cinematography: "Medium shot (waist-up), shallow depth of field effectively isolates subject against blurred urban background. Slightly low camera angle gives subject imposing/strong presence",
    colorPalette: "Cool, desaturated tones in background (dark greys, blacks, faded blue/brown), contrasted with warmer, vibrant skin tones and bright white shirt (illuminated by direct light). Overall muted yet striking",
    lighting: "Strong, directional hard light (likely low sun, golden hour), strikes subject from viewer's right. Prominent highlights on face/hair/right shoulder, deep dramatic shadows on left body/face side. Chiaroscuro effect enhances facial features/hair volume",
    mood: "Intense, determined, perhaps enigmatic. Direct yet distant gaze combined with dramatic lighting/urban backdrop suggests contemplation, resolve, or imminent action. Understated power/seriousness",
    composition: "Subject positioned slightly off-center left, gaze directed toward right frame, creating open space implying continuation/unseen element. Strong vertical background building lines provide subtle structure. Blurred background prevents distraction",
    keyElements: "Man (medium-length wind-swept dark hair, beard), sharp grey blazer over partially unbuttoned white shirt, intense expression/direct gaze, blurred indistinct urban background (possibly industrial area/city street)",
    filmReference: "Contemporary dramatic thriller/action film aesthetic (protagonist with gravitas, internal conflict/external purpose)",
    useCase: "Leading man/hero positioning, intense determination narratives, action-thriller contexts, complex character establishment, urban resilience themes",
    category: "Leadership/Authority"
  },
  {
    title: "Interstellar Cosmic Telescope",
    slug: "interstellar-cosmic-telescope",
    imageUrl: "https://a.lovart.ai/artifacts/agent/UBuIT884w7KPyNmY.png",
    dimensions: "1376 × 768",
    focusArea: { x: 0.50, y: 0.69, element: "Man" },
    visualStyle: "Sophisticated, contemplative with strong cinematic qualities",
    cinematography: "Medium-wide framing, establishes environment while keeping subject prominent. Avoids flat appearance, utilizing foreground/mid-ground (man, telescope, screen)/background (city lights, sky) for depth. Direct viewer gaze adds engaging, direct address quality",
    colorPalette: "Cool dominant colors (deep blues/purples in twilight sky, vibrant nebula on screen), contrasted by warm golden city lights/subtle sunset glow (far right horizon/ground). Man's white shirt and navy blazer add further color contrast/sophistication",
    lighting: "Mixed lighting. Man illuminated by soft directional light (likely artificial), creating gentle shadows highlighting features. Projection screen is strong internal light source (brightly lit nebula). Distant city lights contribute warm soft bokeh. Sky ambient light transitions from dark blue overhead to warmer subdued orange at horizon (dusk/dawn)",
    mood: "Intellectual, inspirational, slightly enigmatic. Cosmic imagery, scientific instrumentation, urban rooftop setting evoke wonder, discovery, connection between human endeavor and vast universe",
    composition: "Asymmetrical (rule of thirds). Man positioned on right third, balancing large projection screen on left. Telescope acts as central visual anchor connecting man/screen. City lights create horizontal band grounding scene. Platform edge leading lines draw eye into depth",
    keyElements: "Man (human curiosity/intellect), large projection screen displaying nebula (cosmic exploration/universe wonders), telescope (discovery tool bridging observer/celestial subject), rooftop setting with city lights (modern elevated urban context juxtaposing technology with natural phenomena)",
    filmReference: "Cosmic wonder/intellectual exploration aesthetic",
    useCase: "Innovation and discovery narratives, cosmic/space exploration themes, intellectual pursuits, human-universe connection, wonder and inspiration positioning",
    category: "Discovery/Wonder"
  },
  {
    title: "Blade Runner Futuristic",
    slug: "blade-runner-futuristic",
    imageUrl: "https://a.lovart.ai/artifacts/agent/TzflbrwlAJGSk3ci.png",
    dimensions: "1376 × 768",
    focusArea: { x: 0.67, y: 0.45, element: "Glass Wall" },
    visualStyle: "Modern urban noir, sophisticated yet gritty atmosphere. Sharp subject focus with blurred vibrant background elements",
    cinematography: "Medium shot, shallow depth of field isolates subject, allowing expression/attire clarity while rendering background as abstract wash of color/light. Subject framed off-center, looking right, establishing visual flow into urban environment",
    colorPalette: "Cool, saturated palette (deep blues, purples, teals from neon signs/reflections), contrasted with warmer skin tones and subtle grays of jacket/blues of jeans. Overall moody and rich",
    lighting: "Artificial light sources from city neon signs/streetlights provide primary illumination. Strong colorful reflections on wet surfaces (ground, glass panels) amplify light/contribute to vibrant atmosphere. Raindrops on glass add sparkle/diffuse background lights. Subject lit softly front-left, highlighting features without harshness",
    mood: "Contemplative, slightly melancholic, sophisticated. Man's gaze and rainy vibrant city backdrop evoke introspection, mystery, quiet observation within bustling urban setting",
    composition: "Man positioned on left frame side (rule of thirds), creating visual balance, drawing eye across image. Blurred background provides context without distraction. Vertical building elements/reflective glass panels on right act as leading lines/provide structural depth",
    keyElements: "Well-dressed man (thoughtful expression), blurry but discernible city street (bright colorful neon signs), rain-streaked glass panels, wet ground with luminous reflections (post-rain or rainy environment emphasis)",
    filmReference: "Neo-noir film, urban drama, character-driven thriller aesthetic (mood and visual storytelling emphasis)",
    useCase: "Urban sophistication, mystery and intrigue narratives, melancholic contemplation, rainy city atmosphere, noir aesthetic positioning",
    category: "Urban Sophistication"
  },
  {
    title: "Infernal Affairs Gritty",
    slug: "infernal-affairs-gritty",
    imageUrl: "https://a.lovart.ai/artifacts/agent/8LpJQP8IRu0SOuIS.png",
    dimensions: "1376 × 768",
    focusArea: { x: 0.56, y: 0.56, element: "Center" },
    visualStyle: "Contemporary urban cinematic style, polished subject with subtly gritty city backdrop",
    cinematography: "Medium-close up, eye-level shot, shallow depth of field renders subject sharply in focus against dramatically blurred background. Effectively isolates man, drawing immediate attention to expression/posture while background contributes atmosphere without distraction",
    colorPalette: "Cool, desaturated tones dominant (blues from jacket/jeans, subtle gray-green from concrete wall). Complemented by muted browns/reds from brick alleyway. Small warm color bursts from blurred red/purple neon signs (background) provide visual accents/hints of urban nightlife",
    lighting: "Natural, soft, likely indirect light illuminates subject (suggesting overcast day or deeply shaded alley). Primary light source appears front-left, subtly highlighting face/hair, creating soft shadows adding definition. Background generally darker, neon signs act as localized light sources adding depth/visual interest",
    mood: "Contemplative, slightly mysterious, urban-noir. Subject's serious expression and upward off-camera gaze evoke introspection/anticipation. Gritty alleyway setting reinforces urban realism/touch of solitude amidst city",
    composition: "Subject placed off-center (leaning against concrete wall on left), adhering loosely to rule of thirds. Placement allows alleyway to open right, creating leading lines drawing viewer eye into blurred background, enhancing depth. Vertical building/fire escape lines add structural integrity",
    keyElements: "Male subject (smart casual outfit: navy blazer, white shirt, jeans), textured cool-toned concrete wall (foreground), blurred background (brick buildings, fire escapes, glowing neon signs 'MARKET,' 'DISCO' suggesting bustling but indistinct city)",
    filmReference: "Modern urban drama/neo-noir thriller aesthetic (enigmatic protagonist against moody blurred city backdrop)",
    useCase: "Urban grit and authenticity, character complexity, mysterious protagonist positioning, alleyway/street narratives, noir aesthetic",
    category: "Urban Sophistication"
  },
  {
    title: "Shawshank Hopeful",
    slug: "shawshank-hopeful",
    imageUrl: "https://a.lovart.ai/artifacts/agent/xmzzNjsgbDb6Zwmp.png",
    dimensions: "1376 × 768",
    focusArea: { x: 0.57, y: 0.57, element: "Man" },
    visualStyle: "Contemporary, polished, naturalistic. Blends sophisticated urban aesthetic with natural elements",
    cinematography: "Medium-wide framing (mid-thigh up), shallow depth of field isolates sharp subject against soft blurred background (classic cinematic technique). Eye-level camera fosters direct, relatable connection",
    colorPalette: "Warm, inviting palette anchored by golden hour tones. Rich yellows/oranges from sunlight contrast with deep navy blazer/jeans, crisp white shirt, varying greens from foliage. Vibrant yet harmonious visual appeal",
    lighting: "Strong backlighting from golden hour sun, creating distinct bright rim light around hair/shoulders, separating subject from background. Subject's front softly illuminated (suggesting diffused frontal light or reflected light), ensuring facial detail clarity despite backlighting. Abundant lens flare/bokeh in background characteristic of cinematic natural light usage",
    mood: "Confident, reflective, sophisticated. Subject's composed posture and thoughtful distance gaze combined with warm soft lighting evoke quiet determination/introspection within serene urban environment. Approachable yet commanding",
    composition: "Subject positioned off-center (left vertical third, rule of thirds), gaze directed right into negative space creating balance/implying story/point of interest beyond frame. Blurred pathway acts as subtle leading line guiding eye toward luminous background",
    keyElements: "Man (smart-casual ensemble: navy blazer, white button-down shirt, jeans), blurred background (contemporary urban architecture with balconies/glass facades, lush green trees, sun-drenched pathway, upscale outdoor setting)",
    filmReference: "Contemporary drama with cinematic qualities (deliberate depth of field, golden hour lighting, thoughtful composition)",
    useCase: "Hope and determination narratives, urban sophistication, golden hour warmth, reflective moments, aspirational positioning",
    category: "Introspection/Contemplation"
  },
  {
    title: "Paterson Poetic",
    slug: "paterson-poetic",
    imageUrl: "https://a.lovart.ai/artifacts/agent/6H2RujOjqdS42bIh.png",
    dimensions: "1376 × 768",
    focusArea: { x: 0.73, y: 0.43, element: "Jacket" },
    visualStyle: "Naturalistic, cinematic. Employs medium shot with relatively shallow depth of field",
    cinematography: "Subject (man) sharply in focus, street scene beyond rainy window blurred, drawing attention to contemplative state. Eye-level camera angle fosters intimate connection. Framing balances man within interior space and exterior view (characteristic of character-focused film scene)",
    colorPalette: "Cool, muted palette. Blues from jacket/jeans contrast subtly with off-white shirt, wall, window frame. Darker tones in hair, beard, notebook/books. Exterior street scene composed of desaturated greens, greys, browns (overall understated, earthy tone)",
    lighting: "Natural, soft, diffuse light primarily from large left window. Overcast weather or rain outside scatters light, preventing harsh shadows, creating gentle even illumination on man's face/interior space. Soft lighting enhances pensive mood/provides subtle facial modeling",
    mood: "Introspective, calm, slightly melancholic/thoughtful. Man's outward gaze combined with rain/quiet indoor setting suggests reflection/waiting. Muted colors/soft lighting reinforce subdued emotional tone",
    composition: "Man positioned off-center (predominantly right frame side), adhering to rule of thirds. Body angled toward window, creating visual diagonal leading eye from him to outside world. Table/window frame provide strong horizontal/vertical lines anchoring scene. Blurred exterior functions as backdrop providing context without distraction",
    keyElements: "Seated man looking outward, semi-formal attire (blazer, collared shirt, jeans), notebook/pen/stack of books on table (intellectual pursuits/creative work hints), rainy window (significant element adding texture, atmosphere, visual barrier between internal/external worlds)",
    filmReference: "Character-driven drama with cinematic qualities (careful framing, shallow depth of field, natural soft light, environmental detail integration)",
    useCase: "Introspection and creativity, rainy contemplation, writing/intellectual work, poetic narratives, quiet observation moments",
    category: "Introspection/Contemplation"
  },
  {
    title: "Chungking Mansions Chaotic",
    slug: "chungking-mansions-chaotic",
    imageUrl: "https://a.lovart.ai/artifacts/agent/wP2uWpkvuAJpVHJn.png",
    dimensions: "1376 × 768",
    focusArea: { x: 0.44, y: 0.68, element: "Center" },
    visualStyle: "Atmospheric street photography combined with cinematic framing",
    cinematography: "Medium shot (waist-up), shallow depth of field maintains sharp subject focus while rendering bustling background in soft ethereal blur. Technique isolates individual amidst moving crowd (common cinematic device emphasizing character presence/internal state). Eye-level angle fosters direct engaging connection. Motion blur in background enhances dynamic, living quality",
    colorPalette: "Rich, saturated palette. Warm tones (red, orange, yellow) from numerous neon signs, glowing lanterns, market lights. Bright artificial lights sharply contrast with cooler blue twilight sky/subject's navy jacket, creating visual depth/vibrant energetic atmosphere",
    lighting: "Primarily artificial and ambient. Diverse urban light sources provide strong backlighting/rim lighting to background elements. Main subject distinctly illuminated (suggesting subtle key light), highlighting features/separating from luminous yet less defined background",
    mood: "Lively, engaging, slightly mysterious. Evocative of bustling evening in vibrant city (possibly East Asian metropolis). Subject's confident smile contributes inviting/optimistic tone",
    composition: "Subject positioned slightly off-center right (rule of thirds), creating balanced yet dynamic frame. Street's depth lined with shops/lights creates natural leading lines drawing viewer eye into scene",
    keyElements: "Central male figure, intricate array of glowing neon signs (foreign scripts), traditional red lanterns, active colorful market stalls",
    filmReference: "Character-driven urban drama/adventure film aesthetic (individual's journey/experience in vibrant cultural setting)",
    useCase: "Urban energy and chaos, cultural immersion narratives, bustling city life, market/street culture, East Asian aesthetics",
    category: "Urban Sophistication"
  },
  {
    title: "Flowers of War Passionate",
    slug: "flowers-of-war-passionate",
    imageUrl: "https://a.lovart.ai/artifacts/agent/Xq3tRObOzWno4Df6.png",
    dimensions: "1376 × 768",
    focusArea: { x: 0.53, y: 0.82, element: "Belt" },
    visualStyle: "Cinematic character study set against urban decay backdrop. Blends raw realism from derelict setting with polished subject appearance",
    cinematography: "Medium-long shot (just above knees), slightly low camera angle elevates subject imparting authority/determination sense. Shallow depth of field isolates man, blurring background elements effectively, making him undisputed focal point",
    colorPalette: "Muted, earthy tones in background (greens, browns, dark grays of peeling paint/shadowed areas), contrasted with vibrant cool navy blue blazer, crisp white shirt, warm rich brown leather belt, warm skin/hair tones",
    lighting: "Natural, soft directional light illuminates subject primarily from left side (viewer's perspective), creating subtle highlights on hair, face, blazer. Contrasts with darker shadowed background providing separation/depth. Somewhat diffused light suggests indoor setting with large light sources (windows), preventing harsh shadows",
    mood: "Intense, serious, perhaps mysterious. Subject's direct unwavering gaze combined with rugged environment suggests resolve, contemplation, or imminent action moment. Subtle inherent tension",
    composition: "Centrally composed, drawing immediate attention. Vertical background elements (pillars, distant doorways) act as natural framing devices guiding eye toward subject without distraction. Forward-stepping posture creates dynamic engaging composition",
    keyElements: "Man (strong gaze, dark wavy hair, beard), attire blend of casual sophistication/readiness (navy blazer, slightly unbuttoned white shirt, distressed blue jeans, brown leather belt), background peeling paint/dark empty spaces (abandoned/forgotten places narrative contrast with subject's composed presence)",
    filmReference: "Character introduction scene from contemporary film (action-thriller/character-driven drama)",
    useCase: "Intense determination, character complexity, urban decay contexts, action-thriller positioning, passionate resolve narratives",
    category: "Urban Sophistication"
  },
  {
    title: "In the Mood for Love Elegant",
    slug: "in-the-mood-for-love-elegant",
    imageUrl: "https://a.lovart.ai/artifacts/agent/n6fufis2DrdLJrhn.png",
    dimensions: "1376 × 768",
    focusArea: { x: 0.66, y: 0.64, element: "Blazer" },
    visualStyle: "Cinematic style characterized by clean, modern aesthetic and direct subject engagement",
    cinematography: "Medium shot, eye-level angle places viewer directly in front of subject, fostering immediate connection. Shallow depth of field effectively isolates man, blurring background maintaining focus on expression/attire. Framing steady and symmetrical, creating balanced controlled shot",
    colorPalette: "Cool tones center on navy blue blazer/denim, balanced by warmth of subject's skin, hair, wooden background elements. White shirt provides bright accent preventing overall scheme from becoming too muted. Cool/warm neutral balance suggests sophistication/professionalism",
    lighting: "Soft, natural-looking light likely originating from large window behind/slightly beside subject. Creates gentle frontal illumination on face highlighting features without harsh shadows. Subtle backlighting effect from window behind provides soft rim light on hair, helping subject stand out from background. Background itself appears brighter than immediate foreground, drawing eye toward subject's silhouette",
    mood: "Confident, composed, serious. Subject's direct gaze/upright posture convey assertiveness/professionalism sense. Sophisticated setting further contributes refined, self-assured atmosphere",
    composition: "Subject centrally composed, occupying majority of frame vertically. Flanked by architectural elements (doorway left, dark wooden paneling right) acting as natural framing devices enhancing prominence. Vertical lines of these elements add structure/depth",
    keyElements: "Man (smart casual ensemble: navy blazer, white button-down shirt, denim jeans, brown leather belt), dark wavy hair, beard, strong composed presence, blurry background (softly lit window, dark textured walls, upscale interior environment hints)",
    filmReference: "Character introduction in modern drama/thriller (individual's presence and demeanor key, direct camera address, confident stance, polished appearance)",
    useCase: "Sophisticated elegance, refined character establishment, professional confidence, luxury/upscale contexts, composed authority positioning",
    category: "Leadership/Authority"
  },
  {
    title: "Godfather Iconic",
    slug: "godfather-iconic",
    imageUrl: "https://a.lovart.ai/artifacts/agent/Oc71jXAVPAAQH3Ng.png",
    dimensions: "1376 × 768",
    focusArea: { x: 0.68, y: 0.71, element: "Brown Leather Armchair" },
    visualStyle: "Contemporary, polished, blending formal wear with casual elements within urban industrial-chic interior",
    cinematography: "Shallow depth of field isolates subject against subtly blurred background, drawing immediate attention. Eye-level shot creates intimate viewer connection. Framing with subject slightly off-center, looking out of frame, suggests unposed moment-in-time capture",
    colorPalette: "Deep blues (blazer, jeans) and crisp white (shirt), contrasted with warm earthy tones of brown/reddish-brown leather furniture, man's belt, hair, exposed brick wall. Cooler grey tones visible through large window balancing warmth",
    lighting: "Strong side-lighting from large left window creates dramatic contrast. Illuminates subject's right side, highlighting facial contours, hair texture, clothing fabric, while casting right body side/interior into softer shadow. High-contrast lighting hallmark of dramatic cinematography",
    mood: "Contemplative, confident, slightly enigmatic. Man's pensive off-camera gaze suggests lost in thought or observing something significant, imbuing scene with quiet drama/anticipation sense",
    composition: "Subject positioned on left frame side (loosely rule of thirds), gaze creates implied line extending right balancing visual weight. Vertical window frame/brick column elements provide strong structural lines. Diagonal light across man's body adds dynamism",
    keyElements: "Man impeccably dressed (navy blazer, white shirt, stylish jeans, brown leather belt), distinctive hairstyle/beard, strong presence, background (large windows revealing urban landscape, exposed red brick walls, rich brown leather armchairs, upscale contemporary environment)",
    filmReference: "Cinematic style (controlled lighting, specific color grading, character/narrative implication focus). Could be still from modern drama/character-driven thriller (protagonist introduction in reflection/strategic thought moment)",
    useCase: "Iconic leadership, sophisticated power positioning, contemplative decision-making, luxury/upscale environments, narrative gravitas and character complexity",
    category: "Leadership/Authority"
  }
];

async function main() {
  if (!MANAGEMENT_TOKEN) {
    console.error('❌ CONTENTFUL_MANAGEMENT_TOKEN not found in .env');
    console.log('\nTo get a Management API token:');
    console.log('1. Go to Contentful → Settings → API keys');
    console.log('2. Click "Content management tokens" tab');
    console.log('3. Click "Generate personal token"');
    console.log('4. Add to .env: CONTENTFUL_MANAGEMENT_TOKEN=your_token_here');
    process.exit(1);
  }

  console.log('🚀 Starting Contentful migration...\n');

  const client = contentfulManagement.createClient({
    accessToken: MANAGEMENT_TOKEN
  });

  try {
    const space = await client.getSpace(SPACE_ID);
    const environment = await space.getEnvironment(ENVIRONMENT_ID);
    console.log('✅ Connected to Contentful space:', SPACE_ID);

    // Step 1: Create the cinematicImage content type
    console.log('\n📋 Creating cinematicImage content type...');
    
    let contentType;
    try {
      contentType = await environment.getContentType('cinematicImage');
      console.log('   Content type already exists, updating...');
    } catch (e) {
      contentType = await environment.createContentTypeWithId('cinematicImage', {
        name: 'Cinematic Image',
        description: 'Cinematic photography with rich metadata for website use',
        displayField: 'title',
        fields: [
          { id: 'title', name: 'Title', type: 'Symbol', required: true },
          { id: 'slug', name: 'Slug', type: 'Symbol', required: true },
          { id: 'image', name: 'Image', type: 'Link', linkType: 'Asset', required: false },
          { id: 'imageUrl', name: 'Image URL', type: 'Symbol', required: false },
          { id: 'dimensions', name: 'Dimensions', type: 'Symbol', required: false },
          { id: 'focusArea', name: 'Focus Area', type: 'Object', required: false },
          { id: 'visualStyle', name: 'Visual Style', type: 'Text', required: true },
          { id: 'cinematography', name: 'Cinematography', type: 'Text', required: true },
          { id: 'colorPalette', name: 'Color Palette', type: 'Text', required: true },
          { id: 'lighting', name: 'Lighting', type: 'Text', required: true },
          { id: 'mood', name: 'Mood', type: 'Text', required: true },
          { id: 'composition', name: 'Composition', type: 'Text', required: true },
          { id: 'keyElements', name: 'Key Elements', type: 'Text', required: true },
          { id: 'filmReference', name: 'Film Reference', type: 'Symbol', required: true },
          { id: 'useCase', name: 'Use Case', type: 'Symbol', required: true },
          { id: 'category', name: 'Category', type: 'Symbol', required: false }
        ]
      });
      console.log('   ✅ Content type created');
    }

    // Publish the content type
    try {
      contentType = await contentType.publish();
      console.log('   ✅ Content type published');
    } catch (e) {
      console.log('   Content type already published or publish failed:', e.message);
    }

    // Step 2: Create entries for each image
    console.log('\n📸 Creating image entries...');
    
    for (let i = 0; i < cinematicImages.length; i++) {
      const img = cinematicImages[i];
      console.log(`   [${i + 1}/${cinematicImages.length}] ${img.title}...`);
      
      try {
        // Check if entry already exists
        try {
          const existing = await environment.getEntry(img.slug);
          console.log(`      ⏭️  Already exists, skipping`);
          continue;
        } catch (e) {
          // Entry doesn't exist, create it
        }

        const entry = await environment.createEntryWithId('cinematicImage', img.slug, {
          fields: {
            title: { 'en-US': img.title },
            slug: { 'en-US': img.slug },
            imageUrl: { 'en-US': img.imageUrl },
            dimensions: { 'en-US': img.dimensions },
            focusArea: { 'en-US': img.focusArea },
            visualStyle: { 'en-US': img.visualStyle },
            cinematography: { 'en-US': img.cinematography },
            colorPalette: { 'en-US': img.colorPalette },
            lighting: { 'en-US': img.lighting },
            mood: { 'en-US': img.mood },
            composition: { 'en-US': img.composition },
            keyElements: { 'en-US': img.keyElements },
            filmReference: { 'en-US': img.filmReference },
            useCase: { 'en-US': img.useCase },
            category: { 'en-US': img.category }
          }
        });

        // Publish the entry
        await entry.publish();
        console.log(`      ✅ Created and published`);
        
        // Small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 200));
        
      } catch (err) {
        console.log(`      ❌ Error: ${err.message}`);
      }
    }

    console.log('\n✅ Migration complete!');
    console.log(`   Created ${cinematicImages.length} cinematic image entries`);
    console.log('\nNext steps:');
    console.log('1. Visit Contentful dashboard to verify entries');
    console.log('2. Update contentful.js to fetch cinematicImage entries');

  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.message.includes('401')) {
      console.log('\n⚠️  The token appears to be invalid or expired.');
      console.log('Please generate a new Content Management Token from Contentful.');
    }
  }
}

main();

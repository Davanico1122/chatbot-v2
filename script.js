// Chatbot Class
class PortfolioChatbot {
    constructor() {
        this.currentLanguage = 'en';
        this.isOpen = false;
        this.responses = this.initializeResponses();
        this.messageHistory = [];
        this.initializeElements();
        this.bindEvents();
        this.setInitialTime();
        this.loadLanguagePreference();
    }

    // Initialize DOM elements
    initializeElements() {
        this.toggleBtn = document.getElementById('chatbot-toggle');
        this.chatWindow = document.getElementById('chatbot-window');
        this.closeBtn = document.getElementById('close-btn');
        this.messagesContainer = document.getElementById('chat-messages');
        this.messageInput = document.getElementById('message-input');
        this.sendBtn = document.getElementById('send-btn');
        this.languageSelector = document.getElementById('language-selector');
        this.typingIndicator = document.getElementById('typing-indicator');
        this.notificationBadge = document.getElementById('notification-badge');
        this.welcomeMessage = document.getElementById('welcome-message');
        this.welcomeTime = document.getElementById('welcome-time');
    }

    // Initialize extensive response templates
    initializeResponses() {
        return {
            en: {
                welcome: [
                    "Hi! I'm your portfolio assistant. How can I help you today?",
                    "Hello! Welcome to my portfolio. What would you like to know?",
                    "Greetings! I'm here to help you explore this portfolio. What interests you?",
                    "Hi there! I'm your virtual assistant. How can I assist you?",
                    "Welcome! I'm here to answer your questions about this portfolio.",
                    "Hello! Ready to explore? What would you like to discover?",
                    "Hi! I'm your portfolio guide. What can I help you with?",
                    "Greetings! I'm here to make your portfolio experience better.",
                    "Hello! I'm your digital assistant. What would you like to know?",
                    "Hi! Welcome aboard! How can I help you today?"
                ],
                greetings: [
                    "Hello! Great to meet you! How can I help you today?",
                    "Hi there! Thanks for visiting. What would you like to know?",
                    "Greetings! I'm excited to help you explore this portfolio.",
                    "Hello! Welcome to our conversation. What interests you?",
                    "Hi! It's wonderful to chat with you. How can I assist?",
                    "Greetings! I'm here to help. What would you like to discover?",
                    "Hello! Thanks for reaching out. What can I help you with?",
                    "Hi there! I'm delighted to meet you. How can I help?",
                    "Greetings! Ready to explore? What would you like to know?",
                    "Hello! I'm here to make your visit memorable. How can I assist?"
                ],
                services: [
                    "I specialize in Design & Visual Projects, creating innovative visual design solutions. What kind of design work interests you?",
                    "I offer Branding & Visual Identity services including logo creation, color palettes, and brand guidelines. What's your brand vision?",
                    "I create Illustration & Promotional Media like posters, infographics, and digital illustrations for campaigns. What's your message?",
                    "I develop interactive games like Memory Card Flip for browser-based entertainment and cognitive training. Want to see it in action?",
                    "I specialize in Visual Storytelling through photography and image manipulation to tell compelling stories. What story do you want to tell?",
                    "I design Packaging as a visual communication medium, creating impactful product presentations. What product needs packaging?",
                    "My design expertise covers everything from concept to final execution. Which design area would you like to explore?",
                    "I create comprehensive visual solutions that combine creativity with strategic thinking. What's your creative challenge?",
                    "I offer end-to-end design services from initial concept through final delivery. What's your project scope?",
                    "I specialize in creating memorable visual experiences that engage and inspire audiences. What's your target audience?",
                    "My work spans traditional and digital media, always focusing on effective visual communication. What medium suits your needs?",
                    "I provide design consultation, creative direction, and hands-on execution. What level of involvement do you need?",
                    "I create designs that not only look great but also serve specific business and communication goals. What's your objective?",
                    "I work with various design tools and techniques to bring creative visions to life. What's your preferred style?",
                    "I offer both individual design pieces and comprehensive design systems. What's your project scale?"
                ],
                portfolio: [
                    "My portfolio features 6 main categories: Design & Visual Projects, Branding & Visual Identity, Illustration & Promotional Media, Memory Card Flip Game, Visual Storytelling, and Packaging Design. Which interests you most?",
                    "I showcase innovative visual design solutions across multiple disciplines. From branding to interactive games, what catches your eye?",
                    "My Design & Visual Projects section contains a collection of innovative visual design assignments. Want to see my creative process?",
                    "I've created comprehensive Branding & Visual Identity packages including logos, color palettes, and brand guidelines. Need brand development?",
                    "My Illustration & Promotional Media work includes posters, infographics, and digital illustrations for various campaigns. What's your campaign about?",
                    "I developed an interactive Memory Card Flip game for browsers that helps train memory and cognitive skills. Want to try it?",
                    "My Visual Storytelling projects use photography and image manipulation to create compelling narratives. What story needs telling?",
                    "I specialize in Packaging Design as a visual communication medium, creating designs that speak to consumers. What product needs packaging?",
                    "Each project in my portfolio demonstrates different aspects of visual communication and design thinking. Which discipline interests you?",
                    "My work ranges from traditional graphic design to interactive digital experiences. What type of project are you considering?",
                    "I've worked on projects that span print, digital, and interactive media. What medium fits your vision?",
                    "My portfolio shows both creative exploration and practical problem-solving through design. What problem needs a creative solution?",
                    "From concept development to final execution, my projects showcase the complete design process. Want to see the behind-the-scenes?",
                    "I've created designs for various industries and audiences, always focusing on effective communication. Who's your target audience?",
                    "My portfolio demonstrates how design can be both beautiful and functional. What's your primary goal: aesthetics or function?"
                ],
                contact: [
                    "You can reach me via email, LinkedIn, or through the contact form on this website. What's your preferred method?",
                    "I'm available for consultations, collaborations, and new projects. How would you like to connect?",
                    "Feel free to contact me through email or social media. I typically respond within 24 hours.",
                    "I'm open to discussing new opportunities and partnerships. What's the best way to reach you?",
                    "You can find my contact information in the footer or contact section. What type of project are you considering?",
                    "I'd love to hear about your project ideas. What's your preferred communication method?",
                    "I'm available for both short-term projects and long-term collaborations. How can we connect?",
                    "Feel free to reach out anytime. I'm always excited to discuss new possibilities!"
                ],
                general: [
                    "That's interesting! Tell me more about what you're looking for.",
                    "I'd be happy to help you with that. Can you provide more details?",
                    "That sounds like a great idea! What's your vision for this project?",
                    "I understand. What specific aspects would you like to focus on?",
                    "That's a good question. Let me help you explore the possibilities.",
                    "I appreciate your interest. What would you like to know more about?",
                    "That's definitely something I can help with. What's your timeline?",
                    "I see what you mean. What approach are you considering?",
                    "That's a common need. What's your specific use case?",
                    "I'd love to help you achieve that. What's your main goal?",
                    "That's within my expertise. What challenges are you facing?",
                    "I can definitely assist with that. What's your budget range?"
                ],
                compliments: [
                    "Thank you so much! I appreciate your kind words and attention to detail.",
                    "That's very kind of you to say! I put a lot of effort into creating quality work.",
                    "I really appreciate the positive feedback! It motivates me to keep improving.",
                    "Thank you! I'm passionate about creating exceptional user experiences.",
                    "That means a lot to me! I strive to deliver high-quality solutions.",
                    "I'm so glad you like it! Quality and user satisfaction are my top priorities.",
                    "Thank you for the compliment! I believe in continuous learning and improvement.",
                    "That's wonderful to hear! I enjoy creating solutions that make a difference.",
                    "I appreciate your recognition! It's rewarding to know the work resonates with users.",
                    "Thank you! I'm committed to delivering excellence in every project."
                ],
                technical: [
                    "I work with design software like Adobe Creative Suite, Figma, and Canva for creating visual content. What design tools do you prefer?",
                    "My technical skills include photo manipulation, vector graphics, and digital illustration techniques. What style are you looking for?",
                    "I'm experienced with web technologies for interactive projects like the Memory Card Flip game. Want to see how it works?",
                    "I use various design methodologies from concept sketching to final digital execution. What's your design process?",
                    "I'm skilled in color theory, typography, and composition principles for effective visual communication. What's your brand personality?",
                    "I work with both print and digital media, understanding the technical requirements for each. What's your output medium?",
                    "I'm proficient in creating responsive designs that work across different devices and screen sizes. What's your target platform?",
                    "I use modern design tools and techniques for creating interactive and engaging user experiences. What's your user journey?",
                    "I'm experienced with brand guidelines, style guides, and maintaining visual consistency across projects. Need brand standards?",
                    "I work with various file formats and technical specifications for different applications. What are your technical requirements?",
                    "I'm skilled in visual hierarchy, information design, and making complex information accessible. What's your message?",
                    "I use design systems and component libraries for consistent and scalable design solutions. What's your project scope?",
                    "I'm experienced with accessibility standards and inclusive design practices. Who's your target audience?",
                    "I work with animation and motion graphics to create engaging visual experiences. What level of interactivity do you need?",
                    "I'm skilled in user research, usability testing, and iterative design improvement. What's your optimization goal?"
                ],
                collaboration: [
                    "I'm always open to collaborating on interesting projects. What type of partnership are you considering?",
                    "I enjoy working with teams and other developers. What's your collaboration style?",
                    "I'm available for both remote and local collaborations. What's your preferred working arrangement?",
                    "I believe in transparent communication and regular updates. How do you like to manage projects?",
                    "I'm experienced in agile methodologies and cross-functional teams. What's your team dynamic?",
                    "I enjoy mentoring junior developers and learning from senior colleagues. What's your experience level?",
                    "I'm comfortable with various project management tools and communication platforms. What tools do you use?",
                    "I believe in code reviews, knowledge sharing, and best practices. What's your quality process?",
                    "I'm open to short-term contracts and long-term partnerships. What's your project timeline?",
                    "I value mutual respect, clear expectations, and fair compensation. What are your collaboration principles?"
                ],
                closing: [
                    "Thank you for your time! Feel free to reach out if you have any other questions.",
                    "It was great chatting with you! I look forward to hearing from you soon.",
                    "Thanks for visiting my portfolio! Don't hesitate to contact me if you need anything else.",
                    "I appreciate your interest! I'm excited about the possibility of working together.",
                    "Thank you for the conversation! I'm here whenever you need assistance.",
                    "It's been a pleasure talking with you! I hope we can collaborate soon.",
                    "Thanks for exploring my work! I'm always ready to discuss new opportunities.",
                    "I'm grateful for your time and consideration! Looking forward to our next conversation."
                ],
                design_projects: [
                    "My Design & Visual Projects showcase innovative visual design solutions across various mediums. What type of design work interests you most?",
                    "I create visually compelling designs that communicate effectively and engage audiences. What's your design challenge?",
                    "My design projects range from conceptual explorations to practical applications. What problem needs a creative solution?",
                    "I combine creativity with strategic thinking to deliver impactful visual solutions. What's your project objective?",
                    "My visual design work demonstrates expertise in layout, color, typography, and composition. What's your aesthetic preference?",
                    "I approach each design project with fresh perspective and innovative solutions. What's your vision?",
                    "My design portfolio shows versatility across different styles and applications. What style resonates with you?",
                    "I create designs that not only look great but also serve specific communication goals. What message do you want to convey?"
                ],
                branding: [
                    "I specialize in creating comprehensive Branding & Visual Identity systems including logos, color palettes, and brand guidelines. What's your brand story?",
                    "My branding work helps businesses establish strong visual identities that resonate with their target audience. Who's your audience?",
                    "I create memorable logos and brand elements that effectively communicate brand values and personality. What's your brand personality?",
                    "My branding process includes research, concept development, and detailed brand guidelines. What's your brand positioning?",
                    "I develop cohesive visual identity systems that work across all touchpoints and media. What's your brand ecosystem?",
                    "My branding expertise covers everything from startup identities to established brand refreshes. What's your brand status?",
                    "I create brand identities that are both distinctive and meaningful to your target market. What makes your brand unique?",
                    "My branding work ensures consistency and recognition across all brand communications. What's your brand consistency challenge?"
                ],
                illustration: [
                    "I create Illustration & Promotional Media including posters, infographics, and digital illustrations for various campaigns. What's your campaign theme?",
                    "My illustration work spans from editorial graphics to promotional materials that capture attention and communicate messages. What's your message?",
                    "I design infographics that make complex information accessible and engaging. What data needs visualization?",
                    "My promotional media designs are created to maximize impact and audience engagement. What's your promotional goal?",
                    "I create custom illustrations that perfectly match your brand and communication needs. What style fits your brand?",
                    "My poster designs combine visual impact with clear messaging for maximum effectiveness. What event needs promotion?",
                    "I develop illustration concepts that support your marketing and communication objectives. What's your target outcome?",
                    "My digital illustrations are optimized for various platforms and applications. What's your distribution strategy?"
                ],
                memory_game: [
                    "I developed an interactive Memory Card Flip game for browsers that helps train memory and cognitive skills. Want to try it?",
                    "My Memory Card Flip game combines entertainment with cognitive training in an engaging browser experience. What's your skill level?",
                    "The game features multiple difficulty levels and tracks progress to help users improve their memory skills. Ready for a challenge?",
                    "I created this interactive game to demonstrate my abilities in combining design with functionality. What do you think of the concept?",
                    "The Memory Card Flip game is fully responsive and works on all devices. What device do you prefer for gaming?",
                    "This project shows my skills in creating engaging user experiences through interactive design. What other interactive features interest you?",
                    "The game includes smooth animations and intuitive controls for the best user experience. What's your favorite type of game?",
                    "I designed this game to be both educational and entertaining, perfect for all ages. Who would you recommend it to?"
                ],
                visual_storytelling: [
                    "My Visual Storytelling projects use photography and image manipulation to create compelling narratives. What story needs telling?",
                    "I combine photography techniques with digital manipulation to create powerful visual narratives. What's your story?",
                    "My visual storytelling work helps brands and individuals communicate their messages through compelling imagery. What's your message?",
                    "I create photo series and manipulated images that evoke emotions and tell stories. What emotion do you want to convey?",
                    "My storytelling approach uses visual metaphors and symbolic imagery to communicate complex ideas. What concept needs visualization?",
                    "I work with both staged photography and post-processing to create the perfect visual narrative. What's your preferred style?",
                    "My visual storytelling projects demonstrate how images can communicate more effectively than words. What's your communication challenge?",
                    "I create compelling visual narratives for marketing, editorial, and personal projects. What's your project type?"
                ],
                packaging: [
                    "I design Packaging as a visual communication medium, creating designs that speak directly to consumers. What product needs packaging?",
                    "My packaging designs combine functionality with visual appeal to create shelf impact. What's your product positioning?",
                    "I create packaging that not only protects the product but also communicates brand values and attracts customers. What's your brand message?",
                    "My packaging work considers both the physical and psychological aspects of consumer interaction. Who's your target consumer?",
                    "I design packaging systems that work across product lines while maintaining brand consistency. What's your product range?",
                    "My packaging designs are optimized for both retail environments and e-commerce platforms. What's your sales channel?",
                    "I create packaging that tells your product's story and differentiates it from competitors. What makes your product unique?",
                    "My packaging expertise includes structural design, graphics, and material considerations. What are your packaging constraints?"
                ]
            },
            id: {
                welcome: [
                    "Halo! Saya asisten portofolio Anda. Bagaimana saya bisa membantu hari ini?",
                    "Halo! Selamat datang di portofolio saya. Apa yang ingin Anda ketahui?",
                    "Selamat datang! Saya di sini untuk membantu Anda menjelajahi portofolio ini. Apa yang menarik minat Anda?",
                    "Hai! Saya asisten virtual Anda. Bagaimana saya bisa membantu?",
                    "Selamat datang! Saya di sini untuk menjawab pertanyaan Anda tentang portofolio ini.",
                    "Halo! Siap untuk menjelajah? Apa yang ingin Anda temukan?",
                    "Hai! Saya pemandu portofolio Anda. Apa yang bisa saya bantu?",
                    "Selamat datang! Saya di sini untuk membuat pengalaman portofolio Anda lebih baik.",
                    "Halo! Saya asisten digital Anda. Apa yang ingin Anda ketahui?",
                    "Hai! Selamat datang! Bagaimana saya bisa membantu Anda hari ini?"
                ],
                greetings: [
                    "Halo! Senang bertemu dengan Anda! Bagaimana saya bisa membantu hari ini?",
                    "Hai! Terima kasih telah berkunjung. Apa yang ingin Anda ketahui?",
                    "Selamat datang! Saya senang membantu Anda menjelajahi portofolio ini.",
                    "Halo! Selamat datang dalam percakapan kita. Apa yang menarik minat Anda?",
                    "Hai! Sangat menyenangkan mengobrol dengan Anda. Bagaimana saya bisa membantu?",
                    "Selamat datang! Saya di sini untuk membantu. Apa yang ingin Anda temukan?",
                    "Halo! Terima kasih telah menghubungi. Apa yang bisa saya bantu?",
                    "Hai! Saya senang bertemu dengan Anda. Bagaimana saya bisa membantu?",
                    "Selamat datang! Siap untuk menjelajah? Apa yang ingin Anda ketahui?",
                    "Halo! Saya di sini untuk membuat kunjungan Anda berkesan. Bagaimana saya bisa membantu?"
                ],
                services: [
                    "Saya spesialis dalam Design & Visual Projects, menciptakan solusi desain visual yang inovatif. Jenis desain apa yang menarik minat Anda?",
                    "Saya menawarkan layanan Branding & Visual Identity termasuk pembuatan logo, palet warna, dan panduan brand. Apa visi brand Anda?",
                    "Saya membuat Illustration & Media Promosi seperti poster, infografis, dan ilustrasi digital untuk berbagai kampanye. Apa pesan Anda?",
                    "Saya mengembangkan game interaktif seperti Memory Card Flip untuk hiburan browser dan pelatihan kognitif. Ingin melihat aksinya?",
                    "Saya spesialis dalam Visual Storytelling melalui fotografi dan manipulasi gambar untuk menceritakan kisah yang menarik. Cerita apa yang ingin Anda sampaikan?",
                    "Saya mendesain Packaging sebagai media komunikasi visual, menciptakan presentasi produk yang berdampak. Produk apa yang perlu kemasan?",
                    "Keahlian desain saya mencakup segala hal dari konsep hingga eksekusi final. Area desain mana yang ingin Anda jelajahi?",
                    "Saya menciptakan solusi visual komprehensif yang menggabungkan kreativitas dengan pemikiran strategis. Apa tantangan kreatif Anda?",
                    "Saya menawarkan layanan desain end-to-end dari konsep awal hingga pengiriman final. Apa ruang lingkup proyek Anda?",
                    "Saya spesialis dalam menciptakan pengalaman visual yang berkesan yang melibatkan dan menginspirasi audiens. Siapa target audiens Anda?",
                    "Karya saya mencakup media tradisional dan digital, selalu fokus pada komunikasi visual yang efektif. Media apa yang sesuai dengan kebutuhan Anda?",
                    "Saya menyediakan konsultasi desain, arahan kreatif, dan eksekusi langsung. Tingkat keterlibatan apa yang Anda butuhkan?",
                    "Saya menciptakan desain yang tidak hanya terlihat bagus tetapi juga melayani tujuan bisnis dan komunikasi tertentu. Apa objektif Anda?",
                    "Saya bekerja dengan berbagai alat dan teknik desain untuk mewujudkan visi kreatif. Apa gaya yang Anda sukai?",
                    "Saya menawarkan baik karya desain individual maupun sistem desain komprehensif. Apa skala proyek Anda?"
                ],
                portfolio: [
                    "Portofolio saya menampilkan 6 kategori utama: Design & Visual Projects, Branding & Visual Identity, Illustration & Media Promosi, Memory Card Flip Game, Visual Storytelling, dan Packaging Design. Mana yang paling menarik minat Anda?",
                    "Saya menampilkan solusi desain visual inovatif di berbagai disiplin ilmu. Dari branding hingga game interaktif, mana yang menarik perhatian Anda?",
                    "Bagian Design & Visual Projects saya berisi koleksi tugas desain visual yang inovatif. Ingin melihat proses kreatif saya?",
                    "Saya telah membuat paket Branding & Visual Identity yang komprehensif termasuk logo, palet warna, dan panduan brand. Butuh pengembangan brand?",
                    "Karya Illustration & Media Promosi saya mencakup poster, infografis, dan ilustrasi digital untuk berbagai kampanye. Tentang apa kampanye Anda?",
                    "Saya mengembangkan game interaktif Memory Card Flip untuk browser yang membantu melatih daya ingat dan keterampilan kognitif. Ingin mencobanya?",
                    "Proyek Visual Storytelling saya menggunakan fotografi dan manipulasi gambar untuk menciptakan narasi yang menarik. Cerita apa yang perlu diceritakan?",
                    "Saya spesialis dalam Packaging Design sebagai media komunikasi visual, menciptakan desain yang berbicara kepada konsumen. Produk apa yang perlu kemasan?",
                    "Setiap proyek dalam portofolio saya menunjukkan aspek komunikasi visual dan design thinking yang berbeda. Disiplin mana yang menarik minat Anda?",
                    "Karya saya berkisar dari desain grafis tradisional hingga pengalaman digital interaktif. Jenis proyek apa yang Anda pertimbangkan?",
                    "Saya telah mengerjakan proyek yang mencakup media cetak, digital, dan interaktif. Media apa yang sesuai dengan visi Anda?",
                    "Portofolio saya menunjukkan eksplorasi kreatif dan pemecahan masalah praktis melalui desain. Masalah apa yang perlu solusi kreatif?",
                    "Dari pengembangan konsep hingga eksekusi final, proyek saya menampilkan proses desain yang lengkap. Ingin melihat di balik layar?",
                    "Saya telah membuat desain untuk berbagai industri dan audiens, selalu fokus pada komunikasi yang efektif. Siapa target audiens Anda?",
                    "Portofolio saya menunjukkan bagaimana desain bisa indah dan fungsional. Apa tujuan utama Anda: estetika atau fungsi?"
                ],
                contact: [
                    "Anda dapat menghubungi saya melalui email, LinkedIn, atau formulir kontak di website ini. Apa metode yang Anda sukai?",
                    "Saya menawarkan layanan konsultasi, pengembangan, dan pemeliharaan. Jenis dukungan apa yang Anda butuhkan?",
                    "Saya membuat solusi kustom menggunakan teknologi terdepan. Apa persyaratan teknis Anda?",
                    "Saya spesialis dalam e-commerce, situs portofolio, dan aplikasi enterprise. Apa tujuan bisnis Anda?",
                    "Saya menyediakan optimasi performa, implementasi keamanan, dan layanan code review. Apa yang perlu ditingkatkan?",
                    "Saya membangun aplikasi yang dapat diakses, SEO-friendly, dan mobile-first. Apa prioritas Anda?",
                    "Saya menawarkan rapid prototyping, pengembangan MVP, dan konsultasi teknis. Dalam tahap apa proyek Anda?"
                ],
                portfolio: [
                    "Portofolio saya menampilkan berbagai proyek termasuk platform e-commerce, website portofolio, dan aplikasi web. Jenis mana yang menarik minat Anda?",
                    "Saya telah membangun proyek mulai dari landing page sederhana hingga aplikasi full-stack yang kompleks. Apa yang ingin Anda lihat?",
                    "Karya saya mencakup aplikasi web modern, desain responsif, dan solusi yang dapat diskalakan. Kategori proyek mana yang menarik bagi Anda?",
                    "Saya telah mengembangkan aplikasi di berbagai industri termasuk fintech, kesehatan, dan pendidikan. Sektor mana yang menarik minat Anda?",
                    "Portofolio saya menampilkan aplikasi React, backend Node.js, dan proyek Python. Stack teknologi apa yang ingin Anda jelajahi?",
                    "Saya telah membuat proyek klien dan eksperimen pribadi. Jenis pekerjaan mana yang ingin Anda tinjau?",
                    "Proyek saya mendemonstrasikan berbagai keterampilan dari desain UI hingga optimasi database. Aspek mana yang paling menarik minat Anda?",
                    "Saya telah membangun mulai dari situs statis sederhana hingga platform SaaS yang kompleks. Skala proyek seperti apa yang Anda pertimbangkan?",
                    "Karya saya mencakup berbagai teknologi dan metodologi. Pendekatan mana yang sesuai dengan kebutuhan Anda?",
                    "Saya telah berkolaborasi dalam proyek tim dan memimpin pengembangan independen. Gaya kerja mana yang Anda sukai?"
                ],
                contact: [
                    "Anda dapat menghubungi saya melalui email, LinkedIn, atau formulir kontak di website ini. Metode mana yang Anda sukai?",
                    "Saya tersedia untuk konsultasi, kolaborasi, dan proyek baru. Bagaimana Anda ingin terhubung?",
                    "Jangan ragu untuk menghubungi saya melalui email atau media sosial. Saya biasanya merespons dalam 24 jam.",
                    "Saya terbuka untuk mendiskusikan peluang dan kemitraan baru. Bagaimana cara terbaik untuk menghubungi Anda?",
                    "Anda dapat menemukan informasi kontak saya di footer atau bagian kontak. Jenis proyek apa yang Anda pertimbangkan?",
                    "Saya ingin mendengar ide proyek Anda. Apa metode komunikasi yang Anda sukai?",
                    "Saya tersedia untuk proyek jangka pendek dan kolaborasi jangka panjang. Bagaimana kita bisa terhubung?",
                    "Jangan ragu untuk menghubungi kapan saja. Saya selalu senang mendiskusikan kemungkinan baru!"
                ],
                general: [
                    "Itu menarik! Ceritakan lebih banyak tentang apa yang Anda cari.",
                    "Saya dengan senang hati membantu Anda dengan itu. Bisakah Anda memberikan detail lebih lanjut?",
                    "Kedengarannya seperti ide yang bagus! Apa visi Anda untuk proyek ini?",
                    "Saya mengerti. Aspek spesifik mana yang ingin Anda fokuskan?",
                    "Itu pertanyaan yang bagus. Biarkan saya membantu Anda menjelajahi kemungkinannya.",
                    "Saya menghargai minat Anda. Apa yang ingin Anda ketahui lebih lanjut?",
                    "Itu pasti sesuatu yang bisa saya bantu. Apa timeline Anda?",
                    "Saya paham maksud Anda. Pendekatan apa yang Anda pertimbangkan?",
                    "Itu kebutuhan yang umum. Apa kasus penggunaan spesifik Anda?",
                    "Saya ingin membantu Anda mencapai itu. Apa tujuan utama Anda?",
                    "Itu dalam keahlian saya. Tantangan apa yang Anda hadapi?",
                    "Saya pasti bisa membantu dengan itu. Berapa kisaran anggaran Anda?"
                ],
                compliments: [
                    "Terima kasih banyak! Saya menghargai kata-kata baik Anda dan perhatian terhadap detail.",
                    "Itu sangat baik dari Anda! Saya berusaha keras untuk menciptakan karya berkualitas.",
                    "Saya sangat menghargai feedback positif! Ini memotivasi saya untuk terus berkembang.",
                    "Terima kasih! Saya bersemangat menciptakan pengalaman pengguna yang luar biasa.",
                    "Itu sangat berarti bagi saya! Saya berusaha memberikan solusi berkualitas tinggi.",
                    "Saya sangat senang Anda menyukainya! Kualitas dan kepuasan pengguna adalah prioritas utama saya.",
                    "Terima kasih atas pujiannya! Saya percaya pada pembelajaran dan perbaikan berkelanjutan.",
                    "Senang mendengarnya! Saya suka menciptakan solusi yang membuat perbedaan.",
                    "Saya menghargai pengakuan Anda! Sangat memuaskan mengetahui karya ini beresonansi dengan pengguna.",
                    "Terima kasih! Saya berkomitmen untuk memberikan keunggulan dalam setiap proyek."
                ],
                technical: [
                    "Saya bekerja dengan teknologi modern termasuk React, Vue.js, Node.js, Python, dan platform cloud. Teknologi apa yang menarik minat Anda?",
                    "Tech stack saya mencakup JavaScript, TypeScript, HTML5, CSS3, dan berbagai framework. Apa teknologi yang Anda sukai?",
                    "Saya berpengalaman dengan database seperti MongoDB, PostgreSQL, dan Redis. Kebutuhan manajemen data apa yang Anda miliki?",
                    "Saya menggunakan tools seperti Git, Docker, AWS, dan CI/CD pipelines untuk pengembangan yang efisien. Apa strategi deployment Anda?",
                    "Saya ahli dalam desain responsif, progressive web apps, dan pengembangan mobile-first. Platform apa yang Anda targetkan?",
                    "Saya bekerja dengan REST APIs, GraphQL, dan arsitektur microservices. Apa persyaratan integrasi Anda?",
                    "Saya mahir dalam testing frameworks, code quality tools, dan optimasi performa. Apa standar kualitas Anda?",
                    "Saya menggunakan build tools modern seperti Webpack, Vite, dan package managers. Apa workflow pengembangan Anda?",
                    "Saya berpengalaman dengan sistem autentikasi, protokol keamanan, dan perlindungan data. Langkah keamanan apa yang Anda butuhkan?",
                    "Saya bekerja dengan analytics, monitoring, dan performance tracking tools. Metrik apa yang penting bagi Anda?",
                    "Saya ahli dalam optimasi SEO, standar aksesibilitas, dan kompatibilitas lintas browser. Siapa target audiens Anda?",
                    "Saya menggunakan version control, proses code review, dan standar dokumentasi. Bagaimana struktur tim Anda?",
                    "Saya berpengalaman dengan metodologi agile, manajemen proyek, dan komunikasi klien. Apa workflow yang Anda sukai?",
                    "Saya bekerja dengan content management systems, platform e-commerce, dan solusi kustom. Apa strategi konten Anda?",
                    "Saya ahli dalam optimasi performa, strategi caching, dan perencanaan skalabilitas. Berapa traffic yang Anda harapkan?"
                ],
                collaboration: [
                    "Saya selalu terbuka untuk berkolaborasi dalam proyek yang menarik. Jenis kemitraan apa yang Anda pertimbangkan?",
                    "Saya senang bekerja dengan tim dan developer lain. Bagaimana gaya kolaborasi Anda?",
                    "Saya tersedia untuk kolaborasi remote dan lokal. Apa pengaturan kerja yang Anda sukai?",
                    "Saya percaya pada komunikasi yang transparan dan update rutin. Bagaimana Anda suka mengelola proyek?",
                    "Saya berpengalaman dalam metodologi agile dan tim lintas fungsi. Bagaimana dinamika tim Anda?",
                    "Saya senang membimbing developer junior dan belajar dari kolega senior. Bagaimana tingkat pengalaman Anda?",
                    "Saya nyaman dengan berbagai tools manajemen proyek dan platform komunikasi. Tools apa yang Anda gunakan?",
                    "Saya percaya pada code review, knowledge sharing, dan best practices. Bagaimana proses kualitas Anda?",
                    "Saya terbuka untuk kontrak jangka pendek dan kemitraan jangka panjang. Apa timeline proyek Anda?",
                    "Saya menghargai rasa hormat, ekspektasi yang jelas, dan kompensasi yang adil. Apa prinsip kolaborasi Anda?"
                ],
                closing: [
                    "Terima kasih atas waktu Anda! Jangan ragu untuk menghubungi jika Anda memiliki pertanyaan lain.",
                    "Senang mengobrol dengan Anda! Saya menantikan kabar dari Anda segera.",
                    "Terima kasih telah mengunjungi portofolio saya! Jangan ragu untuk menghubungi jika Anda membutuhkan hal lain.",
                    "Saya menghargai minat Anda! Saya senang dengan kemungkinan bekerja sama.",
                    "Terima kasih atas percakapannya! Saya di sini kapan pun Anda membutuhkan bantuan.",
                    "Senang berbicara dengan Anda! Saya harap kita bisa berkolaborasi segera.",
                    "Terima kasih telah menjelajahi karya saya! Saya selalu siap mendiskusikan peluang baru.",
                    "Saya berterima kasih atas waktu dan pertimbangan Anda! Menantikan percakapan berikutnya."
                ]
            }
        };
    }

    // Bind event listeners
    bindEvents() {
        this.toggleBtn.addEventListener('click', () => this.toggleChat());
        this.closeBtn.addEventListener('click', () => this.closeChat());
        this.sendBtn.addEventListener('click', () => this.sendMessage());
        this.messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });
        this.languageSelector.addEventListener('change', (e) => this.changeLanguage(e.target.value));
    }

    // Set initial welcome message time
    setInitialTime() {
        const now = new Date();
        this.welcomeTime.textContent = this.formatTime(now);
    }

    // Load language preference from localStorage
    loadLanguagePreference() {
        const savedLang = localStorage.getItem('chatbot-language');
        if (savedLang && this.responses[savedLang]) {
            this.currentLanguage = savedLang;
            this.languageSelector.value = savedLang;
            this.updateWelcomeMessage();
        }
    }

    // Toggle chat window
    toggleChat() {
        this.isOpen = !this.isOpen;
        this.chatWindow.classList.toggle('active', this.isOpen);
        this.toggleBtn.classList.toggle('active', this.isOpen);
        
        if (this.isOpen) {
            this.messageInput.focus();
            this.hideNotificationBadge();
        }
    }

    // Close chat window
    closeChat() {
        this.isOpen = false;
        this.chatWindow.classList.remove('active');
        this.toggleBtn.classList.remove('active');
    }

    // Change language
    changeLanguage(language) {
        this.currentLanguage = language;
        localStorage.setItem('chatbot-language', language);
        this.updateWelcomeMessage();
    }

    // Update welcome message based on language
    updateWelcomeMessage() {
        const welcomeMessages = this.responses[this.currentLanguage].welcome;
        const randomWelcome = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
        this.welcomeMessage.textContent = randomWelcome;
    }

    // Send message
    sendMessage() {
        const message = this.messageInput.value.trim();
        if (!message) return;

        this.addMessage(message, 'user');
        this.messageInput.value = '';
        this.showTypingIndicator();

        // Simulate typing delay
        setTimeout(() => {
            this.hideTypingIndicator();
            const response = this.generateResponse(message);
            this.addMessage(response, 'bot');
        }, 1000 + Math.random() * 2000);
    }

    // Add message to chat
    addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.innerHTML = sender === 'user' ? '<i class="fas fa-user"></i>' : '<i class="fas fa-robot"></i>';
        
        const content = document.createElement('div');
        content.className = 'message-content';
        
        const messageText = document.createElement('p');
        messageText.textContent = text;
        
        const timestamp = document.createElement('span');
        timestamp.className = 'message-time';
        timestamp.textContent = this.formatTime(new Date());
        
        content.appendChild(messageText);
        content.appendChild(timestamp);
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(content);
        
        this.messagesContainer.appendChild(messageDiv);
        this.scrollToBottom();
        
        // Store message in history
        this.messageHistory.push({ text, sender, timestamp: new Date() });
    }

    // Generate response based on message content
    generateResponse(message) {
        const lowerMessage = message.toLowerCase();
        const responses = this.responses[this.currentLanguage];
        
        // Keywords for different categories
        const categories = {
            greetings: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'halo', 'hai', 'selamat'],
            services: ['service', 'work', 'do', 'build', 'develop', 'create', 'layanan', 'kerja', 'buat', 'kembangkan'],
            portfolio: ['portfolio', 'project', 'work', 'example', 'sample', 'portofolio', 'proyek', 'karya', 'contoh'],
            contact: ['contact', 'email', 'reach', 'connect', 'hire', 'kontak', 'hubungi', 'email', 'rekrut'],
            technical: ['technology', 'tech', 'framework', 'language', 'database', 'api', 'teknologi', 'bahasa', 'basis data'],
            collaboration: ['collaborate', 'team', 'together', 'partner', 'join', 'kolaborasi', 'tim', 'bersama', 'bergabung'],
            compliments: ['good', 'great', 'awesome', 'amazing', 'excellent', 'nice', 'love', 'like', 'bagus', 'hebat', 'keren', 'suka'],
            closing: ['thanks', 'thank you', 'bye', 'goodbye', 'see you', 'terima kasih', 'sampai jumpa', 'selamat tinggal']
        };
        
        // Find matching category
        let selectedCategory = 'general';
        let maxMatches = 0;
        
        for (const [category, keywords] of Object.entries(categories)) {
            let matches = 0;
            keywords.forEach(keyword => {
                if (lowerMessage.includes(keyword)) {
                    matches++;
                }
            });
            
            if (matches > maxMatches) {
                maxMatches = matches;
                selectedCategory = category;
            }
        }
        
        // Get random response from selected category
        const categoryResponses = responses[selectedCategory];
        const randomIndex = Math.floor(Math.random() * categoryResponses.length);
        return categoryResponses[randomIndex];
    }

    // Show typing indicator
    showTypingIndicator() {
        this.typingIndicator.classList.add('active');
        this.scrollToBottom();
    }

    // Hide typing indicator
    hideTypingIndicator() {
        this.typingIndicator.classList.remove('active');
    }

    // Hide notification badge
    hideNotificationBadge() {
        this.notificationBadge.style.display = 'none';
    }

    // Scroll to bottom of messages
    scrollToBottom() {
        setTimeout(() => {
            this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
        }, 100);
    }

    // Format time for display
    formatTime(date) {
        return date.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: false 
        });
    }
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioChatbot();
});

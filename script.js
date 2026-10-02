const translations = {
    id: {
        nav_home: "Home",
        nav_about: "Tentang Kami",
        nav_activity: "Bidang Kegiatan",
        nav_structure: "Organisasi",
        nav_visi_misi:"Visi & Misi",
        nav_info: "Informasi",
        cd_days: "Hari",
        cd_hours: "Jam",
        cd_minutes: "Menit",
        cd_seconds: "Detik",
        about_title: "Tentang Kami",
        about_text: "PT ICX GLOBAL INDONESIA merupakan perusahaan yang berfokus pada investasi, penanaman modal, pengelolaan modal, dan pengembangan aset perusahaan. Perusahaan didirikan dengan visi untuk membangun fondasi bisnis yang profesional, disiplin, dan berkelanjutan melalui pengelolaan modal internal serta strategi yang terukur. Sejak awal, ICX GLOBAL INDONESIA diarahkan untuk berkembang secara berkelanjutan dengan mengutamakan integritas, profesionalisme, pengelolaan risiko, dan pencapaian nilai jangka panjang.",
        marquee_text:"Selamat datang di PT ICX GLOBAL INDONESIA – Investasi & Pengembangan Modal – Berfokus pada Pasar Saham Indonesia – Berlandaskan Integritas, Profesionalisme, Disiplin, Keberlanjutan, dan Pengembangan Strategis – Mengelola Modal Internal dengan Pendekatan yang Terukur dan Bertanggung Jawab – Membangun Nilai Melalui Strategi dan Pertumbuhan yang Berkelanjutan.",
        visi_text:"Menjadi perusahaan investasi yang profesional, disiplin, berkelanjutan, dan adaptif dalam mengembangkan aset serta menciptakan nilai perusahaan melalui pengelolaan modal dan strategi yang terukur.",
        vision_judul:"Visi",
        mission_judul:"Misi",
        misi_1:"Mengembangkan aset perusahaan melalui pengelolaan modal yang profesional, disiplin, dan bertanggung jawab.",
        misi_2:"Menjalankan kegiatan investasi dan penanaman modal berdasarkan data, analisis, strategi, serta pengelolaan risiko yang terukur.",
        misi_3:"Membangun tata kelola dan budaya kerja yang berlandaskan integritas, profesionalisme, disiplin, dan tanggung jawab.",
        misi_4:"Mengembangkan strategi, sistem, dan kemampuan perusahaan secara berkelanjutan untuk pertumbuhan aset dan nilai perusahaan jangka panjang.",
        tentang_judul:"Tentang Kami",
        nilai_prinsip:"Nilai & Prinsip",
        text_nilai_prinsip:"PT ICX GLOBAL INDONESIA berpegang pada integritas, profesionalisme, disiplin, dan inovasi. Kami menjaga kepercayaan mitra melalui transparansi, akuntabilitas, dan komitmen terhadap hasil terbaik. Setiap langkah kami didasari pada prinsip pengelolaan sumber daya yang bertanggung jawab, efisien, dan berkelanjutan. Kami juga mengutamakan keselamatan, kesehatan, dan kesejahteraan dalam setiap operasi, serta membangun hubungan yang saling percaya, kolaboratif, dan berkelanjutan dengan seluruh pemangku kepentingan.",
        bidang_kegiatan_judul:"Bidang Kegiatan",
        text_bidang_kegiatan:"PT ICX GLOBAL INDONESIA berfokus pada investasi dan pengelolaan sumber daya strategis, pengembangan usaha berbasis inovasi, serta penyediaan solusi konsultasi dan manajemen proyek. Kami juga mendukung pengembangan ekonomi lokal melalui kemitraan yang kuat, pemanfaatan teknologi, dan pendekatan yang berorientasi pada dampak jangka panjang.",
        struktur_organisasi_judul:"STRUKTUR ORGANISASI",
        text_penutup_kontak:"PT ICX GLOBAL INDONESIA berkomitmen untuk terus mengembangkan aset dan perusahaan melalui pengelolaan modal internal yang terarah, strategi tepat, disiplin, integritas, dan profesionalisme. Kami berorientasi pada pertumbuhan serta penciptaan nilai perusahaan secara berkelanjutan. Terima kasih telah mempercayai PT ICX GLOBAL INDONESIA. Kami terus melangkah menjadi perusahaan yang profesional, adaptif, dan berorientasi pada pertumbuhan jangka panjang.",
        info_selengkapnya_pdf:"Informasi Selengkapnya :",
    },
    en: {
        nav_home: "Home",
        nav_about: "About Us",
        nav_activity: "Business Fields",
        nav_structure: "Organization",
        nav_visi_misi:"Vision & mission",
        nav_info: "Information",
        cd_days: "Days",
        cd_hours: "Hours",
        cd_minutes: "Minutes",
        cd_seconds: "Seconds",
        about_title: "About Us",
        about_text: "PT ICX GLOBAL INDONESIA is a company focused on investment, capital placement, capital management, and asset development. Established with a vision to build a professional, disciplined, and sustainable business foundation through internal capital management and measured strategies, ICX GLOBAL INDONESIA strives for sustainable growth prioritizing integrity, professionalism, risk management, and long-term value creation.",
        marquee_text: "Welcome to PT ICX GLOBAL INDONESIA – Investment & Capital Development – ​​Focused on the Indonesian Stock Market – Driven by Integrity, Professionalism, Discipline, Sustainability, and Strategic Development – ​​Managing Internal Capital with a Measured and Responsible Approach – Building Value Through Sustainable Strategies and Growth.",
        visi_text:"To become a professional, disciplined, sustainable, and adaptive investment company in developing assets and creating corporate value through capital management and measured strategies.",
        vision_judul:"Vision",
        mission_judul:"Mission",
        misi_1:"Growing corporate assets through professional, disciplined, and responsible capital management.",
        misi_2:"Conducting investment activities based on data, analysis, strategy, and measurable risk management.",
        misi_3:"Establishing governance and a work culture grounded in integrity, professionalism, discipline, and responsibility.",
        misi_4:"Continuously developing the company's strategies, systems, and capabilities to drive long-term growth in assets and corporate value.",
        tentang_judul:"About Us",
        nilai_prinsip:"Values ​​& Principles",
        text_nilai_prinsip:"PT ICX GLOBAL INDONESIA upholds integrity, professionalism, discipline, and innovation. We maintain partner trust through transparency, accountability, and a commitment to achieving the best results. Every step we take is grounded in principles of responsible, efficient, and sustainable resource management. We also prioritize safety, health, and well-being in all operations, while building relationships based on mutual trust, collaboration, and sustainability with all stakeholders.",
        bidang_kegiatan_judul:"Field of Activity",
        text_bidang_kegiatan:"PT ICX GLOBAL INDONESIA focuses on the investment and management of strategic resources, innovation-driven business development, and the provision of consulting and project management solutions. We also support local economic development through strong partnerships, the utilization of technology, and an approach oriented towards long-term impact.",
        struktur_organisasi_judul:"ORGANIZATIONAL STRUCTURE",
        text_penutup_kontak:"PT ICX GLOBAL INDONESIA is committed to the continuous development of its assets and the company through targeted internal capital management, sound strategies, discipline, integrity, and professionalism. We are dedicated to growth and the creation of sustainable corporate value. Thank you for placing your trust in PT ICX GLOBAL INDONESIA. We continue to advance as a professional, adaptive company focused on long-term growth.",
        info_selengkapnya_pdf:"Further Information :"
    }
};

let currentLang = 'id';

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        currentLang = btn.dataset.lang;
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        document.querySelectorAll('[data-id]').forEach(el => {
            const key = el.dataset.id;
            if (translations[currentLang][key]) {
                el.textContent = translations[currentLang][key];
            }
        });
    });
});

const BASE_YEAR = 2029;

function getTargetDate() {
    const now = new Date();
    let target = new Date(`${BASE_YEAR}-01-31T00:00:00`);
    while (now > target) {
        target.setFullYear(target.getFullYear() + 1);
    }
    return target;
}

function getAnniversaryNumber(targetDate) {
    return targetDate.getFullYear() - BASE_YEAR + 1;
}

function updateDisplay() {
    const now = new Date();
    const target = getTargetDate();
    const yearNum = getAnniversaryNumber(target);
    
    const heading = document.getElementById('hero-heading');
    if (currentLang === 'id') {
        heading.textContent = `MENUJU ${yearNum} TAHUN ICX`;
    } else {
        heading.textContent = `TOWARD ICX'S ${yearNum}${yearNum===1?'ST':yearNum===2?'ND':'TH'} ANNIVERSARY`;
    }
    
    document.getElementById('target-date').textContent = 
        `31 JANUARI ${target.getFullYear()}`;
    
    const diff = target - now;
    if (diff <= 0) {
        document.getElementById('days').textContent = '0';
        document.getElementById('hours').textContent = '0';
        document.getElementById('minutes').textContent = '0';
        document.getElementById('seconds').textContent = '0';
        return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

updateDisplay();
setInterval(updateDisplay, 1000);

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
        about_text: "PT ICX GLOBAL INDONESIA merupakan perusahaan yang berfokus pada investasi, penanaman modal, pengelolaan modal, dan pengembangan aset perusahaan. Perusahaan didirikan dengan visi untuk membangun fondasi bisnis yang profesional, disiplin, dan berkelanjutan melalui pengelolaan modal internal serta strategi yang terukur. Sejak awal, ICX GLOBAL INDONESIA diarahkan untuk berkembang secara bertahap dengan mengutamakan integritas, profesionalisme, pengelolaan risiko, dan penciptaan nilai jangka panjang.",
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
        text_nilai_prinsip:"PT ICX GLOBAL INDONESIA berpegang pada integritas, profesionalisme, disiplin, keberlanjutan, dan pengembangan strategi sebagai landasan dalam menjalankan setiap kegiatan perusahaan. Nilai-nilai tersebut menjadi pedoman dalam mengambil keputusan, menjalankan tanggung jawab, mengelola aset, serta membangun hubungan kerja yang baik. Dengan prinsip tersebut, perusahaan berkomitmen untuk terus berkembang secara terarah, konsisten, dan berkelanjutan, serta menciptakan nilai jangka panjang bagi perusahaan.",
        bidang_kegiatan_judul:"Bidang Kegiatan",
        text_bidang_kegiatan:"PT ICX GLOBAL INDONESIA berfokus pada investasi dan penanaman modal sebagai bagian dari upaya pengembangan aset dan nilai perusahaan. Kegiatan perusahaan diarahkan pada pengelolaan modal internal, analisis peluang investasi, pengelolaan aset, serta pengembangan strategi investasi yang terukur dan bertanggung jawab, dengan fokus utama pada pasar saham Indonesia.",
        struktur_organisasi_judul:"STRUKTUR ORGANISASI",
        text_penutup_kontak:"PT ICX GLOBAL INDONESIA berkomitmen untuk terus mengembangkan aset dan perusahaan melalui pengelolaan modal internal yang terarah, strategi yang terukur, disiplin, integritas, dan profesionalisme, dengan berorientasi pada pertumbuhan serta penciptaan nilai perusahaan secara berkelanjutan. Terima kasih telah mengenal PT ICX GLOBAL INDONESIA lebih dekat. Kami terus melangkah untuk membangun perusahaan yang profesional, adaptif, dan berorientasi pada pertumbuhan jangka Panjang.",
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
        about_text: "PT ICX GLOBAL INDONESIA is a company focused on investment, capital allocation, capital management, and corporate asset development. The company was established with the vision of building a professional, disciplined, and sustainable business foundation through internal capital management and measured strategies. From the outset, ICX GLOBAL INDONESIA has been guided to grow steadily by prioritizing integrity, professionalism, risk management, and long-term value creation.",
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
        text_nilai_prinsip:"PT ICX GLOBAL INDONESIA upholds integrity, professionalism, discipline, sustainability, and strategic development as the foundation for all its business activities. These values guide decision-making, the fulfillment of responsibilities, asset management, and the cultivation of strong working relationships. Guided by these principles, the company is committed to achieving focused, consistent, and sustainable growth while creating long-term value.",
        bidang_kegiatan_judul:"Field of Activity",
        text_bidang_kegiatan:"PT ICX GLOBAL INDONESIA focuses on investment and capital allocation as part of its efforts to grow assets and enhance corporate value. The company’s activities are directed toward internal capital management, investment opportunity analysis, asset management, and the development of measured and responsible investment strategies, with a primary focus on the Indonesian stock market.",
        struktur_organisasi_judul:"ORGANIZATIONAL STRUCTURE",
        text_penutup_kontak:"PT ICX GLOBAL INDONESIA is committed to continuously developing its assets and the company through focused internal capital management, measured strategies, discipline, integrity, and professionalism, all while prioritizing growth and the sustainable creation of corporate value. Thank you for getting to know PT ICX GLOBAL INDONESIA better. We continue to move forward in building a company that is professional, adaptive, and oriented toward long-term growth.",
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

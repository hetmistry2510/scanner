const projects = [
    {
        id: 1,
        title: "Properties",
        tag: "Real Estate",
        desc: "A property management platform where users can browse properties and connect with us via automated email integration.",
        repo: "https://github.com/hetmistry2510/properties.git",
        live: "https://makeproperties.vercel.app/login.html"
    },
    {
        id: 2,
        title: "My Cafe",
        tag: "Hospitality",
        desc: "Experience the vibe, book slots, and leave reviews. Built with React and Firebase for real-time updates.",
        repo: "https://github.com/hetmistry2510/My_Cafe",
        live: "https://my-cafe-nu.vercel.app/"
    },
    {
        id: 3,
        title: "Pet",
        tag: "Mini Web Project",
        desc: "A clean and functional task management interface built using simple HTML and CSS.",
        repo: "https://github.com/hetmistry2510/todo",
        live: "https://todo-ngn9-9y7b71e5v-hetmistry2510s-projects.vercel.app/"
    },
    {
        id: 4,
        title: "File Converter",
        tag: "Utility Tool",
        desc: "A powerful tool for converting file formats, specifically designed for converting Excel data to CSV.",
        repo: "https://github.com/hetmistry2510/converter",
        live: null
    },
    {
        id: 5,
        title: "Nivasa Web",
        tag: "Management",
        desc: "A comprehensive Society Management System designed to handle resident data and community operations.",
        repo: "https://github.com/laljeemiyani/nivasa-web",
        live: null
    },
    {
        id: 6,
        title: "Filmcraft",
        tag: "Creative",
        desc: "A creative portfolio platform focused on film production and visual storytelling.",
        repo: "https://github.com/Vardaan-Studio/Filmcraft",
        live: null
    },
    {
        id: 7,
        title: "3D Visualizer",
        tag: "Internship",
        desc: "Advanced 3D visualization project developed during internship to showcase interactive 3D models.",
        repo: null,
        live: "https://prod-3-d.vercel.app/"
    },
    {
        id: 8,
        title: "Hotel System",
        tag: "Hospitality",
        desc: "A comprehensive Hotel Management and Ordering System featuring an automated admin dashboard and real-time menu management.",
        repo: "https://github.com/hetmistry2510/Hotel.git",
        live: null
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const projectsGrid = document.querySelector('.projects-grid');

    // Render Projects
    projectsGrid.innerHTML = '';
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        card.innerHTML = `
            <div class="project-header">
                <span class="project-tag">${project.tag}</span>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${project.desc}</p>
            </div>
            <div class="project-links">
                ${project.repo ? `
                <a href="${project.repo}" target="_blank" class="link-item">
                    <span>📂</span> Repo
                </a>
                ` : ''}
                ${project.live ? `
                <a href="${project.live}" target="_blank" class="link-item">
                    <span>🚀</span> Live
                </a>
                ` : ''}
            </div>
        `;

        projectsGrid.appendChild(card);
    });

    const portfolioQrContainer = document.getElementById('portfolio-qrcode');
    const downloadPortfolioQrBtn = document.getElementById('download-portfolio-qr');

    if (portfolioQrContainer) {
        // Generate QR for the live Vercel link
        const liveUrl = "https://scannermy.vercel.app/";
        
        new QRCode(portfolioQrContainer, {
            text: liveUrl,
            width: 200,
            height: 200,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });

        // Download Logic
        if (downloadPortfolioQrBtn) {
            downloadPortfolioQrBtn.onclick = () => {
                const img = portfolioQrContainer.querySelector('img');
                if (img) {
                    const link = document.createElement('a');
                    link.href = img.src;
                    link.download = "Scanner_Portfolio_QR.png";
                    link.click();
                }
            };
        }
    }
});

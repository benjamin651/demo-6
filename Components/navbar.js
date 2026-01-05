class IronbladeNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <style>
            :host {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                z-index: 1000;
                background: rgba(255, 255, 255, 0.92);
                backdrop-filter: blur(8px);
                border-bottom: 1px solid rgba(0,0,0,0.06);
                transition: all 0.3s ease;
            }

            .navbar-container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 0.9rem 2rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            /* Logo */
            .logo {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                font-size: 1.4rem;
                font-weight: 800;
                letter-spacing: 0.05em;
                color: #2b6e4a;
                text-decoration: none;
            }

            .logo-icon {
                color: #d4a017;
            }

            /* Nav links */
            .nav-links {
                display: flex;
                align-items: center;
                gap: 2rem;
            }

            .nav-link {
                position: relative;
                font-size: 0.95rem;
                font-weight: 500;
                color: #333;
                text-decoration: none;
                padding: 0.25rem 0;
                transition: color 0.25s ease;
            }

            .nav-link:hover {
                color: #2b6e4a;
            }

            .nav-link::after {
                content: '';
                position: absolute;
                left: 50%;
                bottom: -6px;
                width: 0;
                height: 2px;
                background: #d4a017;
                transition: all 0.25s ease;
                transform: translateX(-50%);
            }

            .nav-link:hover::after {
                width: 100%;
            }

            /* CTA */
            .cta-button {
                display: inline-flex;
                align-items: center;
                gap: 0.5rem;
                background: linear-gradient(135deg, #d4a017, #c19115);
                color: #fff;
                font-size: 0.9rem;
                font-weight: 600;
                padding: 0.55rem 1.4rem;
                border-radius: 999px;
                text-decoration: none;
                box-shadow: 0 4px 12px rgba(212,160,23,0.35);
                transition: all 0.25s ease;
            }

            .cta-button:hover {
                transform: translateY(-1px);
                box-shadow: 0 6px 16px rgba(212,160,23,0.45);
            }

            /* Mobile */
            .mobile-menu-button {
                display: none;
                background: none;
                border: none;
                cursor: pointer;
                color: #2b6e4a;
            }

            @media (max-width: 768px) {
                .mobile-menu-button {
                    display: block;
                }

                .nav-links {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: white;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 1.2rem;
                    padding: 1.5rem 2rem;
                    border-bottom: 1px solid rgba(0,0,0,0.08);
                    display: none;
                }

                .nav-links.active {
                    display: flex;
                }

                .cta-button {
                    width: 100%;
                    justify-content: center;
                }
            }
        </style>

        <div class="navbar-container">
            <a href="/" class="logo">
                <i data-feather="scissors" class="logo-icon"></i>
                IRONBLADE
            </a>

            <button class="mobile-menu-button">
                <i data-feather="menu"></i>
            </button>

            <div class="nav-links">
                <a href="/" class="nav-link">Home</a>
                <a href="about.html" class="nav-link">About</a>
                <a href="services.html" class="nav-link">Services</a>
                <a href="testimonials.html" class="nav-link">Testimonials</a>
                <a href="contact.html" class="cta-button">
                    <i data-feather="phone"></i>
                    Free Quote
                </a>
            </div>
        </div>
        `;

        const mobileMenuButton = this.shadowRoot.querySelector('.mobile-menu-button');
        const navLinks = this.shadowRoot.querySelector('.nav-links');

        mobileMenuButton.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenuButton.querySelector('i');
            icon.setAttribute(
                'data-feather',
                navLinks.classList.contains('active') ? 'x' : 'menu'
            );
            feather.replace();
        });

        this.shadowRoot.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileMenuButton.querySelector('i');
                icon.setAttribute('data-feather', 'menu');
                feather.replace();
            });
        });

        feather.replace();
    }
}

customElements.define('ironblade-navbar', IronbladeNavbar);
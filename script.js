// script.js

function switchTab(tabName) {
    // Remove active class from all tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
                    });
                        
                            // Add active class to clicked tab
                                event.target.classList.add('active');
                                    
                                        // Hide all content sections
                                            document.querySelectorAll('.content-section').forEach(section => {
                                                    section.classList.remove('active');
                                                        });
                                                            
                                                                // Show selected content section
                                                                    document.getElementById(tabName).classList.add('active');
                                                                    }

                                                                    function showSection(section) {
                                                                        // This function handles the navbar tabs
                                                                            document.querySelectorAll('.nav-tab').forEach(tab => {
                                                                                    tab.classList.remove('active');
                                                                                        });
                                                                                            
                                                                                                event.currentTarget.classList.add('active');
                                                                                                    
                                                                                                        // Scroll to top smoothly
                                                                                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                                                                                            }

                                                                                                            // Add smooth hover effects for cards
                                                                                                            document.querySelectorAll('.card').forEach(card => {
                                                                                                                card.addEventListener('mouseenter', function() {
                                                                                                                        this.style.transform = 'translateY(-5px)';
                                                                                                                            });
                                                                                                                                
                                                                                                                                    card.addEventListener('mouseleave', function() {
                                                                                                                                            this.style.transform = 'translateY(0)';
                                                                                                                                                });
                                                                                                                                                });

                                                                                                                                                // Add click animation for book items
                                                                                                                                                document.querySelectorAll('.book-item').forEach(item => {
                                                                                                                                                    item.addEventListener('click', function(e) {
                                                                                                                                                            // Create ripple effect
                                                                                                                                                                    const ripple = document.createElement('span');
                                                                                                                                                                            ripple.style.position = 'absolute';
                                                                                                                                                                                    ripple.style.width = '20px';
                                                                                                                                                                                            ripple.style.height = '20px';
                                                                                                                                                                                                    ripple.style.background = 'rgba(124, 58, 237, 0.3)';
                                                                                                                                                                                                            ripple.style.borderRadius = '50%';
                                                                                                                                                                                                                    ripple.style.transform = 'scale(0)';
                                                                                                                                                                                                                            ripple.style.animation = 'ripple 0.6s ease-out';
                                                                                                                                                                                                                                    ripple.style.left = e.offsetX - 10 + 'px';
                                                                                                                                                                                                                                            ripple.style.top = e.offsetY - 10 + 'px';
                                                                                                                                                                                                                                                    ripple.style.pointerEvents = 'none';
                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                    this.style.position = 'relative';
                                                                                                                                                                                                                                                                            this.style.overflow = 'hidden';
                                                                                                                                                                                                                                                                                    this.appendChild(ripple);
                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                    setTimeout(() => ripple.remove(), 600);
                                                                                                                                                                                                                                                                                                        });
                                                                                                                                                                                                                                                                                                        });

                                                                                                                                                                                                                                                                                                        // Add ripple animation keyframes dynamically
                                                                                                                                                                                                                                                                                                        const style = document.createElement('style');
                                                                                                                                                                                                                                                                                                        style.textContent = `
                                                                                                                                                                                                                                                                                                            @keyframes ripple {
                                                                                                                                                                                                                                                                                                                    to {
                                                                                                                                                                                                                                                                                                                                transform: scale(4);
                                                                                                                                                                                                                                                                                                                                            opacity: 0;
                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                        `;
                                                                                                                                                                                                                                                                                                                                                        document.head.appendChild(style);

                                                                                                                                                                                                                                                                                                                                                        // Initialize - ensure fundamental is shown by default
                                                                                                                                                                                                                                                                                                                                                        document.addEventListener('DOMContentLoaded', function() {
                                                                                                                                                                                                                                                                                                                                                            console.log('Livros Fandango - Site carregado com sucesso! 📚');
                                                                                                                                                                                                                                                                                                                                                            });
                                                                                                                                                                                                                                                                                                                                                            
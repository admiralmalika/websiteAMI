# -*- coding: utf-8 -*-

css_addition = """
/* ==========================================================================
   Executive Commodity Specification Modal
   ========================================================================== */
.spec-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(7, 15, 30, 0.78);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.3s ease;
}

.spec-modal-overlay.active {
  opacity: 1;
  visibility: visible;
}

.spec-modal-dialog {
  background: #ffffff;
  color: #1e293b;
  width: 100%;
  max-width: 860px;
  max-height: 88vh;
  border-radius: 20px;
  border: 1px solid rgba(212, 175, 55, 0.4);
  box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  transform: translateY(20px) scale(0.97);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.spec-modal-overlay.active .spec-modal-dialog {
  transform: translateY(0) scale(1);
}

.spec-modal-close {
  position: absolute;
  top: 1rem;
  right: 1.25rem;
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
  color: #475569;
  font-size: 1.5rem;
  line-height: 1;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: all 0.2s ease;
}

.spec-modal-close:hover {
  background: #e2e8f0;
  color: #0f172a;
  transform: rotate(90deg);
}

.spec-modal-header {
  padding: 1.6rem 2rem 1.4rem 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: linear-gradient(135deg, #070f1e 0%, #0d1e38 100%);
  color: #ffffff;
  border-bottom: 2px solid var(--accent-gold);
}

.spec-modal-thumb-wrap {
  width: 84px;
  height: 84px;
  border-radius: 14px;
  overflow: hidden;
  border: 2px solid var(--accent-gold);
  flex-shrink: 0;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
}

.spec-modal-thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.spec-modal-title-area {
  flex: 1;
  padding-right: 2rem;
}

.spec-modal-badge {
  display: inline-block;
  background: rgba(212, 175, 55, 0.18);
  border: 1px solid var(--accent-gold);
  color: var(--accent-gold-hover);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  margin-bottom: 0.4rem;
  text-transform: uppercase;
}

.spec-modal-title {
  font-family: var(--font-heading);
  font-size: 1.45rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.25;
  margin-bottom: 0.25rem;
}

.spec-modal-subtitle {
  font-size: 0.88rem;
  color: #94a3b8;
}

.spec-modal-body {
  padding: 1.5rem 2rem;
  overflow-y: auto;
  flex: 1;
  line-height: 1.6;
}

.spec-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.9rem;
  margin-bottom: 1.4rem;
}

.spec-item-box {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 0.85rem 1rem;
}

.spec-item-label {
  font-size: 0.74rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #64748b;
  margin-bottom: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.spec-item-label i {
  color: #b47b16;
}

.spec-item-val {
  font-size: 0.92rem;
  font-weight: 700;
  color: #0f172a;
}

.spec-section-block {
  margin-bottom: 1.25rem;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 1.15rem 1.35rem;
}

.spec-section-title {
  font-size: 1.02rem;
  font-weight: 800;
  color: #070f1e;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  border-bottom: 1px solid #f1f5f9;
  padding-bottom: 0.45rem;
}

.spec-section-title i {
  color: var(--accent-gold-dark);
}

.spec-detail-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.spec-detail-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  font-size: 0.9rem;
  color: #334155;
  line-height: 1.5;
}

.spec-detail-list li i {
  color: #10b981;
  font-size: 0.92rem;
  margin-top: 0.2rem;
  flex-shrink: 0;
}

.spec-modal-footer {
  padding: 0.9rem 2rem;
  background: #f8fafc;
  border-top: 1px solid #e2e8f0;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  align-items: center;
}

.product-card-click-hint {
  font-size: 0.78rem;
  font-weight: 700;
  color: #b47b16;
  margin-top: 0.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  transition: transform 0.2s ease, color 0.2s ease;
}

.product-card-b2b {
  cursor: pointer;
}

.product-card-b2b:hover .product-card-click-hint {
  color: #d97706;
  transform: translateX(3px);
}

@media (max-width: 640px) {
  .spec-modal-header {
    padding: 1.25rem;
    flex-direction: column;
    text-align: center;
    gap: 0.8rem;
  }
  .spec-modal-title-area {
    padding-right: 0;
  }
  .spec-modal-title {
    font-size: 1.2rem;
  }
  .spec-modal-body {
    padding: 1.25rem;
  }
  .spec-grid {
    grid-template-columns: 1fr;
  }
}
"""

with open('css/style.css', 'r', encoding='utf-8') as f:
    css_content = f.read()

if '.spec-modal-overlay' not in css_content:
    with open('css/style.css', 'a', encoding='utf-8') as f:
        f.write('\n' + css_addition)
    print("Added modal CSS to css/style.css")
else:
    print("Modal CSS already in css/style.css")


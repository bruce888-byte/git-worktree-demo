import { useState, useEffect } from 'react';
import './CookieConsent.css';

const COOKIE_CONSENT_KEY = 'salespilot_cookie_consent';

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
        if (!hasConsent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="cookie-consent">
            <div className="cookie-consent__content">
                <h3 className="cookie-consent__title">我們使用 Cookie</h3>
                <p className="cookie-consent__text">
                    為了提供最佳的使用者體驗，本網頁使用 Cookie 進行分析與個人化設定。繼續瀏覽即表示您同意我們的 Cookie 政策。
                </p>
            </div>
            <div className="cookie-consent__actions">
                <button className="btn btn--outline btn--sm" onClick={handleDecline}>
                    拒絕
                </button>
                <button className="btn btn--primary btn--sm" onClick={handleAccept}>
                    同意
                </button>
            </div>
        </div>
    );
}

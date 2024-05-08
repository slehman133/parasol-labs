export const GA_TRACKING_ID = 'G-2QHVKTJB8F'


// Implemented by Kaeden, updates by Nick
export const pageview = (GA_MEASUREMENT_ID : string, url : string) => {
    window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: url,
    });
};

export const event = ({ action, category, label, value, username}: { action: string, category: string, label: string, value: any, username:string}) => {

    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
        username: username,
    });
};


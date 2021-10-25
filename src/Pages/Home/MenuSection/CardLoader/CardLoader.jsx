import React from 'react';
import ContentLoader from 'react-content-loader';

const CardLoader = () => {
    return (
        Array(4).fill(null).map((item, i) => (
                <ContentLoader
                    speed={2}
                    width={310}
                    height={477}
                    viewBox="0 0 310 477"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                    key={i}
                >
                    <circle cx="140" cy="150" r="110" />
                    <rect x="15" y="266" rx="2" ry="2" width="250" height="26" />
                    <rect x="15" y="296" rx="5" ry="5" width="250" height="76" />
                    <rect x="15" y="376" rx="16" ry="16" width="250" height="30" />
                    <rect x="15" y="410" rx="8" ry="8" width="89" height="36" />
                    <rect x="122" y="410" rx="20" ry="20" width="142" height="36" />
                </ContentLoader>
            ))
    )
}

export default CardLoader
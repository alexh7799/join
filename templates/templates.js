/**
 * renderer for the navbar
 * @returns 
 */
function initNav() {
    return `
        <a class="aside-logo" href="../summary/summary.html">
            <svg width="102" height="122" viewBox="0 0 102 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M72.655 0H50.4972V25.4923H72.655V0Z" fill="white" />
                <path
                    d="M50.4971 46.2251H72.655V82.1779C72.7562 90.8292 70.2941 99.3153 65.5815 106.557C60.9284 113.594 51.9459 121.966 35.3275 121.966C17.2263 121.966 6.67577 113.406 0.98291 108.715L14.9594 91.4743C20.5159 96.0112 25.8679 99.7435 35.4128 99.7435C42.6396 99.7435 45.5202 96.7988 47.2076 94.2307C49.5015 90.6637 50.6881 86.4923 50.6165 82.2464L50.4971 46.2251Z"
                    fill="white" />
                <path d="M39.1967 30.1318H17.0388V52.3884H39.1967V30.1318Z" fill="#29ABE2" />
                <path
                    d="M84.2622 111.522C84.2622 116.265 81.859 118.815 78.5012 118.815C75.1434 118.815 72.9447 115.785 72.9447 111.762C72.9447 107.739 75.2116 104.554 78.6887 104.554C82.1658 104.554 84.2622 107.687 84.2622 111.522ZM75.5184 111.711C75.5184 114.57 76.6604 116.675 78.6205 116.675C80.5806 116.675 81.6885 114.45 81.6885 111.539C81.6885 108.988 80.6659 106.592 78.6205 106.592C76.5752 106.592 75.5184 108.903 75.5184 111.711Z"
                    fill="white" />
                <path d="M88.6597 104.76V118.593H86.2053V104.76H88.6597Z" fill="white" />
                <path
                    d="M91.3187 118.593V104.76H94.0458L96.9775 110.461C97.7322 111.952 98.4036 113.483 98.9887 115.049C98.8353 113.337 98.7672 111.368 98.7672 109.177V104.76H101.017V118.593H98.4774L95.5117 112.772C94.7265 111.243 94.0266 109.671 93.4152 108.064C93.4152 109.776 93.5345 111.711 93.5345 114.09V118.576L91.3187 118.593Z"
                    fill="white" />
            </svg>
        </a>
        <nav class="aside-nav" id="aside-nav">
            <a href="../summary/summary.html" class="active">
                <svg width="30" height="31" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                    d="M25.2273 3.48291H4.77273H4.5C3.39543 3.48291 2.5 4.37864 2.5 5.48321C2.5 5.663 2.5 5.79037 2.5 5.82288V26.2774V26.4829C2.5 27.5875 3.39572 28.4829 4.50029 28.4829C4.64377 28.4829 4.74401 28.4829 4.77272 28.4829H25.2273C25.256 28.4829 25.3562 28.4829 25.4997 28.4829C26.6043 28.4829 27.5 27.587 27.5 26.4824C27.5 26.3756 27.5 26.3017 27.5 26.2774V5.82285C27.5 5.79035 27.5 5.66299 27.5 5.48321C27.5 4.37864 26.6043 3.48291 25.4997 3.48291C25.3562 3.48291 25.256 3.48291 25.2273 3.48291ZM17.2727 26.2774H4.77273V17.1865H17.2727V26.2774ZM17.2727 14.9138H4.77273V5.82288L17.2727 5.82285V14.9138ZM25.2273 26.2774H19.5455V5.82288H25.2273V26.2774Z"
                    fill="white" />
                </svg>
                <div>Summary</div>
            </a>
            <a href="../add-task/add-task.html">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                    d="M2.62652 25.1682C1.95579 25.1682 1.38161 24.9294 0.903963 24.4517C0.426321 23.9741 0.1875 23.3999 0.1875 22.7292V5.65599C0.1875 4.98526 0.426321 4.41107 0.903963 3.93343C1.38161 3.45578 1.95579 3.21696 2.62652 3.21696H13.5107L11.0716 5.65599H2.62652V22.7292H19.6997V14.2535L22.1387 11.8145V22.7292C22.1387 23.3999 21.8999 23.9741 21.4223 24.4517C20.9446 24.9294 20.3704 25.1682 19.6997 25.1682H2.62652ZM16.2546 3.91818L17.9924 5.6255L9.9436 13.6743V15.4121H11.6509L19.7302 7.33282L21.468 9.04013L13.3887 17.1194C13.1651 17.343 12.906 17.5208 12.6113 17.6529C12.3166 17.7851 12.0066 17.8511 11.6814 17.8511H8.72409C8.37856 17.8511 8.08892 17.7342 7.85518 17.5005C7.62144 17.2668 7.50457 16.9771 7.50457 16.6316V13.6743C7.50457 13.3491 7.56555 13.0391 7.6875 12.7444C7.80945 12.4497 7.98222 12.1905 8.20579 11.967L16.2546 3.91818ZM21.468 9.04013L16.2546 3.91818L19.3034 0.869403C19.7912 0.381598 20.3755 0.137695 21.0564 0.137695C21.7373 0.137695 22.3115 0.381598 22.779 0.869403L24.4863 2.60721C24.9538 3.07469 25.1875 3.64379 25.1875 4.31452C25.1875 4.98526 24.9538 5.55436 24.4863 6.02184L21.468 9.04013Z"
                    fill="#CDCDCD" />
                </svg>
                <div>Add Task</div>
            </a>
            <a href="../board/board.html">
                <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M22.9546 2.73855L22.9546 23.1929C22.954 23.7955 22.7143 24.3732 22.2882 24.7993C21.8622 25.2253 21.2844 25.465 20.6819 25.4656L16.1365 25.4656C15.5339 25.465 14.9562 25.2253 14.5301 24.7993C14.104 24.3732 13.8644 23.7955 13.8638 23.1929L13.8638 2.73855C13.8644 2.13597 14.104 1.55825 14.5301 1.13217C14.9562 0.706083 15.5339 0.466443 16.1365 0.465841L20.6819 0.46584C21.2844 0.466443 21.8622 0.706082 22.2882 1.13217C22.7143 1.55825 22.954 2.13597 22.9546 2.73855ZM16.1365 23.1929L20.6819 23.1929L20.6819 2.73855L16.1365 2.73855L16.1365 23.1929ZM16.1365 2.73855L16.1365 23.1929C16.1359 23.7955 15.8962 24.3731 15.4701 24.7992C15.0441 25.2253 14.4663 25.4649 13.8638 25.4655L9.31835 25.4655C8.71578 25.4649 8.13806 25.2253 7.71197 24.7992C7.28589 24.3731 7.04625 23.7954 7.04565 23.1928L7.04565 2.73852C7.04625 2.13595 7.28589 1.55823 7.71197 1.13214C8.13806 0.706058 8.71578 0.466423 9.31835 0.46582L13.8638 0.46582C14.4663 0.466422 15.0441 0.706058 15.4701 1.13214C15.8962 1.55823 16.1359 2.13597 16.1365 2.73855ZM9.31835 23.1928L13.8638 23.1929L13.8638 2.73855L9.31835 2.73852L9.31835 23.1928ZM9.31835 2.73852L9.31835 23.1928C9.31775 23.7954 9.07811 24.3731 8.65203 24.7992C8.22594 25.2253 7.64822 25.4649 7.04565 25.4656L2.50024 25.4656C1.89767 25.4649 1.31995 25.2253 0.893863 24.7992C0.467779 24.3731 0.228141 23.7954 0.227539 23.1928L0.227538 2.73852C0.22814 2.13595 0.467778 1.55823 0.893862 1.13214C1.31995 0.706058 1.89767 0.466423 2.50024 0.46582L7.04565 0.46582C7.64822 0.466423 8.22594 0.706058 8.65203 1.13214C9.07811 1.55823 9.31775 2.13595 9.31835 2.73852ZM2.50024 23.1928L7.04565 23.1928L7.04565 2.73852L2.50024 2.73852L2.50024 23.1928Z"
                        fill="#CDCDCD" />
                    <path
                        d="M29.7727 2.7388L29.7727 23.1931C29.7721 23.7957 29.5324 24.3734 29.1064 24.7995C28.6803 25.2256 28.1026 25.4652 27.5 25.4658L22.9546 25.4658C22.352 25.4652 21.7743 25.2256 21.3482 24.7995C20.9221 24.3734 20.6825 23.7955 20.6819 23.1929L20.6819 2.73855C20.6825 2.13597 20.9221 1.5585 21.3482 1.13242C21.7743 0.706334 22.352 0.466697 22.9546 0.466094L27.5 0.466094C28.1026 0.466696 28.6803 0.706334 29.1064 1.13242C29.5324 1.5585 29.7721 2.13622 29.7727 2.7388ZM22.9546 23.1929L27.5 23.1931L27.5 2.7388L22.9546 2.73855L22.9546 23.1929Z"
                        fill="#CDCDCD" />
                </svg>
                <div>Board</div>
            </a>

            <a href="../contacts/contacts.html">
                <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 20.4658C10.8333 20.4658 9.71875 20.6481 8.65625 21.0127C7.59375 21.3773 6.625 21.9242 5.75 22.6533V22.9658H18.25V22.6533C17.375 21.9242 16.4062 21.3773 15.3438 21.0127C14.2812 20.6481 13.1667 20.4658 12 20.4658ZM3.25 21.5283C4.375 20.4242 5.68229 19.5544 7.17188 18.9189C8.66146 18.2835 10.2708 17.9658 12 17.9658C13.7292 17.9658 15.3385 18.2835 16.8281 18.9189C18.3177 19.5544 19.625 20.4242 20.75 21.5283V5.46582H3.25V21.5283ZM12 15.4658C10.7917 15.4658 9.76042 15.0387 8.90625 14.1846C8.05208 13.3304 7.625 12.2992 7.625 11.0908C7.625 9.88249 8.05208 8.85124 8.90625 7.99707C9.76042 7.1429 10.7917 6.71582 12 6.71582C13.2083 6.71582 14.2396 7.1429 15.0938 7.99707C15.9479 8.85124 16.375 9.88249 16.375 11.0908C16.375 12.2992 15.9479 13.3304 15.0938 14.1846C14.2396 15.0387 13.2083 15.4658 12 15.4658ZM12 12.9658C12.5208 12.9658 12.9635 12.7835 13.3281 12.4189C13.6927 12.0544 13.875 11.6117 13.875 11.0908C13.875 10.57 13.6927 10.1273 13.3281 9.7627C12.9635 9.39811 12.5208 9.21582 12 9.21582C11.4792 9.21582 11.0365 9.39811 10.6719 9.7627C10.3073 10.1273 10.125 10.57 10.125 11.0908C10.125 11.6117 10.3073 12.0544 10.6719 12.4189C11.0365 12.7835 11.4792 12.9658 12 12.9658ZM3.25 25.4658C2.5625 25.4658 1.97396 25.221 1.48438 24.7314C0.994792 24.2419 0.75 23.6533 0.75 22.9658V5.46582C0.75 4.77832 0.994792 4.18978 1.48438 3.7002C1.97396 3.21061 2.5625 2.96582 3.25 2.96582H4.5V0.46582H7V2.96582H17V0.46582H19.5V2.96582H20.75C21.4375 2.96582 22.026 3.21061 22.5156 3.7002C23.0052 4.18978 23.25 4.77832 23.25 5.46582V22.9658C23.25 23.6533 23.0052 24.2419 22.5156 24.7314C22.026 25.221 21.4375 25.4658 20.75 25.4658H3.25Z"
                        fill="#CDCDCD" />
                </svg>
                <div>Contacts</div>
            </a>
        </nav>
        <div class="aside-imprint">
            <a href="../privacypolicy/privacypolicy.html">Privacy Policy</a>
            <a href="../legalnotice/legalnotice.html">Legal notice</a>
        </div>
    `;
}


/**
 * renderer for the header
 * @returns 
 */
function initHeader() {
    return `
        <a class="mobile-logo" href="../summary/summary.html">
            <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.927 0.492188H15.8389V8.64696H22.927V0.492188Z" fill="#2A3647" />
                <path
                    d="M15.8392 15.2793H22.9273V26.7803C22.9597 29.5478 22.1721 32.2624 20.6646 34.5791C19.1761 36.83 16.3027 39.5081 10.9866 39.5081C5.19613 39.5081 1.8211 36.7698 0 35.2692L4.47096 29.7542C6.24844 31.2055 7.96049 32.3994 11.0138 32.3994C13.3256 32.3994 14.2471 31.4574 14.7869 30.6359C15.5207 29.4949 15.9003 28.1604 15.8774 26.8022L15.8392 15.2793Z"
                    fill="#2A3647" />
                <path d="M12.2239 10.1309H5.13574V17.2505H12.2239V10.1309Z" fill="#29ABE2" />
                <path
                    d="M26.6409 36.167C26.6409 37.684 25.8721 38.5001 24.798 38.5001C23.7239 38.5001 23.0205 37.5307 23.0205 36.2437C23.0205 34.9567 23.7457 33.938 24.858 33.938C25.9703 33.938 26.6409 34.9402 26.6409 36.167ZM23.8438 36.2272C23.8438 37.1418 24.2091 37.8155 24.8362 37.8155C25.4632 37.8155 25.8176 37.1035 25.8176 36.1725C25.8176 35.3564 25.4904 34.5897 24.8362 34.5897C24.1819 34.5897 23.8438 35.3291 23.8438 36.2272Z"
                    fill="#2A3647" />
                <path d="M28.0478 34.0039V38.4291H27.2627V34.0039H28.0478Z" fill="#2A3647" />
                <path
                    d="M28.8975 38.4291V34.0039H29.7698L30.7077 35.8276C30.9491 36.3045 31.1639 36.7945 31.351 37.2954C31.302 36.7477 31.2802 36.1179 31.2802 35.4169V34.0039H31.9999V38.4291H31.1875L30.2387 36.567C29.9876 36.0778 29.7637 35.575 29.5681 35.0609C29.5681 35.6086 29.6063 36.2274 29.6063 36.9887V38.4236L28.8975 38.4291Z"
                    fill="#2A3647" />
            </svg>
        </a>
        <div class="h1">Kanban Project Management Tool</div>
        <div class="header-info" id="header-info">
            <a class="info" id="info" href="../help/help.html">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_252047_2282" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
                    <rect width="32" height="32" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_252047_2282)">
                    <path d="M15.95 22C16.3 22 16.5958 21.8792 16.8375 21.6375C17.0792 21.3958 17.2 21.1 17.2 20.75C17.2 20.4 17.0792 20.1042 16.8375 19.8625C16.5958 19.6208 16.3 19.5 15.95 19.5C15.6 19.5 15.3042 19.6208 15.0625 19.8625C14.8208 20.1042 14.7 20.4 14.7 20.75C14.7 21.1 14.8208 21.3958 15.0625 21.6375C15.3042 21.8792 15.6 22 15.95 22ZM16 26C14.6167 26 13.3167 25.7375 12.1 25.2125C10.8833 24.6875 9.825 23.975 8.925 23.075C8.025 22.175 7.3125 21.1167 6.7875 19.9C6.2625 18.6833 6 17.3833 6 16C6 14.6167 6.2625 13.3167 6.7875 12.1C7.3125 10.8833 8.025 9.825 8.925 8.925C9.825 8.025 10.8833 7.3125 12.1 6.7875C13.3167 6.2625 14.6167 6 16 6C17.3833 6 18.6833 6.2625 19.9 6.7875C21.1167 7.3125 22.175 8.025 23.075 8.925C23.975 9.825 24.6875 10.8833 25.2125 12.1C25.7375 13.3167 26 14.6167 26 16C26 17.3833 25.7375 18.6833 25.2125 19.9C24.6875 21.1167 23.975 22.175 23.075 23.075C22.175 23.975 21.1167 24.6875 19.9 25.2125C18.6833 25.7375 17.3833 26 16 26ZM16 24C18.2333 24 20.125 23.225 21.675 21.675C23.225 20.125 24 18.2333 24 16C24 13.7667 23.225 11.875 21.675 10.325C20.125 8.775 18.2333 8 16 8C13.7667 8 11.875 8.775 10.325 10.325C8.775 11.875 8 13.7667 8 16C8 18.2333 8.775 20.125 10.325 21.675C11.875 23.225 13.7667 24 16 24ZM16.1 11.7C16.5167 11.7 16.8792 11.8333 17.1875 12.1C17.4958 12.3667 17.65 12.7 17.65 13.1C17.65 13.4667 17.5375 13.7917 17.3125 14.075C17.0875 14.3583 16.8333 14.625 16.55 14.875C16.1667 15.2083 15.8292 15.575 15.5375 15.975C15.2458 16.375 15.1 16.825 15.1 17.325C15.1 17.5583 15.1875 17.7542 15.3625 17.9125C15.5375 18.0708 15.7417 18.15 15.975 18.15C16.225 18.15 16.4375 18.0667 16.6125 17.9C16.7875 17.7333 16.9 17.525 16.95 17.275C17.0167 16.925 17.1667 16.6125 17.4 16.3375C17.6333 16.0625 17.8833 15.8 18.15 15.55C18.5333 15.1833 18.8625 14.7833 19.1375 14.35C19.4125 13.9167 19.55 13.4333 19.55 12.9C19.55 12.05 19.2042 11.3542 18.5125 10.8125C17.8208 10.2708 17.0167 10 16.1 10C15.4667 10 14.8625 10.1333 14.2875 10.4C13.7125 10.6667 13.275 11.075 12.975 11.625C12.8583 11.825 12.8208 12.0375 12.8625 12.2625C12.9042 12.4875 13.0167 12.6583 13.2 12.775C13.4333 12.9083 13.675 12.95 13.925 12.9C14.175 12.85 14.3833 12.7083 14.55 12.475C14.7333 12.225 14.9625 12.0333 15.2375 11.9C15.5125 11.7667 15.8 11.7 16.1 11.7Z" fill="#A8A8A8"/>
                    </g>
                </svg>  
            </a>
            <div onclick="togglePopUp()" id="profile">MM</div>
        </div>
    `;
}


/**
 * renderer for the profile pop up
 * @returns 
 */
function initProfilePopUp() {
    return `
        <ul id="profile-pop-up" onclick="doNotClose(event)">
            <li id="help-li"><a href="../help/help.html">Help</a></li>
            <li id="legal-notice-li"><a href="../legalnotice/legalnotice.html">Legal Notice</a></li>
            <li id="privacy-policy-li"><a href="../privacypolicy/privacypolicy.html">Privacy Policy</a></li>
            <li id="log-out-li" onclick="logOut()"><a href="#">Log out</a></li>
        </ul>
    `;
}
export const StackIcons = ({type}) => {
    return (
        <>
            {type === "React" && <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                <circle cx="16" cy="15.974" r="2.5" fill="#00d8ff" />
                <path fill="#00d8ff" d="M16 21.706a28.385 28.385 0 0 1-8.88-1.2a11.3 11.3 0 0 1-3.657-1.958A3.543 3.543 0 0 1 2 15.974c0-1.653 1.816-3.273 4.858-4.333A28.755 28.755 0 0 1 16 10.293a28.674 28.674 0 0 1 9.022 1.324a11.376 11.376 0 0 1 3.538 1.866A3.391 3.391 0 0 1 30 15.974c0 1.718-2.03 3.459-5.3 4.541a28.8 28.8 0 0 1-8.7 1.191m0-10.217a27.948 27.948 0 0 0-8.749 1.282c-2.8.977-4.055 2.313-4.055 3.2c0 .928 1.349 2.387 4.311 3.4A27.21 27.21 0 0 0 16 20.51a27.6 27.6 0 0 0 8.325-1.13C27.4 18.361 28.8 16.9 28.8 15.974a2.327 2.327 0 0 0-1.01-1.573a10.194 10.194 0 0 0-3.161-1.654A27.462 27.462 0 0 0 16 11.489" />
                <path fill="#00d8ff" d="M10.32 28.443a2.639 2.639 0 0 1-1.336-.328c-1.432-.826-1.928-3.208-1.327-6.373a28.755 28.755 0 0 1 3.4-8.593a28.676 28.676 0 0 1 5.653-7.154a11.376 11.376 0 0 1 3.384-2.133a3.391 3.391 0 0 1 2.878 0c1.489.858 1.982 3.486 1.287 6.859a28.806 28.806 0 0 1-3.316 8.133a28.385 28.385 0 0 1-5.476 7.093a11.3 11.3 0 0 1-3.523 2.189a4.926 4.926 0 0 1-1.624.307m1.773-14.7a27.948 27.948 0 0 0-3.26 8.219c-.553 2.915-.022 4.668.75 5.114c.8.463 2.742.024 5.1-2.036a27.209 27.209 0 0 0 5.227-6.79a27.6 27.6 0 0 0 3.181-7.776c.654-3.175.089-5.119-.713-5.581a2.327 2.327 0 0 0-1.868.089A10.194 10.194 0 0 0 17.5 6.9a27.464 27.464 0 0 0-5.4 6.849Z" />
                <path fill="#00d8ff" d="M21.677 28.456c-1.355 0-3.076-.82-4.868-2.361a28.756 28.756 0 0 1-5.747-7.237a28.676 28.676 0 0 1-3.374-8.471a11.376 11.376 0 0 1-.158-4A3.391 3.391 0 0 1 8.964 3.9c1.487-.861 4.01.024 6.585 2.31a28.8 28.8 0 0 1 5.39 6.934a28.384 28.384 0 0 1 3.41 8.287a11.3 11.3 0 0 1 .137 4.146a3.543 3.543 0 0 1-1.494 2.555a2.59 2.59 0 0 1-1.315.324m-9.58-10.2a27.949 27.949 0 0 0 5.492 6.929c2.249 1.935 4.033 2.351 4.8 1.9c.8-.465 1.39-2.363.782-5.434A27.212 27.212 0 0 0 19.9 13.74a27.6 27.6 0 0 0-5.145-6.64c-2.424-2.152-4.39-2.633-5.191-2.169a2.327 2.327 0 0 0-.855 1.662a10.194 10.194 0 0 0 .153 3.565a27.465 27.465 0 0 0 3.236 8.1Z" />
            </svg>}

            {type === "Java" && <svg xmlns="http://www.w3.org/2000/svg" width="23.68" height="32" viewBox="0 0 256 346">
                <path fill="#5382a1" d="M82.554 267.473s-13.198 7.675 9.393 10.272c27.369 3.122 41.356 2.675 71.517-3.034c0 0 7.93 4.972 19.003 9.279c-67.611 28.977-153.019-1.679-99.913-16.517m-8.262-37.814s-14.803 10.958 7.805 13.296c29.236 3.016 52.324 3.263 92.276-4.43c0 0 5.526 5.602 14.215 8.666c-81.747 23.904-172.798 1.885-114.296-17.532" />
                <path fill="#e76f00" d="M143.942 165.515c16.66 19.18-4.377 36.44-4.377 36.44s42.301-21.837 22.874-49.183c-18.144-25.5-32.059-38.172 43.268-81.858c0 0-118.238 29.53-61.765 94.6" />
                <path fill="#5382a1" d="M233.364 295.442s9.767 8.047-10.757 14.273c-39.026 11.823-162.432 15.393-196.714.471c-12.323-5.36 10.787-12.8 18.056-14.362c7.581-1.644 11.914-1.337 11.914-1.337c-13.705-9.655-88.583 18.957-38.034 27.15c137.853 22.356 251.292-10.066 215.535-26.195M88.9 190.48s-62.771 14.91-22.228 20.323c17.118 2.292 51.243 1.774 83.03-.89c25.978-2.19 52.063-6.85 52.063-6.85s-9.16 3.923-15.787 8.448c-63.744 16.765-186.886 8.966-151.435-8.183c29.981-14.492 54.358-12.848 54.358-12.848m112.605 62.942c64.8-33.672 34.839-66.03 13.927-61.67c-5.126 1.066-7.411 1.99-7.411 1.99s1.903-2.98 5.537-4.27c41.37-14.545 73.187 42.897-13.355 65.647c0 .001 1.003-.895 1.302-1.697" />
                <path fill="#e76f00" d="M162.439.371s35.887 35.9-34.037 91.101c-56.071 44.282-12.786 69.53-.023 98.377c-32.73-29.53-56.75-55.526-40.635-79.72C111.395 74.612 176.918 57.393 162.439.37" />
                <path fill="#5382a1" d="M95.268 344.665c62.199 3.982 157.712-2.209 159.974-31.64c0 0-4.348 11.158-51.404 20.018c-53.088 9.99-118.564 8.824-157.399 2.421c.001 0 7.95 6.58 48.83 9.201" />
            </svg>}

            {type === "Python" && <svg xmlns="http://www.w3.org/2000/svg" width="32.13" height="32" viewBox="0 0 256 255">
                <defs>
                    <linearGradient id="logosPython0" x1="12.959%" x2="79.639%" y1="12.039%" y2="78.201%">
                        <stop offset="0%" stop-color="#387eb8" />
                        <stop offset="100%" stop-color="#366994" />
                    </linearGradient>
                    <linearGradient id="logosPython1" x1="19.128%" x2="90.742%" y1="20.579%" y2="88.429%">
                        <stop offset="0%" stop-color="#ffe052" />
                        <stop offset="100%" stop-color="#ffc331" />
                    </linearGradient>
                </defs>
                <path fill="url(#logosPython0)" d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072M92.802 19.66a11.12 11.12 0 0 1 11.13 11.13a11.12 11.12 0 0 1-11.13 11.13a11.12 11.12 0 0 1-11.13-11.13a11.12 11.12 0 0 1 11.13-11.13" />
                <path fill="url(#logosPython1)" d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897m34.114-19.586a11.12 11.12 0 0 1-11.13-11.13a11.12 11.12 0 0 1 11.13-11.131a11.12 11.12 0 0 1 11.13 11.13a11.12 11.12 0 0 1-11.13 11.13" />
            </svg>}

            {type === "JavaScript" && <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
                <path fill="#f7df1e" d="M0 0h256v256H0z" />
                <path d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044 13.747-31.792 35.228-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574" />
            </svg>}

            {type === "Swift" && <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
                <linearGradient id="logosSwift0" x1="-1845.501" x2="-1797.134" y1="1255.639" y2="981.338" gradientTransform="rotate(180 -846.605 623.252)" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#faae42" />
                    <stop offset="1" stop-color="#ef3e31" />
                </linearGradient>
                <path fill="url(#logosSwift0)" d="M56.9 0h141.8c6.9 0 13.6 1.1 20.1 3.4c9.4 3.4 17.9 9.4 24.3 17.2c6.5 7.8 10.8 17.4 12.3 27.4c.6 3.7.7 7.4.7 11.1v138.3c0 4.4-.2 8.9-1.1 13.2c-2 9.9-6.7 19.2-13.5 26.7c-6.7 7.5-15.5 13.1-25 16.1c-5.8 1.8-11.8 2.6-17.9 2.6c-2.7 0-142.1 0-144.2-.1c-10.2-.5-20.3-3.8-28.8-9.5c-8.3-5.6-15.1-13.4-19.5-22.4c-3.8-7.7-5.7-16.3-5.7-24.9V56.9C.2 48.4 2 40 5.7 32.4c4.3-9 11-16.9 19.3-22.5C33.5 4.1 43.5.7 53.7.2c1-.2 2.1-.2 3.2-.2" />
                <linearGradient id="logosSwift1" x1="130.612" x2="95.213" y1="4.136" y2="204.893" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#e39f3a" />
                    <stop offset="1" stop-color="#d33929" />
                </linearGradient>
                <path fill="url(#logosSwift1)" d="M216 209.4c-.9-1.4-1.9-2.8-3-4.1c-2.5-3-5.4-5.6-8.6-7.8c-4-2.7-8.7-4.4-13.5-4.6c-3.4-.2-6.8.4-10 1.6c-3.2 1.1-6.3 2.7-9.3 4.3c-3.5 1.8-7 3.6-10.7 5.1c-4.4 1.8-9 3.2-13.7 4.2c-5.9 1.1-11.9 1.5-17.8 1.4c-10.7-.2-21.4-1.8-31.6-4.8c-9-2.7-17.6-6.4-25.7-11.1c-7.1-4.1-13.7-8.8-19.9-14.1c-5.1-4.4-9.8-9.1-14.2-14.1c-3-3.5-5.9-7.2-8.6-11c-1.1-1.5-2.1-3.1-3-4.7L0 121.2V56.7C0 25.4 25.3 0 56.6 0h50.5l37.4 38c84.4 57.4 57.1 120.7 57.1 120.7s24 27 14.4 50.7" />
                <path fill="#fff" d="M144.7 38c84.4 57.4 57.1 120.7 57.1 120.7s24 27.1 14.3 50.8c0 0-9.9-16.6-26.5-16.6c-16 0-25.4 16.6-57.6 16.6c-71.7 0-105.6-59.9-105.6-59.9C91 192.1 135.1 162 135.1 162c-29.1-16.9-91-97.7-91-97.7c53.9 45.9 77.2 58 77.2 58c-13.9-11.5-52.9-67.7-52.9-67.7c31.2 31.6 93.2 75.7 93.2 75.7C179.2 81.5 144.7 38 144.7 38" />
            </svg>}

            {type === "Spring" && <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
                <path fill="#6db33f" d="M38.944 35.879c50.58-48.999 131.454-47.682 180.453 3.161c5.532-7.376 10.274-15.542 13.699-23.972c16.07 48.999 25.817 90.095 22.128 121.97c-1.844 26.87-12.381 52.687-29.768 73.235c-45.31 53.741-125.922 60.59-179.663 15.28l-1.028-.915l-.055-.036a12.24 12.24 0 0 1-.498-.367c-.49-.381-.935-.796-1.336-1.24l-.144-.164l-1.68-1.493c-1.64-1.405-3.279-2.81-4.733-4.4l-.536-.606c-49-50.58-47.419-131.454 3.16-180.453M57.91 207.376c-4.742-3.688-11.591-3.162-15.28 1.58c-3.242 4.17-3.226 9.969.049 13.815l.052.06l2.033 1.807l.2.136c4.604 3.028 10.8 2.402 14.333-1.878l.194-.241c3.688-4.742 2.898-11.591-1.58-15.28M231.78 28.239c-13.173 27.661-45.84 48.736-74.027 55.322c-26.607 6.322-49.79 1.054-74.289 10.537c-55.848 21.339-54.794 87.724-24.236 102.74l1.844 1.054s22.074-4.389 43.902-10.185l1.87-.5c8.718-2.35 17.295-4.91 24.302-7.492c36.354-13.435 76.397-46.628 89.568-85.09c-6.849 40.042-41.359 78.767-75.87 96.418c-18.44 9.483-32.665 11.59-62.96 22.128c-3.688 1.317-6.586 2.635-6.586 2.635l1.108-.15l.736-.095l.733-.092c6.69-.83 12.702-1.244 12.702-1.244c42.94-2.108 110.38 12.118 141.729-29.768c32.139-42.677 14.225-111.697-.527-156.218" />
                <path fill="#fff" d="M57.911 207.376c4.479 3.688 5.269 10.537 1.58 15.279c-3.687 4.742-10.537 5.269-15.279 1.58c-4.741-3.688-5.268-10.537-1.58-15.279c3.688-4.742 10.537-5.268 15.28-1.58M231.78 28.239c14.752 44.521 32.666 113.541.527 156.218c-31.35 41.886-98.789 27.66-141.729 29.768c0 0-6.012.415-12.702 1.244l-.733.092c-.612.078-1.228.16-1.844.245c0 0 2.898-1.318 6.586-2.635c30.295-10.537 44.52-12.645 62.96-22.128c34.511-17.65 69.021-56.376 75.87-96.418c-13.171 38.462-53.214 71.655-89.568 85.09c-25.026 9.22-70.074 18.177-70.074 18.177l-1.844-1.054c-30.558-15.016-31.612-81.401 24.236-102.74c24.5-9.483 47.682-4.215 74.29-10.537c28.187-6.586 60.853-27.66 74.025-55.322" />
            </svg>}

            {type === "SpringBoot" && <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path fill="#6db33f" d="m23.693 10.706l-4.73-8.185c-.41-.71-1.417-1.294-2.24-1.294h-9.45c-.82 0-1.831.584-2.24 1.294L.306 10.706c-.41.71-.41 1.873 0 2.584l4.725 8.189c.41.71 1.417 1.294 2.24 1.294h9.455c.82 0 1.826-.584 2.24-1.294l4.726-8.19c.41-.71.41-1.873 0-2.583zM10.976 5.755c0-.537.438-.975.974-.975s.975.438.975.975v5.821a.976.976 0 0 1-1.948 0zm.974 12.43a6.616 6.616 0 0 1-6.607-6.609A6.64 6.64 0 0 1 8.01 6.272a.866.866 0 0 1 1.214.18a.866.866 0 0 1-.178 1.213a4.876 4.876 0 0 0 5.812 7.827a4.88 4.88 0 0 0 1.967-3.916a4.9 4.9 0 0 0-1.986-3.925a.87.87 0 0 1-.183-1.214a.87.87 0 0 1 1.214-.183a6.63 6.63 0 0 1 2.687 5.322a6.613 6.613 0 0 1-6.608 6.608" />
            </svg>}

            {type === "PostgreSQL" && <svg xmlns="http://www.w3.org/2000/svg" width="31.04" height="32" viewBox="0 0 256 264">
                <path d="M255.008 158.086c-1.535-4.649-5.556-7.887-10.756-8.664c-2.452-.366-5.26-.21-8.583.475c-5.792 1.195-10.089 1.65-13.225 1.738c11.837-19.985 21.462-42.775 27.003-64.228c8.96-34.689 4.172-50.492-1.423-57.64C233.217 10.847 211.614.683 185.552.372c-13.903-.17-26.108 2.575-32.475 4.549c-5.928-1.046-12.302-1.63-18.99-1.738c-12.537-.2-23.614 2.533-33.079 8.15c-5.24-1.772-13.65-4.27-23.362-5.864c-22.842-3.75-41.252-.828-54.718 8.685C6.622 25.672-.937 45.684.461 73.634c.444 8.874 5.408 35.874 13.224 61.48c4.492 14.718 9.282 26.94 14.237 36.33c7.027 13.315 14.546 21.156 22.987 23.972c4.731 1.576 13.327 2.68 22.368-4.85c1.146 1.388 2.675 2.767 4.704 4.048c2.577 1.625 5.728 2.953 8.875 3.74c11.341 2.835 21.964 2.126 31.027-1.848c.056 1.612.099 3.152.135 4.482c.06 2.157.12 4.272.199 6.25c.537 13.374 1.447 23.773 4.143 31.049c.148.4.347 1.01.557 1.657c1.345 4.118 3.594 11.012 9.316 16.411c5.925 5.593 13.092 7.308 19.656 7.308c3.292 0 6.433-.432 9.188-1.022c9.82-2.105 20.973-5.311 29.041-16.799c7.628-10.86 11.336-27.217 12.007-52.99c.087-.729.167-1.425.244-2.088l.16-1.362l1.797.158l.463.031c10.002.456 22.232-1.665 29.743-5.154c5.935-2.754 24.954-12.795 20.476-26.351" />
                <path fill="#336791" d="M237.906 160.722c-29.74 6.135-31.785-3.934-31.785-3.934c31.4-46.593 44.527-105.736 33.2-120.211c-30.904-39.485-84.399-20.811-85.292-20.327l-.287.052c-5.876-1.22-12.451-1.946-19.842-2.067c-13.456-.22-23.664 3.528-31.41 9.402c0 0-95.43-39.314-90.991 49.444c.944 18.882 27.064 142.873 58.218 105.422c11.387-13.695 22.39-25.274 22.39-25.274c5.464 3.63 12.006 5.482 18.864 4.817l.533-.452c-.166 1.7-.09 3.363.213 5.332c-8.026 8.967-5.667 10.541-21.711 13.844c-16.235 3.346-6.698 9.302-.471 10.86c7.549 1.887 25.013 4.561 36.813-11.958l-.47 1.885c3.144 2.519 5.352 16.383 4.982 28.952c-.37 12.568-.617 21.197 1.86 27.937c2.479 6.74 4.948 21.905 26.04 17.386c17.623-3.777 26.756-13.564 28.027-29.89c.901-11.606 2.942-9.89 3.07-20.267l1.637-4.912c1.887-15.733.3-20.809 11.157-18.448l2.64.232c7.99.363 18.45-1.286 24.589-4.139c13.218-6.134 21.058-16.377 8.024-13.686z" />
                <path fill="#fff" d="M108.076 81.525c-2.68-.373-5.107-.028-6.335.902c-.69.523-.904 1.129-.962 1.546c-.154 1.105.62 2.327 1.096 2.957c1.346 1.784 3.312 3.01 5.258 3.28c.282.04.563.058.842.058c3.245 0 6.196-2.527 6.456-4.392c.325-2.336-3.066-3.893-6.355-4.35m88.784.073c-.256-1.831-3.514-2.353-6.606-1.923c-3.088.43-6.082 1.824-5.832 3.659c.2 1.427 2.777 3.863 5.827 3.863c.258 0 .518-.017.78-.054c2.036-.282 3.53-1.575 4.24-2.32c1.08-1.136 1.706-2.402 1.591-3.225" />
                <path fill="#fff" d="M247.802 160.025c-1.134-3.429-4.784-4.532-10.848-3.28c-18.005 3.716-24.453 1.142-26.57-.417c13.995-21.32 25.508-47.092 31.719-71.137c2.942-11.39 4.567-21.968 4.7-30.59c.147-9.463-1.465-16.417-4.789-20.665c-13.402-17.125-33.072-26.311-56.882-26.563c-16.369-.184-30.199 4.005-32.88 5.183c-5.646-1.404-11.801-2.266-18.502-2.376c-12.288-.199-22.91 2.743-31.704 8.74c-3.82-1.422-13.692-4.811-25.765-6.756c-20.872-3.36-37.458-.814-49.294 7.571c-14.123 10.006-20.643 27.892-19.38 53.16c.425 8.501 5.269 34.653 12.913 59.698c10.062 32.964 21 51.625 32.508 55.464c1.347.449 2.9.763 4.613.763c4.198 0 9.345-1.892 14.7-8.33a529.832 529.832 0 0 1 20.261-22.926c4.524 2.428 9.494 3.784 14.577 3.92c.01.133.023.266.035.398a117.66 117.66 0 0 0-2.57 3.175c-3.522 4.471-4.255 5.402-15.592 7.736c-3.225.666-11.79 2.431-11.916 8.435c-.136 6.56 10.125 9.315 11.294 9.607c4.074 1.02 7.999 1.523 11.742 1.523c9.103 0 17.114-2.992 23.516-8.781c-.197 23.386.778 46.43 3.586 53.451c2.3 5.748 7.918 19.795 25.664 19.794c2.604 0 5.47-.303 8.623-.979c18.521-3.97 26.564-12.156 29.675-30.203c1.665-9.645 4.522-32.676 5.866-45.03c2.836.885 6.487 1.29 10.434 1.289c8.232 0 17.731-1.749 23.688-4.514c6.692-3.108 18.768-10.734 16.578-17.36m-44.106-83.48c-.061 3.647-.563 6.958-1.095 10.414c-.573 3.717-1.165 7.56-1.314 12.225c-.147 4.54.42 9.26.968 13.825c1.108 9.22 2.245 18.712-2.156 28.078a36.508 36.508 0 0 1-1.95-4.009c-.547-1.326-1.735-3.456-3.38-6.404c-6.399-11.476-21.384-38.35-13.713-49.316c2.285-3.264 8.084-6.62 22.64-4.813m-17.644-61.787c21.334.471 38.21 8.452 50.158 23.72c9.164 11.711-.927 64.998-30.14 110.969a171.33 171.33 0 0 0-.886-1.117l-.37-.462c7.549-12.467 6.073-24.802 4.759-35.738c-.54-4.488-1.05-8.727-.92-12.709c.134-4.22.692-7.84 1.232-11.34c.663-4.313 1.338-8.776 1.152-14.037c.139-.552.195-1.204.122-1.978c-.475-5.045-6.235-20.144-17.975-33.81c-6.422-7.475-15.787-15.84-28.574-21.482c5.5-1.14 13.021-2.203 21.442-2.016M66.674 175.778c-5.9 7.094-9.974 5.734-11.314 5.288c-8.73-2.912-18.86-21.364-27.791-50.624c-7.728-25.318-12.244-50.777-12.602-57.916c-1.128-22.578 4.345-38.313 16.268-46.769c19.404-13.76 51.306-5.524 64.125-1.347c-.184.182-.376.352-.558.537c-21.036 21.244-20.537 57.54-20.485 59.759c-.002.856.07 2.068.168 3.735c.362 6.105 1.036 17.467-.764 30.334c-1.672 11.957 2.014 23.66 10.111 32.109a36.275 36.275 0 0 0 2.617 2.468c-3.604 3.86-11.437 12.396-19.775 22.426m22.479-29.993c-6.526-6.81-9.49-16.282-8.133-25.99c1.9-13.592 1.199-25.43.822-31.79c-.053-.89-.1-1.67-.127-2.285c3.073-2.725 17.314-10.355 27.47-8.028c4.634 1.061 7.458 4.217 8.632 9.645c6.076 28.103.804 39.816-3.432 49.229c-.873 1.939-1.698 3.772-2.402 5.668l-.546 1.466c-1.382 3.706-2.668 7.152-3.465 10.424c-6.938-.02-13.687-2.984-18.819-8.34m1.065 37.9c-2.026-.506-3.848-1.385-4.917-2.114c.893-.42 2.482-.992 5.238-1.56c13.337-2.745 15.397-4.683 19.895-10.394c1.031-1.31 2.2-2.794 3.819-4.602l.002-.002c2.411-2.7 3.514-2.242 5.514-1.412c1.621.67 3.2 2.702 3.84 4.938c.303 1.056.643 3.06-.47 4.62c-9.396 13.156-23.088 12.987-32.921 10.526m69.799 64.952c-16.316 3.496-22.093-4.829-25.9-14.346c-2.457-6.144-3.665-33.85-2.808-64.447c.011-.407-.047-.8-.159-1.17a15.444 15.444 0 0 0-.456-2.162c-1.274-4.452-4.379-8.176-8.104-9.72c-1.48-.613-4.196-1.738-7.46-.903c.696-2.868 1.903-6.107 3.212-9.614l.549-1.475c.618-1.663 1.394-3.386 2.214-5.21c4.433-9.848 10.504-23.337 3.915-53.81c-2.468-11.414-10.71-16.988-23.204-15.693c-7.49.775-14.343 3.797-17.761 5.53c-.735.372-1.407.732-2.035 1.082c.954-11.5 4.558-32.992 18.04-46.59c8.489-8.56 19.794-12.788 33.568-12.56c27.14.444 44.544 14.372 54.366 25.979c8.464 10.001 13.047 20.076 14.876 25.51c-13.755-1.399-23.11 1.316-27.852 8.096c-10.317 14.748 5.644 43.372 13.315 57.129c1.407 2.521 2.621 4.7 3.003 5.626c2.498 6.054 5.732 10.096 8.093 13.046c.724.904 1.426 1.781 1.96 2.547c-4.166 1.201-11.649 3.976-10.967 17.847c-.55 6.96-4.461 39.546-6.448 51.059c-2.623 15.21-8.22 20.875-23.957 24.25m68.104-77.936c-4.26 1.977-11.389 3.46-18.161 3.779c-7.48.35-11.288-.838-12.184-1.569c-.42-8.644 2.797-9.547 6.202-10.503c.535-.15 1.057-.297 1.561-.473c.313.255.656.508 1.032.756c6.012 3.968 16.735 4.396 31.874 1.271l.166-.033c-2.042 1.909-5.536 4.471-10.49 6.772" />
            </svg>}

            {type === "Hibernate" && <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 128 128">
                <path fill="#59666c" d="m29.246 3.766l23.168 40.129l-23.18 40.19l-23.156-40.19Zm69.508 120.468L75.586 84.105l23.18-40.19l23.156 40.19Zm0 0" />
                <path fill="#bcae79" d="M75.594 3.766H29.258L52.43 43.898h46.35ZM52.406 124.23H98.75L75.594 84.102H29.219Zm0 0" />
            </svg>}

            {type === "Flask" && <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                <path fill="currentColor" d="M9.563 27.542c-1.219-.964-2.521-1.88-3.406-3.177c-1.87-2.281-3.313-4.922-4.297-7.703c-.594-1.802-.797-3.74-1.563-5.479c-.802-1.255.135-2.635 1.516-3.036c.615-.12 1.698-.698.391-.281c-1.172.854-1.281-.781-.083-.885c.818-.109 1.12-.781.839-1.38c-.875-.573 2.135-1.203.62-2.063c-1.578-1.703 2.208-2.031 1.276-.099c-.224 1.49 2.646-.271 1.979 1.448c.677.823 2.531.188 2.484 1.344c.99.068 1.328.896 2.25.958c.964.438 2.698.776 3.026 1.854c-.953.755-3.156-1.552-3.26.531c.286 3.078.214 6.25 1.339 9.182c.536 1.776 1.828 3.177 2.995 4.557c1.115 1.359 2.625 2.307 4.167 3.115c1.354.635 2.813 1.057 4.286 1.323c.594-.458 1.651-2.156 2.583-1.438c.042.802-1.849 1.682-.089 1.594c1.031-.313 1.75.797 2.604-.203c.781.927 3.26-.594 2.703 1.307c-.755.484-1.859.193-2.615.859c-1.245-.62-2.24.557-3.62.411a26.704 26.704 0 0 1-4.646.385c-2.547-.203-5.151-.286-7.578-1.172c-1.365-.401-2.698-1.177-3.901-1.953zm2.151.932c1.333.573 2.641 1.182 4.104 1.37c2.318.318 4.714.818 7.042.365c-1.052-.479-2.146.188-3.193-.344c-1.26.271-2.609-.068-3.891-.234c-1.453-.646-3.026-1.094-4.391-1.938c-1.698-.62.88.797 1.344.917c1.063.604-1.172-.313-1.484-.563c-.891-.5-1.005-.396-.089.109c.182.109.365.224.557.318zm-2.537-1.797c1.292.479-.005-.906-.599-.828c-.26-.453-1-.745-.479-.984c-.943.323-.984-1.24-1.427-1.021c-.995-.313-.385-1.422-1.568-2.104c-.109-.719-1.177-1.344-1.521-2.432c-.151-.552-1.203-2.151-.557-.667c.552 1.432 1.526 2.656 2.333 3.88c.63 1.161 1.37 2.38 2.516 3.104c.385.37.755.938 1.302 1.052m-3.724-4.088c.042-.193.234.422 0 0m5.271 4.661c.286-.125-.411-.156 0 0m.703.26c-.073-.354-.323.193 0 0m.88.365c.417-.401-.646-.25 0 0m1.506.839c.255-.375-.818-.141 0 0m-2.891-2.016c.646-.422-.844-.005 0 0m.656.328c-.016-.224-.234.099 0 0m3.292 2.057c.531.333 3.094.729 1.49.135c-.266.057-2.974-.766-1.49-.135M9.646 25.01c-.052-.224-.823-.25 0 0m1.531.891c.401-.276-.828-.214 0 0m1.292.792c.573-.214-.932-.219 0 0m-3.448-2.365c.62.479 2.505.063.953-.281c-.708-.38-2.302-.635-1.219.224zm4.318 2.641c.26-.443-1.083-.255 0 0m-1.313-1.047c1.521.432-1.276-.958-.375-.156l.203.089zm2.635 1.521c1.437.016-1.302-.198 0 0m-6.192-3.948c-.057-.266-.354.026 0 0m8.625 5.312c.036-.484-.469.365 0 0M10.922 25c-.089-.255-.448-.01 0 0m-2.318-1.672c.823-.047-1.13-.365 0 0m-2.75-1.776c-.099-.396-.896-.708 0 0m7.214 4.583c-.151-.177-.073.036 0 0m4.484 2.75c-.01-.26-.24.099 0 0m-4.88-3.161c.078-.344-.708-.104 0 0m-3.344-2.125c.609-.063-.984-.411 0 0m5.656 3.516c.953-.38-.938-.188 0 0m-2.942-1.995c1.104.141-1.313-.75-.245-.078zm3.833 2.359c1.031-.62.693 1.443 1.75.172c1.042-.76-.901.943.385.135c.927-.62 2.302.297 3.167.594c.625-.031 1.234.542 1.87.193c1.234-.333-2.406-.49-1.453-1.078c-1.125.328-1.958-.391-2.51-1.115c-1.266-.292-2.724-.938-3.354-2.057c-.26-.417.37.063-.224-.625c-.76-.677-1.141-1.448-1.651-2.271c-.609-.323-.682-1.281-.745-.031c.005-.792-.74-1.323-.917-1.099c-.005-.76.792-.38.234-.943c-.12-.792-.516-1.615-.635-2.505c-.182-.427-.026-1.344-.63-.375c-.219 1.026-.073-1.26.271-.505c.448-.771-.161-.682-.188-.573c.292-.651.188-1.573-.078-1.224c.156-.688.25-2.536-.234-2.208c.292-.719.552-3.297-.708-2.313c-.516.005-1.401.188-1.818.396c1.313.724-.135.26-.667.146c-.068.667-.599.38-1.26.385c1.057.13-.516 1.078-1.125.714c-.786.375.682 1.313.016 1.604c.083.438-1.203-.156-1.104.854c-.766-.323-.104 1.203.276.688c1.302.349.917 1.151.948 1.917c-.208.443-1.042-1.047-.182-.979c-.677-1.099-.75-.396-1.318.115c-.13.036 1.443.729.458 1.073c.865.13.891.891 1.063 1.37c.521.547.417-.599 1.042.057c-.396-.583-2.089-1.641-.729-1.302c-.005-.583-.245-1.057.172-1.042c.417-.75-.432 1.849.5.896c.26-.115.323-.75.792.057c.672.667.24 1.146-.708.536c.167.578 1.271.786 1.063 1.688c.219.797.526.5.797.458c.208.771.328.203.339-.167c.964.208.734.776 1.036 1.177c.661.297-.948-2.031.193-.703c1.193 1.083.448 1.531-.63 1.359c.682-.052.901.922 1.75.885c.776.37 1.302 1.786-.036 1.198c-.464-.417-2.104-.938-.76-.141c1.24.573 2.219.917 3.417 1.635c.849.609 1.224 1.313 1.547 1.448c-.719.344-2.167-.276-1.094-.464c-.667-.12-1.422-.458-.781.375c.547.458 1.932.406 2.182.458c-.214.464-.573.5.01.536c-.651.349.208.401.266.599zm-1.323-3.745c-.396-.417-.5-1.188-.073-.516c.219.089.703 1.266.073.516m4.318 2.74c.245-.01.005.188 0 0m-4.943-3.755c-.016-.62.141.484 0 0m-.432-.573c-.495-.958.63.271 0 0m-5.198-3.594c.292-.078.141.5 0 0m4.141 2.245c.177-.672.208.568 0 0M9.51 18.766c-.203-.37.432.349 0 0m2.511.802c-.469-1.052.333-.573.104.177zm-4.328-2.886c-.208-.344-.557-1.359-.443-1.667c.099.5 1.068 2.167.474.688c-.656-1.24.786.401.938.714c.068.307-.406-.083-.089.635c-.583-.823-.344.453-.88-.37m-1.339-.922c.057-.802.307.552 0 0m.604.209c.286-.609.484.844 0 0m-1.448-1.12c-.5-.495-.859-.953.021-.307c.344.01-.75-1.036.083-.333c.88.161.432 1.443-.104.641zm.761-.021c.292-.286.151.281 0 0m.469.151c-.438-.823.531.344 0 0m-.933-.89c-1.448-1.286 1.823.677.234.24zM9.958 16.5c-.63-.375-.167-2.646.047-1.094c.609-.198-.036.802.417.792c-.068.63-.271.859-.464.302m1.532.906c.063-.682.13.469 0 0m-.266-.265c.068-.292.005.344 0 0m-5.13-3.474c-.932-1.286 2.703 1.297.594.323c-.219-.057-.484-.078-.594-.323m2.953 1.567c-.089-1.083.198.177 0 0m2.245 1.438c.172-.615.01.406 0 0m-5.058-3.495c.552-.12 2.292.969.693.313c-.177-.198-.552-.109-.693-.313m4.745 2.365c.063-1.104.333-.661.005.156zm-4.333-2.75c.224-.328-.599-1.495.12-.417c.307.245.896.411.375.516c.818.719-.198.193-.495-.099m4.099 2.406c.156-1.26.141.734 0 0M6.177 11.63c.172-.073.089.229 0 0m1.068.636c.276-.578.505.646 0 0m3.015 1.682c0-.224.057.318 0 0m-.171-.391c-.417-1.031.391.547 0 0m-.261-.677c-.068-.427.245.536 0 0m.422-.682c-.286-.505.365-2.229.432-1.161c-.302.833-.083 1.302.125.182c.391-.88-.083 1.74-.557.979m.427-2.563c.125-.156.031.182 0 0m-.713 14.151c-.172-.151.021.094 0 0m1.479.745c.818.214.818-.125.073-.224c-.401-.375-1.661-.771-.531-.047c.073.188.313.182.453.271zm-2.922-1.937c.453.339 1.703.958.641.125c.359-.411-.682-.635-.339-.911c-.875-.542-.693-.49-.073-.474c-1.063-.474.151-.438.094-.682c-.411-.078-2.026-.719-1.073.052c-.969-.49-.234.188-.526.115c-.99-.271.88.755-.156.5c.568.448 1.531 1.151.24.474c-.172.245.922.615 1.193.802zm1.547.89c1.88.604-.922-.745 0 0m7.916 4.797c.026-.375-.255.318 0 0m.818.344c.432-.422.016.667.719-.104c.005-.552-.021-.88-.807-.208c-.219.12-.313.63.089.313zm-12.927-8.12c-.13-.521-.932-.521 0 0m.87.573c-.323-.536-1.151-.484 0 0m4.948 2.985c.484.427 2.219.313.589.052c-.245-.359-1.536-.271-.589-.052m6.797 4.197c.745-.625-.719.276 0 0m1.546 1.058c.005-.198-.318.089 0 0m0-.276c.823-.875-.797.052 0 0M3.74 18.719c-.703-1-.438-1.453-1.115-2.266c-.125-.63-1.156-2.047-.531-.542c.573.875.745 2.234 1.646 2.807zM19.781 28.76c1.516-.974-.62-.422 0 0m1.157.454c.76-.646-.479-.135 0 0M5.62 19.401c.219-.323-.557-.042 0 0m15.073 9.505c.734-.474-.167-.401-.13.042zm-9.959-6.281c-.026-.318-.391.026 0 0m.615.354c-.198-.396-.302.063 0 0m10.526 6.25c.938-.682-.573-.135-.198.125zm-.359-.177c.766-.641-.813.286 0 0m1.838 1.224c.516-.344-.625-.109 0 0M6.094 19.167c.688.156 2.755 1.698 1.536.109c-.625-.188-.25-1.714-.891-1.443c.427.714.354 1.021-.542.568c-1.13-.547-.635.276-.417.5c-.297.068.401.26.313.266zm-3.141-2.479c.12-.51-1.141-2.807-.599-1.151c.198.344.177 1.005.599 1.151m5.761 3.557c-.354-.297-.016-.047 0 0m.875.203c0-.542-.964-.219 0 0m7.578 4.776c-.146-.37-.573-.01 0 0m.364.266c-.052-.208-.208.036 0 0m3.005 1.89c.286-.214-.359-.026 0 0M4.521 17.089c.828-.323-.885-.229 0 0M16.5 24.635c-.01-.536-.526.135 0 0M4.193 16.328c.531-.182-.49-.12 0 0m1.541.745c-.01-.177-.161.068 0 0m18.787 11.521c.682-.135 2.24.349 2.49-.182c-.828-.016-2.87-.583-2.964.135l.182.031zM6.224 17.198c.01-.542-.422-.021 0 0m-4.052-2.813c-.182-1.031-.698-.156 0 0m.969.245c.01-.333-.885-.302 0 0m.552.271c-.161-.13-.125.161 0 0m3.468 2.224c.167-.146-.385-.109 0 0m-3.838-2.833c-.094-.781-1.12-.12 0 0m-1.979-1.287c-.026-.359-.193.135 0 0m.291-.224c-.047-.427-.25.052 0 0m1.631.974c.688-.271-1.255-.563-.141-.052zm21.776 13.448c.443-.401-.557-.125 0 0m2.635 1.365c.172-.521-.448.068 0 0M3.432 12.901c.073-.505-.547.099 0 0m-2.317-1.552c-.125-.714-.104-1.964 1.083-1.542c-1.589.318 1.099 1.974.76.667c.667.031 1.307-.396.953.255c1.318-.146 2.229-1.286 3.5-1.13c.99-.13 2.073-.229 3.141-.625c.875-.068 1.719-1.01 1.24-1.568c-1.198-.104-2.448.047-3.771.307c-1.464.307-2.792.885-4.271 1.135c-1.443.193.286.531-.125.609c-.75.26.896.438-.099.708c-.609-.115-1.25-.328-.99-.974c-1.38.177-2.594.755-1.5 2.156zm3.328-1.693c.323-1.193 1.734.979.531.156c-.146-.104-.38-.193-.531-.156m.062-.578c.464-.344.245.193 0 0m.594.011c.042-.547 1.354.292.214.198zm.807-.329c.297-.344.089.313 0 0m.209-.135c.495-.594 2.797-.38 1.109-.057c-.448-.339-.797.198-1.109.057m3.005-.464c-.078-1.62 1.49.578 0 0m.849-.005c.313-.818 1.208-.328.146-.167c.021.089-.031.422-.146.167m-6.875 4.328c.932-.573-.984-.495 0 0m.687.193c.328-.349-.708-.146 0 0m-2.026-1.443c.531-.406-.625-.156 0 0m27.474 17.188c.016-.474-.406.214 0 0m-2.791-1.906c.078-.547-.359.047 0 0m3.557 2.088c.745 0 2.25-.229.635-.229c-.255.042-1.479.031-.635.229M4.385 12.339c.604-.042.943-.661-.115-.625c-1.641-.172 1.443.557-.208.349c-.224.146.313.318.323.276m.532.27c-.063-.391-.188.203 0 0m.625-1.677c.266-.323-.359-.089 0 0m-2-3.343c1.078-.365 2.547-.776 3.052.177c-.516-.62-.208-1.229.281-.323c.688.922 1.031-.417.583-.724c.51.635 1.089.932.344.036c.813-.974-1.63.13-2.188.12c-.266.12-2.76.635-2.068.714zm.63-1.204c.615-.464 2.12.271 1.151-.464c-.089-.078-2.115.557-1.151.464m2.234.089c.719.021-.307-.958.547-.516c-.141-.458-.995-.547-1.417-.729c-.234.422.484 1.25.87 1.245M4.568 4.448c.245-.333-.438.172 0 0m.911.219c1.151-.151-.297-.495-.234-.01zM3.776 3.333c-.813-1.063 1.526.182.703-.932c-.698-.552-1.365.625-.703.932m10.432 5.62c.375-.661-1.542-.891-.25-.234c.12.042.089.281.25.234" />
            </svg>}

            {type === "Git" && <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 128 128">
                <path fill="#f34f29" d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314c2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295c3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 0 1-13.683 0a9.68 9.68 0 0 1-2.105-10.521L68.574 47.933l-.002 34.341a9.7 9.7 0 0 1 2.559 1.828c3.778 3.777 3.778 9.898 0 13.683c-3.779 3.777-9.904 3.777-13.679 0c-3.778-3.784-3.778-9.905 0-13.683a9.7 9.7 0 0 1 3.167-2.11V47.333a9.6 9.6 0 0 1-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333L3.264 58.123a8.133 8.133 0 0 0 0 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 0 0-.001-11.501" />
            </svg>}

            {type === "HTML" && <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                <path fill="#e44f26" d="M5.902 27.201L3.655 2h24.69l-2.25 25.197L15.985 30z" />
                <path fill="#f1662a" d="m16 27.858l8.17-2.265l1.922-21.532H16z" />
                <path fill="#ebebeb" d="M16 13.407h-4.09l-.282-3.165H16V7.151H8.25l.074.83l.759 8.517H16zm0 8.027l-.014.004l-3.442-.929l-.22-2.465H9.221l.433 4.852l6.332 1.758l.014-.004z" />
                <path fill="#fff" d="M15.989 13.407v3.091h3.806l-.358 4.009l-3.448.93v3.216l6.337-1.757l.046-.522l.726-8.137l.076-.83h-.833zm0-6.256v3.091h7.466l.062-.694l.141-1.567l.074-.83z" />
            </svg>}

            {type === "Jira" && <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
                <defs>
                    <linearGradient id="logosJira0" x1="98.031%" x2="58.888%" y1=".161%" y2="40.766%">
                        <stop offset="18%" stop-color="#0052cc" />
                        <stop offset="100%" stop-color="#2684ff" />
                    </linearGradient>
                    <linearGradient id="logosJira1" x1="100.665%" x2="55.402%" y1=".455%" y2="44.727%">
                        <stop offset="18%" stop-color="#0052cc" />
                        <stop offset="100%" stop-color="#2684ff" />
                    </linearGradient>
                </defs>
                <path fill="#2684ff" d="M244.658 0H121.707a55.502 55.502 0 0 0 55.502 55.502h22.649V77.37c.02 30.625 24.841 55.447 55.466 55.467V10.666C255.324 4.777 250.55 0 244.658 0" />
                <path fill="url(#logosJira0)" d="M183.822 61.262H60.872c.019 30.625 24.84 55.447 55.466 55.467h22.649v21.938c.039 30.625 24.877 55.43 55.502 55.43V71.93c0-5.891-4.776-10.667-10.667-10.667" />
                <path fill="url(#logosJira1)" d="M122.951 122.489H0c0 30.653 24.85 55.502 55.502 55.502h22.72v21.867c.02 30.597 24.798 55.408 55.396 55.466V133.156c0-5.891-4.776-10.667-10.667-10.667" />
            </svg>}

            {type === "TailwindCSS" && <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 128 128">
                <path fill="#38bdf8" d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602q-9.6 12.803-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738M32.004 64c-17.066 0-27.73 8.531-32 25.602Q9.603 76.799 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597q-9.6 12.797-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64m0 0" />
            </svg>}
        </>
    )
}
import React from "react";

function Facebook({ source }) {
  if (source === "homepage") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="73"
        height="73"
        fill="none"
        viewBox="0 0 73 73"
      >
        <path
          fill="#1F28CF"
          d="M55.827 17.106C50.504 11.811 44 9.125 36.5 9.125c-7.57 0-14.092 2.689-19.384 7.984-5.302 5.296-7.991 11.823-7.991 19.391 0 7.498 2.686 14 7.981 19.327 5.296 5.34 11.82 8.048 19.394 8.048 7.504 0 14.007-2.707 19.333-8.04 5.338-5.331 8.042-11.837 8.042-19.335 0-7.568-2.707-14.095-8.048-19.394zm-4.295 34.429c-3.458 3.464-7.41 5.439-11.99 6.038v-14.99h6.083V36.5h-6.083v-4.258a1.825 1.825 0 011.828-1.825h4.255v-6.084h-4.25c-2.256 0-4.139.83-5.648 2.5-1.508 1.664-2.269 3.696-2.269 6.108V36.5h-6.083v6.083h6.083V57.58c-4.63-.593-8.595-2.57-12.035-6.035-4.183-4.21-6.215-9.131-6.215-15.044 0-5.98 2.03-10.913 6.211-15.087 4.168-4.176 9.101-6.205 15.081-6.205 5.916 0 10.834 2.032 15.041 6.214 4.207 4.174 6.25 9.107 6.25 15.078 0 5.904-2.046 10.825-6.26 15.035z"
        ></path>
      </svg>
    );
  }

  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30.708 5.248C27.208 1.766 22.932 0 18 0C13.022 0 8.734 1.768 5.254 5.25C1.768 8.732 0 13.024 0 18C0 22.93 1.766 27.206 5.248 30.708C8.73 34.22 13.02 36 18 36C22.934 36 27.21 34.22 30.712 30.714C34.222 27.208 36 22.93 36 18C36 13.024 34.22 8.732 30.708 5.248ZM27.884 27.886C25.61 30.164 23.012 31.462 20 31.856V22H24V18H20V15.2C20 15.0422 20.0311 14.886 20.0915 14.7403C20.152 14.5946 20.2405 14.4622 20.3522 14.3508C20.4638 14.2393 20.5963 14.151 20.7422 14.0908C20.888 14.0306 21.0442 13.9997 21.202 14H24V10H21.206C19.722 10 18.484 10.546 17.492 11.644C16.5 12.738 16 14.074 16 15.66V18H12V22H16V31.86C12.956 31.47 10.348 30.17 8.086 27.892C5.336 25.124 4 21.888 4 18C4 14.068 5.334 10.824 8.084 8.08C10.824 5.334 14.068 4 18 4C21.89 4 25.124 5.336 27.89 8.086C30.656 10.83 32 14.074 32 18C32 21.882 30.654 25.118 27.884 27.886Z"
        fill="#191847"
      />
    </svg>
  );
}

export default Facebook;

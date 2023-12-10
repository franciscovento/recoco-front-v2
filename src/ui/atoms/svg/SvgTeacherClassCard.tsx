import React from 'react';
interface Props extends React.ComponentPropsWithoutRef<'svg'> {}
const SvgTeacherClassCard = ({ ...svgProps }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="215"
      height="111"
      viewBox="0 0 215 111"
      fill="none"
      {...svgProps}
    >
      <g filter="url(#filter0_d_536_215)">
        <mask
          id="path-1-outside-1_536_215"
          maskUnits="userSpaceOnUse"
          x="5"
          y="5"
          width="201"
          height="98"
          fill="black"
        >
          <rect fill="white" x="5" y="5" width="201" height="98" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M161.731 80.5424C162.065 80.5225 162.395 80.5029 162.718 80.4836C163.157 80.4836 164.083 80.211 165.471 79.4103L186.012 93.2113L189.332 89.5227L189.333 89.5238L196.345 81.4048L175.148 69.4627C175.88 67.6961 176.35 65.7358 176.633 63.6296L180.476 61.8452L176.844 61.6389C177.215 57.0031 176.856 51.7807 176.488 46.424C176.442 45.7573 176.396 45.0886 176.351 44.4186C175.549 32.3972 174.747 29.6827 169.936 21.927C166.086 15.7224 153.362 14.1713 147.481 14.1713C109.656 14.042 32.4822 13.8611 26.3874 14.1713C18.7689 14.5591 15.9621 21.1514 14.7592 25.0293C13.5563 28.9071 13.9573 50.2354 14.7592 61.8689C15.5612 73.5025 17.566 76.6048 22.3777 80.4836C26.176 83.5455 49.9629 83.7065 68.0981 83.8292H68.0981C72.9367 83.862 77.3729 83.892 80.9198 83.9737C93.2838 84.2584 133.609 82.1698 156.897 80.8251L160.179 88.0446L161.731 80.5424Z"
          />
        </mask>
        <path
          d="M162.718 80.4836V71.4836C162.539 71.4836 162.361 71.4889 162.182 71.4996L162.718 80.4836ZM161.731 80.5424L161.198 71.5581C157.136 71.7991 153.742 74.7348 152.917 78.7189L161.731 80.5424ZM165.471 79.4103L170.49 71.9398C167.64 70.025 163.949 69.8986 160.975 71.614L165.471 79.4103ZM186.012 93.2113L180.993 100.682C184.712 103.181 189.704 102.563 192.702 99.232L186.012 93.2113ZM189.332 89.5227L194.132 81.9101C190.426 79.5724 185.574 80.2446 182.642 83.5021L189.332 89.5227ZM189.333 89.5238L184.533 97.1365C188.298 99.5113 193.235 98.7759 196.145 95.4064L189.333 89.5238ZM196.345 81.4048L203.157 87.2873C204.921 85.2444 205.675 82.5174 205.211 79.8583C204.748 77.1991 203.115 74.8885 200.763 73.5635L196.345 81.4048ZM175.148 69.4627L166.834 66.0168C165.091 70.2232 166.763 75.069 170.73 77.3039L175.148 69.4627ZM176.633 63.6296L172.843 55.4665C170.056 56.7603 168.122 59.386 167.713 62.4308L176.633 63.6296ZM180.476 61.8452L184.266 70.0083C188.01 68.2702 190.091 64.2086 189.316 60.1547C188.541 56.1008 185.107 53.0939 180.987 52.8597L180.476 61.8452ZM176.844 61.6389L167.873 60.9218C167.68 63.3369 168.468 65.7279 170.061 67.5539C171.653 69.38 173.915 70.4869 176.333 70.6244L176.844 61.6389ZM176.488 46.424L167.509 47.0407L167.509 47.0409L176.488 46.424ZM176.351 44.4186L185.331 43.8195V43.8195L176.351 44.4186ZM169.936 21.927L177.584 17.1823V17.1823L169.936 21.927ZM147.481 14.1713L147.451 23.1712C147.461 23.1713 147.471 23.1713 147.481 23.1713V14.1713ZM26.3874 14.1713L25.9299 5.18292L25.9299 5.18292L26.3874 14.1713ZM14.7592 25.0293L6.16328 22.3628L6.16327 22.3628L14.7592 25.0293ZM14.7592 61.8689L5.78051 62.4879L5.78051 62.4879L14.7592 61.8689ZM22.3777 80.4836L28.0261 73.4767H28.0261L22.3777 80.4836ZM68.0981 83.8292L68.0371 92.829C68.0574 92.8291 68.0777 92.8292 68.0981 92.8292V83.8292ZM68.0981 83.8292L68.159 74.8294C68.1387 74.8293 68.1184 74.8292 68.0981 74.8292V83.8292ZM80.9198 83.9737L80.7126 92.9713L80.9198 83.9737ZM156.897 80.8251L165.09 77.1009C163.552 73.7161 160.09 71.6258 156.378 71.8401L156.897 80.8251ZM160.179 88.0446L151.985 91.7689C153.597 95.3149 157.307 97.4216 161.178 96.9889C165.049 96.5563 168.203 93.6825 168.992 89.8681L160.179 88.0446ZM162.182 71.4996C161.859 71.5188 161.531 71.5384 161.198 71.5581L162.264 89.5266C162.6 89.5066 162.93 89.487 163.255 89.4676L162.182 71.4996ZM160.975 71.614C160.628 71.8137 160.522 71.8406 160.646 71.7952C160.71 71.7718 160.89 71.7089 161.173 71.6456C161.418 71.5909 161.966 71.4836 162.718 71.4836V89.4836C164.469 89.4836 165.957 89.0191 166.831 88.6992C167.875 88.3173 168.925 87.8076 169.967 87.2066L160.975 71.614ZM160.452 86.8807L180.993 100.682L191.031 85.7409L170.49 71.9398L160.452 86.8807ZM192.702 99.232L196.021 95.5434L182.642 83.5021L179.322 87.1906L192.702 99.232ZM194.134 81.9111L194.132 81.9101L184.531 97.1354L184.533 97.1365L194.134 81.9111ZM189.534 75.5222L182.522 83.6412L196.145 95.4064L203.157 87.2873L189.534 75.5222ZM170.73 77.3039L191.928 89.246L200.763 73.5635L179.566 61.6215L170.73 77.3039ZM167.713 62.4308C167.504 63.9894 167.192 65.1528 166.834 66.0168L183.462 72.9086C184.569 70.2394 185.196 67.4821 185.553 64.8285L167.713 62.4308ZM176.686 53.6822L172.843 55.4665L180.423 71.7927L184.266 70.0083L176.686 53.6822ZM176.333 70.6244L179.966 70.8307L180.987 52.8597L177.355 52.6534L176.333 70.6244ZM167.509 47.0409C167.889 52.5728 168.179 57.0834 167.873 60.9218L185.815 62.356C186.25 56.9228 185.823 50.9886 185.467 45.8072L167.509 47.0409ZM167.371 45.0176C167.417 45.6979 167.463 46.3756 167.509 47.0407L185.467 45.8073C185.421 45.1391 185.375 44.4792 185.331 43.8195L167.371 45.0176ZM162.288 26.6717C164.594 30.388 165.448 32.1411 165.995 34.0507C166.602 36.1699 166.968 38.9685 167.371 45.0176L185.331 43.8195C184.933 37.8473 184.497 33.278 183.3 29.0957C182.042 24.7037 180.09 21.2217 177.584 17.1823L162.288 26.6717ZM147.481 23.1713C149.814 23.1713 153.67 23.4976 157.169 24.4231C158.902 24.8817 160.277 25.4176 161.248 25.9587C162.251 26.5179 162.393 26.8411 162.288 26.6717L177.584 17.1823C173.716 10.9483 166.532 8.28101 161.772 7.02177C156.476 5.62058 151.029 5.17129 147.481 5.17129V23.1713ZM26.8449 23.1597C32.6158 22.8659 109.358 23.0411 147.451 23.1712L147.512 5.17134C109.954 5.043 32.3486 4.85621 25.9299 5.18292L26.8449 23.1597ZM23.3551 27.6958C23.8373 26.1413 24.4178 24.8555 25.1023 24.0281C25.3975 23.6712 25.6361 23.4951 25.8128 23.3994C25.9617 23.3187 26.2536 23.1897 26.8449 23.1597L25.9299 5.18292C11.8631 5.89894 7.39284 18.3991 6.16328 22.3628L23.3551 27.6958ZM23.7379 61.25C23.3515 55.6449 23.0562 47.5922 23.0072 40.4787C22.9826 36.9215 23.0205 33.6944 23.1304 31.178C23.2607 28.1933 23.4621 27.3509 23.3551 27.6957L6.16327 22.3628C5.45485 24.6466 5.25528 27.9244 5.14751 30.3929C5.0193 33.3298 4.98199 36.889 5.0076 40.6028C5.0588 48.0312 5.36495 56.4594 5.78051 62.4879L23.7379 61.25ZM28.0261 73.4767C26.13 71.9482 25.6665 71.2806 25.2931 70.4381C24.747 69.2057 24.1212 66.811 23.7379 61.25L5.78051 62.4879C6.19912 68.5605 6.97675 73.5336 8.83648 77.7305C10.869 82.3172 13.8138 85.1401 16.7293 87.4904L28.0261 73.4767ZM68.159 74.8294C59.0384 74.7677 48.7683 74.6965 40.315 74.27C36.0728 74.056 32.5084 73.7621 29.8814 73.3763C28.5599 73.1822 27.6721 72.9925 27.1451 72.843C26.371 72.6234 27.0374 72.6798 28.0261 73.4767L16.7293 87.4904C18.6675 89.0529 20.9082 89.784 22.2328 90.1598C23.8045 90.6056 25.5399 90.9318 27.2659 91.1853C30.7339 91.6946 34.9619 92.0228 39.4081 92.2471C48.3317 92.6973 59.0226 92.768 68.0371 92.829L68.159 74.8294ZM68.0981 74.8292H68.0981V92.8292H68.0981V74.8292ZM81.127 74.976C77.4908 74.8923 72.972 74.862 68.159 74.8294L68.0372 92.829C72.9013 92.8619 77.2549 92.8917 80.7126 92.9713L81.127 74.976ZM156.378 71.8401C132.887 73.1966 93.0306 75.2501 81.127 74.976L80.7126 92.9713C93.537 93.2666 134.332 91.1431 157.416 89.8102L156.378 71.8401ZM148.704 84.5494L151.985 91.7689L168.372 84.3204L165.09 77.1009L148.704 84.5494ZM168.992 89.8681L170.544 82.3658L152.917 78.7189L151.365 86.2212L168.992 89.8681Z"
          fill="white"
          mask="url(#path-1-outside-1_536_215)"
        />
      </g>
      <path
        d="M80.9198 83.9737C94.3925 84.2839 141.066 81.7762 162.718 80.4836C163.654 80.4836 166.808 79.2425 171.941 74.2781C178.356 68.0726 177.153 56.4399 176.351 44.4186C175.549 32.3972 174.747 29.6827 169.936 21.927C166.086 15.7224 153.362 14.1713 147.481 14.1713C109.656 14.042 32.4822 13.8611 26.3874 14.1713C18.7689 14.5591 15.9621 21.1514 14.7592 25.0293C13.5563 28.9072 13.9572 50.2354 14.7592 61.8689C15.5611 73.5025 17.566 76.6048 22.3777 80.4836C27.1894 84.3624 64.0789 83.5859 80.9198 83.9737Z"
        fill="white"
        stroke="#00DC8C"
        strokeWidth="2"
      />
      <path
        d="M30.3896 25.1046C29.7673 24.9117 27.6909 26.6718 26.7305 27.576C26.6877 27.5772 26.5712 28.4226 26.4469 31.7943C26.2916 36.0089 26.6048 43.8923 26.9083 52.0398C27.2119 60.1873 27.3087 62.0262 27.7007 67.2771C28.0143 71.4778 28.63 72.5128 28.8986 72.5052C30.6294 72.5439 34.1588 72.5668 34.4303 72.3486C34.7697 72.0759 34.7516 67.6038 34.7205 64.9737C34.6893 62.3435 34.1975 47.887 33.9026 40.0024C33.6077 32.1178 33.4473 30.0175 33.1414 27.3946C32.8354 24.7716 31.1675 25.3457 30.3896 25.1046Z"
        fill="#00DC8C"
      />
      <path
        d="M41 41.956C44.3559 42.1394 51.4916 41.8459 53.1872 39.205C55.3067 35.9038 59.0159 28.201 57.4262 27.1006C55.8366 26.0002 52.1274 34.2532 52.1274 35.9038C52.1274 37.5544 52.1274 40.8538 54.247 40.8538C55.9426 40.8538 58.8392 38.2862 60.0756 37.0024C59.899 39.9368 60.8174 44.3751 65.9043 38.653C70.9911 32.931 70.4965 37.736 69.6134 40.8538C71.9096 37.9206 76.3959 33.4843 75.972 39.205"
        stroke="#0B8F5F"
        strokeWidth="1.5"
      />
      <path
        d="M106 60.4437C102.833 60.277 99.6 59.5421 98 61.9421C96 64.9421 94.5 69.0347 96 70.0347C97.5 71.0347 99 66.4421 99 64.9421C99 63.4421 99 60.4437 97 60.4437C95.4 60.4437 92.1667 64.8685 91 66.0352C91.1667 63.3685 90.8 57.2437 86 62.4437C81.2 67.6437 81.6667 63.277 82.5 60.4437C80.3333 63.1093 76.1 67.1408 76.5 61.9421C76.6667 60.8375 76.6 58.7096 75 59.0352C73.4 59.3607 71.6667 63.1087 71 64.9421C70.6667 63.5777 69.9 60.5676 69.5 59.4421C69 58.0352 67 61.8522 66.5 62.4437C66 63.0352 63.5 67.0352 63 60.0352C62.1667 61.8064 60.4 65.2676 60 64.9421"
        stroke="#C1C1C1"
      />
      <path
        d="M76.0354 38.9014C75.8607 39.4758 76.2452 40.4522 79.1812 39.763C82.8513 38.9014 86.5214 37.6092 95.4345 37.1784C104.348 36.7477 112.736 37.1784 123.222 37.6092C133.708 38.0399 139.476 39.3321 140 38.4706"
        stroke="#0B8F5F"
        strokeWidth="1.5"
      />
      <path
        d="M153.285 41.1002C152.944 41.0621 151.801 41.5889 151.272 41.8571C151.249 41.8584 151.184 42.0911 151.111 43.0113C151.019 44.1616 151.18 46.2992 151.336 48.509C151.491 50.7187 151.541 51.2168 151.749 52.6363C151.915 53.772 152.252 54.0394 152.4 54.0311C153.35 54.0017 155.288 53.9265 155.438 53.8608C155.624 53.7788 155.621 52.5625 155.607 51.8476C155.594 51.1327 155.344 47.2108 155.193 45.0724C155.042 42.934 154.957 42.3663 154.793 41.6597C154.629 40.9532 153.712 41.1478 153.285 41.1002Z"
        fill="#F9D57F"
      />
      <path
        d="M144.883 70.0846C144.815 69.7478 143.965 68.8197 143.549 68.3978C143.54 68.3759 143.299 68.3846 142.4 68.5953C141.277 68.8587 139.289 69.6629 137.232 70.4835C135.174 71.3042 134.715 71.5041 133.427 72.1343C132.395 72.6385 132.243 73.0406 132.296 73.1786C132.613 74.0749 133.275 75.898 133.383 76.0204C133.518 76.1733 134.676 75.7994 135.353 75.569C136.029 75.3386 139.689 73.9065 141.68 73.1117C143.671 72.3169 144.186 72.0629 144.809 71.6913C145.432 71.3196 144.967 70.5057 144.883 70.0846Z"
        fill="#F9D57F"
      />
      <path
        d="M132.036 57.171C131.84 57.4529 131.757 58.7085 131.741 59.3011C131.73 59.3223 131.904 59.4907 132.678 59.994C133.645 60.6232 135.6 61.5021 137.616 62.4204C139.632 63.3387 140.094 63.532 141.44 64.0269C142.518 64.4228 142.913 64.2546 142.976 64.121C143.404 63.2718 144.263 61.5328 144.277 61.3702C144.294 61.1669 143.223 60.5896 142.589 60.2602C141.954 59.9307 138.389 58.2783 136.437 57.3902C134.486 56.5021 133.947 56.306 133.247 56.1131C132.548 55.9202 132.282 56.8187 132.036 57.171Z"
        fill="#F9D57F"
      />
      <path
        d="M141.145 45.7578C140.826 45.8868 140.072 46.8939 139.734 47.3814C139.714 47.3937 139.768 47.6294 140.142 48.4734C140.609 49.5285 141.767 51.3321 142.955 53.2018C144.143 55.0714 144.425 55.4854 145.283 56.6351C145.97 57.5548 146.393 57.6298 146.519 57.5523C147.341 57.0742 149.01 56.0857 149.11 55.9569C149.235 55.7959 148.653 54.7278 148.301 54.1055C147.949 53.4831 145.863 50.1525 144.713 48.3435C143.563 46.5345 143.218 46.0757 142.737 45.5324C142.256 44.9892 141.543 45.5966 141.145 45.7578Z"
        fill="#F9D57F"
      />
      <path
        d="M165.433 43.5955C165.119 43.4572 163.871 43.6187 163.286 43.7168C163.263 43.7111 163.132 43.9137 162.787 44.7701C162.357 45.8407 161.872 47.9288 161.36 50.0841C160.848 52.2393 160.748 52.7298 160.522 54.1467C160.342 55.2802 160.583 55.6359 160.727 55.672C161.642 55.9278 163.515 56.4347 163.677 56.4167C163.879 56.3941 164.239 55.2322 164.44 54.546C164.641 53.8597 165.573 50.0422 166.068 47.9563C166.563 45.8704 166.651 45.3032 166.705 44.5798C166.759 43.8564 165.826 43.7684 165.433 43.5955Z"
        fill="#F9D57F"
      />
      <path
        d="M170.143 66.6429L196.345 81.4048L189.333 89.5238L149.107 64.0595L148 60L180.476 61.8452L170.143 66.6429Z"
        fill="#EE722D"
      />
      <path
        d="M189.333 89.5208L149.107 63.6875L160.179 88.0446L162.393 77.3423L186.012 93.2113L189.333 89.5208Z"
        fill="#D25C1A"
      />
      <circle cx="49" cy="62" r="6" fill="#C1C1C1" />
      <circle cx="49.0006" cy="59.2731" r="1.63636" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M45.1824 65.1363C45.3951 63.2161 47.0233 61.7227 49.0002 61.7227C50.9772 61.7227 52.6054 63.2161 52.8181 65.1363C51.8802 66.1843 50.5173 66.8438 49.0003 66.8438C47.4832 66.8438 46.1202 66.1842 45.1824 65.1363Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d_536_215"
          x="0.642135"
          y="0.642135"
          width="213.419"
          height="110.285"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2.17893" dy="2.17893" />
          <feGaussianBlur stdDeviation="3.2684" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.682353 0 0 0 0 0.682353 0 0 0 0 0.752941 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_536_215"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_536_215"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default SvgTeacherClassCard;

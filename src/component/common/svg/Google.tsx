export interface GoogleProps {
  color: string;
  width: number;
  height: number;
}

const Google: React.FC<GoogleProps> = ({ color, width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
    >
      <path
        d="M50.3448 20.4171C50.3448 25.9144 46.0443 29.9652 40.7667 29.9652C35.489 29.9652 31.1885 25.9144 31.1885 20.4171C31.1885 14.8812 35.489 10.8691 40.7667 10.8691C46.0443 10.8691 50.3448 14.8812 50.3448 20.4171ZM46.152 20.4171C46.152 16.9819 43.6595 14.6315 40.7667 14.6315C37.8739 14.6315 35.3814 16.9819 35.3814 20.4171C35.3814 23.8179 37.8739 26.2028 40.7667 26.2028C43.6595 26.2028 46.152 23.8136 46.152 20.4171Z"
        fill={color}
      />
      <path
        d="M71.0078 20.4171C71.0078 25.9144 66.7074 29.9652 61.4297 29.9652C56.152 29.9652 51.8516 25.9144 51.8516 20.4171C51.8516 14.8855 56.152 10.8691 61.4297 10.8691C66.7074 10.8691 71.0078 14.8812 71.0078 20.4171ZM66.815 20.4171C66.815 16.9819 64.3225 14.6315 61.4297 14.6315C58.5369 14.6315 56.0444 16.9819 56.0444 20.4171C56.0444 23.8179 58.5369 26.2028 61.4297 26.2028C64.3225 26.2028 66.815 23.8136 66.815 20.4171Z"
        fill={color}
      />
      <path
        d="M90.8097 11.446V28.5876C90.8097 35.6389 86.6513 38.5188 81.7353 38.5188C77.1076 38.5188 74.3224 35.4236 73.272 32.8924L76.9225 31.3728C77.5725 32.9268 79.1653 34.7607 81.731 34.7607C84.8777 34.7607 86.8278 32.8192 86.8278 29.1645V27.7912H86.6814C85.743 28.9492 83.935 29.9608 81.6535 29.9608C76.8795 29.9608 72.5058 25.8024 72.5058 20.4516C72.5058 15.062 76.8795 10.8691 81.6535 10.8691C83.9307 10.8691 85.7387 11.8808 86.6814 13.0043H86.8278V11.4503H90.8097V11.446ZM87.1248 20.4516C87.1248 17.0896 84.8821 14.6315 82.028 14.6315C79.1352 14.6315 76.7116 17.0896 76.7116 20.4516C76.7116 23.7792 79.1352 26.2028 82.028 26.2028C84.8821 26.2028 87.1248 23.7792 87.1248 20.4516Z"
        fill={color}
      />
      <path
        d="M97.3745 1.39844V29.3795H93.2849V1.39844H97.3745Z"
        fill={color}
      />
      <path
        d="M113.311 23.56L116.565 25.7296C115.515 27.2837 112.984 29.9612 108.61 29.9612C103.186 29.9612 99.1351 25.7684 99.1351 20.4132C99.1351 14.7352 103.22 10.8652 108.141 10.8652C113.096 10.8652 115.519 14.8084 116.311 16.9393L116.746 18.0241L103.982 23.3104C104.96 25.226 106.479 26.2032 108.61 26.2032C110.745 26.2032 112.226 25.1528 113.311 23.56ZM103.294 20.1248L111.826 16.582C111.356 15.3896 109.944 14.5587 108.283 14.5587C106.152 14.5587 103.186 16.4399 103.294 20.1248Z"
        fill={color}
      />
      <path
        d="M15.7085 17.9333V13.8825H29.359C29.4925 14.5885 29.5613 15.4237 29.5613 16.3277C29.5613 19.3668 28.7305 23.1249 26.0529 25.8025C23.4485 28.5145 20.1209 29.9609 15.7128 29.9609C7.54237 29.9609 0.671936 23.3057 0.671936 15.1352C0.671936 6.96476 7.54237 0.30957 15.7128 0.30957C20.2329 0.30957 23.4528 2.08314 25.8721 4.39481L23.0138 7.25318C21.2789 5.62598 18.9285 4.36037 15.7085 4.36037C9.74211 4.36037 5.07573 9.16881 5.07573 15.1352C5.07573 21.1017 9.74211 25.9101 15.7085 25.9101C19.5785 25.9101 21.7826 24.3561 23.1946 22.9441C24.3396 21.799 25.093 20.1632 25.39 17.929L15.7085 17.9333Z"
        fill={color}
      />
    </svg>
  );
};
export default Google;

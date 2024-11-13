export interface SamsungProps {
  color: string;
  width: number;
  height: number;
}

const Samsung: React.FC<SamsungProps> = ({ color, width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M85.4608 0.404775C84.7318 0.600709 80.7225 1.67345 76.5513 2.78868C72.3801 3.90398 67.8407 5.11824 66.4637 5.48714C65.0868 5.85603 61.3095 6.86655 58.0697 7.73283C40.4931 12.4325 25.451 16.4572 23.5364 16.9725C20.934 17.6729 19.8712 17.8282 18.1613 17.7577C15.5123 17.6486 13.3531 16.8223 11.8025 15.3243C10.1705 13.7477 9.4242 11.6875 9.53244 9.05754C9.61557 7.03782 10.1657 4.96133 11.2481 2.58236C11.505 2.01783 11.7076 1.54901 11.6984 1.54047C11.6892 1.53185 11.2763 2.01333 10.7809 2.61034C5.02898 9.54167 1.62166 15.6381 0.860677 20.36C0.694932 21.3883 0.71091 23.0666 0.894989 23.97C1.27714 25.8449 2.26807 27.2655 4.09856 28.5622C7.81623 31.1957 12.3707 31.4799 18.5008 29.4609C20.8719 28.68 23.7706 27.4976 34.5444 22.9165C36.0225 22.288 38.6898 21.1547 40.4717 20.3981C42.2536 19.6414 43.9269 18.9291 44.1901 18.8152C44.4534 18.7013 46.7065 17.7391 49.1971 16.6769C55.6242 13.9358 67.7655 8.7449 81.4846 2.87277C84.4814 1.59003 86.996 0.479803 87.0725 0.405656C87.2459 0.237554 87.18 0.0357315 86.9541 0.0431684C86.8617 0.0461873 86.1897 0.208914 85.4608 0.404775Z"
        fill={color}
      />
    </svg>
  );
};
export default Samsung;

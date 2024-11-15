export interface StarProps {
  color: string;
  width: number;
  height: number;
}

const Star: React.FC<StarProps> = ({ color, width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
    >
      <path
        d="M9.10326 1.81699C9.47008 1.07374 10.5299 1.07374 10.8967 1.81699L12.7063 5.48347C12.8519 5.77862 13.1335 5.98319 13.4592 6.03051L17.5054 6.61846C18.3256 6.73765 18.6531 7.74562 18.0596 8.32416L15.1318 11.1781C14.8961 11.4079 14.7885 11.7389 14.8442 12.0632L15.5353 16.0931C15.6754 16.91 14.818 17.533 14.0844 17.1473L10.4653 15.2446C10.174 15.0915 9.82598 15.0915 9.53466 15.2446L5.91562 17.1473C5.18199 17.533 4.32456 16.91 4.46467 16.0931L5.15585 12.0632C5.21148 11.7389 5.10393 11.4079 4.86825 11.1781L1.94038 8.32416C1.34687 7.74562 1.67438 6.73765 2.4946 6.61846L6.54081 6.03051C6.86652 5.98319 7.14808 5.77862 7.29374 5.48347L9.10326 1.81699Z"
        fill={color}
      />
    </svg>
  );
};
export default Star;

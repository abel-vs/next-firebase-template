import styles from "./loading-dots.module.css";

const LoadingDots = ({
  color = "#000",
  size = 10,
  spacing = 5,
}: {
  color?: string;
  size?: number;
  spacing?: number;
}) => {
  const dotStyle = {
    backgroundColor: color,
    width: `${size}px`,
    height: `${size}px`,
    marginRight: `${spacing}px`,
  };

  return (
    <span className={styles.loading}>
      <span style={dotStyle} />
      <span style={dotStyle} />
      <span style={dotStyle} />
    </span>
  );
};

export default LoadingDots;

export interface DataProps {
  data: {
    name: string;
    distance: number;
    moving_time: number;
    best_efforts: { elapsed_time: number }[];
  };
}

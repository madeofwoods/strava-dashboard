export interface DataProps {
  data: {
    name: string;
    distance: number;
    moving_time: number;
    best_efforts: { elapsed_time: number }[];
  };
}

export enum Image {
  ONE,
  TWO,
  THREE,
  FOUR,
}

export interface ActivityBase {
  id: number | string;
  resource_state: number;
}

export type ActivityMap = {
  id: string | number;
  polyline?: string;
  summary_polyline?: string;
  resource_state: number;
};

export interface Acheivements {
  type_id: number;
  type: string;
  rank: number;
}

export interface Segment {
  id: number | string;
  resource_state: number;
  name: string;
  activity_type: string;
  distance: number;
  average_grade: number;
  maximum_grade: number;
  elevation_high: number;
  elevation_low: number;
  start_latlng: number[];
  end_latlng: number[];
  climb_category: number;
  elevation_profile: null;
  city?: string | null;
  state?: string | null;
  country: string | null;
  private: boolean;
  hazardous: boolean;
  starred: boolean;
}

export interface SegmentEffort {
  id: number | string;
  resource_state: number;
  name: string;
  activity: ActivityBase;
  athlete: ActivityBase;
  elapsed_time: number;
  moving_time: number;
  start_date: Date | string;
  start_date_local: Date | string;
  distance: number;
  start_index: number;
  end_index: number;
  average_cadence: number;
  device_watts: any;
  average_watts: number;
  average_heartrate: number;
  max_heartrate: number;
  segment: Segment;
  pr_rank: number | null;
  acheivements?: Acheivements[];
  kom_rank: any;
}

export type Splits = {
  distance: number;
  elapsed_time: number;
  elevation_difference: number;
  moving_time: number;
  split: number;
  average_grade_adjusted_speed: number;
  average_heartrate: number;
  average_speed: number;
  pace_zone: number;
};

export type Laps = {
  id: number | string;
  resource_state: number;
  name: string;
  activity: ActivityBase;
  athlete: ActivityBase;
  elapsed_time: number;
  moving_time: number;
  start_date: Date | string;
  start_date_local: Date | string;
  distance: number;
  start_index: number;
  end_index: number;
  total_elevation_gain: number;
  average_speed?: number;
  max_speed?: number;
  average_cadence?: number;
  device_watts?: any;
  average_watts?: number;
  average_heartrate?: number;
  max_heartrate?: number;
  lap_index: number;
  split: number;
  pace_zone: number;
};

export type BestEffort = {
  id: number | string;
  resource_state: number;
  name: string;
  activity: ActivityBase;
  athlete: ActivityBase;
  elapsed_time: number;
  moving_time: number;
  start_date: Date | string;
  start_date_local: Date | string;
  distance: number;
  start_index: number;
  end_index: number;
  pr_rank: number | null;
  achievements: string[];
};

export type SimilarActivities = {
  effort_count: number;
  average_speed: number;
  min_average_speed: number;
  mid_average_speed: number;
  max_average_speed: number;
  pr_rank: number | null;
  frequency_milestone: number | null;
  trend: {
    speeds: number[];
    current_activity_index: number;
    min_speed: number;
    mid_speed: number;
    max_speed: number;
    direction: number;
  };
  resource_state: number;

};

export type Gear = {
  id: string | number;
  primary: boolean;
  name: string;
  nickname: string;
  resource_state: number;
  retired: boolean;
  distance: number;
  converted_distance: number;
};

export interface BestEfforts {
  resource_state: number;
  athlete: ActivityBase;
  name: string;
  distance: number;
  moving_time: number;
  elapsed_time?: number;
  total_elevation_gain: number;
  type: string;
  sport_type: string;
  workout_type?: any;
  id: string | number;
  start_date: Date | string;
  start_date_local: Date | string;
  timezone: string;
  utc_offset?: number;
  location_city: null | string;
  location_state: null | string;
  location_country: string;
  achievement_count?: number;
  kudos_count?: number;
  comment_count?: number;
  athlete_count?: number;
  photo_count?: number;
  map: ActivityMap;
  trainer: boolean;
  commute: boolean;
  manual: boolean;
  private: boolean;
  visibility: string;
  flagged: boolean;
  gear_id?: string;
  start_latlng?: number[];
  end_latlng?: number[];
  average_speed?: number;
  max_speed?: number;
  average_cadence?: number;
  average_watts?: number;
  weighted_average_watts?: number;
  kilojoules?: number;
  device_watts: any;
  has_heartrate: boolean;
  average_heartrate?: number;
  max_heartrate?: number;
  heartrate_opt_out: boolean;
  display_hide_heartrate_option: boolean;
  elev_high?: number;
  elev_low?: number;
  upload_id_str: string;
  upload_id: number;
  external_id: string;
  from_accepted_tag: boolean;
  pr_count: number;
  total_photo_count: number;
  has_kudoed: boolean;
  suffer_score: number;
  description: null | string;
  calories: number;
  perceived_exertion?: null;
  prefer_perceived_exertion?: any;
  segment_efforts: SegmentEffort[];
  splits_metric: Splits[];
  splits_standard: Splits[];
  laps: Laps[];
  best_efforts: BestEffort[];
  gear: Gear;
  photos: { primary: null; count: number };
  stats_visibility: { type: string; visibility: string }[];
  hide_from_home: boolean;
  device_name: string;
  embed_token: string;
  similar_activities: SimilarActivities;
  available_zones: string[]
}


export interface UserData {
  resource_state: number;
  athlete: ActivityBase;
  name: string;
  distance: number;
  moving_time: number;
  elapsed_time?: number;
  total_elevation_gain: number;
  type: string;
  sport_type: string;
  workout_type?: any;
  id: string | number;
  start_date: Date | string;
  start_date_local: Date | string;
  timezone: string;
  utc_offset?: number;
  location_city: null | string;
  location_state: null | string;
  location_country: string;
  achievement_count?: number;
  kudos_count?: number;
  comment_count?: number;
  athlete_count?: number;
  photo_count?: number;
  map: ActivityMap;
  trainer: boolean;
  commute: boolean;
  manual: boolean;
  private: boolean;
  visibility: string;
  flagged: boolean;
  gear_id?: string;
  start_latlng?: number[];
  end_latlng?: number[];
  average_speed?: number;
  max_speed?: number;
  average_cadence?: number;
  average_watts?: number;
  weighted_average_watts?: number;
  kilojoules?: number;
  device_watts: any;
  has_heartrate: boolean;
  average_heartrate?: number;
  max_heartrate?: number;
  heartrate_opt_out: boolean;
  display_hide_heartrate_option: boolean;
  elev_high?: number;
  elev_low?: number;
  upload_id_str: string;
  upload_id: number;
  external_id: string;
  from_accepted_tag: boolean;
  pr_count: number;
  total_photo_count: number;
  has_kudoed: boolean;
  suffer_score: number;
}

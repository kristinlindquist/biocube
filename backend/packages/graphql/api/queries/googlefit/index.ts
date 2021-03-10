import { gql } from 'apollo-server-express';

export const GET_HEART_RATE = gql`
  query getHeartRate($start: Float!, $end: Float!) {
    heartRate(start: $start, end: $end) {
      date
      point
    }
  }
`;

export const GET_OXYGEN_SATURATION = gql`
  query getOxygenSaturation($start: Float!, $end: Float!) {
    oxygenSaturation(start: $start, end: $end) {
      date
      point
    }
  }
`;

export const GET_SLEEP = gql`
  query getSleep($start: Float!, $end: Float!) {
    sleep(start: $start, end: $end) {
      start
      end
      state
    }
  }
`;

export const GET_ACTIVITY = gql`
  query getActivity($start: Float!, $end: Float!) {
    activity(start: $start, end: $end) {
      start
      end
      duration
      type
    }
  }
`;

export const GET_DAILY = gql`
  query getDaily($start: Float!, $end: Float!) {
    daily(start: $start, end: $end) {
      date
      heartRate {
        average
        min
        max
      }
    }
  }
`;
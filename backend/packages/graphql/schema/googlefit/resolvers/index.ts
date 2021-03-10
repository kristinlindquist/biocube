import { GoogleFitnessAPI } from '../datasource';

export const resolvers = {
  Query: {
    daily: (root, args) => new GoogleFitnessAPI().getDaily(args.start, args.end),
    heartRate: (root, args) => new GoogleFitnessAPI().getHeartRate(args.start, args.end, false),
    sleep: (root, args) => new GoogleFitnessAPI().getSleep(args.start, args.end, false),
    activity: (root, args) => new GoogleFitnessAPI().getActivity(args.start, args.end)
  }
};

export default resolvers;

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "StateType" ADD VALUE 'IN_VEHICLE';
ALTER TYPE "StateType" ADD VALUE 'BIKING';
ALTER TYPE "StateType" ADD VALUE 'STILL';
ALTER TYPE "StateType" ADD VALUE 'UNKNOWN';
ALTER TYPE "StateType" ADD VALUE 'TILTING';
ALTER TYPE "StateType" ADD VALUE 'RUNNING';
ALTER TYPE "StateType" ADD VALUE 'AEROBICS';
ALTER TYPE "StateType" ADD VALUE 'BADMINTON';
ALTER TYPE "StateType" ADD VALUE 'BASEBALL';
ALTER TYPE "StateType" ADD VALUE 'BASKETBALL';
ALTER TYPE "StateType" ADD VALUE 'BIATHLON';
ALTER TYPE "StateType" ADD VALUE 'HANDBIKING';
ALTER TYPE "StateType" ADD VALUE 'MOUNTAIN_BIKING';
ALTER TYPE "StateType" ADD VALUE 'ROAD_BIKING';
ALTER TYPE "StateType" ADD VALUE 'STATIONARY_BIKING';
ALTER TYPE "StateType" ADD VALUE 'UTILITY_BIKING';
ALTER TYPE "StateType" ADD VALUE 'BOXING';
ALTER TYPE "StateType" ADD VALUE 'CALISTHENICS';
ALTER TYPE "StateType" ADD VALUE 'CIRCUIT_TRAINING';
ALTER TYPE "StateType" ADD VALUE 'CRICKET';
ALTER TYPE "StateType" ADD VALUE 'DANCING';
ALTER TYPE "StateType" ADD VALUE 'ELLIPTICAL';
ALTER TYPE "StateType" ADD VALUE 'FENCING';
ALTER TYPE "StateType" ADD VALUE 'AMERICAN_FOOTBALL';
ALTER TYPE "StateType" ADD VALUE 'AUSTRALIAN_FOOTBALL';
ALTER TYPE "StateType" ADD VALUE 'SOCCER';
ALTER TYPE "StateType" ADD VALUE 'FRISBEE';
ALTER TYPE "StateType" ADD VALUE 'GARDENING';
ALTER TYPE "StateType" ADD VALUE 'GOLF';
ALTER TYPE "StateType" ADD VALUE 'GYMNASTICS';
ALTER TYPE "StateType" ADD VALUE 'HANDBALL';
ALTER TYPE "StateType" ADD VALUE 'HOCKEY';
ALTER TYPE "StateType" ADD VALUE 'HORSEBACK_RIDING';
ALTER TYPE "StateType" ADD VALUE 'HOUSEWORK';
ALTER TYPE "StateType" ADD VALUE 'JUMPING_ROPE';
ALTER TYPE "StateType" ADD VALUE 'KAYAKING';
ALTER TYPE "StateType" ADD VALUE 'KETTLEBELL_TRAINING';
ALTER TYPE "StateType" ADD VALUE 'KICKBOXING';
ALTER TYPE "StateType" ADD VALUE 'KITESURFING';
ALTER TYPE "StateType" ADD VALUE 'MARTIAL_ARTS';
ALTER TYPE "StateType" ADD VALUE 'MIXED_MARTIAL_ARTS';
ALTER TYPE "StateType" ADD VALUE 'P90X_EXERCISES';
ALTER TYPE "StateType" ADD VALUE 'PARAGLIDING';
ALTER TYPE "StateType" ADD VALUE 'PILATES';
ALTER TYPE "StateType" ADD VALUE 'POLO';
ALTER TYPE "StateType" ADD VALUE 'RACQUETBALL';
ALTER TYPE "StateType" ADD VALUE 'ROCK_CLIMBING';
ALTER TYPE "StateType" ADD VALUE 'ROWING';
ALTER TYPE "StateType" ADD VALUE 'ROWING_MACHINE';
ALTER TYPE "StateType" ADD VALUE 'RUGBY';
ALTER TYPE "StateType" ADD VALUE 'JOGGING';
ALTER TYPE "StateType" ADD VALUE 'SAND_RUNNING';
ALTER TYPE "StateType" ADD VALUE 'TREADMILL_RUNNING';
ALTER TYPE "StateType" ADD VALUE 'SAILING';
ALTER TYPE "StateType" ADD VALUE 'SCUBA_DIVING';
ALTER TYPE "StateType" ADD VALUE 'SKATEBOARDING';
ALTER TYPE "StateType" ADD VALUE 'SKATING';
ALTER TYPE "StateType" ADD VALUE 'CROSS_SKATING';
ALTER TYPE "StateType" ADD VALUE 'INLINE_SKATING';
ALTER TYPE "StateType" ADD VALUE 'SKIING';
ALTER TYPE "StateType" ADD VALUE 'BACKCOUNTRY_SKIING';
ALTER TYPE "StateType" ADD VALUE 'CROSSCOUNTRY_SKIING';
ALTER TYPE "StateType" ADD VALUE 'DOWNHILL_SKIING';
ALTER TYPE "StateType" ADD VALUE 'KITE_SKIING';
ALTER TYPE "StateType" ADD VALUE 'ROLLER_SKIING';
ALTER TYPE "StateType" ADD VALUE 'SLEDDING';
ALTER TYPE "StateType" ADD VALUE 'SNOWBOARDING';
ALTER TYPE "StateType" ADD VALUE 'SNOWMOBILE';
ALTER TYPE "StateType" ADD VALUE 'SNOWSHOEING';
ALTER TYPE "StateType" ADD VALUE 'SQUASH';
ALTER TYPE "StateType" ADD VALUE 'STAIR_CLIMBING';
ALTER TYPE "StateType" ADD VALUE 'STAIR_CLIMBING_MACHINE';
ALTER TYPE "StateType" ADD VALUE 'STAND_UP_PADDLEBOARDING';
ALTER TYPE "StateType" ADD VALUE 'SURFING';
ALTER TYPE "StateType" ADD VALUE 'SWIMMING';
ALTER TYPE "StateType" ADD VALUE 'POOL_SWIMMING';
ALTER TYPE "StateType" ADD VALUE 'OPEN_WATER_SWIMMING';
ALTER TYPE "StateType" ADD VALUE 'TABLE_TENNIS';
ALTER TYPE "StateType" ADD VALUE 'TEAM_SPORTS';
ALTER TYPE "StateType" ADD VALUE 'TENNIS';
ALTER TYPE "StateType" ADD VALUE 'TREADMILL';
ALTER TYPE "StateType" ADD VALUE 'VOLLEYBALL';
ALTER TYPE "StateType" ADD VALUE 'BEACH_VOLLEYBALL';
ALTER TYPE "StateType" ADD VALUE 'INDOOR_VOLLEYBALL';
ALTER TYPE "StateType" ADD VALUE 'WAKEBOARDING';
ALTER TYPE "StateType" ADD VALUE 'FITNESS_WALKING';
ALTER TYPE "StateType" ADD VALUE 'NORDING_WALKING';
ALTER TYPE "StateType" ADD VALUE 'TREADMILL_WALKING';
ALTER TYPE "StateType" ADD VALUE 'WATERPOLO';
ALTER TYPE "StateType" ADD VALUE 'WEIGHTLIFTING';
ALTER TYPE "StateType" ADD VALUE 'WHEELCHAIR';
ALTER TYPE "StateType" ADD VALUE 'WINDSURFING';
ALTER TYPE "StateType" ADD VALUE 'YOGA';
ALTER TYPE "StateType" ADD VALUE 'ZUMBA';
ALTER TYPE "StateType" ADD VALUE 'DIVING';
ALTER TYPE "StateType" ADD VALUE 'ERGOMETER';
ALTER TYPE "StateType" ADD VALUE 'ICE_SKATING';
ALTER TYPE "StateType" ADD VALUE 'INDOOR_SKATING';
ALTER TYPE "StateType" ADD VALUE 'CURLING';
ALTER TYPE "StateType" ADD VALUE 'OTHER';
ALTER TYPE "StateType" ADD VALUE 'CROSSFIT';
ALTER TYPE "StateType" ADD VALUE 'HIIT';
ALTER TYPE "StateType" ADD VALUE 'INTERVAL_TRAINING';
ALTER TYPE "StateType" ADD VALUE 'STROLLER_WALKING';
ALTER TYPE "StateType" ADD VALUE 'ELEVATOR';
ALTER TYPE "StateType" ADD VALUE 'ESCALATOR';
ALTER TYPE "StateType" ADD VALUE 'ARCHERY';
ALTER TYPE "StateType" ADD VALUE 'SOFTBALL';
ALTER TYPE "StateType" ADD VALUE 'GUIDED_BREATHING';

import type { MasterActivity } from './MasterActivity';
import type { Portfolio } from './Portfolio';
import type { Feedback } from './Feedback';

export interface Master {
  id: string;
  fullName: string;
  genderId: number;
  rating: number;
  feedBackCount: number;
  avatarSignedUrl: string;
  description: string;
  geoLatitude: number;
  geoLongitude: number;
  masterActivities: MasterActivity[];
  portfolios: Portfolio[];
  feedbacks: Feedback[];
}
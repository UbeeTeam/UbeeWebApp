import type { MasterService } from './MasterService';

export interface MasterActivity {
  id: number;
  activityTemplateId: number;
  activityTemplateName: string;
  experienceStartYear: number;
  experience: string;
  masterServices: MasterService[];
}
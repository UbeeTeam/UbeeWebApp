export interface Props {
    masterActivities: {
        Id: number;
        ActivityTemplateId: number;
        ActivityTemplateName: string;
        ExperienceStartYear: number;
        Experience: string;
    }[], // Добавить тип
    masterServices: {
        Id: number;
        MasterActivityId: number;
        Name: string;
        Cost: number;
        Duration: number;
    }[], // Добавить тип
}
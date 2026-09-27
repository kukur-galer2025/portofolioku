import { type SchemaTypeDefinition } from 'sanity'
import { certificateType } from './certificate'
import { projectType } from './project'
import { workExperienceType } from './workExperience'
import { volunteerType } from './volunteer'
import { achievementType } from './achievement'
import { educationType } from './education'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [certificateType, projectType, workExperienceType, volunteerType, achievementType, educationType],
}

import { AboutModule, ExperienceModule, HomeModule, WorkModule } from '../Pages';
import { MODULE_INTERFACE } from './interface';


export const MODULES: MODULE_INTERFACE[] = [
    ...HomeModule,
    ...AboutModule,
    ...ExperienceModule,
    ...WorkModule
]